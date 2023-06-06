import React from "react";
import "./App.css";
import Welcome from "./components/welcome";
import ChatBody from "./components/chatBody/ChatBody";
import Login from "./components/login/login";
import { Route, Routes } from "react-router-dom";
import Register from "./components/register/register";
import { RegisterProvider } from "./contexts/registerContext";
import Forgotpass from "./components/Login/forgotpass";
import { Navigation } from "./components/landingpage/navigation";

const App = () => {


  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/chat" element={<ChatBody />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgotpass />} />
        <Route
          path="/register"
          element={
            <RegisterProvider>
              <Register />
            </RegisterProvider>
          }
        />
      </Routes>
    </>
  );
};

export default App;
