import React from "react";
import { BrowserRouter as Router } from "react-router-dom";  // Import Router
import About from "./About";
import Hero from "./Hero";
import Intro from "./Intro";
import Navbar from "./Navbar";
import ImageGallery from "./ImageGallery";
import Footer from "./Footer";
function App() {
  return (
    <Router> {/* Wrap your components inside BrowserRouter */}
      <div className="h-screen">
        <Navbar />  {/* Assuming you have links inside Navbar for routing */}
        <Hero />
        <About />
        <Intro />
        <ImageGallery/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
