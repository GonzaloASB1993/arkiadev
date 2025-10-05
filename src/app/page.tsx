import { HeroSection } from "@/components/sections/HeroSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <CaseStudiesSection />
    </>
  );
}
