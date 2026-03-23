import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "erielpsalmgalura@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/eriel-psalm-galura-9b9760338",
      icon: "↗",
    },
    {
      name: "GitHub",
      url: "https://github.com/Eriekkk",
      icon: "↗",
    },
    {
      name: "Download CV",
      url: "https://www.canva.com/design/DAGnolt1h34/85U2voXjUfY3hdb87XvpUQ/view?utm_content=DAGnolt1h34&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h4bc3fe0875f",
      icon: "↓",
    },
  ];

  return (
    <section className="py-40 px-6 md:px-12 border-t border-white/5 bg-[#050505] relative overflow-hidden flex items-center justify-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
        {/* Left Side: Philosophy & Interactive Email */}
        <div className="p-10 bg-[#0a0a0a] border border-white/5 shadow-2xl flex flex-col justify-between w-full">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-10 text-white"
            >
              LET'S BUILD THE NEXT BIG THING.
            </motion.h2>

            <div className="relative group inline-block">
              <button
                onClick={handleCopy}
                className="text-xl md:text-2xl font-medium border-b-2 border-white/20 pb-2 text-white hover:text-gray-400 hover:border-gray-400 transition-all cursor-pointer flex items-center gap-4"
              >
                {email}
                <span className="text-xs uppercase tracking-widest opacity-30 group-hover:opacity-100 transition-opacity text-white">
                  {copied ? "Done!" : "Click to Copy"}
                </span>
              </button>

              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: -10 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -top-10 left-0 bg-white text-black text-[10px] font-bold py-1 px-3 rounded-none uppercase tracking-tighter"
                  >
                    Email Copied to Clipboard
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Right Side: Professional Links */}
        <div className="p-10 bg-[#0a0a0a] border border-white/5 shadow-2xl flex flex-col justify-between w-full">
          <h3 className="text-sm font-bold uppercase tracking-[0.4em] text-white/50 mb-10">
            PROFESSIONAL LINKS
          </h3>

          <div className="space-y-6">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center justify-between py-6 hover:px-4 transition-all duration-300"
              >
                {/* 👇 GRADIENT HOVER TRICK APPLIED HERE 👇 */}
                <span className="text-xl uppercase tracking-widest font-bold transition-all duration-500  text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">
                  {link.name}
                </span>

                <span className="text-2xl opacity-20 transition-all duration-500 group-hover:opacity-100 text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">
                  {link.icon}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
