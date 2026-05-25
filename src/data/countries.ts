import { MapPin, DollarSign, GraduationCap, FileText, Users, Clock } from 'lucide-react';

export interface Country {
  id: string;
  name: string;
  shortName: string;
  status: 'active' | 'coming-soon';
  flag: string;
  tagline: string;
  description: string;
  image: string;
  overview: {
    educationSystem: string;
    visaPathways: string[];
    costOfLiving: string;
    applicationProcess: string[];
    workWhileStudy: string;
    postStudyWork: string;
  };
  highlights: {
    icon: typeof MapPin;
    title: string;
    description: string;
  }[];
  popularUniversities: {
    name: string;
    location: string;
    ranking: string;
    programs: string[];
  }[];
  keyFacts: {
    icon: typeof DollarSign;
    label: string;
    value: string;
  }[];
}

export const countries: Country[] = [
  {
    id: 'australia',
    name: 'Australia',
    shortName: 'Australia',
    status: 'active',
    flag: '🇦🇺',
    tagline: 'World-Class Education in a Vibrant Country',
    description: 'Australia offers internationally recognized qualifications, diverse study options, and excellent lifestyle opportunities for international students.',
    image: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview: {
      educationSystem: 'Australia has a world-class education system with 7 universities in the top 100 globally. The Australian Qualifications Framework (AQF) ensures national consistency and high standards across all education levels.',
      visaPathways: [
        'Student Visa (Subclass 500)',
        'Post-Study Work Visa (Subclass 485)',
        'Skilled Independent Visa (Subclass 189)',
        'Skilled Nominated Visa (Subclass 190)',
        'Employer Sponsored Visas',
      ],
      costOfLiving: 'Annual living costs range from AUD 21,041 to AUD 30,000 depending on location. Sydney and Melbourne are more expensive, while Adelaide, Perth, and Brisbane offer more affordable options.',
      applicationProcess: [
        'Choose your course and institution',
        'Meet academic and English requirements',
        'Submit application with required documents',
        'Receive and accept offer letter',
        'Apply for student visa (Subclass 500)',
        'Arrange health insurance (OSHC)',
        'Plan your travel and accommodation',
      ],
      workWhileStudy: 'Work up to 48 hours per fortnight during study periods and unlimited hours during scheduled breaks.',
      postStudyWork: 'Graduates can apply for Post-Study Work visas ranging from 2-4 years depending on qualification level and regional study.',
    },
    highlights: [
      {
        icon: GraduationCap,
        title: 'Top Universities',
        description: 'Access to world-renowned institutions and cutting-edge research facilities',
      },
      {
        icon: Users,
        title: 'Multicultural Society',
        description: 'Experience a diverse, welcoming community from over 200 countries',
      },
      {
        icon: DollarSign,
        title: 'High Wages',
        description: 'World\'s highest minimum wage offers excellent part-time work opportunities',
      },
      {
        icon: Clock,
        title: 'Work Rights',
        description: 'Extended post-study work rights up to 4 years in regional areas',
      },
    ],
    popularUniversities: [
      {
        name: 'University of Melbourne',
        location: 'Melbourne, Victoria',
        ranking: 'QS World Ranking: #14',
        programs: ['Engineering', 'Medicine', 'Law', 'Business', 'Arts'],
      },
      {
        name: 'University of Sydney',
        location: 'Sydney, NSW',
        ranking: 'QS World Ranking: #19',
        programs: ['Architecture', 'Medicine', 'Law', 'Economics', 'Science'],
      },
      {
        name: 'Australian National University',
        location: 'Canberra, ACT',
        ranking: 'QS World Ranking: #30',
        programs: ['Political Science', 'Physics', 'Philosophy', 'Economics'],
      },
      {
        name: 'University of Queensland',
        location: 'Brisbane, Queensland',
        ranking: 'QS World Ranking: #43',
        programs: ['Agriculture', 'Engineering', 'Business', 'Biotechnology'],
      },
      {
        name: 'Monash University',
        location: 'Melbourne, Victoria',
        ranking: 'QS World Ranking: #42',
        programs: ['Pharmacy', 'Engineering', 'Business', 'Medicine'],
      },
    ],
    keyFacts: [
      {
        icon: DollarSign,
        label: 'Average Tuition',
        value: 'AUD 20,000 - 45,000/year',
      },
      {
        icon: MapPin,
        label: 'Living Cost',
        value: 'AUD 21,041 - 30,000/year',
      },
      {
        icon: GraduationCap,
        label: 'Students',
        value: '700,000+ International',
      },
      {
        icon: Clock,
        label: 'Part-time Work',
        value: 'Up to 48 hrs/fortnight',
      },
    ],
  },
  {
    id: 'canada',
    name: 'Canada',
    shortName: 'Canada',
    status: 'coming-soon',
    flag: '🇨🇦',
    tagline: 'Quality Education with Immigration Pathways',
    description: 'Canada combines excellent education with clear pathways to permanent residency, making it a top destination for international students.',
    image: 'https://images.pexels.com/photos/2506914/pexels-photo-2506914.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview: {
      educationSystem: 'Canada is known for its high-quality education system with world-renowned universities. Provincial governments oversee education, ensuring consistent standards and quality.',
      visaPathways: [
        'Study Permit',
        'Post-Graduation Work Permit (PGWP)',
        'Express Entry (Federal Skilled Worker)',
        'Provincial Nominee Programs',
        'Canadian Experience Class',
      ],
      costOfLiving: 'Annual living costs typically range from CAD 15,000 to CAD 25,000 depending on the city. Toronto and Vancouver are more expensive.',
      applicationProcess: [
        'Select program and institution',
        'Meet admission requirements',
        'Apply and receive acceptance',
        'Obtain study permit',
        'Prepare for arrival',
      ],
      workWhileStudy: 'Work up to 20 hours per week during regular academic sessions and full-time during scheduled breaks.',
      postStudyWork: 'Post-Graduation Work Permit allows graduates to work for up to 3 years after graduation.',
    },
    highlights: [
      {
        icon: GraduationCap,
        title: 'Top-Ranked Education',
        description: 'Consistently ranked among the best education systems globally',
      },
      {
        icon: Users,
        title: 'Safe & Welcoming',
        description: 'Known as one of the safest and most inclusive countries',
      },
      {
        icon: DollarSign,
        title: 'Affordable',
        description: 'Lower tuition and living costs compared to other English-speaking countries',
      },
      {
        icon: Clock,
        title: 'Clear PR Pathway',
        description: 'Direct pathways from study to permanent residency',
      },
    ],
    popularUniversities: [
      {
        name: 'University of Toronto',
        location: 'Toronto, Ontario',
        ranking: 'QS World Ranking: #21',
        programs: ['Engineering', 'Medicine', 'Business', 'Computer Science'],
      },
      {
        name: 'University of British Columbia',
        location: 'Vancouver, BC',
        ranking: 'QS World Ranking: #34',
        programs: ['Forestry', 'Education', 'Engineering', 'Medicine'],
      },
    ],
    keyFacts: [
      {
        icon: DollarSign,
        label: 'Average Tuition',
        value: 'CAD 15,000 - 35,000/year',
      },
      {
        icon: MapPin,
        label: 'Living Cost',
        value: 'CAD 15,000 - 25,000/year',
      },
      {
        icon: GraduationCap,
        label: 'Students',
        value: '600,000+ International',
      },
      {
        icon: Clock,
        label: 'Part-time Work',
        value: 'Up to 20 hrs/week',
      },
    ],
  },
  {
    id: 'america',
    name: 'United States of America',
    shortName: 'America',
    status: 'coming-soon',
    flag: '🇺🇸',
    tagline: 'Innovation and Excellence in Education',
    description: 'The USA hosts the world\'s most prestigious universities and offers unparalleled research opportunities and career prospects.',
    image: 'https://images.pexels.com/photos/2409022/pexels-photo-2409022.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview: {
      educationSystem: 'The US education system is globally renowned, with over 4,000 accredited institutions offering diverse programs and cutting-edge research opportunities.',
      visaPathways: [
        'F-1 Student Visa',
        'OPT (Optional Practical Training)',
        'H-1B Specialty Occupation Visa',
        'EB-1 Extraordinary Ability',
        'EB-2 National Interest Waiver',
      ],
      costOfLiving: 'Varies significantly by location, typically USD 15,000 - 35,000 per year for living expenses.',
      applicationProcess: [
        'Research and select institutions',
        'Prepare for standardized tests (SAT/ACT/GRE/GMAT)',
        'Submit applications with essays and recommendations',
        'Receive I-20 form from institution',
        'Apply for F-1 visa',
      ],
      workWhileStudy: 'F-1 students can work on-campus up to 20 hours per week during the academic year.',
      postStudyWork: 'OPT allows students to work for 12 months (STEM fields extendable to 36 months) after graduation.',
    },
    highlights: [
      {
        icon: GraduationCap,
        title: 'Prestigious Universities',
        description: 'Home to the world\'s top-ranked universities and research institutions',
      },
      {
        icon: Users,
        title: 'Diverse Opportunities',
        description: 'Access to cutting-edge industries and career opportunities worldwide',
      },
      {
        icon: DollarSign,
        title: 'Large Job Market',
        description: 'Connections to Fortune 500 companies and tech giants',
      },
      {
        icon: Clock,
        title: 'OPT & CPT',
        description: 'Work authorization programs for practical experience',
      },
    ],
    popularUniversities: [
      {
        name: 'Harvard University',
        location: 'Cambridge, Massachusetts',
        ranking: 'QS World Ranking: #4',
        programs: ['Law', 'Medicine', 'Business', 'Government'],
      },
      {
        name: 'Stanford University',
        location: 'Stanford, California',
        ranking: 'QS World Ranking: #5',
        programs: ['Engineering', 'Computer Science', 'Business', 'Medicine'],
      },
      {
        name: 'MIT',
        location: 'Cambridge, Massachusetts',
        ranking: 'QS World Ranking: #1',
        programs: ['Engineering', 'Computer Science', 'Physics', 'Economics'],
      },
    ],
    keyFacts: [
      {
        icon: DollarSign,
        label: 'Average Tuition',
        value: 'USD 25,000 - 55,000/year',
      },
      {
        icon: MapPin,
        label: 'Living Cost',
        value: 'USD 15,000 - 35,000/year',
      },
      {
        icon: GraduationCap,
        label: 'Students',
        value: '900,000+ International',
      },
      {
        icon: Clock,
        label: 'Part-time Work',
        value: 'On-campus only',
      },
    ],
  },
  {
    id: 'gulf',
    name: 'Gulf Region',
    shortName: 'Gulf',
    status: 'coming-soon',
    flag: '🌊',
    tagline: 'Emerging Education Hub with Global Vision',
    description: 'The Gulf region is rapidly developing as a world-class education destination with branch campuses of top international universities.',
    image: 'https://images.pexels.com/photos/13298734/pexels-photo-13298734.jpeg?auto=compress&cs=tinysrgb&w=1200',
    overview: {
      educationSystem: 'The Gulf region, particularly UAE and Qatar, hosts branch campuses of prestigious Western universities, offering international degrees in a Middle Eastern setting.',
      visaPathways: [
        'Student Residence Visa',
        'Work Visas (varies by country)',
        'Investment Visas',
        'Family Sponsorship',
      ],
      costOfLiving: 'Varies by country; UAE and Qatar tend to be higher, while Oman and Bahrain offer more affordable options.',
      applicationProcess: [
        'Choose institution and program',
        'Submit application with documents',
        'Receive admission offer',
        'Apply for student visa',
        'Complete medical requirements',
      ],
      workWhileStudy: 'Rules vary by country; UAE allows part-time work in certain zones and sectors.',
      postStudyWork: 'Work opportunities depend on country and industry, with growing demand in technology and finance sectors.',
    },
    highlights: [
      {
        icon: GraduationCap,
        title: 'Branch Campuses',
        description: 'Study at prestigious university campuses without leaving the region',
      },
      {
        icon: Users,
        title: 'Strategic Location',
        description: 'Gateway between East and West with strong business connections',
      },
      {
        icon: DollarSign,
        title: 'Tax-Free Income',
        description: 'Benefit from tax-free salaries when transitioning to work',
      },
      {
        icon: Clock,
        title: 'Growing Market',
        description: 'Emerging opportunities in tech, finance, and innovation sectors',
      },
    ],
    popularUniversities: [
      {
        name: 'NYU Abu Dhabi',
        location: 'Abu Dhabi, UAE',
        ranking: 'Top Global Partner',
        programs: ['Arts & Sciences', 'Engineering', 'Social Science'],
      },
      {
        name: 'Education City Qatar',
        location: 'Doha, Qatar',
        ranking: 'Multiple Top Universities',
        programs: ['Medicine', 'Engineering', 'Business', 'Design'],
      },
    ],
    keyFacts: [
      {
        icon: DollarSign,
        label: 'Average Tuition',
        value: 'USD 15,000 - 40,000/year',
      },
      {
        icon: MapPin,
        label: 'Living Cost',
        value: 'USD 15,000 - 30,000/year',
      },
      {
        icon: GraduationCap,
        label: 'Students',
        value: '150,000+ International',
      },
      {
        icon: Clock,
        label: 'Part-time Work',
        value: 'Limited options',
      },
    ],
  },
];

export const getCountryById = (id: string) => {
  return countries.find((country) => country.id === id);
};

export const getActiveCountries = () => {
  return countries.filter((country) => country.status === 'active');
};

export const getComingSoonCountries = () => {
  return countries.filter((country) => country.status === 'coming-soon');
};
