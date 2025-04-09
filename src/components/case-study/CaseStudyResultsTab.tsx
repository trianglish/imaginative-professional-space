
interface CaseStudyResultsTabProps {
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

const CaseStudyResultsTab = ({ results, testimonial }: CaseStudyResultsTabProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-4">
        <h2 className="text-3xl font-bold mb-6">The Results</h2>
      </div>
      <div className="lg:col-span-8">
        <ul className="space-y-4">
          {results.map((result, index) => (
            <li key={index} className="flex">
              <span className="inline-flex items-center justify-center shrink-0 rounded-full h-8 w-8 bg-marketing-100 text-marketing-600 mr-4">
                {index + 1}
              </span>
              <span className="text-lg">{result}</span>
            </li>
          ))}
        </ul>

        {testimonial && (
          <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <p className="text-xl italic text-gray-600 mb-6">"{testimonial.quote}"</p>
            <div>
              <p className="font-medium">{testimonial.author}</p>
              <p className="text-gray-500">{testimonial.position}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyResultsTab;
