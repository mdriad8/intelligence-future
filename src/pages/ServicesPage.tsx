import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Section, SectionHeader, Card, Button } from '../components/ui';
import { services } from '../data';

export function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-white to-accent-cyan/10 dark:from-secondary-950 dark:via-secondary-900 dark:to-secondary-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 dark:text-white mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Comprehensive support for every step of your education and migration journey.
              From university selection to visa applications, we're with you all the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <Section id="services-grid">
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center shadow-lg shadow-primary-500/20">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white">
                    {service.title}
                  </h2>
                </div>
                <p className="text-lg text-secondary-600 dark:text-secondary-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: fIndex * 0.1 }}
                      className="flex items-center"
                    >
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                      <span className="text-secondary-700 dark:text-secondary-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                <Link to="/apply">
                  <Button variant="primary" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                    Get Started
                  </Button>
                </Link>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-cyan rounded-3xl blur-3xl opacity-20" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="relative rounded-3xl shadow-2xl w-full"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section background="gradient" id="process">
        <SectionHeader
          title="How It Works"
          subtitle="A simple, streamlined process to guide you from consultation to success."
          gradient
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Free Consultation',
              description: 'Share your goals, background, and preferences with our expert consultants.',
            },
            {
              step: '02',
              title: 'AI Matching',
              description: 'Our AI analyzes your profile and recommends best-fit universities and programs.',
            },
            {
              step: '03',
              title: 'Application Support',
              description: 'We handle documentation, applications, and communication with institutions.',
            },
            {
              step: '04',
              title: 'Visa & Beyond',
              description: 'Complete visa assistance and pre-departure support for smooth transition.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 text-8xl font-bold text-primary-100 dark:text-primary-900/30 -mr-4 -mt-8">
                  {item.step}
                </div>
                <div className="p-6 relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center mb-4 shadow-lg shadow-primary-500/20">
                    <span className="text-white font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400">
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Pricing Note */}
      <Section>
        <Card className="bg-gradient-to-r from-primary-600 to-accent-cyan">
          <div className="p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Transparent Pricing
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Our initial consultation is completely free. Service fees vary based on your needs
              and destination. We provide detailed quotes upfront with no hidden costs.
            </p>
            <Link to="/contact">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary-600 hover:bg-primary-50"
              >
                Contact for Quote
              </Button>
            </Link>
          </div>
        </Card>
      </Section>

      {/* CTA */}
      <Section background="gradient">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 dark:text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 mb-8 max-w-2xl mx-auto">
            Book your free consultation today and let our experts guide you to success.
          </p>
          <Link to="/apply">
            <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
              Book Free Consultation
            </Button>
          </Link>
        </motion.div>
      </Section>
    </>
  );
}
