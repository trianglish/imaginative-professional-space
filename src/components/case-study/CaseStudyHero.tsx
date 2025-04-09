
import { ArrowLeft } from "lucide-react";

interface CaseStudyHeroProps {
  heroImage: string;
  category: string;
  title: string;
  subtitle: string;
}

const CaseStudyHero = ({ heroImage, category, title, subtitle }: CaseStudyHeroProps) => {
  return (
    <section 
      className="relative h-[50vh] md:h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <a 
            href="/#portfolio" 
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Portfolio
          </a>
          <p className="text-marketing-400 uppercase font-medium tracking-wide mb-2">
            {category}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
