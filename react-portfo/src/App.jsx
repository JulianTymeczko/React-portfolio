import AboutMe from "./AboutMe.jsx";
import Portfolio from "./Portfolio.jsx";
import Contact from "./Contact.jsx";
import Resume from "./Resume.jsx";
import "./App.css";
import { useState } from "react";
function App() {
  const [component, setComponent] = useState(<AboutMe></AboutMe>);

  return (
    <>
      <nav>
        <h1>Julian</h1>
        <a
          href="#"
          onClick={() => {
            setComponent(<AboutMe></AboutMe>);
          }}
        >
          About Me
        </a>
        <a
          href="#"
          onClick={() => {
            setComponent(<Portfolio></Portfolio>);
          }}
        >
          Portfolio
        </a>
        <a
          href="#"
          onClick={() => {
            setComponent(<Contact></Contact>);
          }}
        >
          Contact
        </a>
        <a
          href="#"
          onClick={() => {
            setComponent(<Resume></Resume>);
          }}
        >
          Resume
        </a>
      </nav>
      <main>{component}</main>
    </>
  );
}

export default App;
