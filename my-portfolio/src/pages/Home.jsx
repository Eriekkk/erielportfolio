import React, { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Filter categories
const categories = ["All", "App", "Website", "Backend", "Game"];

const Home = () => {
  // Scroll progress for simple fades
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 50]);

  // State for filtering
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter projects based on state
  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category.toLowerCase().includes(activeFilter.toLowerCase());
  });

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-violet-500/30 font-sans">
      
      {/* --- CENTRALIZED HERO SECTION --- */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-32 max-w-[1400px] mx-auto text-center">
        
        <motion.div 
          style={{ opacity: heroOpacity, y: heroY }}
          className="w-full flex flex-col items-center justify-center z-10"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-violet-400 mb-6 font-mono"
          >
            BSC (Hons) Creative Computing
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-9xl font-black uppercase leading-[0.9] tracking-tighter text-white mb-8"
          >
            Eriel Psalm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Galura
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 font-light max-w-md mb-4"
          >
            I'm a Creative Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-base text-gray-500 font-light max-w-xl mx-auto mb-12"
          >
  
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            {/* Projects Button */}
            <a 
              href="#works"
              className="relative p-[2px] rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 group overflow-hidden transition-all hover:scale-105"
            >
              <div className="px-8 py-3 bg-[#050505] rounded-full group-hover:bg-transparent transition-all duration-300">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white flex items-center gap-2">
                  PROJECTS <span className="text-cyan-400 group-hover:text-white transition-colors">↓</span>
                </span>
              </div>
            </a>

            {/* CV Button */}
            <a 
              href="#cv"
              className="relative p-[2px] rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 group overflow-hidden transition-all hover:scale-105"
            >
              <div className="px-10 py-3 bg-[#050505] rounded-full group-hover:bg-transparent transition-all duration-300">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white flex items-center gap-2">
                  CV <span className="text-cyan-400 group-hover:text-white transition-colors">↓</span>
                </span>
              </div>
            </a>
          </motion.div>

        </motion.div>
      </section>

      {/* --- MINIMALIST ABOUT ME SECTION --- */}
      <section className="py-32 px-6 md:px-12 bg-[#0a0a0a] text-white flex justify-center border-y border-white/5">
        <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Left: Simple Portrait */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[400px] mx-auto md:ml-0 rounded-[2rem] overflow-hidden bg-[#111]"
          >
            <img 
              src="/images/eriel.jpeg" 
              alt="About Eriel" 
              className="w-full h-auto object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" 
            />
          </motion.div>

          {/* Right: Clean Text Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 mb-4">
              Who am I
            </p>
            
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white mb-8">
              Hello.
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
                I am a responsible and hardworking individual that like to complete tasks as quickly as possible while maintaining high quality. Also, a cooperative person who is dependable in group settings. And an upcoming programmer and developer.              
              </p>
              
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                As a creative developer I have a levered on using modern tools and technology to help me build products that feel intuitive and look futuristic. with the addition of creative ideas that will help me to become a better developer and build the next big thing in the industry              
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- TECHNICAL COMPETENCE GRID --- */}
      <section className="py-40 px-6 md:px-12 border-y border-white/5 relative bg-[#050505]">
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white mb-8 flex justify-center">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 max-w-7xl mx-auto border border-white/10 relative z-10">
          {[
            {
              title: "UI & UX Design",
              skills: "Figma, React.js, Tailwind 4.0, Framer Motion",
              desc: "Building clean, modern interfaces with focus on 3D animations and accessibility.",
            },
            {
              title: "Fullstack Systems",
              skills: "Node.js, MongoDB, REST APIs, App Dev",
              desc: "Developing robust backend infrastructures and scalable mobile applications.",
            },
            {
              title: "Game Development",
              skills: "Unity Engine, C#, HLSL Shaders, Blender",
              desc: "Creating immersive indie game experiences with custom physics and mechanics.",
            },
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ backgroundColor: "rgba(139, 92, 246, 0.05)" }}
              className="bg-[#050505] p-12 transition-colors duration-500 hover:border-violet-500/20 group"
            >
              <h3 className="text-xl font-bold uppercase mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                {skill.title}
              </h3>
              <p className="text-white/40 font-mono text-[10px] uppercase mb-6 tracking-widest">
                {skill.skills}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CREATIVE WORKS LIST --- */}
      {/* 👇 ADDED id="works" HERE FOR SCROLLING 👇 */}
      <section id="works" className="py-40 px-6 md:px-12 max-w-7xl mx-auto bg-[#050505]">
        <div className="flex flex-col items-center justify-center text-center mb-20 gap-8">
          <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white ">
            Selected Works
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2  text-[10px] uppercase tracking-widest transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold border-transparent shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                    : "bg-transparent text-white/50 border border-white/10 hover:border-violet-400/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24"
        >
          <AnimatePresence>
            {filteredProjects.map((p) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 60 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true, margin: "-100px" }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                key={p.id}
              >
                <Link to={`/work/${p.id}`} className="block group">
                  <div className="w-full h-[40vh] overflow-hidden mb-8 relative bg-zinc-900 border border-white/5 group-hover:border-violet-500/30 transition-colors duration-700">
                    <img
                      src={p.media}
                      alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60 pointer-events-none"></div>
                  </div>

                  <div className="flex flex-col justify-between items-start px-2">
                    <span className="text-[10px] font-bold font-mono opacity-50 mb-3 block tracking-widest uppercase text-white/60">
                      {p.category}
                    </span>
                    <div className="flex justify-between items-center w-full">
                      <motion.h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter bg-clip-text text-white group-hover:text-transparent bg-gradient-to-r from-violet-400 to-cyan-400">
                        {p.title}
                      </motion.h3>

                      <div className="h-10 w-10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-cyan-500 group-hover:border-transparent group-hover:text-white group-hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] transition-all duration-500 shrink-0">
                        <span className="text-sm">↗</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center text-white/40 py-20 text-sm uppercase tracking-widest">
            No projects found for this category.
          </div>
        )}
      </section>

      <div id="cv">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;