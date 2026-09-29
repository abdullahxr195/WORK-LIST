import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import JobsList from "./components/Jobs/JobsList";
import Header from "./components/Layout/Header";
import LandingPage from "./pages/LandingPage";
import ManageUsers from "./components/Admin/Manage/ManageUsers/ManageUsers";
import AdminDashboard from "./components/Admin/Manage/AdminDashboard";
import Home from "./pages/Home/Home";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import AdminLayout from "./components/Admin/Manage/AdminLayout";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
         {/* <Route path="/categories" element={<DisplayCategories />} /> */}
       
        
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/store-home" element={<Home />} />
        <Route element={<AdminLayout />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/manage/users" element={<ManageUsers />} />
      </Routes>
     
    </>
  );
}

export default App;
