import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/data';

const SkillPill = ({ skill, index }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-3 px-5 py-3 bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md hover:border-primary-200 dark:hover:border-primary-800 transition-all cursor-default"
    >
      <div 
        className="text-2xl"
        style={{ color: skill.color }}
      >
        <Icon />
      </div>
      <span className="font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-[#0a0a0a] relative">
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.8 }}
         className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 dark:brightness-0 pointer-events-none"
      />
       
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
            Tech <span className="text-primary-600 dark:text-primary-400">Stack</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A curated list of technologies I use to build performant and scalable applications.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Frontend Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/50 dark:bg-gray-900/50 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-primary-400 to-secondary-500 rounded-full"></span>
              Frontend Development
            </h3>
            <div className="flex flex-wrap gap-4">
              {skillsData.frontend.map((skill, index) => (
                <SkillPill key={index} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Backend & Database Split */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/50 dark:bg-gray-900/50 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-secondary-400 to-secondary-600 rounded-full"></span>
                Backend & Services
              </h3>
              <div className="flex flex-wrap gap-4">
                {skillsData.backend.map((skill, index) => (
                  <SkillPill key={index} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/50 dark:bg-gray-900/50 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8 flex items-center gap-3">
                <span className="w-2 h-8 bg-gradient-to-b from-primary-400 to-primary-600 rounded-full"></span>
                Database & Tools
              </h3>
              <div className="flex flex-wrap gap-4">
                {[...skillsData.database, ...skillsData.tools].map((skill, index) => (
                  <SkillPill key={index} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* AI Tools Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white/50 dark:bg-gray-900/50 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></span>
              AI & Pro Tools
            </h3>
            <div className="flex flex-wrap gap-4">
              {skillsData.aiTools.map((skill, index) => (
                <SkillPill key={index} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
