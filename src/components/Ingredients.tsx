import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

const Ingredients = () => {
  const ingredients = [
    {
      name: "Neem",
      benefits: "Antibacterial properties, prevents plaque and gum diseases",
      color: "from-green-100 to-green-50",
    },
    {
      name: "Clove",
      benefits: "Natural analgesic, relieves toothache and freshens breath",
      color: "from-amber-100 to-amber-50",
    },
    {
      name: "Mint",
      benefits: "Cooling sensation, antibacterial, and breath freshening",
      color: "from-emerald-100 to-emerald-50",
    },
    {
      name: "Turmeric",
      benefits: "Anti-inflammatory, teeth whitening, and antimicrobial",
      color: "from-yellow-100 to-yellow-50",
    },
    {
      name: "Salt",
      benefits: "Natural cleanser, strengthens gums and prevents decay",
      color: "from-slate-100 to-slate-50",
    },
    {
      name: "Baking Soda",
      benefits: "Mild abrasive, whitening agent, neutralizes acids",
      color: "from-blue-100 to-blue-50",
    },
    {
      name: "Aloe Vera",
      benefits: "Soothes gums, healing properties, anti-inflammatory",
      color: "from-teal-100 to-teal-50",
    },
  ];

  return (
    <section id="ingredients" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Natural Ingredients
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Each ingredient is carefully selected for its unique therapeutic
            properties and traditional medicinal value
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {ingredients.map((ingredient, index) => (
            <Card
              key={index}
              className={`p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in bg-gradient-to-br ${ingredient.color}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {ingredient.name}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {ingredient.benefits}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
