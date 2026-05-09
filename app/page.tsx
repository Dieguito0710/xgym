import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import WhyXGym from "@/components/WhyXGym";
import Clubs from "@/components/Clubs";
import Metrics from "@/components/Metrics";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

function Rule() {
  return (
    <div className="max-w-[1400px] mx-auto px-8 md:px-16">
      <div className="divider-h" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Navbar />
      <Hero />
      <Rule />
      <Benefits />
      <Rule />
      <WhyXGym />
      <Clubs />
      <Rule />
      <Gallery />
      <Rule />
      <Metrics />
      <Testimonials />
      <Rule />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}
