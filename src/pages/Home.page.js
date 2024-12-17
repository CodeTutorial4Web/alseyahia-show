import Navbar from "../components/navbars/Navbar";
import AboutSection from "../components/homepage/AboutSection";
import BlogSection from "../components/homepage/BlogSection";
import HeroSection from "../components/homepage/HeroSection";
import AdvantagesSection from "../components/homepage/AdvantagesSection";
import PartnersInvestorsSection from "../components/homepage/PartnersInvestorsSection";
import Footer from "../components/general/Footer";

export default function HomePage() {

  return (

    <main className="homepage">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AdvantagesSection />
      <PartnersInvestorsSection />
      <BlogSection />

      <Footer />
    </main >


  );
}
