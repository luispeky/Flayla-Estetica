import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import About from "@/components/About";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <Services />
        <About />
        <Products />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
