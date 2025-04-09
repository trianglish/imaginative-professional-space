
interface CaseStudyOverviewProps {
  overview: string;
  challenge: string;
  solution: string;
}

const CaseStudyOverview = ({ overview, challenge, solution }: CaseStudyOverviewProps) => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg text-gray-600 mb-8">{overview}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
                <p className="text-gray-600">{challenge}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">The Solution</h3>
                <p className="text-gray-600">{solution}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyOverview;
