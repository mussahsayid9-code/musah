"use client";

export default function Home() {
  return (
    <main className="site">

      {/* ================= GALAXY ================= */}

      <div className="galaxy">

        <div className="star star1"></div>
        <div className="star star2"></div>
        <div className="star star3"></div>
        <div className="star star4"></div>
        <div className="star star5"></div>
        <div className="star star6"></div>
        <div className="star star7"></div>
        <div className="star star8"></div>
        <div className="star star9"></div>
        <div className="star star10"></div>

        {/* SOLAR SYSTEM */}

        <div className="solar-system">

          <div className="sun"></div>

          <div className="orbit orbit1">
            <div className="planet planet1"></div>
          </div>

          <div className="orbit orbit2">
            <div className="planet planet2"></div>
          </div>

          <div className="orbit orbit3">
            <div className="planet planet3"></div>
          </div>

          <div className="orbit orbit4">
            <div className="planet planet4"></div>
          </div>

        </div>
      </div>


      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div className="nav-container">

          <a href="#" className="logo">
            MUSA<span>.</span>
          </a>

          <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="nav-button">
            Let's Talk
          </a>

        </div>

      </header>


      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            SOFTWARE DEVELOPER
          </p>

          <h1>
            I build
            <br />
            <span>digital experiences.</span>
          </h1>

          <p className="hero-text">
            I'm Musa, a developer and creative learner focused on
            building websites, applications and digital experiences.
          </p>

          <div className="hero-buttons">

            <a href="#work" className="primary-button">
              Explore My Work
            </a>

            <a href="#about" className="secondary-button">
              About Me
            </a>

          </div>

        </div>


        {/* PROFILE CARD */}

        <div className="profile-card">

          <div className="profile-top">
            <span>PROFILE</span>

            <div className="available">
              <span></span>
              AVAILABLE
            </div>
          </div>

          <div className="profile-letter">
            M
          </div>

          <h2>Musa</h2>

          <p>Developer / Designer</p>

          <div className="profile-line"></div>

          <div className="profile-info">

            <div>
              <small>FOCUS</small>
              <strong>Software</strong>
            </div>

            <div>
              <small>BASED</small>
              <strong>Kenya</strong>
            </div>

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}

      <section className="stats">

        <div>
          <strong>01+</strong>
          <span>Years Learning</span>
        </div>

        <div>
          <strong>04+</strong>
          <span>Technologies</span>
        </div>

        <div>
          <strong>10+</strong>
          <span>Projects</span>
        </div>

        <div>
          <strong>100%</strong>
          <span>Curiosity</span>
        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section id="about" className="section">

        <p className="section-label">
          01 / ABOUT
        </p>

        <div className="about">

          <h2>
            Building my future
            <br />
            <span>one project at a time.</span>
          </h2>

          <div>

            <p className="big-text">
              I'm a developer who enjoys technology,
              creativity and understanding how things work.
            </p>

            <p className="muted">
              My journey started with web development and
              graphic design. I'm now going deeper into
              software development, learning Python,
              frontend development and backend technologies.
            </p>

            <p className="muted">
              I believe the best way to learn is to build.
              Every project gives me another opportunity
              to improve.
            </p>

          </div>

        </div>

      </section>


      {/* ================= SKILLS ================= */}

      <section id="skills" className="skills-section">

        <div className="section">

          <p className="section-label">
            02 / SKILLS
          </p>

          <div className="heading-row">

            <h2>
              What I'm
              <br />
              <span>learning.</span>
            </h2>

            <p>
              Technologies and skills I'm currently
              developing through practice and projects.
            </p>

          </div>


          <div className="skills-grid">

            <div className="skill-card">

              <span className="number">01</span>

              <div className="skill-icon">
                PY
              </div>

              <h3>Python</h3>

              <p>
                Programming fundamentals, OOP,
                functions, modules and backend development.
              </p>

              <span className="arrow">
                →
              </span>

            </div>


            <div className="skill-card">

              <span className="number">02</span>

              <div className="skill-icon">
                JS
              </div>

              <h3>JavaScript</h3>

              <p>
                Building interactive interfaces and
                understanding modern web development.
              </p>

              <span className="arrow">
                →
              </span>

            </div>


            <div className="skill-card">

              <span className="number">03</span>

              <div className="skill-icon">
                NX
              </div>

              <h3>Next.js</h3>

              <p>
                Creating modern websites and applications
                with React and Next.js.
              </p>

              <span className="arrow">
                →
              </span>

            </div>


            <div className="skill-card">

              <span className="number">04</span>

              <div className="skill-icon">
                UI
              </div>

              <h3>Design</h3>

              <p>
                Creating clean layouts, visual concepts
                and user-focused digital experiences.
              </p>

              <span className="arrow">
                →
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ================= WORK ================= */}

      <section id="work" className="section">

        <p className="section-label">
          03 / SELECTED WORK
        </p>

        <div className="heading-row">

          <h2>
            Things I've
            <br />
            <span>built.</span>
          </h2>

          <p>
            Projects that represent my journey as I
            continue learning and building.
          </p>

        </div>


        <div className="projects">

          {/* PROJECT 1 */}

          <article className="project">

            <div className="project-preview">

              <div className="browser">

                <div className="browser-top">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <div className="browser-body">

                  <div className="fake-title"></div>

                  <div className="fake-line"></div>

                  <div className="fake-line short"></div>

                  <div className="fake-boxes">

                    <div></div>
                    <div></div>
                    <div></div>

                  </div>

                </div>

              </div>

            </div>


            <div className="project-info">

              <span>01</span>

              <h3>
                Personal Portfolio
              </h3>

              <p>
                A personal portfolio built with Next.js
                and Tailwind CSS to showcase my skills,
                projects and development journey.
              </p>

              <div className="tags">

                <span>Next.js</span>
                <span>React</span>
                <span>Tailwind</span>

              </div>

            </div>

          </article>


          {/* PROJECT 2 */}

          <article className="project reverse">

            <div className="project-preview">

              <div className="code-box">

                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>

              </div>

            </div>


            <div className="project-info">

              <span>02</span>

              <h3>
                Python Application
              </h3>

              <p>
                A practical application created while
                developing my Python programming and
                problem-solving skills.
              </p>

              <div className="tags">

                <span>Python</span>
                <span>OOP</span>
                <span>Logic</span>

              </div>

            </div>

          </article>

        </div>

      </section>


      {/* ================= LEARNING ================= */}

      <section className="learning">

        <div className="section">

          <div className="learning-box">

            <div>

              <p className="section-label">
                RIGHT NOW
              </p>

              <h2>
                I'm not finished.
              </h2>

              <p>
                I'm still learning, experimenting and
                building. The goal isn't to know everything.
                It's to become better with every project.
              </p>

            </div>


            <div className="learning-list">

              <div>
                <span>01</span>
                <strong>Python</strong>
                <small>Learning</small>
              </div>

              <div>
                <span>02</span>
                <strong>Frontend</strong>
                <small>Building</small>
              </div>

              <div>
                <span>03</span>
                <strong>Backend</strong>
                <small>Exploring</small>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT ================= */}

      <section id="contact" className="contact">

        <div className="section">

          <p className="section-label">
            04 / CONTACT
          </p>

          <h2>
            Let's build
            <br />
            <span>something.</span>
          </h2>

          <p>
            Have an idea, project or opportunity?
            Let's talk.
          </p>

          <a
            href="mailto:your@email.com"
            className="contact-button"
          >
            Get In Touch →
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>


        <span>
          © 2026
        </span>

      </footer>


      {/* ================= CSS ================= */}

      <style jsx>{`

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }


        /* ================= MAIN ================= */

        .site {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          background: #050505;
          color: #eeeeee;
          font-family: "Aller", Arial, sans-serif;
        }


        /* ================= GALAXY ================= */

        .galaxy {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
          background: #050505;
        }


        /* Stars */

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #aaaaaa;
          border-radius: 50%;
          animation: starMove 8s linear infinite;
        }

        .star1 {
          top: 10%;
          left: 15%;
        }

        .star2 {
          top: 20%;
          left: 70%;
          animation-delay: 1s;
        }

        .star3 {
          top: 35%;
          left: 40%;
          animation-delay: 2s;
        }

        .star4 {
          top: 55%;
          left: 80%;
          animation-delay: 3s;
        }

        .star5 {
          top: 70%;
          left: 20%;
          animation-delay: 4s;
        }

        .star6 {
          top: 85%;
          left: 60%;
          animation-delay: 5s;
        }

        .star7 {
          top: 45%;
          left: 10%;
          animation-delay: 2.5s;
        }

        .star8 {
          top: 15%;
          left: 90%;
          animation-delay: 3.5s;
        }

        .star9 {
          top: 65%;
          left: 45%;
          animation-delay: 4.5s;
        }

        .star10 {
          top: 90%;
          left: 85%;
          animation-delay: 6s;
        }


        @keyframes starMove {

          0% {
            opacity: 0.2;
            transform: translate(0, 0);
          }

          50% {
            opacity: 1;
          }

          100% {
            opacity: 0.2;
            transform: translate(120px, -80px);
          }

        }


        /* ================= SOLAR SYSTEM ================= */

        .solar-system {
          position: absolute;
          top: 500px;
          right: -250px;
          width: 700px;
          height: 700px;
        }


        /* Sun */

        .sun {
          position: absolute;
          width: 65px;
          height: 65px;
          border-radius: 50%;
          background: #dddddd;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 35px #777777;
          animation: sunPulse 3s ease-in-out infinite;
        }


        @keyframes sunPulse {

          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
          }

          50% {
            transform: translate(-50%, -50%) scale(1.12);
          }

        }


        /* Orbits */

        .orbit {
          position: absolute;
          left: 50%;
          top: 50%;
          border: 1px solid #292929;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: orbit 10s linear infinite;
        }

        .orbit1 {
          width: 150px;
          height: 150px;
          animation-duration: 7s;
        }

        .orbit2 {
          width: 250px;
          height: 250px;
          animation-duration: 11s;
        }

        .orbit3 {
          width: 390px;
          height: 390px;
          animation-duration: 17s;
        }

        .orbit4 {
          width: 540px;
          height: 540px;
          animation-duration: 25s;
        }


        @keyframes orbit {

          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }

        }


        /* Planets */

        .planet {
          position: absolute;
          top: -5px;
          left: 50%;
          border-radius: 50%;
        }

        .planet1 {
          width: 10px;
          height: 10px;
          background: #777777;
        }

        .planet2 {
          width: 16px;
          height: 16px;
          background: #999999;
        }

        .planet3 {
          width: 22px;
          height: 22px;
          background: #666666;
        }

        .planet4 {
          width: 13px;
          height: 13px;
          background: #aaaaaa;
        }


        /* ================= NAVBAR ================= */

        .navbar {
          position: relative;
          z-index: 10;
          border-bottom: 1px solid #222222;
          background: rgba(5, 5, 5, 0.9);
          backdrop-filter: blur(10px);
        }

        .nav-container {
          max-width: 1200px;
          margin: auto;
          padding: 22px 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          color: white;
          text-decoration: none;
          font-size: 24px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .logo span,
        footer span {
          color: #777777;
        }

        nav {
          display: flex;
          gap: 35px;
        }

        nav a {
          color: #777777;
          text-decoration: none;
          font-size: 14px;
          transition: 0.3s;
        }

        nav a:hover {
          color: white;
        }

        .nav-button {
          padding: 10px 19px;
          border: 1px solid #444444;
          border-radius: 30px;
          color: white;
          text-decoration: none;
          font-size: 13px;
          transition: 0.3s;
        }

        .nav-button:hover {
          background: white;
          color: black;
          transform: translateY(-3px);
        }


        /* ================= HERO ================= */

        .hero {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          min-height: 720px;
          margin: auto;
          padding: 120px 30px;
          display: grid;
          grid-template-columns: 1.5fr 0.7fr;
          gap: 80px;
          align-items: center;
        }

        .hero-content {
          animation: heroEnter 1s ease forwards;
        }

        @keyframes heroEnter {

          from {
            opacity: 0;
            transform: translateY(40px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        .eyebrow,
        .section-label {
          color: #777777;
          font-size: 11px;
          letter-spacing: 3px;
          font-weight: 700;
        }

        .hero h1 {
          margin: 25px 0;
          font-size: clamp(55px, 8vw, 100px);
          line-height: 0.92;
          letter-spacing: -5px;
        }

        .hero h1 span,
        h2 span {
          color: #777777;
        }

        .hero-text {
          max-width: 600px;
          color: #888888;
          line-height: 1.8;
          font-size: 17px;
        }


        /* Buttons */

        .hero-buttons {
          display: flex;
          gap: 15px;
          margin-top: 40px;
        }

        .primary-button,
        .secondary-button,
        .contact-button {
          padding: 15px 24px;
          border-radius: 30px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          transition: 0.3s;
        }

        .primary-button {
          background: white;
          color: black;
        }

        .primary-button:hover {
          transform: translateY(-5px);
          background: #cccccc;
        }

        .secondary-button {
          border: 1px solid #444444;
          color: white;
        }

        .secondary-button:hover {
          border-color: white;
          transform: translateY(-5px);
        }


        /* ================= PROFILE CARD ================= */

        .profile-card {
          padding: 30px;
          border: 1px solid #333333;
          border-radius: 22px;
          background: #0b0b0b;
          animation: floatCard 5s ease-in-out infinite;
          transition: 0.4s;
        }

        .profile-card:hover {
          border-color: #777777;
          transform: rotate(-2deg) translateY(-10px);
        }

        @keyframes floatCard {

          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }

        }

        .profile-top {
          display: flex;
          justify-content: space-between;
          color: #555555;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .available {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .available span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #aaaaaa;
          animation: blink 2s infinite;
        }

        @keyframes blink {

          0%, 100% {
            opacity: 1;
          }

          50% {
            opacity: 0.25;
          }

        }

        .profile-letter {
          width: 90px;
          height: 90px;
          margin: 70px 0 25px;
          border: 1px solid #555555;
          border-radius: 18px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 38px;
          font-weight: 900;
          transition: 0.4s;
        }

        .profile-card:hover .profile-letter {
          transform: rotate(8deg) scale(1.05);
          border-color: #aaaaaa;
        }

        .profile-card h2 {
          margin: 0;
          font-size: 30px;
        }

        .profile-card > p {
          color: #777777;
        }

        .profile-line {
          height: 1px;
          background: #292929;
          margin: 30px 0;
        }

        .profile-info {
          display: flex;
          justify-content: space-between;
        }

        .profile-info div {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .profile-info small {
          color: #555555;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .profile-info strong {
          font-size: 14px;
        }


        /* ================= STATS ================= */

        .stats {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid #222222;
          border-bottom: 1px solid #222222;
        }

        .stats div {
          padding: 30px;
          border-right: 1px solid #222222;
        }

        .stats div:last-child {
          border-right: none;
        }

        .stats strong {
          display: block;
          font-size: 35px;
        }

        .stats span {
          display: block;
          margin-top: 7px;
          color: #666666;
          font-size: 12px;
        }


        /* ================= SECTIONS ================= */

        .section {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: auto;
          padding: 120px 30px;
        }


        /* ================= ABOUT ================= */

        .about {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          margin-top: 50px;
        }

        .about h2,
        .heading-row h2,
        .contact h2 {
          margin: 0;
          font-size: clamp(45px, 6vw, 75px);
          line-height: 0.98;
          letter-spacing: -3px;
        }

        .big-text {
          font-size: 22px;
          line-height: 1.6;
        }

        .muted {
          color: #777777;
          line-height: 1.8;
          margin-top: 25px;
        }


        /* ================= SKILLS ================= */

        .skills-section {
          position: relative;
          background: #090909;
          border-top: 1px solid #222222;
          border-bottom: 1px solid #222222;
        }

        .heading-row {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 40px;
          margin: 45px 0 65px;
        }

        .heading-row > p {
          max-width: 350px;
          color: #666666;
          line-height: 1.7;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .skill-card {
          position: relative;
          min-height: 300px;
          padding: 28px;
          border: 1px solid #292929;
          border-radius: 18px;
          transition: 0.4s;
          overflow: hidden;
        }

        .skill-card:hover {
          transform: translateY(-10px);
          border-color: #777777;
          background: #101010;
        }

        .number {
          position: absolute;
          top: 20px;
          right: 20px;
          color: #444444;
          font-size: 11px;
        }

        .skill-icon {
          width: 55px;
          height: 55px;
          border: 1px solid #555555;
          border-radius: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 900;
          transition: 0.4s;
        }

        .skill-card:hover .skill-icon {
          transform: rotate(8deg) scale(1.08);
          border-color: white;
        }

        .skill-card h3 {
          margin-top: 45px;
          font-size: 23px;
        }

        .skill-card p {
          color: #666666;
          font-size: 14px;
          line-height: 1.7;
        }

        .arrow {
          position: absolute;
          bottom: 25px;
          right: 28px;
          color: #666666;
          transition: 0.3s;
        }

        .skill-card:hover .arrow {
          color: white;
          transform: translateX(8px);
        }


        /* ================= PROJECTS ================= */

        .projects {
          display: flex;
          flex-direction: column;
          gap: 70px;
          margin-top: 20px;
        }

        .project {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }

        .project.reverse {
          grid-template-columns: 0.8fr 1.2fr;
        }

        .project.reverse .project-preview {
          order: 2;
        }

        .project-preview {
          min-height: 390px;
          background: #0b0b0b;
          border: 1px solid #252525;
          border-radius: 22px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: 0.5s;
        }

        .project-preview:hover {
          transform: scale(1.025);
          border-color: #777777;
        }


        /* Browser */

        .browser {
          width: 75%;
          height: 65%;
          border: 1px solid #444444;
          border-radius: 10px;
          overflow: hidden;
          transition: 0.5s;
        }

        .project-preview:hover .browser {
          transform: translateY(-8px);
        }

        .browser-top {
          height: 32px;
          border-bottom: 1px solid #333333;
          display: flex;
          gap: 6px;
          align-items: center;
          padding-left: 12px;
        }

        .browser-top i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #666666;
        }

        .browser-body {
          padding: 30px;
        }

        .fake-title {
          width: 70%;
          height: 15px;
          background: #666666;
          margin-bottom: 25px;
        }

        .fake-line {
          width: 90%;
          height: 8px;
          background: #444444;
          margin-bottom: 12px;
        }

        .fake-line.short {
          width: 55%;
        }

        .fake-boxes {
          display: flex;
          gap: 10px;
          margin-top: 25px;
        }

        .fake-boxes div {
          width: 33%;
          height: 60px;
          border: 1px solid #444444;
        }


        /* Code */

        .code-box {
          width: 65%;
          padding: 40px;
          border: 1px solid #444444;
          border-radius: 12px;
        }

        .code-box div {
          height: 8px;
          background: #555555;
          margin: 18px 0;
          border-radius: 5px;
        }

        .code-box div:nth-child(1) {
          width: 90%;
        }

        .code-box div:nth-child(2) {
          width: 65%;
        }

        .code-box div:nth-child(3) {
          width: 45%;
        }

        .code-box div:nth-child(4) {
          width: 80%;
        }

        .code-box div:nth-child(5) {
          width: 55%;
        }


        /* Project Info */

        .project-info > span {
          color: #555555;
          font-size: 12px;
        }

        .project-info h3 {
          font-size: 32px;
        }

        .project-info p {
          color: #777777;
          line-height: 1.8;
        }

        .tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 25px;
        }

        .tags span {
          border: 1px solid #333333;
          padding: 7px 12px;
          border-radius: 20px;
          color: #888888;
          font-size: 11px;
          transition: 0.3s;
        }

        .tags span:hover {
          color: white;
          border-color: #777777;
          transform: translateY(-3px);
        }


        /* ================= LEARNING ================= */

        .learning {
          background: #090909;
          border-top: 1px solid #222222;
          border-bottom: 1px solid #222222;
        }

        .learning-box {
          padding: 50px;
          border: 1px solid #333333;
          border-radius: 22px;
          display: grid;
          grid-template-columns: 1fr 0.7fr;
          gap: 80px;
        }

        .learning-box h2 {
          font-size: 55px;
          margin: 20px 0;
          letter-spacing: -3px;
        }

        .learning-box p {
          max-width: 550px;
          color: #777777;
          line-height: 1.8;
        }

        .learning-list {
          border-left: 1px solid #333333;
          padding-left: 35px;
        }

        .learning-list div {
          display: grid;
          grid-template-columns: 40px 1fr auto;
          padding: 20px 0;
          border-bottom: 1px solid #222222;
          gap: 15px;
        }

        .learning-list span,
        .learning-list small {
          color: #555555;
        }


        /* ================= CONTACT ================= */

        .contact {
          position: relative;
          z-index: 2;
          text-align: center;
        }

        .contact h2 {
          margin-top: 30px;
        }

        .contact .section > p:not(.section-label) {
          color: #777777;
          margin: 30px auto;
        }

        .contact-button {
          display: inline-block;
          background: white;
          color: black;
        }

        .contact-button:hover {
          background: #cccccc;
          transform: translateY(-5px);
        }


        /* ================= FOOTER ================= */

        footer {
          position: relative;
          z-index: 3;
          max-width: 1200px;
          margin: auto;
          padding: 35px 30px;
          border-top: 1px solid #222222;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        footer strong {
          font-size: 20px;
        }

        footer p {
          color: #555555;
          font-size: 12px;
        }

        footer > span {
          color: #555555;
          font-size: 12px;
        }


        /* ================= TABLET ================= */

        @media (max-width: 900px) {

          nav {
            display: none;
          }

          .hero {
            grid-template-columns: 1fr;
          }

          .profile-card {
            max-width: 450px;
          }

          .stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .stats div:nth-child(2) {
            border-right: none;
          }

          .about,
          .project,
          .project.reverse,
          .learning-box {
            grid-template-columns: 1fr;
          }

          .project.reverse .project-preview {
            order: 0;
          }

          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .heading-row {
            flex-direction: column;
            align-items: flex-start;
          }

          .learning-list {
            border-left: none;
            border-top: 1px solid #333333;
            padding-left: 0;
            padding-top: 20px;
          }

          .solar-system {
            right: -400px;
            opacity: 0.6;
          }

        }


        /* ================= PHONE ================= */

        @media (max-width: 600px) {

          .nav-container {
            padding: 20px;
          }

          .nav-button {
            display: none;
          }

          .hero,
          .section {
            padding-left: 20px;
            padding-right: 20px;
          }

          .hero {
            padding-top: 80px;
            padding-bottom: 80px;
          }

          .hero h1 {
            letter-spacing: -3px;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: flex-start;
          }

          .stats {
            grid-template-columns: 1fr 1fr;
          }

          .stats div {
            padding: 25px 20px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
          }

          .project-preview {
            min-height: 280px;
          }

          .learning-box {
            padding: 30px 25px;
          }

          .learning-box h2 {
            font-size: 40px;
          }

          footer {
            padding: 30px 20px;
          }

          .solar-system {
            right: -470px;
            top: 450px;
            opacity: 0.35;
          }

        }

      `}</style>

    </main>
  );
}