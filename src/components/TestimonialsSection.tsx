
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    content: "Betsy transformed our marketing strategy completely. Our online engagement increased by 200% within just three months of implementing her recommendations.",
    author: "Sarah Johnson",
    position: "Marketing Director, TechNova",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    content: "Working with Betsy was a game-changer for our brand. Her creative approach to our social media strategy helped us reach a new demographic we had struggled to connect with.",
    author: "David Chen",
    position: "CEO, GreenLife Products",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    content: "Betsy's understanding of digital marketing trends and ability to adapt strategies accordingly is unmatched. She's become an invaluable extension of our marketing team.",
    author: "Michael Brown",
    position: "Brand Manager, Urban Style",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    content: "The content strategy Betsy developed for us has dramatically improved our conversion rates. She truly understands how to create content that resonates with the target audience.",
    author: "Emma Wilson",
    position: "COO, Wellness Hub",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-20 h-1 bg-marketing-500 mx-auto mb-6 rounded"></div>
          <p className="text-gray-600">
            Don't just take my word for it. Here's what my clients have to say about 
            working with me.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <Card className="border-none shadow-lg bg-white">
            <CardContent className="p-8 md:p-12">
              <div className="text-marketing-500 mb-6">
                <Quote size={48} />
              </div>
              
              <p className="text-xl text-gray-700 italic mb-8">
                {testimonials[activeIndex].content}
              </p>
              
              <div className="flex items-center">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].author}
                  className="w-14 h-14 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonials[activeIndex].author}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonials[activeIndex].position}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? "bg-marketing-500" : "bg-gray-300"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
          
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 bg-white rounded-full p-2 shadow hover:shadow-md transition-shadow"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8 bg-white rounded-full p-2 shadow hover:shadow-md transition-shadow"
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
