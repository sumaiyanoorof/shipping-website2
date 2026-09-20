import React from 'react';
import { motion } from 'framer-motion';
import {
  Clock,
  Shield,
  DollarSign,
  Globe2,
  TrendingUp,
  Users,
  Headphones,
  Award,
  Zap,
  Lock,
  BarChart3,
  Leaf,
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function WhyChooseUsPage() {
  const benefits = [
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: '99.8% on-time delivery rate with real-time tracking and proactive notifications.',
      stat: '99.8%',
    },
    {
      icon: Shield,
      title: 'Reliability & Trust',
      description: 'Over 25 years of consistent, dependable service trusted by thousands of businesses.',
      stat: '25+ Years',
    },
    {
      icon: Globe2,
      title: 'Global Network',
      description: 'Extensive coverage across 50+ countries with local expertise everywhere we operate.',
      stat: '50+ Countries',
    },
    {
      icon: DollarSign,
      title: 'Competitive Pricing',
      description: 'Transparent, cost-effective rates with no hidden fees or surprise charges.',
      stat: 'Best Value',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer service team ready to assist you at any time.',
      stat: '24/7/365',
    },
    {
      icon: TrendingUp,
      title: 'Industry Leadership',
      description: 'Recognized as a top logistics provider with multiple industry awards.',
      stat: '15+ Awards',
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Advanced Technology',
      description: 'Cutting-edge tracking systems and automation for seamless operations.',
    },
    {
      icon: Lock,
      title: 'Secure Handling',
      description: 'State-of-the-art security measures to protect your valuable cargo.',
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Comprehensive reporting and insights to optimize your supply chain.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Eco-friendly practices and carbon-neutral shipping options.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '500+ logistics professionals dedicated to your success.',
    },
    {
      icon: Award,
      title: 'Quality Certified',
      description: 'ISO 9001 certified with rigorous quality control standards.',
    },
  ];

  const testimonials = [
    {
      quote: 'GlobalShip has transformed our international logistics. Their reliability and service are unmatched.',
      author: 'Sarah Johnson',
      position: 'Supply Chain Director',
      company: 'TechCorp International',
    },
    {
      quote: 'The real-time tracking and customer support have been game-changers for our business operations.',
      author: 'Michael Chen',
      position: 'Operations Manager',
      company: 'Global Manufacturing Ltd',
    },
    {
      quote: 'Cost-effective, reliable, and professional. GlobalShip is our go-to logistics partner.',
      author: 'Emily Rodriguez',
      position: 'CEO',
      company: 'Import Solutions Inc',
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
              Why Choose GlobalShip?
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Discover what sets us apart as the preferred logistics partner for businesses worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl text-foreground mb-4">Our Key Advantages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The reasons thousands of businesses trust us with their logistics needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-accent px-3 py-1 bg-accent/10 rounded-full">
                      {benefit.stat}
                    </div>
                  </div>
                  <h3 className="mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl text-foreground mb-4">Additional Benefits</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              More reasons to make us your logistics partner
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-card p-6 rounded-lg shadow-sm text-center"
                >
                  <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '10,000+', label: 'Annual Shipments' },
              { value: '500+', label: 'Team Members' },
              { value: '99.8%', label: 'Customer Satisfaction' },
              { value: '50+', label: 'Countries Covered' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-primary-foreground/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-lg shadow-sm"
              >
                <div className="mb-4">
                  <svg
                    className="w-8 h-8 text-accent opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-muted-foreground mb-4 italic">{testimonial.quote}</p>
                <div>
                  <div className="text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.position}, {testimonial.company}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl text-foreground mb-6">
                Built on Trust, Driven by Excellence
              </h2>
              <p className="text-muted-foreground mb-6">
                For over 25 years, GlobalShip has been the trusted logistics partner for businesses around the world. Our commitment to excellence, innovation, and customer satisfaction has made us an industry leader.
              </p>
              <p className="text-muted-foreground">
                We don't just move cargo - we build relationships, solve problems, and help businesses grow. When you choose GlobalShip, you're choosing a partner invested in your success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2V8ZW58MXx8fHwxNzY1NzMxMTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Logistics warehouse"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
