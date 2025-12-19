import React from 'react';
import { personalData } from '../data/data';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-black border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
           <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-heading">{personalData.name}</h2>
           <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{personalData.tagline}</p>
        </div>
        
        <div className="flex gap-6">
          {personalData.socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-xl transition-colors"
              >
                <Icon />
              </a>
            );
          })}
        </div>
        
        <div className="text-center md:text-right">
             <p className="text-gray-500 dark:text-gray-400 text-sm">
                © {new Date().getFullYear()} All rights reserved.
            </p>
             <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
                Designed & Built by {personalData.name}
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
