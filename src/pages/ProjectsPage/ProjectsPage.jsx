import { useEffect } from "react";
import "./ProjectsPage.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <div className="timeline">
      <div className="container left-container" data-aos="flip-up">
        <img
          className="middleLogo"
          src="https://www.freepnglogos.com/uploads/pokeball-png/pokeball-alexa-style-blog-pokemon-inspired-charmander-daily-8.png"
        />
        <div className="text-box">
          <h2>Pokémon Universe</h2>
          <div className="projectLinks">
            <a
              href="https://pokemon-tcg-production.up.railway.app/"
              target="_blank"
            >
              <img
                src="https://railway.app/brand/logo-dark.png"
                className="railwayLogo"
              ></img>
            </a>
            <a href="https://github.com/eukeo/pokemon-tcg" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/256/25/25231.png"></img>
            </a>
          </div>
          <div className="techUsed">
            <img src="https://icons.veryicon.com/png/o/internet--web/internet-simple-icon/api-management.png"></img>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png"></img>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"></img>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"></img>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"></img>
            <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"></img>
          </div>
          <p>
            This mobile friendly web application not only contains the latest
            updates on the Pokéverse, but it also has a little bit of nostalgia
            that will make any Pokémon fan remember what it was like to be a
            kid. From the Pokédex, to Memory Lane, there is something small for
            everyone to enjoy!
          </p>
        </div>
      </div>
      <div className="container right-container" data-aos="flip-up">
        <img
          className="middleLogo"
          src="https://icons.iconarchive.com/icons/graphicloads/100-flat/256/note-icon.png"
        />
        <div className="text-box">
          <h2>What To Do?</h2>
          <div className="projectLinks">
            <a
              href="https://todo-list-reboot-production.up.railway.app/ "
              target="_blank"
            >
              <img
                src="https://railway.app/brand/logo-dark.png"
                className="railwayLogo"
              ></img>
            </a>
            <a href="https://github.com/eukeo/todo-list-reboot" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/256/25/25231.png"></img>
            </a>
          </div>
          <div className="techUsed">
            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"></img>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png"></img>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"></img>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"></img>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"></img>
          </div>
          <p>
            What To Do? is a full CRUD, mobile friendly daily planner. Create,
            read, update and delete your daily plans as your day goes on right
            from the comfort of your phone! Screenshot your daily planner so you
            know exactly where you need to be at any time of the day!
          </p>
        </div>
      </div>
      <div className="container left-container" data-aos="flip-up">
        <img
          className="middleLogo"
          src="https://cdn-icons-png.flaticon.com/512/882/882998.png"
        />
        <div className="text-box">
          <h2>In My Mind</h2>
          <div className="projectLinks">
            <a
              href="https://mental-health-production.up.railway.app/"
              target="_blank"
            >
              <img
                src="https://railway.app/brand/logo-dark.png"
                className="railwayLogo"
              ></img>
            </a>
            <a href="https://github.com/eukeo/mental-health" target="_blank">
              <img src="https://cdn-icons-png.flaticon.com/256/25/25231.png"></img>
            </a>
          </div>
          <div className="techUsed">
            <img src="https://icons.veryicon.com/png/o/internet--web/internet-simple-icon/api-management.png"></img>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png"></img>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"></img>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"></img>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"></img>
            <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"></img>
          </div>
          <p>
            In My Mind is a mobile friendly web application based around
            spreading awareness for mental health. From tips, to studies, In My
            Mind has information for anyone seeking help, or simply seeking
            interest in growing awareness for themselves on how mental health
            affects the world around us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
