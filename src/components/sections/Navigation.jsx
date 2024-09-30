function Navigation({ currentPage, handlePageChange }) {
  return (
    <div className="header">
      <div>
        <h1>Philip Kim</h1>
      </div>
      <nav>
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "active" : ""}
        >
          About Me
        </a>
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={currentPage === "Portfolio" ? "active" : ""}
        >
          Portfolio
        </a>

        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "active" : ""}
        >
          Resume
        </a>

        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "active" : ""}
        >
          Contact
        </a>
      </nav>
    </div>
  );
}

export default Navigation;
