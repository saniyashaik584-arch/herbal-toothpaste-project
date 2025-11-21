import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-primary" />
            <span className="font-display text-xl font-semibold text-foreground">
              Herbal Toothpaste
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {["home", "introduction", "ingredients", "methodology", "evaluation", "product", "team"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors capitalize"
                >
                  {section}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
