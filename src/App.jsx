import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect } from "react";
import FloatingSocialMedia from "./components/FloatingSocialMedia";

function App() {
  
   const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);
  return (
    <>
      <Header />
      <FloatingSocialMedia/>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
