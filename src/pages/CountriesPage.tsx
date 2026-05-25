import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, DollarSign, GraduationCap, Clock, CheckCircle, ArrowRight, Users, FileText } from 'lucide-react';
import { Section, SectionHeader, Card, Button, FAQ } from '../components/ui';
import { countries, faqs } from '../data';

export function CountriesPage() {
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
              Study <span className="gradient-text">Destinations</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Explore world-class education opportunities across the globe. Currently active in Australia
              with expansion to Canada, America, and the Gulf region coming soon.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Country Cards Grid */}
      <Section id="countries-grid">
        <div className="grid md:grid-cols-2 gap-8">
          {countries.map((country) => (
            <motion.div
              key={country.id}
              id={country.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden h-full">
                {/* Hero Image */}
                <div className="relative h-64">
                  <img
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-4xl">{country.flag}</span>
                        <div>
                          <h2 className="text-2xl font-bold text-white">{country.name}</h2>
                          <p className="text-white/80 text-sm">{country.tagline}</p>
                        </div>
                      </div>
                      {country.status === 'active' ? (
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/90 text-white text-sm font-medium backdrop-blur-sm">
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/90 text-white text-sm font-medium backdrop-blur-sm">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                    {country.description}
                  </p>

                  {/* Key Facts */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {country.keyFacts.map((fact) => (
                      <div key={fact.label} className="text-center p-3 rounded-xl bg-secondary-50 dark:bg-secondary-800">
                        <fact.icon className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                        <p className="text-sm font-bold text-secondary-900 dark:text-white">{fact.value}</p>
                        <p className="text-xs text-secondary-600 dark:text-secondary-400">{fact.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {country.highlights.slice(0, 4).map((highlight) => (
                      <div key={highlight.title} className="flex items-start space-x-3">
                        <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                          <highlight.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary-900 dark:text-white text-sm">
                            {highlight.title}
                          </h4>
                          <p className="text-xs text-secondary-600 dark:text-secondary-400 line-clamp-2">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  {country.status === 'active' ? (
                    <Link to="/apply">
                      <Button variant="primary" className="w-full" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                        Apply for {country.shortName}
                      </Button>
                    </Link>
                  ) : (
                    <Link to="/contact">
                      <Button variant="secondary" className="w-full" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                        Express Interest
                      </Button>
                    </Link>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Detailed Country Sections */}
      {countries.map((country, countryIndex) => (
        <Section
          key={country.id}
          id={`${country.id}-details`}
          background={countryIndex % 2 === 0 ? 'default' : 'gradient'}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-bold text-secondary-900 dark:text-white mb-8 text-center"
          >
            {country.flag} Study in {country.name}
          </motion.h2>

          {/* Overview Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Education System */}
            <Card className="h-full">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                    Education System
                  </h3>
                </div>
                <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                  {country.overview.educationSystem}
                </p>
              </div>
            </Card>

            {/* Cost of Living */}
            <Card className="h-full">
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                    Cost of Living
                  </h3>
                </div>
                <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                  {country.overview.costOfLiving}
                </p>
              </div>
            </Card>
          </div>

          {/* Visa Pathways */}
          <Card className="mb-8">
            <div className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                  Visa Pathways
                </h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                {country.overview.visaPathways.map((pathway, index) => (
                  <div
                    key={pathway}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-secondary-50 dark:bg-secondary-800"
                  >
                    <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0" />
                    <span className="text-sm text-secondary-700 dark:text-secondary-300">{pathway}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Work Rights */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                    Work While Studying
                  </h3>
                </div>
                <p className="text-secondary-600 dark:text-secondary-400">
                  {country.overview.workWhileStudy}
                </p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white">
                    Post-Study Work Rights
                  </h3>
                </div>
                <p className="text-secondary-600 dark:text-secondary-400">
                  {country.overview.postStudyWork}
                </p>
              </div>
            </Card>
          </div>

          {/* Popular Universities */}
          <SectionHeader
            title={`Popular Universities in ${country.name}`}
            subtitle="Top institutions for international students"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {country.popularUniversities.map((uni) => (
              <Card key={uni.name} hover>
                <div className="p-6">
                  <h4 className="font-bold text-secondary-900 dark:text-white mb-2">
                    {uni.name}
                  </h4>
                  <div className="flex items-center text-sm text-secondary-500 dark:text-secondary-400 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    {uni.location}
                  </div>
                  <p className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-3">
                    {uni.ranking}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {uni.programs.slice(0, 3).map((program) => (
                      <span
                        key={program}
                        className="px-2 py-1 text-xs rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-400"
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Application Process */}
          <Card className="bg-gradient-to-r from-primary-600 to-accent-cyan">
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Application Process for {country.name}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {country.overview.applicationProcess.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start space-x-3 text-white"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-sm text-white/90">{step}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Card>
        </Section>
      ))}

      {/* FAQ Section */}
      <Section id="faq">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Common questions about studying abroad"
        />
        <div className="max-w-3xl mx-auto">
          <FAQ items={faqs.slice(0, 6)} />
        </div>
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
            Start Your Journey Today
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 mb-8 max-w-2xl mx-auto">
            Let our experts help you navigate the path to your dream destination.
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
