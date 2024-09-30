// test

import { useState } from "react";

function Project(props) {
  const [isHidden, setIsHidden] = useState(true);
  const [hasSite] = useState(props.site);

  const repository = `https://github.com/geovko/${props.repo}/`;
  const image = `../src/assets/images/${props.pic}`;

  return (
    <div className="project-card">
      <a
        onMouseEnter={() => setIsHidden(false)}
        onMouseLeave={() => setIsHidden(true)}
        href={repository}
      >
        <div
          style={{ display: isHidden ? "none" : "block" }}
          className="name-card"
        >
          <h1>{props.title}</h1>
          <h3>{props.desc}</h3>
        </div>
        <img
          className="project-images"
          style={{ opacity: isHidden ? "1" : "0.3" }}
          src={image}
        ></img>
      </a>
      <a
        style={{ display: hasSite ? "block" : "none" }}
        className="site-link"
        href={props.site}
      >
        Go to Site!
      </a>
    </div>
  );
}

export default Project;
