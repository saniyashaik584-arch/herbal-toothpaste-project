import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Methodology = () => {
  const steps = [
    {
      title: "Ingredient Selection",
      description:
        "Carefully selected herbs based on traditional knowledge and scientific evidence for oral care benefits",
    },
    {
      title: "Drying & Powdering",
      description:
        "Herbs are dried under controlled conditions and ground into fine powder to preserve bioactive compounds",
    },
    {
      title: "Mixing & Blending",
      description:
        "Powdered ingredients are mixed in precise proportions using geometric dilution method for uniformity",
    },
    {
      title: "Adding Humectants",
      description:
        "Glycerin and natural binders are added to maintain moisture and improve texture",
    },
    {
      title: "Adjusting Consistency",
      description:
        "Water and natural thickeners are added gradually to achieve optimal paste consistency",
    },
    {
      title: "Quality Testing & Packing",
      description:
        "Final product undergoes quality checks before being packaged in suitable containers",
    },
  ];

  return (
    <section id="methodology" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Formulation Process
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A systematic approach to creating an effective herbal toothpaste
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <Card
                  key={index}
                  className="p-6 ml-0 md:ml-20 hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 relative">
                      <div className="absolute -left-[4.5rem] top-1 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white font-bold text-xl">
                        {index + 1}
                      </div>
                      <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        {step.title}
                      </h3>
                      <p className="text-foreground/70">{step.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
