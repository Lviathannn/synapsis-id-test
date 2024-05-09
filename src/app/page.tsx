import HeroSection from "@/components/sections/home/HeroSection";
import LatestPostSection from "@/components/sections/home/LatestPostSection";

export default function Home() {
  return (
    <main className="container py-20">
      <HeroSection />
      <LatestPostSection />
    </main>
  );
}
