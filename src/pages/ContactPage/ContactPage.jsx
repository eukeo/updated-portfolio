import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactPage.css";
import Aos from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  const [emailModal, setEmailModal] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const form = useRef();

  const closeModal = () => {
    setEmailModal(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lp32fcc",
        "template_bi2r8vm",
        form.current,
        "sZLn3BZyvomot5Sr-"
      )
      .then(
        (result) => {
          setEmailModal(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactContainer" onClick={closeModal}>
      <section className="contactInfo" data-aos="fade-down">
        <h3 className="info">Personal Links</h3>
        <img
          src="https://i.imgur.com/355Ldfm.jpeg"
          className="profilePicture"
        ></img>
        <div className="links">
          <a href="https://www.linkedin.com/in/gabrielgomez-" target="_blank">
            <img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"></img>
          </a>
          <a href="https://www.instagram.com/eukeo" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png"></img>
          </a>
          <a href="https://github.com/eukeo" target="_blank">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img>
          </a>
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vSG_u6o5FJqckN50az6h5NaaLIMKjy4y3JtolpViCDd7-WhNU0SJb_PZ6izUPxsoDIpr7C5DWty9Uto/pub"
            download="Gabriel-Gomez-Resume"
            target="_blank"
          >
            <img src="https://cdn-icons-png.flaticon.com/512/1250/1250696.png"></img>
          </a>
        </div>
      </section>
      <form ref={form} onSubmit={sendEmail} data-aos="fade-down">
        <h3>Contact</h3>
        <input type="text" name="user_name" placeholder="Name" required />
        <input type="email" name="user_email" placeholder="Email" required />
        <input type="number" name="user_number" placeholder="Phone Number" />
        <textarea name="message" placeholder="Message" required />
        <input type="submit" value="Send" id="formButton" />
      </form>
      {emailModal && (
        <div className="modal" data-aos="zoom-out">
          <div className="modalContent">
            <h1 onClick={(e) => e.stopPropagation()}>Message sent!</h1>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/1200px-Eo_circle_green_checkmark.svg.png"
              className="checkMark"
            ></img>
            <h5>
              Please allow roughly 24 hours for Gabriel to respond to your
              email. Thank you and have a wonderful day!
            </h5>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
