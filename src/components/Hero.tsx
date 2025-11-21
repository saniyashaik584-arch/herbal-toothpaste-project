import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-herbs.jpg";

const Hero = () => {
  const scrollToIntroduction = () => {
    const element = document.getElementById("introduction");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-background/95" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-tight">
            Formulation & Evaluation of
            <span className="block text-accent mt-2">Herbal Toothpaste</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            A comprehensive study on developing natural, eco-friendly oral care
            solutions using traditional herbal ingredients
          </p>
          <div className="flex gap-4 justify-center pt-6 animate-fade-in animate-delay-200">
            <Button
              size="lg"
              onClick={scrollToIntroduction}
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold"
            >
              Explore Project
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
