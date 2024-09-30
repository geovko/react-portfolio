import { useState } from "react";
import Navigation from "./sections/Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Footer from "./sections/Footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Error />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
      <Footer />
    </>
  );
}
