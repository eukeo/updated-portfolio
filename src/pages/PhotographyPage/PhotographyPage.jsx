import { useEffect, useState } from "react";
import "./PhotographyPage.css";
import Aos from "aos";
import "aos/dist/aos.css";

const PhotographyPage = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
    console.log("opened");
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
    console.log("closed");
  };

  return (
    <div className="photography">
      <div className="topSection">
        <div className="leftContainer">
          <img
            data-aos="zoom-in"
            src="https://i.imgur.com/cXhoOoB.jpeg"
            onClick={() => openModal("https://i.imgur.com/cXhoOoB.jpeg")}
          ></img>
        </div>
        <div className="rightContainer">
          <div className="imageContainer">
            <img
              data-aos="zoom-in"
              src="https://i.imgur.com/1infr3S.jpeg"
              onClick={() => openModal("https://i.imgur.com/1infr3S.jpeg")}
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
              src="https://i.imgur.com/KFLy88o.jpeg"
            ></img>
          </div>
        </div>
      </div>
      <div className="bottomSection">
        <div className="leftContainer-2">
          <div className="imageContainer">
            <img
              data-aos="zoom-in"
              src="https://i.imgur.com/xh8cZ0L.jpeg"
            ></img>
            <img
              data-aos="zoom-in"
              src="https://i.imgur.com/cMAuoRX.jpeg"
            ></img>
            <img
              data-aos="zoom-in"
              src="https://i.imgur.com/pRWTFpW.jpeg"
            ></img>
            <img
              data-aos="zoom-in"
              src="https://i.imgur.com/RLq9qW6.jpeg"
            ></img>
          </div>
        </div>
        <div className="rightContainer-2">
          <img data-aos="zoom-in" src="https://i.imgur.com/VGhEAus.jpeg"></img>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img
              src={selectedImage}
              alt="Selected Image"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotographyPage;
