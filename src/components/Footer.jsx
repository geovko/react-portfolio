// incomplete
// add images
// add functionality
import { useState } from "react";

function Footer() {
  const [hasFocus, setHasFocus] = useState(false);

  return (
    <div>
      <a
        id="github"
        onMouseEnter={() => setHasFocus(true)}
        onMouseLeave={() => setHasFocus(false)}
        style={{ border: hasFocus ? "2px white" : "none" }}
        href="/"
      >
        <img src="../images"></img>
      </a>

      <a
        id="linkedIn"
        onMouseEnter={() => setHasFocus(true)}
        onMouseLeave={() => setHasFocus(false)}
        style={{ border: hasFocus ? "2px white" : "none" }}
        href="/"
      >
        <img src="../images"></img>
      </a>
    </div>
  );
}

export default Footer;
