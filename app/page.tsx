import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import CaseStudies from "@/components/CaseStudies";
import Team from "@/components/Team";
import FutureProducts from "@/components/FutureProducts";
import IdealClients from "@/components/IdealClients";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Services />
        <WhyUs />
        <Process />
        <CaseStudies />
        <Team />
        <FutureProducts />
        <IdealClients />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}