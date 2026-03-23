import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 transition-all duration-500 ${
        isScrolled 
          ? "bg-black/40 backdrop-blur-md border-b border-white/5 py-4" 
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-sm md:text-base tracking-[0.2em] uppercase hover:opacity-50 transition-opacity">
          EPG
        </Link>

        <span className="hidden md:block text-white/40 text-[10px] uppercase tracking-[0.3em] font-medium">
          Creative Developer
        </span>

        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-20"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white/60"></span>
          </span>
          <span className="text-white/40 text-[10px] uppercase tracking-[0.2em]">
            SHJ, UAE
          </span>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;