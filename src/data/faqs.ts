export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export const faqs: FAQ[] = [
  {
    question: 'What services does Intelligence Future offer?',
    answer: 'We offer comprehensive services including study abroad guidance, visa and migration assistance, university admissions support, career counselling, and English test preparation (IELTS, PTE, TOEFL). Our AI-enhanced platform provides personalized recommendations based on your profile and goals.',
    category: 'General',
  },
  {
    question: 'Which countries do you currently operate in?',
    answer: 'We are currently active in Australia and have helped students from over 50 countries study there. We are expanding to Canada, America, and the Gulf region soon. Contact us to be notified when we launch in these markets.',
    category: 'Countries',
  },
  {
    question: 'What are the requirements to study in Australia?',
    answer: 'Basic requirements include: academic qualifications meeting course entry requirements, English proficiency (IELTS 6.0+ typically), proof of financial capacity, health insurance (OSHC), and meeting health and character requirements. We help assess your eligibility and guide you through each step.',
    category: 'Australia',
  },
  {
    question: 'How long does the student visa process take?',
    answer: 'Australian student visa processing typically takes 4-12 weeks depending on your country and individual circumstances. Our team ensures your application is complete and accurate to minimize delays. We provide regular updates throughout the process.',
    category: 'Visa',
  },
  {
    question: 'Can I work while studying in Australia?',
    answer: 'Yes! Student visa holders can work up to 48 hours per fortnight during study periods and unlimited hours during official breaks. Additionally, many courses include industry placements or internships that count towards your qualification.',
    category: 'Work',
  },
  {
    question: 'What is the cost of studying in Australia?',
    answer: 'Tuition fees vary by program and institution, typically ranging from AUD 20,000 to AUD 45,000 per year. Living costs average AUD 21,041-30,000 annually. We help you find scholarship opportunities and budget effectively for your studies.',
    category: 'Costs',
  },
  {
    question: 'Do you offer scholarship assistance?',
    answer: 'Yes! We help identify and apply for scholarships offered by universities, the Australian government, and private organizations. Our system matches your profile with relevant opportunities and guides you through the application process.',
    category: 'Scholarships',
  },
  {
    question: 'What English test scores do I need?',
    answer: 'Requirements vary by institution and program, but generally: IELTS 6.0-7.0, PTE 50-65, or TOEFL 60-90. We assess your current level and provide targeted preparation courses to help you achieve your required score.',
    category: 'English',
  },
  {
    question: 'Can I stay in Australia after graduation?',
    answer: 'Yes! The Post-Study Work Stream visa (Subclass 485) allows graduates to work in Australia for 2-4 years depending on qualification level and study location. Regional study can extend work rights further. We also guide skilled migration pathways for permanent residency.',
    category: 'Migration',
  },
  {
    question: 'How does your AI-enhanced guidance work?',
    answer: 'Our proprietary AI system analyzes your academic background, career goals, financial situation, and preferences to recommend the best matching programs and institutions. It considers factors like employment outcomes, course content, location benefits, and application success probability.',
    category: 'Technology',
  },
  {
    question: 'What is your success rate?',
    answer: 'We maintain a 98% visa success rate and have successfully placed over 5,000 students in their preferred programs. Our thorough pre-assessment process identifies potential issues early, allowing us to address them before application.',
    category: 'General',
  },
  {
    question: 'How much do your services cost?',
    answer: 'Initial consultations are free. Our service fees vary depending on the complexity and scope of assistance needed. We offer transparent pricing with no hidden costs. Book a free consultation to discuss your specific needs and receive a detailed quote.',
    category: 'General',
  },
];
