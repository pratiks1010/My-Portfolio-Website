import React from 'react';
import { motion } from 'framer-motion';
import { experienceData, educationData } from '../data/data';
import { MdWork, MdSchool } from 'react-icons/md';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
            Work & <span className="text-primary-600 dark:text-primary-400">Education</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
             My professional career journey and academic background.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-xl text-primary-600 dark:text-primary-400">
                <MdWork size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-heading">Experience</h3>
            </div>
            
            <div className="space-y-8 relative border-l-2 border-gray-200 dark:border-gray-800 ml-6 pl-8 py-2">
              {experienceData.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-gray-900 bg-primary-500"></span>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-xs font-bold tracking-wider text-primary-600 dark:text-primary-400 uppercase mb-2 block">
                      {exp.period}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h4>
                    <p className="text-gray-500 dark:text-gray-400 font-medium text-sm mb-4">{exp.company} • {exp.location}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
               <div className="p-3 bg-secondary-100 dark:bg-secondary-900/30 rounded-xl text-secondary-600 dark:text-secondary-400">
                <MdSchool size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-heading">Education</h3>
            </div>

            <div className="space-y-8 relative border-l-2 border-gray-200 dark:border-gray-800 ml-6 pl-8 py-2">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                   <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-gray-900 bg-secondary-500"></span>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-xs font-bold tracking-wider text-secondary-600 dark:text-secondary-400 uppercase mb-2 block">
                      {edu.year}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h4>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.school}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
