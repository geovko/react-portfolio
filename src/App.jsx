import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import background from "./assets/images/dark-green-wave-background.jpg";

function App() {
  return (
    <>
      <Header />
      <div style={{ backgroundImage: `url(${background})` }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
