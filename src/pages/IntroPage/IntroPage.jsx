import "./IntroPage.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const IntroPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="aboutMe">
      <h1>About Me</h1>
      <h5 data-aos="zoom-in">
        Welcome, my name is Gabriel Gomez and I am a 29-year-old Front-End
        Developer living in Los Angeles, California. My passion for technology,
        specifically Front-End Development, was sparked at a young age through
        my interest and passion for art. After exploring various career paths, I
        decided to attend General Assembly to immerse myself in the field. The
        intensive three-month program presented numerous challenges, but also
        proved to be highly rewarding. My experience solidified my love for
        Front-End Development and my dedication to creating a seamless user
        experience.
      </h5>
    </div>
  );
};

export default IntroPage;
