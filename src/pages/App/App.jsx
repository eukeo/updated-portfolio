import "./App.css";
import NavBar from "../../components/navbar/NavBar";
import IntroPage from "../IntroPage/IntroPage";
import Projects from "../ProjectsPage/ProjectsPage";
import ContactPage from "../ContactPage/ContactPage";
import HomePage from "../HomePage/HomePage";

export default function App() {
  return (
    <main id="home">
      <NavBar />
      <section className="home">
        <HomePage />
      </section>
      <section className="intro" id="intro">
        <IntroPage />
      </section>
      <section className="projects" id="projects">
        <Projects />
      </section>
      <section className="contact" id="contact">
        <ContactPage />
      </section>
      <section className="rest"></section>
    </main>
  );
}
