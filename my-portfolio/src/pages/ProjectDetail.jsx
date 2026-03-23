import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import { projects } from '../data/Projects'; 
import Footer from '../components/Footer';

// Animation Variants for staggering elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const { scrollYProgress } = useScroll(); 

  if (!project) return <div className="text-white pt-40 text-center font-mono uppercase tracking-widest opacity-50">Project not found</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#050505] min-h-screen text-white relative selection:bg-violet-500/30"
    >
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-cyan-500 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation & Image Hero Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pt-32 px-6 md:px-12 max-w-7xl mx-auto"
      >
        <motion.div variants={itemVariants}>
          <Link to="/" className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity mb-8 inline-block group">
            <span className="group-hover:-translate-x-1 inline-block transition-transform mr-2">←</span> Back to Index
          </Link>
        </motion.div>

        {/* --- DYNAMIC IMAGE HERO --- */}
        <motion.div 
          variants={itemVariants}
          className="relative w-full h-[50vh] md:h-[65vh] bg-black border border-white/5 flex items-center justify-center overflow-hidden mb-20 group shadow-2xl shadow-black/50"
        >
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src={project.media} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000"
          />
          
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 pointer-events-none"></div>
        </motion.div>

        {/* Header Section */}
        <div className="mb-20">
          <motion.span variants={itemVariants} className="text-[12px] font-bold uppercase tracking-[0.5em] text-[#888] mb-6 block">
            PROJECT INFO — {project.category}
          </motion.span>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-10 leading-[0.85] text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
            {project.title}
          </motion.h1>
        </div>

        {/* Description & Metadata Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 mb-24">
          <div className="lg:col-span-2">
            <h2 className="text-2xl md:text-4xl leading-snug font-light text-gray-300 mb-12">
              {project.fullDesc}
            </h2>
            
            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-3">
              {project.stack && project.stack.map((tech, i) => (
                <motion.span 
                  key={tech} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  // 👇 THE BOX IS NOW THE GRADIENT, TEXT IS SOLID WHITE 👇
                  className="px-6 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white bg-gradient-to-r from-violet-600 to-cyan-500 shadow-[0_0_15px_rgba(139,92,246,0.3)] cursor-default transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
          
          {/* Metadata Sidebar */}
          <div className="space-y-12 text-xs border-l border-white/5 pl-8 lg:pl-12">
            <div>
              <h3 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-4 opacity-40">Role</h3>
              <p className="uppercase tracking-widest text-white/90 text-sm">{project.role}</p>
            </div>
            <div>
              <h3 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-4 opacity-40">Context</h3>
              <p className="uppercase tracking-widest text-white/90 text-sm">{project.context}</p>
            </div>
          </div>
        </motion.div>

        {/* LIVE LINKS SECTION */}
        {(project.link || project.github || project.video || project.figma) && (
          <motion.div variants={itemVariants} className="mb-24 p-8 md:p-12 bg-[#0a0a0a] border border-white/5">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[#888] mb-8">Live Links & Resources</h3>
            <div className="flex flex-wrap gap-4 items-center">
              
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white border border-white/10 bg-white/5 backdrop-blur-md px-8 py-4 hover:bg-white hover:text-black transition-all duration-500 group">
                  <span className="relative z-10">Project Link</span> 
                  <span className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                </a>
              )}

              {project.figma && (
                <a href={project.figma} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white border border-white/10 bg-white/5 backdrop-blur-md px-8 py-4 hover:bg-white hover:text-black transition-all duration-500 group">
                  <span className="relative z-10">Figma Design</span> 
                  <span className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                </a>
              )}

              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white border border-white/10 bg-white/5 backdrop-blur-md px-8 py-4 hover:bg-white hover:text-black transition-all duration-500 group">
                  <span className="relative z-10">GitHub Repo</span> 
                  <span className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                </a>
              )}

              {project.video && (
                <a href={project.video} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white border border-white/10 bg-white/5 backdrop-blur-md px-8 py-4 hover:bg-white hover:text-black transition-all duration-500 group">
                  <span className="relative z-10">Video Walkthrough</span> 
                  <span className="relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
                </a>
              )}

            </div>
          </motion.div>
        )}

        {/* PROJECT IMAGE GALLERY SECTION */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.div variants={itemVariants} className="mb-40">
            <h3 className="text-[12px] font-bold uppercase tracking-[0.5em] text-[#888] mb-10">
              Project Gallery
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((image, index) => (
                <div 
                  key={index} 
                  className="w-full h-[40vh] md:h-[50vh] overflow-hidden bg-black border border-white/5 relative group"
                >
                  <img 
                    src={image} 
                    alt={`${project.title} screenshot ${index + 1}`} 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </motion.div>

      <Footer />
    </motion.div>
  );
};

export default ProjectDetail;