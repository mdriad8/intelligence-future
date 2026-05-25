import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Countries', path: '/countries' },
  { name: 'Apply Now', path: '/apply' },
  { name: 'Contact', path: '/contact' },
];

const services = [
  { name: 'Study Abroad', path: '/services#study-abroad' },
  { name: 'Visa & Migration', path: '/services#visa-migration' },
  { name: 'University Admissions', path: '/services#admissions' },
  { name: 'Career Counselling', path: '/services#career' },
  { name: 'English Test Prep', path: '/services#english-test' },
];

const countries = [
  { name: 'Australia', path: '/countries#australia' },
  { name: 'Canada', path: '/countries#canada' },
  { name: 'America', path: '/countries#america' },
  { name: 'Gulf Region', path: '/countries#gulf' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 dark:bg-secondary-950 text-white">
      {/* CTA Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-cyan/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-secondary-300 text-lg mb-8 max-w-2xl mx-auto">
              Let our AI-enhanced guidance and expert consultants help you achieve your education and migration goals.
            </p>
            <Link
              to="/apply"
              className="btn-primary inline-flex items-center space-x-2 text-lg"
            >
              <span>Apply Now</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-6 flex-shrink-0">
              <img
                src="/IntelligentFutures_Graphic.png"
                alt="InFutures"
                className="h-10 sm:h-12 md:h-14 w-auto max-w-sm"
              />
            </Link>
            <p className="text-secondary-400 mb-6 max-w-sm">
              Your trusted partner for education and migration success. AI-enhanced guidance meets expert human consultants.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-secondary-800 hover:bg-primary-600 transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-secondary-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-secondary-400 hover:text-primary-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-secondary-400">
                  Suvastu Mahbuba Heights,<br />
                  House: 82, Road: 23, Block: A,<br />
                  Banani, Dhaka-1213, Bangladesh
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+8801730371118" className="text-secondary-400 hover:text-primary-400 transition-colors">
                  +880 1730-371118
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:info@intelsense.ai" className="text-secondary-400 hover:text-primary-400 transition-colors">
                  info@intelsense.ai
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-secondary-500 text-sm">
              {currentYear} Intelligence Future. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-secondary-500">
              <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
