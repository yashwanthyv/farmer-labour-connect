import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function ProjectHeading() {
  return (
    <>
      <h1 className="project-title">Farmer–Labour Connect</h1>
      <p>Connecting farmers and agricultural workers</p>
    </>
  );
}

function ProjectDescription({ text = "Project description coming soon===." }) {
  return <p>{text}</p>;
}

function App() {
  const description = "Find nearby agricultural workers$$$.";
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="navbar">
        <h2 className="logo">Farmer–Labour Connect</h2>

        <nav>
          <a href="#home">Home</a>
          <a href="#workers">Find Workers</a>
          <a href="#jobs">Find Jobs</a>
          <a href="#equipment">Equipment</a>
        </nav>

        <button className="login-btn">Login</button>
      </header>

      <section className="hero-section" id="home">
        <h1>Connecting Farmers with Skilled Workers</h1>

        <p>
          Find agricultural labourers, discover farming jobs, and rent the
          machinery you need — all in one place.
        </p>

        <div className="hero-buttons">
          <button>Find Workers</button>
          <button>Find Jobs</button>
        </div>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>

        <div className="services-container">
          <div className="service-card" id="workers">
            <h3>Find Workers</h3>
            <p>Connect with agricultural labourers for your farm.</p>
          </div>

          <div className="service-card" id="jobs">
            <h3>Find Jobs</h3>
            <p>Discover farming jobs that match your skills.</p>
          </div>

          <div className="service-card" id="equipment">
            <h3>Rent Equipment</h3>
            <p>Access tractors and other agricultural machinery.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>Farmer–Labour Connect</p>
        <p>Connecting farmers, workers, and equipment owners.</p>
      </footer>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
