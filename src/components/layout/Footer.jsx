import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/portifystudio', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/portifystudio', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/PortifyStudio', label: 'Twitter' },
    { icon: Youtube, href: 'https://www.youtube.com/@PortifyStudio', label: 'Youtube' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-2xl font-bold mb-4">
                <span className="text-gradient">Sheshu</span> Kumar
              </h2>
              <p className="text-gray-400 max-w-sm leading-relaxed">
                Network Developer & IoT Specialist dedicated to building resilient infrastructures
                and intelligent connected systems. Engineering the future of connectivity.
              </p>
            </motion.div>

            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl glassmorphism flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/50 transition-colors border border-white/5"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              <p className="text-gray-400 flex flex-col">
                <span className="text-xs uppercase tracking-wider text-gray-500 mb-1">Location</span>
                Hyderabad, India
              </p>
              <p className="text-gray-400 flex flex-col">
                <span className="text-xs uppercase tracking-wider text-gray-500 mb-1">Email</span>
                sheshu.kumar@example.com
              </p>
              <p className="text-gray-400 flex flex-col">
                <span className="text-xs uppercase tracking-wider text-gray-500 mb-1">Phone Number</span>
                9876543210
              </p>
            </div>

            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-6 py-2 glassmorphism rounded-full text-sm text-gray-400 hover:text-white flex items-center gap-2 border border-white/5"
            >
              Back to Top <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Sheshu Kumar. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart size={14} className="text-red-500 animate-pulse" /> by
            <a href="https://github.com/portifystudio" className="text-primary hover:underline"> Portify Studio</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
