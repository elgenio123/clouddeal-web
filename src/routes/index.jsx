import { Routes, Route } from "react-router-dom";
import { Category, ChatBody, ForgotPass, Login, Payment, PublishProduct, Register, Welcome,Contacted,PayementForm } from "../components";

import { RegisterProvider } from "../contexts/registerContext";



function AppRoutes() {
  return (
    
    <Routes>
      <Route path="/dashboard" element={<Category />}></Route>
      <Route path="/:categoryId" element={<Category />}></Route>
      <Route path="/" element={<Welcome />} />
      <Route path="/chat" element={<ChatBody />} />
      
      <Route path="/login" element={<Login/>} />
      <Route path="/contact" element={<Contacted/>} />
      <Route path="/payement" element={<PayementForm/>} />
    

      <Route path="/forgot-password" element={<ForgotPass />} />
      <Route path="/payment" element={<Payment />} />
      <Route
        path="/register"
        element={
          <RegisterProvider>
            <Register />
          </RegisterProvider>
        }
      />
      <Route path="/publish-product" element={<PublishProduct />}></Route>
    </Routes>
  
  );
}
export default AppRoutes;
