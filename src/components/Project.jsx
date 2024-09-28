// test

import { useState } from "react";

function Project(props) {
  const [isHidden, setIsHidden] = useState(true);

  function toggle() {
    setIsHidden((isHidden = !isHidden));

    const x = document.getElementById("name-card");
    if (isHidden) {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  const link = `https://geovko.github.io/${props.repo}/`;
  const image = `assets/images/${props.pic}.png`;
  return (
    <div className="project-card">
      <a href={link}>
        <img src={image}></img>
        <div id="name-card" onMouseOver={toggle}>
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </div>
      </a>
    </div>
  );
}

export default Project;
