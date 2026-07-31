import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";
import ScrollIndicator from "./ScrollIndicator";

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07090F]">
      {/* Animated Background */}
      <HeroBackground />

      {/* Hero Content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-20 px-6 pt-28 pb-16 lg:flex-row">
        <HeroContent />

        <HeroStats />
      </div>

      {/* Scroll */}
      {/*<ScrollIndicator /> */}
    </section>
  );
}

export default HeroSection;