import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contactContainer">
      <section className="contactInfo">
        <h3 className="linkTitle">Personal Links</h3>
        <img
          src="https://avatars.githubusercontent.com/u/99705240?v=4"
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
      <form>
        <h3>Contact</h3>
        <input type="text" id="name" placeholder="Your Name" required></input>
        <input type="email" id="email" placeholder="Email" required></input>
        <input
          type="text"
          id="phone"
          placeholder="Phone Number"
          required
        ></input>
        <textarea
          id="message"
          rows="5"
          placeholder="How can I help you?"
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;
