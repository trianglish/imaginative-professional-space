
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowLeft, ChevronRight, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { CaseStudy as CaseStudyType } from "@/types/caseStudy";

// Mock data structure for case studies
const caseStudies: CaseStudyType[] = [
  {
    id: "nature-co-rebrand",
    title: "Nature Co. Rebrand",
    subtitle: "Complete brand redesign for an eco-friendly product line",
    client: "Nature Co.",
    category: "branding",
    date: "2023",
    heroImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&auto=format&fit=crop&q=80",
    overview: "Nature Co. needed a complete brand overhaul to better connect with environmentally conscious consumers and stand out in a crowded marketplace. The rebrand included a new visual identity, packaging design, and digital presence that emphasized their commitment to sustainability.",
    challenge: "The brand needed to modernize while maintaining recognition with existing customers. They also needed to communicate their eco-friendly practices more effectively through their visual identity.",
    solution: "We developed a fresh, modern visual system with natural colors and organic shapes, created sustainable packaging solutions, and designed a digital strategy that highlighted their environmental initiatives.",
    results: [
      "43% increase in brand recognition in target demographic",
      "28% sales increase in first quarter after rebrand",
      "67% improvement in social media engagement",
      "Reduced packaging waste by 35%"
    ],
    testimonial: {
      quote: "The rebrand perfectly captured our values and has completely transformed how customers perceive our products. We've seen tremendous growth since implementation.",
      author: "Sarah Johnson",
      position: "Marketing Director, Nature Co."
    },
    process: [
      {
        title: "Discovery",
        description: "We conducted extensive market research, competitor analysis, and stakeholder interviews to understand the brand's current perception and future goals."
      },
      {
        title: "Strategy",
        description: "Based on our findings, we developed a comprehensive brand strategy that aligned with Nature Co.'s values and resonated with their target audience."
      },
      {
        title: "Design",
        description: "Our design team created a visual system that incorporated sustainable elements and natural motifs while maintaining a clean, modern aesthetic."
      },
      {
        title: "Implementation",
        description: "We rolled out the new brand identity across all touchpoints, from packaging and retail displays to website and social media."
      }
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1586856583783-8e8d4e89f80f?w=800&auto=format&fit=crop&q=80",
        caption: "New packaging design featuring recycled materials"
      },
      {
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop&q=80", 
        caption: "Updated brand book and guidelines"
      },
      {
        image: "https://images.unsplash.com/photo-1611244419377-b0a760c19944?w=800&auto=format&fit=crop&q=80",
        caption: "In-store display with new branding"
      }
    ],
    nextProject: "tech-summit-campaign",
  },
  {
    id: "tech-summit-campaign",
    title: "Tech Summit Campaign",
    subtitle: "Digital marketing strategy for annual tech conference",
    client: "Tech Summit Inc.",
    category: "digital",
    date: "2022",
    heroImage: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&auto=format&fit=crop&q=80",
    overview: "Tech Summit needed a comprehensive digital marketing campaign to increase attendance at their annual conference by 25% and establish it as the premier tech event in the region.",
    challenge: "Previous campaigns had low engagement rates and struggled to convert interest into registrations. The event also faced increased competition from similar conferences.",
    solution: "We created a multi-channel digital campaign with personalized content streams for different audience segments, interactive elements, and strategic paid media placements.",
    results: [
      "38% increase in event registrations compared to previous year",
      "52% higher engagement rate across all digital channels",
      "2.6M impressions, exceeding goal by 30%",
      "27% lower cost-per-acquisition than previous campaigns"
    ],
    testimonial: {
      quote: "This campaign transformed our event's digital presence and delivered quantifiable results. The strategic approach to audience targeting was particularly effective.",
      author: "Michael Chen",
      position: "Event Director, Tech Summit Inc."
    },
    process: [
      {
        title: "Audience Analysis",
        description: "We identified key audience segments and developed detailed personas to guide our messaging strategy."
      },
      {
        title: "Campaign Development",
        description: "Our team created a comprehensive campaign structure with targeted messaging for each audience segment."
      },
      {
        title: "Creative Execution",
        description: "We developed engaging creative assets that highlighted key speakers, topics, and event experiences."
      },
      {
        title: "Optimization",
        description: "Throughout the campaign, we continuously analyzed performance and optimized for the highest converting channels."
      }
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1529798856831-427dfd0a1ab1?w=800&auto=format&fit=crop&q=80",
        caption: "Campaign landing page design"
      },
      {
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=80",
        caption: "Social media creative examples"
      },
      {
        image: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?w=800&auto=format&fit=crop&q=80",
        caption: "Email marketing sequence"
      }
    ],
    nextProject: "wellness-app-launch",
  }
];

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const [caseStudy, setCaseStudy] = useState<CaseStudyType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    const study = caseStudies.find(study => study.id === id);
    setCaseStudy(study || null);
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-marketing-600"></div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
        <p className="mb-6">Sorry, the case study you're looking for doesn't exist.</p>
        <Button asChild>
          <a href="/#portfolio">Back to Portfolio</a>
        </Button>
      </div>
    );
  }

  const { 
    title, subtitle, client, category, date, heroImage, 
    overview, challenge, solution, results, 
    testimonial, process, gallery, nextProject 
  } = caseStudy;

  const nextCase = nextProject ? caseStudies.find(study => study.id === nextProject) : undefined;

  const shareCase = () => {
    if (navigator.share) {
      navigator.share({
        title: `Case Study: ${title}`,
        text: `Check out this case study: ${title}`,
        url: window.location.href
      }).catch(err => console.log('Error sharing:', err));
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      
      <main className="pt-16">
        {/* Hero section */}
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
        
        {/* Project info */}
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
                  onClick={shareCase}
                  className="mt-1 inline-flex items-center text-marketing-600 hover:text-marketing-800 transition-colors"
                >
                  <Share2 size={18} className="mr-1" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview section */}
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
        
        {/* Results & Process */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="results" className="w-full">
              <TabsList className="grid w-full md:w-[400px] grid-cols-2 mb-12">
                <TabsTrigger value="results">Results</TabsTrigger>
                <TabsTrigger value="process">Process</TabsTrigger>
              </TabsList>

              <TabsContent value="results" className="animate-fade-in">
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
              </TabsContent>

              <TabsContent value="process" className="animate-fade-in">
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
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Gallery */}
        {gallery && gallery.length > 0 && (
          <section className="py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-12 text-center">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {gallery.map((item, index) => (
                  <div key={index} className="group overflow-hidden rounded-lg shadow-md">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.caption}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4 bg-white">
                      <p className="text-gray-600">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Next project CTA */}
        {nextCase && (
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
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudy;
