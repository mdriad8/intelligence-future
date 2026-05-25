import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ChevronRight, ChevronLeft, Send, User, Mail, Phone, MapPin, GraduationCap, Calendar, FileText, Check } from 'lucide-react';
import { Section, Card, Button, Input, Textarea, Select } from '../components/ui';
import { countries } from '../data';

const steps = [
  { id: 1, title: 'Personal Details', icon: User },
  { id: 2, title: 'Contact Info', icon: Mail },
  { id: 3, title: 'Study Preferences', icon: GraduationCap },
  { id: 4, title: 'Academic Background', icon: FileText },
  { id: 5, title: 'Additional Info', icon: FileText },
];

const intakeOptions = [
  { value: 'february-2026', label: 'February 2026' },
  { value: 'july-2026', label: 'July 2026' },
  { value: 'february-2027', label: 'February 2027' },
  { value: 'july-2027', label: 'July 2027' },
];

const educationLevelOptions = [
  { value: 'high-school', label: 'High School / Secondary' },
  { value: 'diploma', label: 'Diploma' },
  { value: 'bachelor', label: 'Bachelor Degree' },
  { value: 'master', label: 'Master Degree' },
  { value: 'phd', label: 'PhD / Doctorate' },
];

const englishTestOptions = [
  { value: 'ielts', label: 'IELTS' },
  { value: 'pte', label: 'PTE Academic' },
  { value: 'toefl', label: 'TOEFL' },
  { value: 'duolingo', label: 'Duolingo English Test' },
  { value: 'none', label: 'Not yet taken' },
];

export function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Personal Details
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    nationality: '',
    passportNumber: '',
    // Step 2: Contact Info
    email: '',
    phone: '',
    countryCode: '+61',
    currentCity: '',
    currentCountry: '',
    // Step 3: Study Preferences
    countryInterest: '',
    intake: '',
    studyLevel: '',
    fieldOfStudy: '',
    budget: '',
    // Step 4: Academic Background
    highestEducation: '',
    institution: '',
    graduationYear: '',
    gpa: '',
    englishTest: '',
    englishScore: '',
    // Step 5: Additional Info
    message: '',
    howHeard: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.dateOfBirth) newErrors.dateOfBirth = 'Date of birth is required';
      if (!formData.nationality.trim()) newErrors.nationality = 'Nationality is required';
    }

    if (step === 2) {
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!formData.currentCountry.trim()) newErrors.currentCountry = 'Current country is required';
    }

    if (step === 3) {
      if (!formData.countryInterest) newErrors.countryInterest = 'Please select a country';
      if (!formData.intake) newErrors.intake = 'Please select an intake';
      if (!formData.studyLevel.trim()) newErrors.studyLevel = 'Study level is required';
    }

    if (step === 4) {
      if (!formData.highestEducation) newErrors.highestEducation = 'Please select your education level';
      if (!formData.institution.trim()) newErrors.institution = 'Institution name is required';
    }

    if (step === 5) {
      if (!formData.consent) newErrors.consent = 'You must accept the terms to proceed';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Section background="gradient">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center py-20"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/30">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 dark:text-white mb-4">
            Application Submitted Successfully!
          </h1>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 mb-8">
            Thank you for choosing Intelligence Future. Our team will review your application
            and contact you within 24-48 hours to discuss the next steps.
          </p>
          <Card className="text-left p-6">
            <h3 className="font-semibold text-secondary-900 dark:text-white mb-4">What's Next?</h3>
            <ul className="space-y-3">
              {[
                'You\'ll receive a confirmation email shortly',
                'Our AI will match your profile with suitable programs',
                'A consultant will schedule a free consultation call',
                'We\'ll discuss your options and next steps',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center text-secondary-600 dark:text-secondary-400"
                >
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </Section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-white to-accent-cyan/10 dark:from-secondary-950 dark:via-secondary-900 dark:to-secondary-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-900 dark:text-white mb-4">
              Start Your <span className="gradient-text">Journey</span>
            </h1>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              Complete this form to schedule your free consultation with our expert advisors.
              We'll help you find the perfect university and guide your application process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    currentStep >= step.id
                      ? 'bg-gradient-to-br from-primary-500 to-accent-cyan text-white shadow-lg shadow-primary-500/30'
                      : 'bg-secondary-200 dark:bg-secondary-700 text-secondary-400'
                  }`}
                >
                  {currentStep > step.id ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <step.icon className="w-6 h-6" />
                  )}
                </div>
                <span className="mt-2 text-xs md:text-sm font-medium text-secondary-600 dark:text-secondary-400 hidden sm:block">
                  {step.title}
                </span>
              </motion.div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 rounded-full transition-all duration-300 ${
                    currentStep > step.id
                      ? 'bg-gradient-to-r from-primary-500 to-accent-cyan'
                      : 'bg-secondary-200 dark:bg-secondary-700'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Form Card */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <Card className="overflow-hidden">
          <div className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              {/* Step 1: Personal Details */}
              {currentStep === 1 && (
                <motion.div
                  key="step-1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                    Personal Details
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Input
                      label="First Name"
                      required
                      value={formData.firstName}
                      onChange={(e) => updateFormData('firstName', e.target.value)}
                      error={errors.firstName}
                      placeholder="John"
                    />
                    <Input
                      label="Last Name"
                      required
                      value={formData.lastName}
                      onChange={(e) => updateFormData('lastName', e.target.value)}
                      error={errors.lastName}
                      placeholder="Smith"
                    />
                    <Input
                      label="Date of Birth"
                      type="date"
                      required
                      value={formData.dateOfBirth}
                      onChange={(e) => updateFormData('dateOfBirth', e.target.value)}
                      error={errors.dateOfBirth}
                    />
                    <Input
                      label="Nationality"
                      required
                      value={formData.nationality}
                      onChange={(e) => updateFormData('nationality', e.target.value)}
                      error={errors.nationality}
                      placeholder="e.g., Australian, Indian, Chinese"
                    />
                    <Input
                      label="Passport Number (Optional)"
                      value={formData.passportNumber}
                      onChange={(e) => updateFormData('passportNumber', e.target.value)}
                      placeholder="Enter if available"
                      helperText="We'll need this for visa applications later"
                      className="md:col-span-2"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 2: Contact Info */}
              {currentStep === 2 && (
                <motion.div
                  key="step-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    <Input
                      label="Email Address"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      error={errors.email}
                      placeholder="your.email@example.com"
                      icon={<Mail className="w-5 h-5" />}
                    />
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <div className="flex space-x-3">
                        <Select
                          options={[
                            { value: '+61', label: '+61 (AU)' },
                            { value: '+1', label: '+1 (US/CA)' },
                            { value: '+44', label: '+44 (UK)' },
                            { value: '+91', label: '+91 (IN)' },
                            { value: '+971', label: '+971 (UAE)' },
                          ]}
                          value={formData.countryCode}
                          onChange={(e) => updateFormData('countryCode', e.target.value)}
                          className="w-32"
                        />
                        <Input
                          value={formData.phone}
                          onChange={(e) => updateFormData('phone', e.target.value)}
                          error={errors.phone}
                          placeholder="412 345 678"
                          className="flex-1"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Current City"
                        value={formData.currentCity}
                        onChange={(e) => updateFormData('currentCity', e.target.value)}
                        placeholder="Sydney"
                      />
                      <Input
                        label="Current Country"
                        required
                        value={formData.currentCountry}
                        onChange={(e) => updateFormData('currentCountry', e.target.value)}
                        error={errors.currentCountry}
                        placeholder="Australia"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Study Preferences */}
              {currentStep === 3 && (
                <motion.div
                  key="step-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                    Study Preferences
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-3">
                        Country of Interest <span className="text-red-500">*</span>
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {countries.map((country) => (
                          <button
                            key={country.id}
                            type="button"
                            onClick={() => updateFormData('countryInterest', country.id)}
                            className={`p-4 rounded-xl border-2 transition-all ${
                              formData.countryInterest === country.id
                                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                                : 'border-secondary-200 dark:border-secondary-700 hover:border-primary-300'
                            }`}
                          >
                            <span className="text-2xl block mb-2">{country.flag}</span>
                            <span className="text-sm font-medium text-secondary-900 dark:text-white">
                              {country.shortName}
                            </span>
                          </button>
                        ))}
                      </div>
                      {errors.countryInterest && (
                        <p className="mt-2 text-sm text-red-500">{errors.countryInterest}</p>
                      )}
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Select
                        label="Preferred Intake"
                        required
                        options={intakeOptions}
                        value={formData.intake}
                        onChange={(e) => updateFormData('intake', e.target.value)}
                        error={errors.intake}
                        placeholder="Select intake"
                      />
                      <Input
                        label="Study Level"
                        required
                        value={formData.studyLevel}
                        onChange={(e) => updateFormData('studyLevel', e.target.value)}
                        error={errors.studyLevel}
                        placeholder="e.g., Bachelor, Master, PhD"
                      />
                    </div>
                    <Input
                      label="Field of Study"
                      value={formData.fieldOfStudy}
                      onChange={(e) => updateFormData('fieldOfStudy', e.target.value)}
                      placeholder="e.g., Computer Science, Business, Engineering"
                    />
                    <Select
                      label="Budget Range"
                      options={[
                        { value: '20k-30k', label: '$20,000 - $30,000 per year' },
                        { value: '30k-40k', label: '$30,000 - $40,000 per year' },
                        { value: '40k-50k', label: '$40,000 - $50,000 per year' },
                        { value: '50k+', label: '$50,000+ per year' },
                        { value: 'flexible', label: 'Flexible / Need scholarship' },
                      ]}
                      value={formData.budget}
                      onChange={(e) => updateFormData('budget', e.target.value)}
                      placeholder="Select budget range"
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 4: Academic Background */}
              {currentStep === 4 && (
                <motion.div
                  key="step-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                    Academic Background
                  </h2>
                  <div className="space-y-6">
                    <Select
                      label="Highest Education Level"
                      required
                      options={educationLevelOptions}
                      value={formData.highestEducation}
                      onChange={(e) => updateFormData('highestEducation', e.target.value)}
                      error={errors.highestEducation}
                      placeholder="Select your education level"
                    />
                    <Input
                      label="Institution Name"
                      required
                      value={formData.institution}
                      onChange={(e) => updateFormData('institution', e.target.value)}
                      error={errors.institution}
                      placeholder="Name of your school/university"
                    />
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        label="Graduation Year"
                        type="number"
                        value={formData.graduationYear}
                        onChange={(e) => updateFormData('graduationYear', e.target.value)}
                        placeholder="2024"
                        helperText="Year of completion"
                      />
                      <Input
                        label="GPA / Score (Optional)"
                        value={formData.gpa}
                        onChange={(e) => updateFormData('gpa', e.target.value)}
                        placeholder="3.5 / 4.0"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <Select
                        label="English Test Taken"
                        options={englishTestOptions}
                        value={formData.englishTest}
                        onChange={(e) => updateFormData('englishTest', e.target.value)}
                        placeholder="Select test"
                      />
                      <Input
                        label="English Test Score (if taken)"
                        value={formData.englishScore}
                        onChange={(e) => updateFormData('englishScore', e.target.value)}
                        placeholder="e.g., IELTS 7.0"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 5: Additional Info */}
              {currentStep === 5 && (
                <motion.div
                  key="step-5"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                    Additional Information
                  </h2>
                  <div className="space-y-6">
                    <Textarea
                      label="Tell us about your goals (Optional)"
                      value={formData.message}
                      onChange={(e) => updateFormData('message', e.target.value)}
                      placeholder="What are your career goals? Any specific universities or programs you're interested in?"
                      rows={4}
                    />
                    <Select
                      label="How did you hear about us?"
                      options={[
                        { value: 'google', label: 'Google Search' },
                        { value: 'social', label: 'Social Media' },
                        { value: 'referral', label: 'Friend / Family Referral' },
                        { value: 'university', label: 'University Fair / Event' },
                        { value: 'other', label: 'Other' },
                      ]}
                      value={formData.howHeard}
                      onChange={(e) => updateFormData('howHeard', e.target.value)}
                      placeholder="Select an option"
                    />
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="consent"
                        checked={formData.consent}
                        onChange={(e) => updateFormData('consent', e.target.checked)}
                        className="mt-1 w-5 h-5 rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
                      />
                      <label htmlFor="consent" className="text-sm text-secondary-600 dark:text-secondary-400">
                        I agree to receive communications from Intelligence Future regarding my application
                        and understand that my data will be processed according to the{' '}
                        <a href="#" className="text-primary-600 hover:underline">
                          Privacy Policy
                        </a>
                        . <span className="text-red-500">*</span>
                      </label>
                    </div>
                    {errors.consent && <p className="text-sm text-red-500">{errors.consent}</p>}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-8 border-t border-secondary-200 dark:border-secondary-700">
              <Button
                variant="secondary"
                onClick={handleBack}
                disabled={currentStep === 1}
                icon={<ChevronLeft className="w-5 h-5" />}
              >
                Previous
              </Button>

              {currentStep < steps.length ? (
                <Button
                  variant="primary"
                  onClick={handleNext}
                  icon={<ChevronRight className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  variant="primary"
                  onClick={handleSubmit}
                  isLoading={isSubmitting}
                  icon={<Send className="w-5 h-5" />}
                  iconPosition="right"
                >
                  Submit Application
                </Button>
              )}
            </div>
          </div>
        </Card>

        {/* Help Text */}
        <p className="text-center text-sm text-secondary-500 dark:text-secondary-400 mt-6">
          Questions? Contact us at{' '}
          <a href="mailto:apply@intelligencefuture.com" className="text-primary-600 hover:underline">
            apply@intelligencefuture.com
          </a>
        </p>
      </div>
    </>
  );
}
