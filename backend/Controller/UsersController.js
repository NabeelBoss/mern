const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../Modal/user");
const { StaffRole } = require("../Modal/staffrole");
const { UserRole } = require("../Modal/userrole");
const {
  sendVerificationEmail,
  senWelcomeEmail,
  VerificationEmailforget,
} = require("../Middleware/Email");
const mongoose = require("mongoose");

// image packages
const multer = require("multer");
const cloud = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// @METHOD GET
// API: http://localhost:5000/user
async function getUsers(req, res) {
  try {
    const users = await User.find().populate("userRole").populate("staffRole");
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Error fetching users" });
  }
}

// @METHOD POST
// API: http://localhost:5000/user

cloud.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_API_KEY,
});

const storage = new CloudinaryStorage({
  cloudinary: cloud,
  params: {
    folder: "User Avatar",
    allowed_formats: ["png", "jpg", "jpeg"],
  },
});
const upload = multer({ storage: storage });



async function addUser(req, res) {
  const {
    Username,
    useremail,
    userpassword,
    phoneNumber,
    userRole,
    staffRole,
    userImage,
  } = req.body;

  if (!userImage) return res.status(400).send({ error: "Image is required" });
  if (!Username) return res.status(400).send({ error: "Username is required" });
  if (!useremail) return res.status(400).send({ error: "Email is required" });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(useremail)) return res.status(400).send({ error: "Invalid email format" });
  if (!userpassword) return res.status(400).send({ error: "Password is required" });
  if (!phoneNumber) return res.status(400).send({ error: "Phone number is required" });
  if (!/^\d{11}$/.test(phoneNumber)) return res.status(400).send({ error: "Phone number must be 11 digits long" });
  if (!userRole) return res.status(400).send({ error: "User role is required" });

  if (userRole === 'staff' && !staffRole) return res.status(400).send({ error: 'Staff role is required when user role is Staff.' });

  try {
    const existingUser = await User.findOne({ useremail: useremail });
    if (existingUser) return res.status(400).send({ error: "Email already exists" });

    const existingUserByPhone = await User.findOne({ phoneNumber: phoneNumber });
    if (existingUserByPhone) return res.status(400).send({ error: "Phone number already exists" });


    const hashedPassword = await bcrypt.hash(userpassword, 10);
    const role = await UserRole.findById(userRole);
    if (!role) return res.status(400).send({ error: "Invalid user role" });

    let staff = null;
    if (staffRole) {
      staff = await StaffRole.findById(staffRole);
      if (!staff) return res.status(400).send({ error: "Invalid staff role" });
    }

    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    let imageUrl = null;
    if (userImage) {
      const base64Data = userImage.split(",")[1];
      const uploadedImage = await cloud.uploader.upload(
        `data:image/png;base64,${base64Data}`,
        { folder: "User Avatar" }
      );
      imageUrl = uploadedImage.secure_url;
    }

    let status = "active";
    if (staffRole) {
      status = "pending";
    }

    const tempUserData = {
      username: Username,
      useremail: useremail.toLowerCase(),
      userpassword: hashedPassword,
      phoneNumber: phoneNumber,
      userImage: imageUrl,
      userRole: role._id,
      staffRole: staff ? staff._id : null,
      verificationCode: verificationCode,
      verificationCodeExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
      status: status,
    };

    const token = jwt.sign(tempUserData, process.env.JWT_TOKEN, { expiresIn: '1h' });
    console.log("Token:", token);


    await sendVerificationEmail(useremail, verificationCode);

    return res.status(201).json({
      message: "User created successfully. Verification email sent.",
      token: token,
    });

  } catch (error) {
    console.error("Error details:", error);
    return res.status(500).send({ error: "Error adding user", details: error.message });
  }
}



// @METHOD POST
// API: http://localhost:5000/verifyEmail

async function VerifyEmail(req, res) {
  const { useremail, otp } = req.body;

  const token = req.headers.authorization?.split(' ')[1];  // Extract token from Authorization header
  console.log("Received Token:", token);  // Log token to check if it's received

  if (!token) {
    return res.status(400).send({ error: "Token is required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    console.log("Decoded Token:", decoded);  // Log the decoded token to check its contents

    if (decoded.useremail !== useremail.toLowerCase()) {
      return res.status(400).send({ error: "Invalid email in token" });
    }

    if (decoded.verificationCode !== otp || decoded.verificationCodeExpiresAt < Date.now()) {
      return res.status(400).send({ error: "Invalid or expired OTP" });
    }

    const newUser = new User({
      username: decoded.username,
      useremail: decoded.useremail,
      userpassword: decoded.userpassword,
      phoneNumber: decoded.phoneNumber,
      userImage: decoded.userImage,
      userRole: decoded.userRole,
      staffRole: decoded.staffRole,
      status: decoded.status,
    });

    const savedUser = await newUser.save();

    await senWelcomeEmail(savedUser.useremail, savedUser.username);

    return res.status(200).json({
      success: true,
      message: "OTP verified successfully. Welcome to our website.",
    });
  } catch (error) {
    console.error("Error:", error);  // Log the error for debugging
    return res.status(500).send({ error: "Internal server error" });
  }
}


// @METHOD PUT
// API: http://localhost:5000/user/:id
async function updateUser(req, res) {
  const { id } = req.params;
  const {
    Username,
    useremail,
    userpassword,
    phoneNumber,
    userImage,
    userRole,
    staffRole,
  } = req.body;

  try {
    // Find the user to update
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    // Update user fields
    if (Username) user.username = Username;
    if (useremail) user.useremail = useremail.toLowerCase();
    if (userpassword) user.userpassword = userpassword.toLowerCase();
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (userImage) user.userImage = userImage;

    // Update the userRole
    if (userRole) {
      const role = await UserRole.findById(userRole);
      if (!role) {
        return res.status(400).send({ error: "Invalid user role" });
      }
      user.userRole = role._id;
    }

    // Update the staffRole
    if (staffRole) {
      const staff = await StaffRole.findById(staffRole);
      if (!staff) {
        return res.status(400).send({ error: "Invalid staff role" });
      }
      user.staffRole = staff._id;
    }

    const updatedUser = await user.save();
    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Error updating user" });
  }
}

// @METHOD DELETE
// API: http://localhost:5000/user/:id
async function deleteUser(req, res) {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }
    return res.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Error deleting user" });
  }
}

// --- LOGIN API ---
// METHOD ---  POST
// API    -- http://localhost:5000/user/loginuser

const LoginUser = async (req, res) => {
  try {
    const { useremail, userpassword } = req.body;

    if (!useremail || !userpassword) {
      return res.status(400).send({ error: "Email and Password are required" });
    }

    const userAvailblity = await User.findOne({
      useremail: useremail.toLowerCase(),
    }).populate("userRole");

    if (!userAvailblity) {
      return res.status(404).send({ error: "User not found" });
    }

    const credientialSuccess = await bcrypt.compare(
      userpassword,
      userAvailblity.userpassword
    );
    if (!credientialSuccess) {
      return res.status(401).send({ error: "Invalid email or password" });
    }

    if (!process.env.JWT_TOKEN) {
      return res.status(500).send({ error: "JWT secret key is missing" });
    }

    const token = jwt.sign(
      {
        useremail: userAvailblity.useremail,
        username: userAvailblity.username,
        userrole: userAvailblity.userRole.userrole,
      },
      process.env.JWT_TOKEN,
      { expiresIn: "1h" }
    );

    return res.status(200).send({ data: token, message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error.message);
    return res.status(500).send({ error: "Internal server error" });
  }
};

// METHOD ---  POST
// API    -- http://localhost:5000/user/forgotPassword

async function forgotPassword(req, res) {
  const { useremail } = req.body;

  try {
    const user = await User.findOne({ useremail: useremail.toLowerCase() });
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const otpExpiresAt = Date.now() + 10 * 60 * 1000;

    user.passwordResetOtp = otp;
    user.passwordResetOtpExpiresAt = otpExpiresAt;
    await user.save();

    await VerificationEmailforget(user.useremail, otp);

    return res.status(200).json({
      success: true,
      message: "OTP sent to your email. Please check your inbox.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Internal server error" });
  }
}

// METHOD ---  POST
// API    -- http://localhost:5000/user/verifyOtp

async function verifyOtp(req, res) {
  const { useremail, otp } = req.body;

  try {
    const user = await User.findOne({ useremail: useremail.toLowerCase() });
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    if (
      user.passwordResetOtp !== otp ||
      user.passwordResetOtpExpiresAt < Date.now()
    ) {
      return res.status(400).send({ error: "Invalid or expired OTP" });
    }

    return res.status(200).json({
      success: true,
      message: "OTP verified successfully. You can now reset your password.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Internal server error" });
  }
}

// METHOD ---  POST
// API    -- http://localhost:5000/user/resetPassword

async function resetPassword(req, res) {
  const { useremail, newPassword } = req.body;

  try {
    const user = await User.findOne({ useremail: useremail.toLowerCase() });
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.userpassword = hashedPassword;
    user.passwordResetOtp = undefined;
    user.passwordResetOtpExpiresAt = undefined;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password reset successfully.",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Internal server error" });
  }
}

module.exports = {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
  // login functions
  VerifyEmail,
  LoginUser,
  forgotPassword,
  verifyOtp,
  resetPassword,
};
