import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import BestSeller from "@/components/BestSeller";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black selection:bg-amber-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <BestSeller />
      <Menu />
      <Testimonials />
      <Location />
      <Footer />
    </main>
  );
}
