
import { ChevronUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">
              Betsy<span className="text-marketing-400">Ng</span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Creative marketing professional helping brands connect with their
              audience through strategic, results-driven campaigns.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center text-gray-300 hover:text-marketing-400 transition-colors"
            >
              <ChevronUp size={20} className="mr-1" />
              <span>Back to top</span>
            </button>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-marketing-400 transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-marketing-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="text-gray-300 hover:text-marketing-400 transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-300 hover:text-marketing-400 transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-marketing-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">London, UK</li>
              <li>
                <a
                  href="mailto:hi@betsy.ng"
                  className="text-gray-300 hover:text-marketing-400 transition-colors"
                >
                  hi@betsy.ng
                </a>
              </li>
              {/* <li>
                <a
                  href="tel:+11234567890"
                  className="text-gray-300 hover:text-marketing-400 transition-colors"
                >
                  +1 (123) 456-7890
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Betsy Ng. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-marketing-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-marketing-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
