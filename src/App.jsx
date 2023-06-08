import React from "react";
import "./App.css";
import AppRoutes from "./routes";
import { Footer, Navigation } from "./components";

const App = () => {


  return (
    <>
      <Navigation />
      <AppRoutes/>
      <Footer/>
    </>
  );
};

export default App;
