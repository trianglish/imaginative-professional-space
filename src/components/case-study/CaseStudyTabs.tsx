
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CaseStudyResultsTab from "./CaseStudyResultsTab";
import CaseStudyProcessTab from "./CaseStudyProcessTab";

interface CaseStudyTabsProps {
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
}

const CaseStudyTabs = ({ results, testimonial, process }: CaseStudyTabsProps) => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="results" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2 mb-12">
            <TabsTrigger value="results">Results</TabsTrigger>
            <TabsTrigger value="process">Process</TabsTrigger>
          </TabsList>

          <TabsContent value="results" className="animate-fade-in">
            <CaseStudyResultsTab results={results} testimonial={testimonial} />
          </TabsContent>

          <TabsContent value="process" className="animate-fade-in">
            <CaseStudyProcessTab process={process} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CaseStudyTabs;
