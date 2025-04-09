
import { cn } from "@/lib/utils";

interface ProcessStep {
  title: string;
  description: string;
}

interface CaseStudyProcessTabProps {
  process: ProcessStep[];
}

const CaseStudyProcessTab = ({ process }: CaseStudyProcessTabProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4">
        <h2 className="text-3xl font-bold mb-6">The Process</h2>
      </div>
      <div className="lg:col-span-8">
        <div className="space-y-12">
          {process.map((step, index) => (
            <div key={index} className="relative">
              <div className={cn(
                "flex items-center mb-2",
                index < process.length - 1 ? "pb-12" : ""
              )}>
                <div className="shrink-0 h-10 w-10 rounded-full bg-marketing-600 text-white flex items-center justify-center mr-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
              </div>
              
              {index < process.length - 1 && (
                <div className="absolute left-5 top-10 h-full w-px bg-gray-200 -translate-x-1/2"></div>
              )}
              
              <div className="ml-14">
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyProcessTab;
