
import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Consultancy from "@/components/Consultancy";
import ClientCarousel from "@/components/ClientCarousel";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main className="overflow-x-hidden">
        <Hero />
        <Services />
        <Consultancy />
        <ClientCarousel />
        <Products />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
