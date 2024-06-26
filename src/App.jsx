import "./App.scss";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Components/home/Home";
import Parallax from "./Components/parallax/Parallax";
import AboutMe from "./Components/aboutme/AboutMe";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Home />
      </section>
      <section id="AboutMe">
        <Parallax type="AboutMe" />
      </section>
      <section><AboutMe/></section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section>Portfolio4</section>
      <section>Portfolio5</section>
      <section>Portfolio6</section>
      <section id="Contact"></section>
      <section>Contact</section>
    </div>
  );
};

export default App;
