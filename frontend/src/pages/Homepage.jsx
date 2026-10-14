import About from "../components/about/About";
import Objectives from "../components/about/Objectives";
import Agency from "../components/agency/Agency";
import Blog from "../components/blog/Blog";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import Projects from "../components/projects/Projects";
import Services from "../components/services/Services";
import ClientTestimonial from "../components/testimonial/ClientTestimonials";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Objectives />
      <Services />
      <Projects />
      <ClientTestimonial />
      <Blog />
      <Agency />
      <Footer />
    </>
  );
}

export default HomePage;
