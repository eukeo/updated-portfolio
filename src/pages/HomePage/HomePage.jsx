import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homeContainer">
      <div className="myName">
        <h1 className="first">Gabriel</h1>
        <h1 className="last">Gomez</h1>
      </div>
      <h5>Front-End Developer</h5>
      {/* <img
        src="https://i.imgur.com/p4USbTp.jpeg"
        className="profilePicture"
      ></img> */}
      <a
        href="https://docs.google.com/document/d/e/2PACX-1vSG_u6o5FJqckN50az6h5NaaLIMKjy4y3JtolpViCDd7-WhNU0SJb_PZ6izUPxsoDIpr7C5DWty9Uto/pub"
        download="Gabriel-Gomez-Resume"
        target="_blank"
        className="resumeLink"
      >
        Resume
      </a>
    </div>
  );
};

export default HomePage;
