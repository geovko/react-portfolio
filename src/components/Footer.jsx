// incomplete
// add images
// add functionality
import { useState } from "react";
// import githubIcon from "../assets/images/github-icon.png";
// import linkedInIcon from "../assets/images/linkedIn-icon.png";

function Footer() {
  const [hasFocus, setHasFocus] = useState(false);

  return (
    <div className="footer">
      <a
        id="github"
        onMouseEnter={() => setHasFocus(true)}
        onMouseLeave={() => setHasFocus(false)}
        style={{ border: hasFocus ? "2px white" : "none" }}
        href="https://github.com/geovko"
      >
        Github
        {/* <img src={githubIcon} alt="Github Icon"></img> */}
      </a>

      <a
        id="linkedIn"
        onMouseEnter={() => setHasFocus(true)}
        onMouseLeave={() => setHasFocus(false)}
        style={{ border: hasFocus ? "2px white" : "none" }}
        href="https://www.linkedin.com/in/philip-kim-7bb032176/"
      >
        LinkedIn
        {/* <img src={linkedInIcon} alt="LinkedIn Icon"></img> */}
      </a>
    </div>
  );
}

export default Footer;
