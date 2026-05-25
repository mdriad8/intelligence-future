import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Brain, Users, Shield, Zap, Star, Phone, Sparkles } from 'lucide-react';
import { Button, Section, SectionHeader, Card, AnimatedCounter } from '../components/ui';
import { services, countries, testimonials } from '../data';

export function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen sm:min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-white to-accent-cyan/10 dark:from-secondary-950 dark:via-secondary-900 dark:to-secondary-950" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzMGI1ZjgiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 safe-area">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Enhanced Education Consulting
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-secondary-900 dark:text-white mb-4 sm:mb-6 leading-tight">
                Your Global Pathway to{' '}
                <span className="gradient-text">Education & Migration Success</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-secondary-600 dark:text-secondary-400 mb-6 sm:mb-8 leading-relaxed">
                Expert consultants powered by AI technology help you find the perfect university,
                secure your visa, and build your future abroad. Your success story starts here.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/apply">
                  <Button variant="primary" size="lg" icon={<Phone className="w-5 h-5" />}>
                    Book Free Consultation
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="secondary" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                    Explore Services
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-10 pt-10 border-t border-secondary-200 dark:border-secondary-800">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center text-sm text-secondary-600 dark:text-secondary-400">
                    <Shield className="w-5 h-5 text-primary-500 mr-2" />
                    MARA Registered
                  </div>
                  <div className="flex items-center text-sm text-secondary-600 dark:text-secondary-400">
                    <Users className="w-5 h-5 text-primary-500 mr-2" />
                    5,000+ Students Placed
                  </div>
                  <div className="flex items-center text-sm text-secondary-600 dark:text-secondary-400">
                    <Star className="w-5 h-5 text-primary-500 mr-2" />
                    98% Success Rate
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-cyan rounded-3xl blur-3xl opacity-20" />
                <img
                  src="https://images.pexels.com/photos/7103/woman-education-day-hands.jpg?auto=compress&cs=tinysrgb&w=800"
                  alt="Students celebrating success"
                  className="relative rounded-3xl shadow-2xl"
                />

                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -left-8 top-20 glass-card p-4 rounded-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary-900 dark:text-white">Visa Approved!</p>
                      <p className="text-xs text-secondary-600 dark:text-secondary-400">Australia Student Visa</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="absolute -right-8 bottom-20 glass-card p-4 rounded-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-cyan rounded-full flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary-900 dark:text-white">AI Match Found</p>
                      <p className="text-xs text-secondary-600 dark:text-secondary-400">98% Profile Match</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Section background="gradient">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedCounter end={5000} suffix="+" title="Students Placed" description="Successfully studying abroad" />
          <AnimatedCounter end={98} suffix="%" title="Visa Success Rate" description="Industry-leading results" />
          <AnimatedCounter end={50} prefix="+" title="Partner Universities" description="Direct admission pathways" />
          <AnimatedCounter end={15} prefix="$" title="Scholarships Secured" description="Millions in funding help" />
        </div>
      </Section>

      {/* Countries Section */}
      <Section id="countries">
        <SectionHeader
          title="Study Destinations"
          subtitle="Explore world-class education opportunities in Australia, with expansion to Canada, America, and the Gulf region coming soon."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {countries.map((country, index) => (
            <motion.div
              key={country.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/countries#${country.id}`}>
                <Card hover className="overflow-hidden group">
                  <div className="relative h-48">
                    <img
                      src={country.image}
                      alt={country.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-3xl">{country.flag}</span>
                        <h3 className="text-xl font-bold text-white">{country.name}</h3>
                      </div>
                      {country.status === 'active' ? (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium backdrop-blur-sm">
                          <span className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-medium backdrop-blur-sm">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-secondary-600 dark:text-secondary-400 text-sm line-clamp-2">
                      {country.tagline}
                    </p>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Services Section */}
      <Section background="gradient" id="services">
        <SectionHeader
          title="Our Services"
          subtitle="Comprehensive support for every step of your education and migration journey."
          gradient
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <div className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center mb-4 shadow-lg shadow-primary-500/20">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400 mb-4">
                    {service.description}
                  </p>
                  <Link to={`/services#${service.id}`}>
                    <Button variant="ghost" size="sm" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section id="why-us">
        <SectionHeader
          title="Why Choose Intelligence Future"
          subtitle="We combine cutting-edge AI technology with expert human consultants to deliver unmatched results."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: 'AI-Enhanced Guidance',
              description: 'Our proprietary AI system analyzes your profile to recommend the perfect university match, improving success rates by 40%.',
            },
            {
              icon: Users,
              title: 'Expert Consultants',
              description: 'Licensed migration agents and education experts with decades of combined experience guide you every step.',
            },
            {
              icon: Zap,
              title: 'Fast Processing',
              description: 'Streamlined workflows and direct university partnerships mean faster applications and visa processing.',
            },
            {
              icon: Shield,
              title: 'High Success Rate',
              description: '98% visa success rate through meticulous preparation and thorough documentation review.',
            },
            {
              icon: Star,
              title: 'Personalized Support',
              description: 'One-on-one support from consultation to arrival, ensuring you feel supported throughout your journey.',
            },
            {
              icon: MapPin,
              title: 'Regional Expertise',
              description: 'Deep knowledge of Australian education and migration systems with insight into local opportunities.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded- mx-auto rounded-2xl bg-gradient-to-br from-primary-100 to-accent-cyan/30 dark:from-primary-900/30 dark:to-accent-cyan/10 flex items-center justify-center mb-4">
                <item.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section background="dark" id="testimonials">
        <SectionHeader
          title="Success Stories"
          subtitle="Hear from students who achieved their dreams with Intelligence Future."
          gradient
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card glass className="h-full">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-secondary-300 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <p className="font-semibold text-white">{testimonial.name}</p>
                      <p className="text-sm text-secondary-400">
                        {testimonial.university}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gradient">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-secondary-900 dark:text-white mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 mb-8 max-w-2xl mx-auto">
            Book a free consultation with our expert team and take the first step towards your education and migration goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply">
              <Button variant="primary" size="lg" icon={<Phone className="w-5 h-5" />}>
                Book Free Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="lg" icon={<MapPin className="w-5 h-5" />}>
                Visit Our Office
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
