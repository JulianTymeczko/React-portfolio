import "./App.css";
import "./AboutMe.css";
export default function AboutMe() {
  return (
    <>
      <div className="AboutMeDiv">
        <h1>About Me</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          className="About-Img"
        >
          <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z" />
        </svg>
        <p className="AboutPara">
          Hello! I'm passionate about crafting beautiful and user-friendly
          websites. As an aspiring front-end web developer, I thrive on the
          intersection of creativity and technology. My journey into web
          development began with a fascination for how websites can captivate
          and engage users. I've since embarked on a continuous learning
          adventure, honing my skills in HTML, CSS, and JavaScript to bring
          ideas to life on the web. With an eye for design and a commitment to
          delivering seamless user experiences, I'm excited to contribute to the
          ever-evolving digital landscape. Let's build something amazing
          together!
          <br />
          <br />
          <br />
          Greetings! I'm on a mission to make the web a more dynamic and
          visually appealing place. My role as an aspiring front-end web
          developer allows me to combine my artistic flair with coding prowess.
          I find joy in transforming static designs into interactive and
          responsive web pages that leave a lasting impression. Whether it's
          creating elegant layouts or optimizing performance for various
          devices, I'm dedicated to staying at the forefront of web development
          trends and best practices. Join me in the exciting journey of shaping
          the online world, one pixel at a time!
        </p>
      </div>
    </>
  );
}
