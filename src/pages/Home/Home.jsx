import HeroSection from "./sections/HeroSection";
import StatsSection from "./sections/StatsSection";
import AnnouncementSection from "./sections/AnnouncementSection";
import FeaturedMechs from "./sections/FeaturedMechs";
import UpcomingEvents from "./sections/UpcomingEvents";
import CommunityCTA from "./sections/CommunityCTA";

function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AnnouncementSection />
      <FeaturedMechs />
      <UpcomingEvents />
      <CommunityCTA />
    </>
  );
}

export default Home;