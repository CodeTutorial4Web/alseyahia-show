import Navbar from "../components/navbars/Navbar";
import AboutSection from "../components/homepage/AboutSection";
import BlogSection from "../components/homepage/BlogSection";
import HeroSection from "../components/homepage/HeroSection";
import JoinCommunity from "../components/homepage/JoinCommunity";
import LatestHonors from "../components/homepage/LatestHonors";
import { seo } from "../utitlities/seo";

export default function HomePage() {

  return (

    <main className="homepage">
              <Navbar />

             <HeroSection />
             <AboutSection />
             <LatestHonors />
             <BlogSection />
             <JoinCommunity />
    </main>


  );
}
