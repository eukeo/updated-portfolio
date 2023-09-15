import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contactContainer">
      <section className="contactInfo">
        <h4 id="info">Contact Information</h4>
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
        </div>
        <h4>Email: gabegomez419@gmail.com</h4>
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vSG_u6o5FJqckN50az6h5NaaLIMKjy4y3JtolpViCDd7-WhNU0SJb_PZ6izUPxsoDIpr7C5DWty9Uto/pub"
          download="Gabriel-Gomez-Resume"
          className="download-btn"
          target="_blank"
        >
          Resume
        </a>
      </section>
    </div>
  );
};

export default ContactPage;
