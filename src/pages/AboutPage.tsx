import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, Globe, CheckCircle } from 'lucide-react';
import { Section, SectionHeader, Card } from '../components/ui';
import { team, timeline } from '../data';

export function AboutPage() {
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
              About <span className="gradient-text">Intelligence Future</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Pioneering AI-enhanced education and migration consulting since 2018.
              We're building the future of global mobility, one success story at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <Section background="gradient" id="mission">
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: 'Our Mission',
              description: 'To democratize access to world-class education and migration opportunities by combining cutting-edge AI technology with expert human guidance, making global mobility accessible to everyone.',
              color: 'from-primary-500 to-primary-600',
            },
            {
              icon: Eye,
              title: 'Our Vision',
              description: 'To become the world\'s most trusted education and migration partner, recognized for innovation, integrity, and an unwavering commitment to student success across every major destination country.',
              color: 'from-accent-cyan to-accent-teal',
            },
            {
              icon: Heart,
              title: 'Our Values',
              description: 'Integrity in every recommendation. Innovation in our approach. Individual attention for each student. Impact through measurable success. Inclusivity in global opportunity.',
              color: 'from-emerald-500 to-teal-500',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full text-center">
                <div className="p-8">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Company Stats */}
      <Section>
        <SectionHeader
          title="Our Impact in Numbers"
          subtitle="Since 2018, we've helped thousands achieve their dreams."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: '5,000+', label: 'Students Placed' },
            { value: '98%', label: 'Success Rate' },
            { value: '50+', label: 'Partner Universities' },
            { value: '50+', label: 'Countries Represented' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-cyan/10 dark:from-secondary-800 dark:to-secondary-900"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <p className="text-secondary-600 dark:text-secondary-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section background="gradient" id="timeline">
        <SectionHeader
          title="Our Journey"
          subtitle="From a small consultancy to a leading AI-enhanced education firm."
          gradient
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 via-accent-cyan to-emerald-500 rounded-full" />

            {timeline.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-8 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <Card className="p-6">
                    <div className="flex items-center space-x-2 mb-3 md:justify-start md:${index % 2 === 0 ? 'md:flex-row-reverse' : ''} ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 font-bold text-sm">
                        {event.year}
                      </span>
                      {index === 0 && <Award className="w-5 h-5 text-yellow-500" />}
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400">
                      {event.description}
                    </p>
                  </Card>
                </div>

                {/* Center Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-secondary-900 shadow-lg" />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section id="team">
        <SectionHeader
          title="Meet Our Team"
          subtitle="Experienced professionals dedicated to your success."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full">
                <div className="p-6">
                  <div className="relative mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-2xl object-cover mx-auto"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-secondary-600 dark:text-secondary-400 text-sm mb-4">
                      {member.bio}
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.slice(0, 3).map((exp) => (
                        <span
                          key={exp}
                          className="px-2 py-1 text-xs rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-600 dark:text-secondary-400"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Why Australia */}
      <Section background="gradient">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 dark:text-white mb-6">
              Why We're Based in <span className="gradient-text">Australia</span>
            </h2>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6 leading-relaxed">
              Australia offers one of the world's most robust education systems and clearest migration
              pathways. Being on the ground here means we maintain strong relationships with universities,
              understand the latest policy changes, and can provide the most accurate guidance to our students.
            </p>
            <div className="space-y-4">
              {[
                'Direct partnerships with 50+ Australian universities',
                'MARA-registered migration agents on staff',
                'Real-time knowledge of visa policy changes',
                'Local presence for student support after arrival',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" />
                  <span className="text-secondary-700 dark:text-secondary-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-accent-cyan rounded-3xl blur-3xl opacity-20" />
            <img
              src="https://images.pexels.com/photos/1106216/pexels-photo-1106216.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Sydney Opera House"
              className="relative rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </Section>

      {/* Certifications */}
      <Section>
        <SectionHeader
          title="Recognitions & Certifications"
          subtitle="Accreditations that ensure quality and trust."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'MARA Registered', description: 'Migration Agents Registration Authority' },
            { title: 'QEAC Accredited', description: 'Qualified Education Agent Counsellor' },
            { title: 'ISANA Member', description: 'International Student Advisers Network Aus' },
            { title: 'PIER Certified', description: 'Professional International Education Resources' },
          ].map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center">
                <Award className="w-10 h-10 text-primary-500 mx-auto mb-4" />
                <h4 className="font-bold text-secondary-900 dark:text-white mb-2">
                  {cert.title}
                </h4>
                <p className="text-sm text-secondary-600 dark:text-secondary-400">
                  {cert.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
