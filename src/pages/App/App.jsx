import "./App.css";
import NavBar from "../../components/navbar/NavBar";
import Projects from "../ProjectsPage/ProjectsPage";
import ContactPage from "../ContactPage/ContactPage";
import HomePage from "../HomePage/HomePage";
import PhotographyPage from "../PhotographyPage/PhotographyPage";

export default function App() {
  return (
    <main id="about">
      <NavBar />
      <section className="about">
        <HomePage />
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
        <h6>Last Updated: October 5th, 2023</h6>
      </section>
    </main>
  );
}
