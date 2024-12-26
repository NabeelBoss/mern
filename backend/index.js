const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv").config();
const { dbConn } = require("./Config/db");
const session = require("express-session"); 

const corss = {
  origin: "http://localhost:3000",
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type, Authorization",
};

app.use(cors(corss));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,  // Set to true if using https
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,  // 1 day
      sameSite: 'None',  // Make sure this is set to 'None' for cross-origin requests
    },
  })
);



const {
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
} = require("./Controller/UsersController"); // import user controller



app.route("/user").get(getUsers).post(addUser);
app.route("/user/:id").delete(deleteUser).put(updateUser);

//login route:

app.route("/verifyEmail").post(VerifyEmail);
app.route("/user/loginuser").post(LoginUser);
app.route("/user/forgotPassword").post(forgotPassword);
app.route("/user/verifyOtp").post(verifyOtp);
app.route("/user/resetPassword").post(resetPassword);

const {
  getStaff,
  addStaff,
  updateStaff,
  deleteStaff,
} = require("./Controller/StaffRoleController"); // import staff role controller

app.route("/staffrole").get(getStaff).post(addStaff);
app.route("/staffrole/:id").delete(deleteStaff).put(updateStaff);

const {
  getUserRoles,
  addUserRole,
  updateUserRole,
  deleteUserRole,
} = require("./Controller/UserRoleController"); // import user role controller

app.route("/userrole").get(getUserRoles).post(addUserRole);
app.route("/userrole/:id").delete(deleteUserRole).put(updateUserRole);



app.listen(process.env.PORT, function () {
  console.log(`Server is running at: http://localhost:${process.env.PORT}/`);
  dbConn();
});
