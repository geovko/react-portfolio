import { useState } from "react";
import { useLocation } from "react-router-dom";

function Navigation() {
  let location = useLocation();
  const [whichPage, setWhichPage] = useState(location.pathname);

  return (
    <nav>
      <a className={whichPage == "/" ? "chosen" : ""} href="/">
        About Me
      </a>
      <a
        className={whichPage == "/portfolio" ? "chosen" : ""}
        href="/portfolio"
      >
        Portfolio
      </a>
      <a className={whichPage == "/contact" ? "chosen" : ""} href="/contact">
        Contact
      </a>
      <a className={whichPage == "/resume" ? "chosen" : ""} href="/resume">
        Resume
      </a>
    </nav>
  );
}

export default Navigation;
