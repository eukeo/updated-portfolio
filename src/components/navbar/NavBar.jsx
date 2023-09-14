import "./NavBar.css";
import { links } from "../../pages/App/data.js";
import { useState } from "react";

const NavBar = () => {
  //
  const [changeScene, setChangeScene] = useState("lightMode");
  //
  function toggleSceneBtn() {
    if (changeScene === "lightMode") {
      setChangeScene("darkMode");
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "white";
    } else {
      setChangeScene("lightMode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 5,
    });
    console.log(location);
  };

  return (
    <nav className="navbar sticky">
      <a id="changeSceneBtn" onClick={toggleSceneBtn} />
      <div>
        {links.map((link) => {
          return (
            <a href={link.url} key={link.id} onClick={handleClick}>
              {link.text}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
