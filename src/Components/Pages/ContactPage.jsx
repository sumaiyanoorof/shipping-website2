import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import shipImage6 from '../../assets/shipImage9.jpg';


export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    toast.success(
      "Quote request submitted successfully! We will contact you soon."
    );
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

    const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['1234 Harbor Drive, Suite 500', 'Port City, PC 12345', 'United States'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (234) 567-8900', '+1 (234) 567-8901', 'Toll-Free: 1-800-SHIP-NOW'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@globalship.com', 'quotes@globalship.com', 'support@globalship.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed'],
    },
  ];

  const offices = [
    { city: 'New York', country: 'USA' },
    { city: 'London', country: 'UK' },
    { city: 'Singapore', country: 'Singapore' },
    { city: 'Dubai', country: 'UAE' },
    { city: 'Shanghai', country: 'China' },
    { city: 'Sydney', country: 'Australia' },
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative min-h-170 h-[min(860px,100svh)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={shipImage6}
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
             Get in Touch
            </motion.h1>
            <motion.p
              className="text-base sm:text-xl leading-relaxed text-white/90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
               Ready to optimize your logistics? Contact us today for a customized quote.
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

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl sm:text-3xl text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-6">
                  Reach out to us through any of these channels. We're here to help!
                </p>
              </motion.div>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card p-4 rounded-lg shadow-sm border border-border"
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-lg shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-card p-6 sm:p-8 rounded-lg shadow-sm border border-border">
                <h2 className="text-2xl sm:text-3xl text-foreground mb-6">Request a Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name">Full Name *</label>
                        <input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="mt-2 w-full px-3 py-2 bg-input-background border border-border rounded-md"
                        />
                      </div>
                    <div>
                      <label htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="mt-2 w-full px-3 py-2 bg-input-background border border-border rounded-md"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (234) 567-8900"
                        className="mt-2 w-full px-3 py-2 bg-input-background border border-border rounded-md"
                      />
                    </div>
                    <div>
                      <label htmlFor="company">Company Name</label>
                      <input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Inc."
                        className="mt-2 w-full px-3 py-2 bg-input-background border border-border rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service">Service Interested In *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full px-3 py-2 bg-input-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      <option value="ocean">Ocean Freight</option>
                      <option value="air">Air Freight</option>
                      <option value="land">Land Transportation</option>
                      <option value="warehouse">Warehousing & Distribution</option>
                      <option value="supply-chain">Supply Chain Solutions</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us about your shipping needs..."
                      rows={5}
                      className="mt-2 resize-none w-full px-3 py-2 bg-input-background border border-border rounded-md"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-yellow-500 text-accent-foreground hover:bg-accent/90 group"
                  >
                    Submit Request
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl text-foreground mb-4">Our Global Offices</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With locations around the world, we're always close to your business
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-card p-4 rounded-lg shadow-sm text-center cursor-pointer hover:shadow-md  transition-shadow"
              >
                <MapPin className="h-6 w-6 text-yellow-400 mx-auto mb-2" />
                <div className="text-foreground mb-1">{office.city}</div>
                <div className="text-xs text-muted-foreground">{office.country}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl sm:text-4xl text-foreground mb-4">Visit Our Headquarters</h2>
            <p className="text-muted-foreground">
              1234 Harbor Drive, Suite 500, Port City, PC 12345
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-xl aspect-video bg-muted"
          >
            <iframe
              title="Google Maps location of our headquarters"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                '1234 Harbor Drive, Suite 500, Port City, PC 12345'
              )}&output=embed`}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
