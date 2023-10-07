import { useEffect } from "react";
import "./HomePage.css";
import Aos from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="homeContainer">
      <h1 className="myName" data-aos="zoom-in">
        HELLO, I'M GABRIEL GOMEZ
      </h1>
      <section className="homePageText" data-aos="fade-up">
        {/* <h1>About Me</h1> */}
        <h4>
          I'm Gabriel Gomez, a 29-year-old Front-End Developer based in Los
          Angeles, California. My journey into technology and Front-End
          Development began with a deep-rooted passion for art. After exploring
          diverse career paths, I pursued a comprehensive education at General
          Assembly—a rigorous three-month program that not only posed challenges
          but also reinforced my commitment to crafting exceptional user
          experiences.
        </h4>
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vSG_u6o5FJqckN50az6h5NaaLIMKjy4y3JtolpViCDd7-WhNU0SJb_PZ6izUPxsoDIpr7C5DWty9Uto/pub"
          className="resumeLink"
          target="_blank"
        >
          View Resume
        </a>
      </section>
    </div>
  );
};

export default HomePage;
