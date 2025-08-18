import { CTA } from "@/components/CTA";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero"; // Make sure src/components/Hero.tsx exists
import { Methodo } from "@/components/Methodo";
import { Navigation } from "@/components/Navigation";
import { Testimonials } from "@/components/Testimonials";

const Index = () => {
  console.log("Index component is rendering"); // 👈 vérifie qu'il s'affiche

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
    {/*   <Welcomevideo /> */}
<div
        aria-hidden
        className="w-full"
        style={{ height: "50pt" }}
      />
      <Hero />
            <Methodo />

      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Index;
