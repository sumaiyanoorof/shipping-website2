import React from 'react';
import { Anchor, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';


export function Footer({ onNavigate }) {
  const handleNavClick = (path) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


 return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-accent p-2 rounded-lg">
                <Anchor className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="tracking-tight">GlobalShip</span>
                <span className="text-xs text-primary-foreground/80">Logistics LLC</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Your trusted partner in global logistics and shipping solutions. Delivering excellence across oceans and continents.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-foreground/10 p-2 rounded-lg hover:bg-accent transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Why Choose Us', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item.toLowerCase().replace(' ', '-'))}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Ocean Freight',
                'Air Freight',
                'Land Transportation',
                'Warehousing',
                'Supply Chain Solutions',
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  1234 Harbor Drive, Suite 500<br />
                  Port City, PC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:+1234567890" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:info@globalship.com" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  info@globalship.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2025 GlobalShip Logistics LLC. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
