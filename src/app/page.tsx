import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { LoyaltySection } from "@/components/home/LoyaltySection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      <AboutSection />
      <BeforeAfterSection />
      <ServicesSection />
      <LoyaltySection />
      <Footer />
    </main>
  );
}
