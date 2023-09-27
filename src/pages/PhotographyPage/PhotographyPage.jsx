import { useEffect } from "react";
import "./PhotographyPage.css";
import Aos from "aos";
import "aos/dist/aos.css";

const PhotographyPage = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <div className="photography">
      <div className="topSection">
        <div className="leftContainer">
          <img data-aos="zoom-in" src="https://i.imgur.com/VGhEAus.jpeg"></img>
        </div>
        <div className="rightContainer">
          <div className="imageContainer">
            <img
              data-aos="zoom-in"
              src="https://i.imgur.com/1infr3S.jpeg"
            ></img>
            <img
              data-aos="zoom-in"
              src="https://i.imgur.com/V01P9lR.jpeg"
            ></img>
            <img
              data-aos="zoom-in"
              src="https://i.imgur.com/RCuh3FM.jpeg"
            ></img>
            <img
              data-aos="zoom-in"
              src="https://i.imgur.com/pRWTFpW.jpeg"
            ></img>
          </div>
        </div>
      </div>
      <img data-aos="zoom-in" src="https://i.imgur.com/xh8cZ0L.jpeg"></img>
      <img data-aos="zoom-in" src="https://i.imgur.com/cMAuoRX.jpeg"></img>
      <img data-aos="zoom-in" src="https://i.imgur.com/KFLy88o.jpeg"></img>
      <img data-aos="zoom-in" src="https://i.imgur.com/RLq9qW6.jpeg"></img>
    </div>
  );
};

export default PhotographyPage;
