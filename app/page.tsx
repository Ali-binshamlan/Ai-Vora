import AboutUs from "./components/About";
import AivoraVideoSection from "./components/AivoraVideoSection";
import Contact from "./components/Contact";
import FAQSection from "./components/FAQSection";
import Hero from "./components/Hero";
import ProjectCarousel from "./components/Projects";
import Services from "./components/Services";
import Solutions from "./components/Solutions";

export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center font-sans">
      {/* HERO */}
      <div id="hero">
        <Hero />
      </div>

      {/* ABOUT */}
      <div id="about">
        <AboutUs />
      </div>

      {/* VIDEO */}
      <div id="video">
        <AivoraVideoSection />
      </div>

      {/* SERVICES */}
      <div id="services">
        <Services />
      </div>

      {/* SOLUTIONS */}
      <div id="solutions">
        <Solutions />
      </div>

      {/* PROJECTS */}
      <div id="projects">
        <ProjectCarousel />
      </div>

      {/* FAQ */}
      <div id="faq">
        <FAQSection />
      </div>

      {/* CONTACT */}
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
