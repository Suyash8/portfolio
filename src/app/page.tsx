import ContactSection from "@/app/_components/contact-section";
import HeroSection from "@/app/_components/hero-section";
import ServicesSection from "@/app/_components/services-section";
import SkillsSection from "@/app/_components/skills-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
