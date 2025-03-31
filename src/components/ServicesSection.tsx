
import { BriefcaseIcon, BarChartIcon, PenToolIcon, MessageSquareIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: <BriefcaseIcon className="h-8 w-8 text-marketing-500" />,
    title: "Strategy Development",
    description: "Creating comprehensive marketing strategies tailored to your business goals and target audience."
  },
  {
    icon: <PenToolIcon className="h-8 w-8 text-marketing-500" />,
    title: "Content Creation",
    description: "Crafting compelling content that resonates with your audience and drives engagement."
  },
  {
    icon: <BarChartIcon className="h-8 w-8 text-marketing-500" />,
    title: "Performance Analysis",
    description: "Analyzing campaign performance and providing actionable insights to optimize results."
  },
  {
    icon: <MessageSquareIcon className="h-8 w-8 text-marketing-500" />,
    title: "Social Media Management",
    description: "Building your brand presence across social platforms and engaging with your community."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <div className="w-20 h-1 bg-marketing-500 mx-auto mb-6 rounded"></div>
          <p className="text-gray-600">
            I offer a range of marketing services designed to help your business grow. 
            Each service is customized to meet your specific needs and goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-none shadow-md">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="bg-marketing-50 p-4 rounded-full mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-marketing-50 rounded-2xl p-8 shadow-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Custom Solutions</h3>
              <p className="text-gray-600 mb-4">
                Need something specific? I also create custom marketing solutions 
                tailored to your unique business challenges.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-marketing-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">Brand identity development</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-marketing-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">Market research & competitor analysis</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-marketing-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">Email marketing campaigns</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-marketing-500 rounded-full mr-2"></div>
                  <span className="text-gray-700">Digital advertising management</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-marketing-200 rounded-full opacity-50 blur"></div>
                <div className="relative bg-white rounded-full p-6">
                  <div className="text-4xl font-bold text-marketing-600">98%</div>
                  <div className="text-gray-600">Client satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
