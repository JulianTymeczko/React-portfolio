import AboutMe from "./AboutMe.jsx";
import Portfolio from "./Portfolio.jsx";
import Contact from "./Contact.jsx";
import Resume from "./Resume.jsx";
import "./App.css";

function App() {
  let component;
  if (
    window.location.pathname === "/About-Me" ||
    window.location.pathname === "/"
  ) {
    component = <AboutMe></AboutMe>;
  } else if (window.location.pathname === "/Portfolio") {
    component = <Portfolio></Portfolio>;
  } else if (window.location.pathname === "/Contact") {
    component = <Contact></Contact>;
  } else if (window.location.pathname === "/Resume") {
    component = <Resume></Resume>;
  }
  return (
    <>
      <nav>
        <h1>Julian</h1>
        <a href="/About-Me">About Me</a>
        <a href="/Portfolio">Portfolio</a>
        <a href="/Contact">Contact</a>
        <a href="/Resume">Resume</a>
      </nav>
      <main>{component}</main>
    </>
  );
}

export default App;
