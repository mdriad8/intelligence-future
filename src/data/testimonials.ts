export interface Testimonial {
  id: string;
  name: string;
  location: string;
  country: string;
  university: string;
  program: string;
  image: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    location: 'Sydney, Australia',
    country: 'Australia',
    university: 'University of Melbourne',
    program: 'Master of Data Science',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Intelligence Future made my dream of studying in Australia a reality. Their AI-powered course recommendations matched perfectly with my career goals, and the team handled all my visa paperwork flawlessly.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Mohammed Al-Rashid',
    location: 'Dubai, UAE',
    country: 'Australia',
    university: 'University of Sydney',
    program: 'Bachelor of Engineering',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'From IELTS preparation to securing my scholarship, Intelligence Future was with me every step of the way. I couldn\'t have done it without their expert guidance and constant support.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    country: 'Australia',
    university: 'Monash University',
    program: 'Master of Business Analytics',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'The AI career assessment helped me discover the perfect program for my skills. Within 6 months, I had my visa approved and was enrolled in one of Australia\'s top universities.',
    rating: 5,
  },
  {
    id: '4',
    name: 'David Nguyen',
    location: 'Ho Chi Minh City, Vietnam',
    country: 'Australia',
    university: 'Australian National University',
    program: 'Bachelor of Commerce',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'I was overwhelmed by the process until I found Intelligence Future. Their team simplified everything and I received my student visa in record time. Highly recommended!',
    rating: 5,
  },
  {
    id: '5',
    name: 'Aisha Patel',
    location: 'Nairobi, Kenya',
    country: 'Australia',
    university: 'University of Queensland',
    program: 'PhD in Biotechnology',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'The personalized approach and attention to detail set Intelligence Future apart. They matched me with a university supervisor perfectly aligned with my research interests.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Carlos Rodriguez',
    location: 'Mexico City, Mexico',
    country: 'Australia',
    university: 'University of New South Wales',
    program: 'Master of Engineering',
    image: 'https://images.pexels.com/photos/936073/pexels-photo-936073.jpeg?auto=compress&cs=tinysrgb&w=400',
    quote: 'Professional, knowledgeable, and always available. Intelligence Future helped me navigate the complex migration process and I\'m now working in Australia permanently.',
    rating: 5,
  },
];
