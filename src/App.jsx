// import reactLogo from "../public/assets/react.svg";
// import viteLogo from "../public/assets/vite.svg";
// import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import FooterComponent from "./components/common/Footer";
import HomePage from "./components/home/HomePage";
import AllRoomsPage from "./components/booking_rooms/AllRoomsPage";
import FindBookingPage from "./components/booking_rooms/FindBookingPage";
import RoomDetailsPage from "./components/booking_rooms/RoomDetailsPage.jsx";
import LoginPage from "./components/auth/LoginPage.jsx";
import RegisterPage from "./components/auth/RegisterPage.jsx";
import ProfilePage from "./components/profile/ProfilePage.jsx";
import EditProfilePage from "./components/profile/EditProfilePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/rooms" element={<AllRoomsPage />} />
            <Route exact path="/find-booking" element={<FindBookingPage />} />
            <Route
              exact
              path="/room-details-book/:roomId"
              element={<RoomDetailsPage />}
            />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route exact path="/profile" element={<ProfilePage />} />
            <Route exact path="/edit-profile" element={<EditProfilePage />} />
          </Routes>
        </div>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
