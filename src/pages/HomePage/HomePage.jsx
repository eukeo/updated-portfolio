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
      <img src="https://i.imgur.com/6C8V6aB.png" className="myName"></img>
    </div>
  );
};

export default HomePage;
