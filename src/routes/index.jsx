import { Routes, Route } from "react-router-dom";
import { About, BestAds, Contact, Welcome } from "../components";



function AppRoutes() {
  return (
    
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/best-ads" element={<BestAds />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  
  );
}
export default AppRoutes;
