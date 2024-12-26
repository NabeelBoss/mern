import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

// Common Components
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// General Pages
import Error404 from "./Pages/Error404";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import FAQs from "./Pages/FAQs";
import Contact from "./Pages/Contact";
import Restaurant from "./Pages/Restaurant";
import Menu from "./Pages/Menu";
import Room from "./Pages/Room";
import RoomDetails from "./Pages/RoomDetails";
import Otpverification from "./Pages/OtpVerification";
import EmailOtpVerification from "./Pages/EmailOtpVerification";
import Forgetpass from "./Pages/Forgetpass";
import ResetPassword from "./Pages/ResetPassword";



// Dashboard Pages
import Dashboard from "./Pages/Dashboard/dashboard";
import Form from "./Pages/Dashboard/form";
import Team from "./Pages/Dashboard/table1";
import Contacts from "./Pages/Dashboard/table2";

// Dashboard Components

import Topbar from "./Components/Dashboard/Topbar";
import Sidebar from "./Components/Dashboard/Sidebar";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        {/* Dashboard Private Routes */}
        <Route
          path="/dashboard/*"
          element={
            // <PrivateRoute>
              <ColorModeContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                  <CssBaseline />
                  <div
                    className="app"
                    style={{
                      display: "flex",
                      position: "relative",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <Sidebar isSidebar={isSidebar} />
                    <main
                      className="content"
                      style={{
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <Topbar setIsSidebar={setIsSidebar} />
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/table" element={<Team />} />
                        <Route path="/table2" element={<Contacts />} />
                        <Route path="/form" element={<Form />} />
                      </Routes>
                    </main>
                  </div>
                </ThemeProvider>
              </ColorModeContext.Provider>
            // </PrivateRoute>
          }
        />

        {/* Public Routes */}
        <Route
          path="*"
          element={
            <>
              <div className="page-wrapper">
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/room" element={<Room />} />
                  <Route path="/roomdetails" element={<RoomDetails />} />
                  <Route path="/restaurant" element={<Restaurant />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/faq" element={<FAQs />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route
                    path="/emailotpverification"
                    element={<EmailOtpVerification />}
                  />
                  <Route path="/login" element={<Login />} />
                  <Route path="/forgetpass" element={<Forgetpass />} />
                  <Route
                    path="/otpverification"
                    element={<Otpverification />}
                  />
                  <Route path="/resetpassword" element={<ResetPassword />} />
                  <Route path="*" element={<Error404 />} />
                </Routes>
                <Footer />
              </div>

              <Link
                className="scroll-to-target scroll-to-top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <span className="scroll-to-top__text">Back to Top</span>
                <span className="scroll-to-top__wrapper">
                  <span className="scroll-to-top__inner"></span>
                </span>
              </Link>
            </>
          }
        />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
