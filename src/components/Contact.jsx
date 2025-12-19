import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/data';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Message sent! (Demo purpose only)');
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-black relative overflow-hidden">
       <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-6 relative z-10"
       >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
            Get In <span className="text-primary-600 dark:text-primary-400">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 font-heading">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-xl text-primary-600 dark:text-primary-400 shadow-sm">
                    <MdEmail size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-semibold">Email</h4>
                    <a href={`mailto:${personalData.contact.email}`} className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      {personalData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-xl text-primary-600 dark:text-primary-400 shadow-sm">
                    <MdPhone size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-semibold">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-400">{personalData.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white dark:bg-gray-800 rounded-xl text-primary-600 dark:text-primary-400 shadow-sm">
                    <MdLocationOn size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-semibold">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">{personalData.contact.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder or Socials */}
            <div className="bg-gradient-to-br from-primary-600 to-secondary-600 p-8 rounded-3xl text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
               <h3 className="text-2xl font-bold mb-4 font-heading">Follow Me</h3>
               <div className="flex gap-4">
                 {personalData.socialLinks.map((social, index) => {
                   const Icon = social.icon;
                   return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="p-3 bg-white/20 hover:bg-white/40 rounded-full text-white transition-colors backdrop-blur-sm shadow-lg border border-white/10"
                  >
                    <Icon size={20} />
                  </motion.a>
                   );
                 })}
               </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-gray-50 dark:bg-gray-900 p-8 md:p-10 rounded-3xl border border-gray-100 dark:border-gray-800"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
               <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-all"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-5 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-xl hover:shadow-lg hover:shadow-primary-500/20 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Send Message
                <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </motion.div>
        </div>
       </motion.div>
       
       {/* Background Decoration - Animated independently */}
       <motion.div 
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 1.5 }}
         className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl -z-10"
       ></motion.div>
    </section>
  );
};

export default Contact;
