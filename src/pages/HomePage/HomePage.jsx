import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homeContainer">
      <h1>Gabriel Gomez</h1>
      <img
        src="https://avatars.githubusercontent.com/u/99705240?v=4"
        className="profilePicture"
      ></img>
      <h5>Front-End Developer</h5>
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
