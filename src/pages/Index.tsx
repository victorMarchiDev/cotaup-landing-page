import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { StepsSection } from "@/components/sections/StepsSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { ComparisonSection } from "@/components/sections/ComparisonSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SegmentsSection } from "@/components/sections/SegmentsSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StepsSection />
        <DifferentialsSection />
        <ComparisonSection />
        <TestimonialsSection />
        <SegmentsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
