import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
     <div className="flex flex-col min-h-screen w-screen font-poppins bg-surf-white">
      <Navbar />
        <Outlet /> 
      <Footer />
    </div>
  );
}
