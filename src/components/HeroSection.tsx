
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 pt-16">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Turning <span className="text-gradient">Ideas</span> Into <br />
              Impactful <span className="text-gradient">Marketing</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Hi, I'm Betsy Ng. I help brands connect with their audience through 
              strategic marketing that drives results and creates meaningful experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="btn-primary"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Let's Connect
              </Button>
              <Button
                variant="outline"
                className="btn-outline"
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </Button>
            </div>
          </div>

          <div className="relative lg:h-[500px] animate-fade-in">
            <div className="absolute top-0 right-0 w-64 h-64 bg-marketing-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-32 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-32 right-16 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="bg-white p-5 rounded-2xl shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Betsy working"
                  className="rounded-xl object-cover w-full max-w-md h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-gray-400 hover:text-marketing-500 transition-colors duration-300"
          >
            <ChevronDown size={30} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
