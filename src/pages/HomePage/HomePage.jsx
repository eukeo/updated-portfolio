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
      <div className="myName">
        <h1 className="first" data-aos="fade-right">
          Gabriel
        </h1>
        <h1 className="last" data-aos="fade-left">
          Gomez
        </h1>
      </div>
      {/* <img
        src="https://i.imgur.com/p4USbTp.jpeg"
        className="profilePicture"
      ></img> */}
      {/* <a
        href="https://docs.google.com/document/d/e/2PACX-1vSG_u6o5FJqckN50az6h5NaaLIMKjy4y3JtolpViCDd7-WhNU0SJb_PZ6izUPxsoDIpr7C5DWty9Uto/pub"
        download="Gabriel-Gomez-Resume"
        target="_blank"
        className="resumeLink"
      >
        Resume
      </a> */}
    </div>
  );
};

export default HomePage;
