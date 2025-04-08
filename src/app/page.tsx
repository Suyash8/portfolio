import HeroSection from "@/app/_components/hero-section";
import SkillsSection from "@/app/_components/skills-section";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SkillsSection />
    </main>
  );
}
