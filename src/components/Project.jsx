// test

import { useState } from "react";

function Project(props) {
  const [isHidden, setIsHidden] = useState(true);

  const link = `https://geovko.github.io/${props.repo}/`;
  const image = `assets/images/${props.pic}.png`;

  return (
    <div className="project-card">
      <a
        onMouseEnter={() => setIsHidden(false)}
        onMouseLeave={() => setIsHidden(true)}
        href={link}
      >
        <img src={image}></img>
        <div style={{ display: isHidden ? "none" : "block" }} id="name-card">
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </div>
      </a>
    </div>
  );
}

export default Project;
