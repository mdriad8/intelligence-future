import { GraduationCap, Plane, School, Briefcase, BookOpen } from 'lucide-react';

export const services = [
  {
    id: 'study-abroad',
    title: 'Study Abroad',
    shortTitle: 'Study Abroad',
    description: 'Discover world-class education opportunities across the globe. We help you find the perfect university, secure admissions, and navigate the entire process.',
    icon: GraduationCap,
    features: [
      'University selection based on your profile',
      'Application guidance and support',
      'Scholarship opportunities',
      'Pre-departure orientation',
      'Post-arrival assistance',
    ],
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'visa-migration',
    title: 'Visa & Migration',
    shortTitle: 'Visa & Migration',
    description: 'Expert visa and migration services for students, skilled workers, and families. Our licensed consultants ensure a smooth immigration process.',
    icon: Plane,
    features: [
      'Student visa applications',
      'Skilled worker visas',
      'Family sponsorship',
      'Permanent residency pathways',
      'Citizenship applications',
    ],
    image: 'https://images.pexels.com/photos/5082570/pexels-photo-5082570.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'admissions',
    title: 'University Admissions',
    shortTitle: 'Admissions',
    description: 'Navigate the complex university admissions process with confidence. We provide end-to-end support from application to enrollment.',
    icon: School,
    features: [
      'Document preparation and review',
      'Statement of purpose guidance',
      'Application tracking',
      'Interview preparation',
      'Acceptance support',
    ],
    image: 'https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'career',
    title: 'Career Counselling',
    shortTitle: 'Career Counselling',
    description: 'AI-enhanced career guidance to help you choose the right path. Our experts analyze your strengths, interests, and market trends.',
    icon: Briefcase,
    features: [
      'Personalized career assessment',
      'Industry trend analysis',
      'Skill gap identification',
      'Resume and LinkedIn optimization',
      'Job search strategies',
    ],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'english-test',
    title: 'English Test Preparation',
    shortTitle: 'English Test Prep',
    description: 'Prepare for IELTS, PTE, TOEFL, and other English proficiency tests with our expert tutors and comprehensive study materials.',
    icon: BookOpen,
    features: [
      'IELTS preparation courses',
      'PTE academic training',
      'TOEFL preparation',
      'Mock tests and assessments',
      'Flexible online sessions',
    ],
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const getServiceBySlug = (slug: string) => {
  return services.find((service) => service.id === slug);
};
