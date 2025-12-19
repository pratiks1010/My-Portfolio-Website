import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLayerGroup } from 'react-icons/fa';
import { projectsData } from '../data/data';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Dynamic filters based on actual tech stack + 'All'
  const allTags = ['All', ...new Set(projectsData.flatMap(p => p.techStack))];
  // Limit filters to most popular ones for UI cleanliness
  const filters = ['All', 'React', 'Next.js', 'TypeScript', 'Node.js'];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.techStack.includes(activeFilter));

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-black relative overflow-hidden">
       {/* Decorative Background */}
       <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[100px] -z-10"></div>
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-500/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="max-w-2xl"
          >
             <div className="flex items-center gap-3 mb-4">
                <span className="p-2 bg-secondary-100 dark:bg-secondary-900/30 rounded-lg text-secondary-600 dark:text-secondary-400">
                   <FaLayerGroup />
                </span>
                <span className="text-sm font-bold tracking-widest text-secondary-600 dark:text-secondary-400 uppercase">
                  Portfolio
                </span>
             </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-heading leading-tight">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">Works</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              A collection of projects that define my journey as a developer. Each project represents a unique challenge and a creative solution.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeFilter === filter
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-gray-900 dark:border-white shadow-lg transform scale-105'
                    : 'bg-transparent border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-900 dark:hover:border-white hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title} // Use unique ID in real app
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Main Card Container */}
                <div className="relative rounded-[2rem] overflow-hidden bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 shadow-xl dark:shadow-none hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                  
                  {/* Image Section */}
                  <div className="relative h-[300px] overflow-hidden">
                    <div className="absolute inset-0 bg-gray-900/10 dark:bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Floating Links - Visible on Hover (Desktop) or Always (Mobile) */}
                    <div className="absolute bottom-4 right-4 z-20 flex gap-3 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white dark:bg-gray-900 rounded-full text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 shadow-lg border border-gray-100 dark:border-gray-700"
                        title="View Code"
                      >
                        <FaGithub size={20} />
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-900 dark:bg-white rounded-full text-white dark:text-gray-900 hover:bg-primary-600 dark:hover:bg-gray-200 shadow-lg"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                       <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-heading mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.techStack.slice(0, 3).map((tech, i) => (
                              <span key={i} className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                {tech}{i < 2 && index < 3 && " • "}
                              </span>
                            ))}
                          </div>
                       </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Tech Badges at Bottom */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.techStack.map((tech, i) => (
                            <span 
                                key={i}
                                className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-lg border border-gray-200 dark:border-gray-700"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
