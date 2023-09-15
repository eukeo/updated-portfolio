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
    console.log(location);
  };

  return (
    <nav className="navbar sticky">
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
