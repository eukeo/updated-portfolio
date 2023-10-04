import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactPage.css";
import Aos from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const form = useRef();

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
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contactContainer">
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
      <form ref={form} onSubmit={sendEmail}>
        <h3>Contact</h3>
        <input type="text" name="user_name" placeholder="Name" required />
        <input type="email" name="user_email" placeholder="Email" required />
        <input type="number" name="user_number" placeholder="Phone Number" />
        <textarea name="message" placeholder="Message" required />
        <input type="submit" value="Send" id="formButton" />
      </form>
    </div>
  );
};

export default ContactPage;
