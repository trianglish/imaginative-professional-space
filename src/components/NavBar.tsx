import {useState} from "react";
import {Menu, X} from "lucide-react";
import {cn} from "@/lib/utils";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/" className="text-xl font-bold text-marketing-600">
              <span className="sr-only">Betsy Ng</span>
              Betsy<span className="text-marketing-500">Ng</span>
            </a>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <nav className="hidden md:flex space-x-10">
            <a
              href="/#about"
              className="link-underline text-gray-700 hover:text-marketing-600"
            >
              About
            </a>
            <a
              href="/#services"
              className="link-underline text-gray-700 hover:text-marketing-600"
            >
              Services
            </a>
            <a
              href="/#portfolio"
              className="link-underline text-gray-700 hover:text-marketing-600"
            >
              Portfolio
            </a>
            <a
              href="/#testimonials"
              className="link-underline text-gray-700 hover:text-marketing-600"
            >
              Testimonials
            </a>
          </nav>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="/#contact" className="btn-primary">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on mobile menu state */}
      <div
        className={cn(
          "absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",
          {
            "opacity-100 scale-100": isMenuOpen,
            "opacity-0 scale-95 pointer-events-none": !isMenuOpen,
          }
        )}
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xl font-bold text-marketing-600">
                  Betsy<span className="text-marketing-500">Ng</span>
                </span>
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                  onClick={toggleMenu}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <a
                  href="/#about"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    About
                  </span>
                </a>
                <a
                  href="/#services"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Services
                  </span>
                </a>
                <a
                  href="/#portfolio"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Portfolio
                  </span>
                </a>
                <a
                  href="/#testimonials"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Testimonials
                  </span>
                </a>
                <a
                  href="/#contact"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  onClick={toggleMenu}
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Contact
                  </span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
