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
      <img
        src="https://i.imgur.com/1NtZqiQ.png"
        className="myName"
        data-aos="fade-in"
      ></img>
    </div>
  );
};

export default HomePage;
