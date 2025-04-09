
import { Share2 } from "lucide-react";

interface CaseStudyInfoProps {
  client: string;
  category: string;
  date: string;
  onShare: () => void;
}

const CaseStudyInfo = ({ client, category, date, onShare }: CaseStudyInfoProps) => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          <div>
            <h3 className="text-sm font-medium text-gray-500">CLIENT</h3>
            <p className="mt-1 text-lg font-medium">{client}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">CATEGORY</h3>
            <p className="mt-1 text-lg font-medium capitalize">{category}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">DATE</h3>
            <p className="mt-1 text-lg font-medium">{date}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">SHARE</h3>
            <button 
              onClick={onShare}
              className="mt-1 inline-flex items-center text-marketing-600 hover:text-marketing-800 transition-colors"
            >
              <Share2 size={18} className="mr-1" />
              Share
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyInfo;
