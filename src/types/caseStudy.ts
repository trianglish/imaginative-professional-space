
export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  category: string;
  date: string;
  heroImage: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  process: {
    title: string;
    description: string;
  }[];
  gallery?: {
    image: string;
    caption: string;
  }[];
  nextProject?: string;
  description?: string;
  image?: string;
}
