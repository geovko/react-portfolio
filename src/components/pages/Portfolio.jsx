// incomplete

import Project from "../sections/Project";

function Portfolio() {
  return (
    <div className="page">
      <h4>Peruse at your leisure</h4>
      <div className="content">
        <Project
          title="Weather Dashboard"
          repo="weather-dashboard"
          desc="3rd Party API"
          pic="weather-dashboard.png"
          site="https://geovko.github.io/weather-dashboard/"
        />
        <Project
          title="Thought Bubble"
          repo="thought-bubble"
          desc="NoSQL API"
          pic="thought-bubble-insomnia.png"
        />
        <Project
          title="B.B.Blog"
          repo="Beep-Boop-Blog"
          desc="MVC"
          pic=""
          site="https://bbblog-mmvi.onrender.com/"
        />
        <Project
          title="Task Board"
          repo="Task-Board"
          desc="jQuery UI"
          pic="task-board.tasks.png"
          site="https://geovko.github.io/Task-Board/"
        />
        <Project
          title="Employee Tracker"
          repo="Employee-Tracker"
          desc="SQL"
          pic="empt-video-snippet.png"
        />
        <Project
          title="Pop Culture Critic"
          repo="Pop-Culture-Critic"
          desc="Full-Stack"
          pic="p2-review-form.png"
          site="https://pop-culture-critic.onrender.com/"
        />
      </div>
    </div>
  );
}

export default Portfolio;
