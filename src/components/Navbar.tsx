
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ isMenuOpen, setIsMenuOpen }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-blue-700">IKON BPS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-gray-900 hover:text-blue-700">Home</Link>
            <a href="#services" className="font-medium text-gray-900 hover:text-blue-700">Services</a>
            <a href="#consultancy" className="font-medium text-gray-900 hover:text-blue-700">Consultancy</a>
            <a href="#clients" className="font-medium text-gray-900 hover:text-blue-700">Clients</a>
            <a href="#products" className="font-medium text-gray-900 hover:text-blue-700">Products</a>
            <Button className="bg-blue-700 hover:bg-blue-800">Contact Us</Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-blue-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
          <div className="flex flex-col py-4 px-4 space-y-4">
            <Link to="/" className="font-medium text-gray-900 hover:text-blue-700 py-2">Home</Link>
            <a href="#services" className="font-medium text-gray-900 hover:text-blue-700 py-2" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#consultancy" className="font-medium text-gray-900 hover:text-blue-700 py-2" onClick={() => setIsMenuOpen(false)}>Consultancy</a>
            <a href="#clients" className="font-medium text-gray-900 hover:text-blue-700 py-2" onClick={() => setIsMenuOpen(false)}>Clients</a>
            <a href="#products" className="font-medium text-gray-900 hover:text-blue-700 py-2" onClick={() => setIsMenuOpen(false)}>Products</a>
            <Button className="bg-blue-700 hover:bg-blue-800 w-full">Contact Us</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
