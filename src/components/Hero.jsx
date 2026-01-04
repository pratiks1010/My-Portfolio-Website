import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { personalData } from '../data/data';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-gray-50 dark:bg-[#0a0a0a] pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
      {/* Abstract Background Elements */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary-500/20 rounded-full blur-[120px] -z-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-500/20 rounded-full blur-[120px] -z-10 animate-blob animation-delay-2000"></div>

      </motion.div>
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-6 border border-primary-100 dark:border-primary-800">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Available for freelance work
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white font-heading leading-tight tracking-tight">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">Digital</span> Experiences
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg leading-relaxed font-light">
            I am a passionate <span className="font-semibold text-gray-900 dark:text-white">Software Developer</span> with <span className="font-semibold text-primary-600 dark:text-primary-400">2+ years</span> of experience. Currently a <span className="font-semibold text-gray-900 dark:text-white">Junior Software Engineer</span> at <span className="font-semibold text-gray-900 dark:text-white">Loyal String International Pvt. Ltd.</span>, focused on building scalable applications and delivering high-quality solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-semibold transition-all transform hover:scale-105 hover:shadow-xl cursor-pointer flex items-center gap-2"
            >
              View My Work
            </Link>
            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-full font-semibold transition-all hover:border-primary-500 dark:hover:border-primary-500 cursor-pointer flex items-center gap-2 group"
            >
              <HiDownload className="text-xl group-hover:translate-y-1 transition-transform" />
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Follow me</span>
            <div className="w-12 h-px bg-gray-300 dark:bg-gray-700"></div>
            <div className="flex gap-4">
              {personalData.socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10, color: "#6366f1" }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="text-gray-400 text-2xl"
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[500px] aspect-square">
            {/* Geometric Shapes Behind */}
            <div className="absolute top-10 -left-10 w-24 h-24 bg-secondary-400/30 rounded-full blur-xl animate-bounce delay-700"></div>
            <div className="absolute bottom-10 -right-10 w-32 h-32 bg-primary-500/30 rounded-full blur-xl animate-bounce"></div>
            
            {/* Main Image Container */}
            <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
              <img
                src={personalData.profileImage}
                alt={personalData.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=crop&w=800&h=800&q=80";
                }}
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 uppercase font-semibold">Current Role</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{personalData.role}</p>
                  </div>
                  <div className="text-2xl">🚀</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
