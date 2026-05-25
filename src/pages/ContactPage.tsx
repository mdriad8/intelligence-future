import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, CheckCircle } from 'lucide-react';
import { Section, SectionHeader, Card, Button, Input, Textarea, Select, FAQ } from '../components/ui';
import { faqs } from '../data';

const inquiryTypes = [
  { value: 'study', label: 'Study Abroad' },
  { value: 'visa', label: 'Visa & Migration' },
  { value: 'admission', label: 'University Admissions' },
  { value: 'career', label: 'Career Counselling' },
  { value: 'english', label: 'English Test Prep' },
  { value: 'other', label: 'Other' },
];

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Have questions about studying abroad or migration? Our expert team is here to help.
              Reach out today and take the first step towards your global future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card>
              <div className="p-6 md:p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400">
                      We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-cyan flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-secondary-900 dark:text-white">
                          Send a Message
                        </h2>
                        <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                          We typically respond within 24 hours
                        </p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <Input
                        label="Full Name"
                        required
                        value={formData.name}
                        onChange={(e) => updateFormData('name', e.target.value)}
                        error={errors.name}
                        placeholder="John Smith"
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        error={errors.email}
                        placeholder="your.email@example.com"
                      />
                      <Input
                        label="Phone Number (Optional)"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData('phone', e.target.value)}
                        placeholder="+61 4XX XXX XXX"
                      />
                      <Select
                        label="Inquiry Type"
                        options={inquiryTypes}
                        value={formData.inquiryType}
                        onChange={(e) => updateFormData('inquiryType', e.target.value)}
                        placeholder="Select inquiry type"
                      />
                      <Textarea
                        label="Message"
                        required
                        value={formData.message}
                        onChange={(e) => updateFormData('message', e.target.value)}
                        error={errors.message}
                        placeholder="Tell us how we can help..."
                        rows={5}
                      />
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full"
                        isLoading={isSubmitting}
                        icon={<Send className="w-5 h-5" />}
                        iconPosition="right"
                      >
                        Send Message
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              {/* Office Info */}
              <Card>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-6">
                    Our Office
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <p className="font-medium text-secondary-900 dark:text-white">Address</p>
                        <p className="text-secondary-600 dark:text-secondary-400">
                          Suvastu Mahbuba Heights, House: 82,<br />
                          Road: 23, Block: A, Banani,<br />
                          Dhaka-1213, Bangladesh
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <p className="font-medium text-secondary-900 dark:text-white">Phone</p>
                        <a href="tel:+8801730371118" className="text-primary-600 dark:text-primary-400 hover:underline">
                          +880 1730-371118
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <p className="font-medium text-secondary-900 dark:text-white">Email</p>
                        <a href="mailto:info@intelsense.ai" className="text-primary-600 dark:text-primary-400 hover:underline">
                          info@intelsense.ai
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                      </div>
                      <div>
                        <p className="font-medium text-secondary-900 dark:text-white">Business Hours</p>
                        <p className="text-secondary-600 dark:text-secondary-400">
                          Mon - Fri: 9:00 AM - 6:00 PM<br />
                          Sat: 10:00 AM - 4:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* WhatsApp Card */}
              <Card className="bg-gradient-to-r from-green-500 to-emerald-500">
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">WhatsApp Support</h3>
                      <p className="text-white/80 text-sm mb-3">
                        Quick responses for urgent queries
                      </p>
                      <a
                        href="https://wa.me/8801730371118"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-white text-green-600 rounded-lg font-medium hover:bg-green-50 transition-colors"
                      >
                        Chat Now
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Map */}
              <Card className="overflow-hidden">
                <div className="h-64 bg-secondary-100 dark:bg-secondary-800">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8552185606463!2d90.39369931521185!3d23.793716584570945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7d1f9e3b7b1%3A0x8e8a4e8b8a8b8b8b!2sBanani%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1630000000000!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />
                </div>
              </Card>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="gradient" id="faq">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Find quick answers to common questions"
          gradient
        />
        <div className="max-w-3xl mx-auto">
          <FAQ items={faqs.slice(0, 8)} />
        </div>
      </Section>
    </>
  );
}
