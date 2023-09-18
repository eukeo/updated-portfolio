import "./App.css";
import NavBar from "../../components/navbar/NavBar";
import IntroPage from "../IntroPage/IntroPage";
import Projects from "../ProjectsPage/ProjectsPage";
import ContactPage from "../ContactPage/ContactPage";
import HomePage from "../HomePage/HomePage";
import PhotographyPage from "../PhotographyPage/PhotographyPage";

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
      <section className="photography" id="photography">
        <PhotographyPage />
      </section>
      <section className="contact" id="contact">
        <ContactPage />
      </section>
      <section className="rest">
        <h6>Last Updated: September 18th, 2023</h6>
      </section>
    </main>
  );
}
