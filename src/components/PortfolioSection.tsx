
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { CaseStudy } from "@/types/caseStudy";

const projects: (Pick<CaseStudy, 'id' | 'title' | 'category'> & {
  description: string;
  image: string;
})[] = [
  {
    title: "Nature Co. Rebrand",
    category: "branding",
    description: "Complete brand redesign for an eco-friendly product line.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdyZWVuJTIwYnJhbmRpbmd8ZW58MHx8MHx8fDA%3D",
    id: "nature-co-rebrand"
  },
  {
    title: "Tech Summit Campaign",
    category: "digital",
    description: "Digital marketing strategy for annual tech conference.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    id: "tech-summit-campaign"
  },
  {
    title: "Wellness App Launch",
    category: "social",
    description: "Social media strategy for wellness app launch.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2VsbG5lc3MlMjBhcHB8ZW58MHx8MHx8fDA%3D",
    id: "wellness-app-launch"
  },
  {
    title: "Luxury Resort Content",
    category: "content",
    description: "Content strategy for luxury resort chain.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwcmVzb3J0fGVufDB8fDB8fHww",
    id: "luxury-resort-content"
  },
  {
    title: "Food Delivery Rebrand",
    category: "branding",
    description: "Brand refresh for expanding food delivery service.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGRlbGl2ZXJ5fGVufDB8fDB8fHww",
    id: "food-delivery-rebrand"
  },
  {
    title: "Fashion Week PR",
    category: "digital",
    description: "Digital PR campaign for fashion week.",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    id: "fashion-week-pr"
  }
];

// Define the ProjectCard interface for the components in this file
interface ProjectCard {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-marketing-500 mx-auto mb-6 rounded"></div>
          <p className="text-gray-600">
            Browse through a selection of my recent projects, showcasing my expertise in 
            various areas of marketing.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-5 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="branding">Branding</TabsTrigger>
            <TabsTrigger value="digital">Digital</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden card-hover border-none shadow-md">
                  <div className="relative overflow-hidden h-60">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 text-white">
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <p className="text-sm text-white/80">{project.category}</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                    <Link 
                      to={`/case-study/${project.id}`}
                      className="inline-flex items-center text-marketing-600 hover:text-marketing-800 transition-colors"
                    >
                      View Case Study <ExternalLink size={16} className="ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center">
          <a href="/#contact" className="btn-primary inline-block">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
