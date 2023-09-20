import "./App.css";
import "./Resume.css";
export default function Resume() {
  return (
    <>
      <h1>Resume</h1>

      <div className="Resume-Skill">
        <section>
          Download my
          <a href="/TheResumeReal.pdf" download="/TheResumeReal.pdf">
            Resume
          </a>
        </section>
        <ul className="Frontend">
          <h1>Frontend</h1>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Jquery</li>
        </ul>
        <ul className="Backend">
          <h1>Backend</h1>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>MySql</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </>
  );
}
