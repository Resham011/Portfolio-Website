import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className=" bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Projects />
      <TechStack />
      <ContactForm />
    </div>
  );
}

export default App;