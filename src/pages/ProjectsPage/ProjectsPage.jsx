import "./ProjectsPage.css";

const Projects = () => {
  return (
    <div className="timeline">
      <div className="container left-container">
        <img src="https://www.freepnglogos.com/uploads/pokeball-png/pokeball-alexa-style-blog-pokemon-inspired-charmander-daily-8.png" />
        <div className="text-box">
          <h2>Pokemon Universe</h2>
          <div className="techUsed">
            <img src="https://w7.pngwing.com/pngs/500/498/png-transparent-application-programming-interface-representational-state-transfer-web-api-computer-software-hackathon-api-icon-logo-computer-program-computer-programming-thumbnail.png"></img>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfQh_ddm7llO-DxG4ASzBzzXM8UhQKi4IRQpIDVSk17aP3Q_k9JOgoNLLD8z6zq7Jm9Q&usqp=CAU"></img>
            <img src="https://ionicframework.com/docs/icons/logo-react-icon.png"></img>
            <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"></img>
          </div>
          <p>
            This mobile friendly web application not only contains the latest
            updates on the Pokéverse, but it also has a little bit of nostalgia
            that will make any Pokémon fan remember what it was like to be a
            kid. From the Pokédex, to Memory Lane, there is something small for
            everyone to enjoy!
          </p>
          <span className="left-container-arrow"></span>
        </div>
      </div>
      <div className="container right-container">
        <img src="https://www.freepnglogos.com/uploads/pokeball-png/pokeball-alexa-style-blog-pokemon-inspired-charmander-daily-8.png" />
        <div className="text-box">
          <h2>In My Mind</h2>
          <div>Technologies Used:</div>
          <p>
            In My Mind is a mobile friendly web application based around
            spreading awareness for mental health. From tips, to studies, In My
            Mind has information for anyone seeking help, or simply seeking
            interest in growing awareness for themselves on how mental health
            affects the world around us.
          </p>
          <span className="right-container-arrow"></span>
        </div>
      </div>
      <div className="container left-container">
        <img src="https://www.freepnglogos.com/uploads/pokeball-png/pokeball-alexa-style-blog-pokemon-inspired-charmander-daily-8.png" />
        <div className="text-box">
          <h2>What To Do?</h2>
          <div>Technologies Used:</div>
          <p>
            What To Do? is a full CRUD, mobile friendly daily planner. Create,
            read, update and delete your daily plans as your day goes on right
            from the comfort of your phone! Screenshot your daily planner so you
            know exactly where you need to be at any time of the day!
          </p>
          <span className="left-container-arrow"></span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
