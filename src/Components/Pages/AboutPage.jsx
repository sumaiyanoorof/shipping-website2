import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Globe, Shield } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import shipImage from '../../assets/shipImage5.jpg';
import shipImage1 from '../../assets/shipImage2.jpg';


export function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We deliver on our promises with consistent, dependable service you can count on.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest standards of quality in every aspect of our operations.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your success is our priority. We tailor solutions to meet your unique needs.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Extensive worldwide network ensuring seamless international logistics.',
    },
  ];

  const timeline = [
    { year: '1998', event: 'Company founded with a single warehouse' },
    { year: '2005', event: 'Expanded to international shipping routes' },
    { year: '2012', event: 'Opened offices in 20+ countries' },
    { year: '2018', event: 'Launched advanced tracking technology' },
    { year: '2025', event: 'Serving 50+ countries with 10,000+ annual shipments' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-170 h-[min(860px,100svh)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={shipImage}
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
             About GlobalShip Logistics
            </motion.h1>
            <motion.p
              className="text-base sm:text-xl leading-relaxed text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Leading the way in global logistics with innovation, integrity, and an unwavering commitment to excellence.
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
      
      {/* Company Introduction */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl text-foreground mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  GlobalShip Logistics LLC is a premier international shipping and logistics company with over 25 years of industry experience. We specialize in providing comprehensive supply chain solutions that connect businesses across the globe.
                </p>
                <p>
                  Founded in 1998, we've grown from a single warehouse operation to a multinational organization with offices in over 20 countries. Our success is built on a foundation of trust, innovation, and an unwavering commitment to customer satisfaction.
                </p>
                <p>
                  Today, we handle over 10,000 shipments annually, serving clients across 50+ countries with a 99.8% on-time delivery rate. Our team of logistics experts works around the clock to ensure your cargo reaches its destination safely and efficiently.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <ImageWithFallback
                  src={shipImage1}
                  alt="Global network"
                  className="w-full h-110 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-lg shadow-sm hover:shadow-yellow-500 transition-shadow hover:translate-y-1"
            >
              <div className="bg-yellow-300 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Target className="h-7 w-7 text-gray-600" />
              </div>
              <h3 className="text-2xl mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide world-class logistics and shipping solutions that empower businesses to thrive in the global marketplace. We strive to exceed expectations through innovation, reliability, and exceptional customer service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-8 rounded-lg shadow-sm hover:shadow-yellow-500 transition-shadow hover:translate-y-1"
            >
              <div className="bg-yellow-300 w-14 h-14 rounded-lg flex items-center justify-center mb-4 
              transition-colors">
                <Eye className="h-7 w-7 text-gray-600" />
              </div>
              <h3 className="text-2xl mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the most trusted and innovative logistics partner worldwide, setting new standards for efficiency, sustainability, and customer satisfaction in the shipping industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-card p-6 rounded-lg shadow-sm hover:shadow-yellow-500  transition-shadow text-center"
                >
                  <div className="bg-yellow-300 w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Icon className="h-7 w-7 text-gray-600" />
                  </div>
                  <h3 className="mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl text-foreground mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Milestones that shaped our growth
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="bg-yellow-400 text-accent-foreground w-16 h-16 rounded-full flex items-center justify-center shrink-0">
                    <span>{item.year}</span>
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-foreground">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl text-foreground mb-4">Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Our success is driven by a dedicated team of over 500 logistics professionals across the globe, working together to deliver exceptional service to our clients every day.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: '500+', label: 'Team Members' },
                { number: '20+', label: 'Office Locations' },
                { number: '15+', label: 'Industry Awards' },
                { number: '50+', label: 'Partner Networks' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl sm:text-4xl text-yellow-400 mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
