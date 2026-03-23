import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  // Function to scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full bg-[#050505] pt-20 pb-20 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Name, Role, and Back to Top Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          
          <div className="space-y-2 mb-8 md:mb-0">
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Eriel Psalm Galura
            </h3>
            <p className="text-gray-400 text-sm md:text-base font-light tracking-wide">
              Creative Developer & Designer
            </p>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.9 }}
            className="h-12 w-12 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-white transition-colors cursor-pointer shrink-0"
            aria-label="Back to Top"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
          </motion.button>

        </div>
      </div>
    </footer>
  );
};

export default Footer;