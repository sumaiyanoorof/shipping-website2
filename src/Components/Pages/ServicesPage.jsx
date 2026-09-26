import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Plane, Truck, Warehouse, Network, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import shipImage1 from '../../assets/shipImage2.jpg';
import shipImage2 from '../../assets/shipImage10.jpg';
import shipImage3 from '../../assets/shipImage8.jpg';
import shipImage4 from '../../assets/shipImage1.jpg';
import shipImage5 from '../../assets/shipImage3.jpg';
import shipImage6 from '../../assets/shipImage9.jpg';


export function ServicesPage({ onNavigate }) {
     const services = [
    {
      icon: Ship,
      title: 'Ocean Freight',
      image: shipImage1,
      description: 'Cost-effective and reliable ocean shipping solutions for businesses of all sizes.',
      features: [
        'Full Container Load (FCL)',
        'Less than Container Load (LCL)',
        'Refrigerated cargo (Reefer)',
        'Oversized and heavy cargo',
        'Door-to-door delivery',
        'Customs clearance support',
      ],
    },
    {
      icon: Plane,
      title: 'Air Freight',
      image: shipImage6,
      description: 'Fast and secure air cargo services for time-sensitive shipments worldwide.',
      features: [
        'Express air freight',
        'Standard air freight',
        'Temperature-controlled shipping',
        'Dangerous goods handling',
        'Charter services',
        'Real-time tracking',
      ],
    },
    {
      icon: Truck,
      title: 'Land Transportation',
      image: shipImage2,
      description: 'Comprehensive ground transportation and distribution services across continents.',
      features: [
        'Full Truckload (FTL)',
        'Less than Truckload (LTL)',
        'Intermodal transportation',
        'Last-mile delivery',
        'Cross-border trucking',
        'Dedicated fleet services',
      ],
    },
    {
      icon: Warehouse,
      title: 'Warehousing & Distribution',
      image: shipImage3,
      description: 'Secure storage facilities with advanced inventory management systems.',
      features: [
        'Climate-controlled storage',
        'Inventory management',
        'Pick and pack services',
        'Cross-docking',
        'Order fulfillment',
        'Returns management',
      ],
    },
    {
      icon: Network,
      title: 'Supply Chain Solutions',
      image: shipImage5,
      description: 'End-to-end supply chain optimization and management services.',
      features: [
        'Supply chain consulting',
        'Vendor management',
        'Risk assessment',
        'Performance analytics',
        'Technology integration',
        'Sustainability initiatives',
      ],
    },
  ];

    return (
    <div className="min-h-screen">
    {/* Hero Section */}
          <section className="relative min-h-170 h-[min(860px,100svh)] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <ImageWithFallback
                src={shipImage4}
                alt="Cargo ship at sea"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(8,29,48,0.94)_0%,rgba(16,42,67,0.72)_54%,rgba(18,184,156,0.18)_100%)]" />
            </div>
    
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-10 max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                   Our Services
                </motion.h1>
                <motion.p
                  className="text-base sm:text-xl leading-relaxed text-white/90 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                   Comprehensive logistics solutions designed to streamline your supply chain and drive business growth.
                </motion.p>
                
              </motion.div>
            </div>
    
            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 mb-6"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
                <div className="w-1.5 h-3 bg-white/50 rounded-full" />
              </div>
            </motion.div>
          </section>
    
            
      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  {/* Image */}
                  <motion.div
                    className={`relative ${!isEven ? 'lg:col-start-2' : ''}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative rounded-lg overflow-hidden shadow-xl aspect-4/3">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
                        <div className="bg-yellow-400 p-3 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-2xl">{service.title}</h3>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="bg-yellow-400 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl mb-4">{service.title}</h3>
                      <p className="text-muted-foreground mb-6">{service.description}</p>
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + idx * 0.05 }}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 className="h-5 w-5 text-yellow-400 shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                      <Button
                        onClick={() => onNavigate('contact')}
                        className="bg-yellow-500 text-gray-900 hover:bg-yellow-400/90 group"
                      >
                        Get a Quote
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-300  text-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 text-primary-foreground rounded-2xl p-8 sm:p-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl mb-4">Need a Custom Solution?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Our team of logistics experts can design a tailored solution to meet your specific business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-yellow-500 text-gray-900 hover:bg-yellow-400/90"
              >
                Contact Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate('about')}
                className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20"
              >
                Learn More About Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
