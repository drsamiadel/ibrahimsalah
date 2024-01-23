import ClickToAction from "./_components/click-to-action";
import Footer from "./_components/footer";
import HeaderSection from "./_components/header-section";
import HeroSection from "./_components/hero-section";
import SkillsSection from "./_components/skills-section";
import SocialMediaSection from "./_components/social-media-section";
import VideoSection from "./_components/video-section";

export default function Home() {
  return (
    <div>
      <HeaderSection />
      <HeroSection />
      <SocialMediaSection />
      <div className="h-1 border-t-2 border-dashed border-gray-100/20 my-8 md:my-28" />
      <SkillsSection />
      <VideoSection />
      <Footer />
    </div>
  );
}
