import "./NavBar.css";
import { links } from "../../pages/App/data.js";

const NavBar = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 65,
    });
  };

  const logoClick = (e) => {
    window.scrollTo({
      left: 0,
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  return (
    <nav className="navbar sticky">
      <img
        src="https://bestoverheaddoorssc.com/wp-content/uploads/2020/01/47-471311_our-logo-google-g-logo-png-white.png"
        className="logo"
        onClick={logoClick}
        alt="logo"
      ></img>
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
