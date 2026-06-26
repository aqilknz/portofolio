import Layout from "./layouts/Layout";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </Layout>
  );
}

export default App;
