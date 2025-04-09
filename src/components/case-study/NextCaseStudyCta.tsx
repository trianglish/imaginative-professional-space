
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NextCaseStudyCtaProps {
  nextCase?: {
    id: string;
    title: string;
  };
}

const NextCaseStudyCta = ({ nextCase }: NextCaseStudyCtaProps) => {
  if (!nextCase) {
    return null;
  }

  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-gray-400 mb-2">Next Case Study</p>
            <h3 className="text-2xl font-bold">{nextCase.title}</h3>
          </div>
          <Button 
            asChild
            variant="outline" 
            size="lg"
            className="mt-6 md:mt-0 text-white border-white hover:bg-white hover:text-gray-900"
          >
            <a href={`/case-study/${nextCase.id}`} className="inline-flex items-center">
              View Project
              <ChevronRight size={16} className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NextCaseStudyCta;
