import "./ProjectsPage.css";

const Projects = () => {
  return (
    <div className="timeline">
      <div className="container left-container">
        <div className="text-box">
          <h2>Alphabet Inc.</h2>
          <small>2018 - 2019</small>
          <p>This is text underneath whatever the above text is.</p>
        </div>
      </div>
      <div className="container right-container">
        <div className="text-box">
          <h2>Tesla Inc.</h2>
          <small>2019 - 2020</small>
          <p>This is text underteaht whatever the above text is.</p>
        </div>
      </div>
      <div className="container left-container">
        <div className="text-box">
          <h2>Toyota Inc.</h2>
          <small>2021 - 2022</small>
          <p>This is text underteaht whatever the above text is.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
