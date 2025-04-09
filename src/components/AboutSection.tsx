
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-marketing-50 rounded-xl transform rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Betsy working"
                className="rounded-xl shadow-lg z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="font-semibold text-gray-800">
                  10+ Years Experience
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  About Me
                </h2>
                <div className="w-20 h-1 bg-marketing-500 rounded"></div>
              </div>

              <p className="text-gray-600">
                I'm a strategic marketing professional with over 10 years of
                experience helping brands define their voice and connect with
                their audience.
              </p>

              <p className="text-gray-600">
                After graduating with a degree in Marketing from the University of
                the West of England, I worked with several major UK brands
                before starting my own marketing consultancy. I specialize in
                digital strategy, content creation, and campaign optimization
                that drives real business results.
              </p>

              <p className="text-gray-600">
                When I'm not crafting marketing strategies, you can find me
                exploring new places, trying new food, or mentoring
                young marketers.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Education
                  </h3>
                  <ul className="space-y-2">
                    <li className="text-gray-600">BA(Hons) Business Marketing</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Certifications
                  </h3>
                  <ul className="space-y-2">
                    <li className="text-gray-600">Google Analytics</li>
                    <li className="text-gray-600">HubSpot Inbound Marketing</li>
                    <li className="text-gray-600">Facebook Blueprint</li>
                  </ul>
                </div>
              </div>

              <Button className="btn-primary mt-6">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
