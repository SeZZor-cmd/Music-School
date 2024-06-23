import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Cards from "@/components/Cards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedSection/>
      <WhyChooseUs/>
      <Cards/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
