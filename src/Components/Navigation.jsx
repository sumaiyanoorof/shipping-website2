import React,  { useState, useEffect } from "react";
import { Menu, X, Anchor } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

export function Navigation({ currentPage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "home" },
    { name: "About Us", path: "about" },
    { name: "Services", path: "services" },
    { name: "Why Choose Us", path: "why-choose-us" },
    { name: "Contact", path: "contact" },
  ];

  const handleNavClick = (path) => {
    onNavigate(path);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

    return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-950 shadow-[0_8px_30px_rgba(16,42,67,0.08)] backdrop-blur-xl' : 'bg-gray-900 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-2 bg-yellow-400 rounded-lg">
              <Anchor className="h-6 w-6 text-gray-600" />
            </div>
            <div className="flex flex-col">
              <span className={`${isScrolled ? 'text-white' : 'text-white'} tracking-tight font-bold`}>GlobalShip</span>
              <span className={`${isScrolled ? 'text-white/90' : 'text-white/95'} text-xs`}>Logistics LLC</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`relative px-1 py-2 transition-colors ${
                  currentPage === item.path
                    ? 'text-yellow-400'
                    : `${isScrolled ? 'text-white hover:text-primary' : 'text-white/90 hover:text-yellow-400'}`
                }`}
              >
                {item.name}
                {currentPage === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-400"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick('contact')}
              className="bg-yellow-500 text-gray-700 font-bold  hover:bg-yellow-400 hover:text-white "
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'}`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden shadow-xl"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(item.path)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    currentPage === item.path
                      ? 'bg-primary text-white'
                      : 'hover:bg-muted'
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
              <Button
                onClick={() => handleNavClick('contact')}
                className="w-full bg-yellow-500 text-gray-700 font-bold hover:bg-yellow-400 hover:text-white"
              >
                Get a Quote
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
