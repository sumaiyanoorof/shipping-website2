import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Plane, Truck, Warehouse, Network, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';


export function ServicesPage({ onNavigate }) {
     const services = [
    {
      icon: Ship,
      title: 'Ocean Freight',
      image: 'https://images.unsplash.com/photo-1663801563712-ebf3c6a78239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBvY2VhbnxlbnwxfHx8fDE3NjU3NTc3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
      image: 'https://images.unsplash.com/photo-1571086291540-b137111fa1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMGNhcmdvfGVufDF8fHx8MTc2NTgxMzA4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
      image: 'https://images.unsplash.com/photo-1761243962976-6ab07278ed98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHRydWNrJTIwaGlnaHdheXxlbnwxfHx8fDE3NjU4MTMwODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzY1NzMxMTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
      image: 'https://images.unsplash.com/photo-1672870152741-e526cfe5419b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lcnMlMjBwb3J0fGVufDF8fHx8MTc2NTY5NTUyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-accent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-primary-foreground mb-6">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Comprehensive logistics solutions designed to streamline your supply chain and drive business growth.
            </p>
          </motion.div>
        </div>
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
                    <div className="relative rounded-lg overflow-hidden shadow-xl aspect-[4/3]">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
                        <div className="bg-accent p-3 rounded-lg">
                          <Icon className="h-6 w-6 text-accent-foreground" />
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
                      <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
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
                            <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                      <Button
                        onClick={() => onNavigate('contact')}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 group"
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
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-primary-foreground rounded-2xl p-8 sm:p-12 text-center"
          >
            <h2 className="text-3xl sm:text-4xl mb-4">Need a Custom Solution?</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Our team of logistics experts can design a tailored solution to meet your specific business requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => onNavigate('contact')}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
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
