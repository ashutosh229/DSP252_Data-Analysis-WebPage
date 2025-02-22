import React from "react";
import { motion } from "framer-motion";
import { Twitter, Github, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://x.com/ashutoshkj0390",
      icon: <Twitter className="w-6 h-6" />,
      label: "Twitter",
    },
    {
      href: "https://github.com/ashutosh229/",
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/ashutosh-kumar-jha-601098280/",
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="relative py-10 bg-gradient-to-b from-background to-accent text-primary/80 text-center overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Developer Info */}
        <h2 className="text-lg font-semibold">
          Designed & Developed by{" "}
          <span className="text-primary">Ashutosh Kumar Jha</span>
        </h2>
        <p className="text-sm mt-2">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center space-x-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
              aria-label={social.label}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Animated Scroll-to-Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mt-8 px-4 py-2 flex items-center gap-2 bg-primary/20 hover:bg-primary/30 rounded-lg transition-colors duration-300"
        >
          <ArrowUp className="w-5 h-5" />
          Back to Top
        </motion.button>
      </motion.div>
    </footer>
  );
};

export default Footer;
