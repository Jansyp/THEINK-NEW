import React, { useEffect } from "react";
import "./App.css";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
import Scene3D from "./components/Scene3D";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Toaster } from "./components/ui/sonner";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App app-3d-shell">
      <HashRouter>
        <Scene3D />
        <div className="app-content-layer">
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
          <FloatingContact />
          <Toaster />
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
