import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/data';

const Services = () => {
  return (
    <section id="services" className="py-32 bg-gray-50 dark:bg-[#0a0a0a] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gray-200/20 dark:bg-white/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-semibold tracking-wide uppercase backdrop-blur-sm">
            What I Do
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 font-heading tracking-tight">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">Do</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
             I bring ideas to life with clean code and modern design. From concept to deployment, I cover every aspect of the development lifecycle.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-full"
              >
                {/* Card Background with Glass Effect */}
                <div className="absolute inset-0 bg-white/60 dark:bg-gray-900/40 backdrop-blur-xl rounded-[2rem] border border-white/20 dark:border-gray-800 transition-all duration-300 group-hover:bg-white/80 dark:group-hover:bg-gray-800/60 group-hover:border-primary-500/30 group-hover:shadow-2xl dark:group-hover:shadow-primary-900/20"></div>
                
                {/* Content */}
                <div className="relative p-10 h-full flex flex-col z-10">
                  {/* Icon Container */}
                  <div className="w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center shadow-inner border border-white/50 dark:border-gray-700 group-hover:scale-110 transition-transform duration-500">
                    <div className="text-3xl text-gray-400 dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      <Icon />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-heading group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Decorative Line */}
                  <div className="w-12 h-1 bg-gray-200 dark:bg-gray-800 mt-8 rounded-full group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-secondary-500 transition-all duration-500"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
