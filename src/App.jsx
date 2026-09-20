import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './Components/Navigation';
import { Footer } from './Components/Footer';
import { HomePage } from './Components/Pages/HomePage';
import { AboutPage } from './Components/Pages/AboutPage';
import { ServicesPage } from './Components/Pages/ServicesPage';
import { WhyChooseUsPage } from './Components/Pages/WhyChooseUsPage';
import { ContactPage } from './Components/Pages/ContactPage';
import { Toaster } from './Components/ui/sonner';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [direction, setDirection] = useState(0);

  const pages = {
    home: HomePage,
    about: AboutPage,
    services: ServicesPage,
    'why-choose-us': WhyChooseUsPage,
    contact: ContactPage,
  };

  const pageOrder = ['home', 'about', 'services', 'why-choose-us', 'contact'];
const handleNavigate = (page) => {
  const currentIndex = pageOrder.indexOf(currentPage);
  const nextIndex = pageOrder.indexOf(page);
  setDirection(nextIndex > currentIndex ? 1 : -1);
  setCurrentPage(page);
};

const CurrentPageComponent = pages[currentPage];

const pageVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const pageTransition = {
  x: { type: "spring", stiffness: 300, damping: 30 },
  opacity: { duration: 0.2 },
};


  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentPage}
          custom={direction}
          variants={pageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={pageTransition}
        >
          <CurrentPageComponent onNavigate={handleNavigate} />
        </motion.div>
      </AnimatePresence>

      <Footer onNavigate={handleNavigate} />
      <Toaster position="top-right" />
    </div>
  );
}
