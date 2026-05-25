export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  expertise: string[];
}

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'Rumman Arefin',
    role: 'Founder & CEO',
    bio: 'With over 10 years in international education, Arefin founded Intelligence Future to provide AI-enhanced guidance for students worldwide.',
    image: 'https://cdn.theorg.com/c799729c-a72e-45e7-a9f9-3092f4606d94_medium.jpg',
    linkedin: '#',
    expertise: ['Strategic Leadership', 'Education Policy', 'International Relations'],
  },
  {
    id: '2',
    name: 'Sarah Thompson',
    role: 'Head of Migration Services',
    bio: 'Registered migration agent with 15 years experience helping thousands of students and families achieve their Australian dream.',
    image: 'https://images.pexels.com/photos/1230679/pexels-photo-1230679.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    expertise: ['Visa Applications', 'Migration Law', 'Complex Cases'],
  },
  {
    id: '3',
    name: 'Dr. Ahmed Hassan',
    role: 'AI & Technology Director',
    bio: 'Former researcher at leading tech universities, Dr. Hassan leads our AI-driven matching algorithms and career assessment tools.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    expertise: ['AI Development', 'Career Analytics', 'Machine Learning'],
  },
  {
    id: '4',
    name: 'Jennifer Liu',
    role: 'Student Success Manager',
    bio: 'Having helped over 2,000 students, Jennifer ensures every client receives personalized attention from application to arrival.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    expertise: ['Student Support', 'University Relations', 'Application Strategy'],
  },
  {
    id: '5',
    name: 'Michael Brown',
    role: 'Senior Education Consultant',
    bio: 'Specializes in engineering and technology programs across Australian universities. Member of multiple education boards.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    expertise: ['University Admissions', 'Scholarships', 'STEM Programs'],
  },
  {
    id: '6',
    name: 'Emma Wilson',
    role: 'English Language Coordinator',
    bio: 'Certified IELTS examiner and language specialist with deep experience in test preparation and language assessment.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    expertise: ['IELTS Training', 'PTE Preparation', 'Language Assessment'],
  },
];
