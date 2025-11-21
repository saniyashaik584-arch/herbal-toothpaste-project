import { Card } from "@/components/ui/card";
import { Leaf, Heart, Shield } from "lucide-react";

const Introduction = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "Natural Ingredients",
      description: "Free from synthetic chemicals and artificial additives",
    },
    {
      icon: Heart,
      title: "Gentle Care",
      description: "Safe for sensitive gums and teeth, suitable for all ages",
    },
    {
      icon: Shield,
      title: "Effective Protection",
      description: "Antimicrobial properties for comprehensive oral health",
    },
  ];

  return (
    <section id="introduction" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Introduction
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="prose prose-lg max-w-none mb-12 animate-fade-in animate-delay-100">
            <Card className="p-8 bg-card shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                What is Herbal Toothpaste?
              </h3>
              <p className="text-foreground/80 mb-4">
                Herbal toothpaste is a natural oral care formulation made from
                plant-based ingredients, herbs, and natural minerals. Unlike
                conventional toothpastes that rely on synthetic chemicals, herbal
                toothpastes harness the therapeutic properties of nature to
                maintain oral hygiene.
              </p>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                The Need for Herbal Formulations
              </h3>
              <p className="text-foreground/80">
                With growing awareness about the harmful effects of synthetic
                chemicals and increasing preference for sustainable products,
                herbal toothpastes offer a safe, effective, and environmentally
                friendly alternative for oral care. They combine traditional
                wisdom with modern scientific validation to provide comprehensive
                dental protection.
              </p>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6 animate-fade-in animate-delay-200">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h4>
                <p className="text-foreground/70">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
