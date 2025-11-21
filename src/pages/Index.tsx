import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import Ingredients from "@/components/Ingredients";
import Methodology from "@/components/Methodology";
import Evaluation from "@/components/Evaluation";
import FinalProduct from "@/components/FinalProduct";
import Team from "@/components/Team";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Introduction />
      <Ingredients />
      <Methodology />
      <Evaluation />
      <FinalProduct />
      <Team />
    </div>
  );
};

export default Index;
