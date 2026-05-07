import { useState, useEffect } from 'react';
import { Menu, X, Network } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'py-3 glassmorphism' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <Network className="text-primary group-hover:text-accent transition-colors" size={28} />
          <span className="text-xl font-bold font-sans tracking-wide">Sheshu<span className="text-primary"> Kumar</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="text-sm text-gray-300 hover:text-white hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 bg-primary/20 text-primary border border-primary/50 rounded-full hover:bg-primary hover:text-white transition-all duration-300">
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full glassmorphism flex flex-col items-center py-6 gap-4 border-t border-white/10"
        >
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
