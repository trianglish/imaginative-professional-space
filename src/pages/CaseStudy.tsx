import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { CaseStudy as CaseStudyType } from "@/types/caseStudy";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import CaseStudyInfo from "@/components/case-study/CaseStudyInfo";
import CaseStudyOverview from "@/components/case-study/CaseStudyOverview";
import CaseStudyTabs from "@/components/case-study/CaseStudyTabs";
import CaseStudyGallery from "@/components/case-study/CaseStudyGallery";
import NextCaseStudyCta from "@/components/case-study/NextCaseStudyCta";
import Loading from "@/components/case-study/Loading";
import NotFound from "@/components/case-study/NotFound";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronRight, Share2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

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
    return <Loading />;
  }

  if (!caseStudy) {
    return <NotFound />;
  }

  const nextCase = caseStudy.nextProject 
    ? caseStudies.find(study => study.id === caseStudy.nextProject) 
    : undefined;

  const shareCase = () => {
    if (navigator.share) {
      navigator.share({
        title: `Case Study: ${caseStudy.title}`,
        text: `Check out this case study: ${caseStudy.title}`,
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
        <CaseStudyHero 
          heroImage={caseStudy.heroImage}
          category={caseStudy.category}
          title={caseStudy.title}
          subtitle={caseStudy.subtitle}
        />
        
        <CaseStudyInfo 
          client={caseStudy.client}
          category={caseStudy.category}
          date={caseStudy.date}
          onShare={shareCase}
        />

        <CaseStudyOverview 
          overview={caseStudy.overview}
          challenge={caseStudy.challenge}
          solution={caseStudy.solution}
        />
        
        <CaseStudyTabs 
          results={caseStudy.results}
          testimonial={caseStudy.testimonial}
          process={caseStudy.process}
        />
        
        <CaseStudyGallery gallery={caseStudy.gallery} />
        
        <NextCaseStudyCta nextCase={nextCase} />
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudy;
