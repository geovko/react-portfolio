// incomplete

import Project from "../components/Project";

function Portfolio() {
  return (
    <div className="page">
      <h2>Portfolio</h2>
      <div className="content">
        <Project
          title="Weather Dashboard"
          repo="weather-dashboard.git"
          desc="3rd Party API"
          pic="weather-dashboard.png"
          site="https://geovko.github.io/weather-dashboard/"
        />
        <Project
          title="Thought Bubble"
          repo="thought-bubble.git"
          desc="NoSQL API"
          pic=""
          site=""
        />
        <Project
          title="B.B.Blog"
          repo="Beep-Boop-Blog.git"
          desc="MVC"
          pic=""
          site="https://bbblog-mmvi.onrender.com/"
        />
        <Project
          title="Task Board"
          repo="Task-Board.git"
          desc="jQuery UI"
          pic="task-board.tasks.png"
          site="https://geovko.github.io/Task-Board/"
        />
        <Project
          title="Employee Tracker"
          repo="Employee-Tracker.git"
          desc="SQL"
          pic="empt-video-snippet.png"
        />
        <Project title="" repo="" desc="" pic="" />
      </div>
    </div>
  );
}

export default Portfolio;
