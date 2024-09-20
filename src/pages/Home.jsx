import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <div class="color-block d-none d-lg-block"></div>

        <img src="src/assets/2k.png" alt="Andile" />
      </div>
      <div className="right">
        <h1 className="im animate__animated animate__fadeInRight animate__faster">
          I'm Andile 2k
        </h1>
        <h1 className="profession animate__animated animate__fadeInRight animate__slow">
          Full Stack Software Developper
        </h1>
        <p>
          I am Andile Msomi, as a Full Stack Developer, I have the unique
          ability to manage both the front-end and back-end aspects of web
          applications. I am passionate about building excellent software that
          improves the lives of those around me.
        </p>
        <div>
          <button>More About Me</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
