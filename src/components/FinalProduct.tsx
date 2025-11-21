import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Shield, Clock, CheckCircle } from "lucide-react";

const FinalProduct = () => {
  const features = [
    { icon: Sparkles, text: "100% Natural & Herbal" },
    { icon: Shield, text: "Antimicrobial Protection" },
    { icon: CheckCircle, text: "Safe for Daily Use" },
    { icon: Clock, text: "12-Month Shelf Life" },
  ];

  const benefits = [
    "Prevents cavities and tooth decay",
    "Reduces plaque and tartar buildup",
    "Freshens breath naturally",
    "Gentle on sensitive teeth and gums",
    "Free from harmful chemicals",
    "Environmentally friendly formulation",
  ];

  return (
    <section id="product" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Final Product
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="p-8 animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              Product Features
            </h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">Specifications:</h4>
              <ul className="text-sm text-foreground/70 space-y-1">
                <li>• pH: 7.2 (Neutral)</li>
                <li>• Consistency: Smooth paste</li>
                <li>• Color: Light green</li>
                <li>• Storage: Cool, dry place</li>
              </ul>
            </div>
          </Card>

          <Card className="p-8 animate-fade-in animate-delay-100">
            <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-primary" />
              Key Benefits
            </h3>
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-foreground/80">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                Clinically Tested
              </Badge>
              <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                Eco-Friendly
              </Badge>
              <Badge className="bg-accent/10 text-primary hover:bg-accent/20">
                Chemical-Free
              </Badge>
            </div>
          </Card>
        </div>

        <Card className="max-w-5xl mx-auto mt-8 p-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 animate-fade-in animate-delay-200">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Research Conclusion
          </h3>
          <p className="text-foreground/80 leading-relaxed">
            The formulated herbal toothpaste successfully combines traditional herbal
            wisdom with modern pharmaceutical standards. All ingredients work
            synergistically to provide comprehensive oral care while maintaining
            safety and efficacy. The product offers a sustainable, natural alternative
            to conventional toothpastes without compromising on performance.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default FinalProduct;
