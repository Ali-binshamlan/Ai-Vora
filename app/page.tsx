import AboutUs from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import ProjectCarousel from "./components/Projects";
import Services from "./components/Services";
import Solutions from "./components/Solutions";

export default function Home() {
  return (
    <div className=" min-h-screen items-center justify-center font-sans ">
      <div>
        <Hero />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Solutions />
      </div>
      <div>
        <ProjectCarousel />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}
