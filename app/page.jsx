
import BannerCarousel from "../components/BannerCarousel";
import StatsSection from "../components/StatsSection";

export default function Home() {
  return (
  <main className="min-h-screen mx-auto bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 backdrop-blur-xl">
      <BannerCarousel />
      <StatsSection />
    </main>
  );
}
