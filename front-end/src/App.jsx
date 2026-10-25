import "./App.css";

function App() {
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

        <button
          className="login-btn"
          onClick={() => alert("Login page coming soon!")}
        >
          Login
        </button>
      </header>

      <section className="hero-section" id="home">
        <h1>Connecting Farmers with Skilled Workers</h1>

        <p>
          Find agricultural labourers, discover farming jobs, and rent the
          machinery you need — all in one place.
        </p>

        <div className="hero-buttons">
          <button onClick={() => (window.location.href = "#workers")}>
            Find Workers
          </button>
          <button onClick={() => (window.location.href = "#jobs")}>
            Find Jobs
          </button>
        </div>
      </section>

      <section className="services-section">
        <h2>Our Services</h2>
        <input
          type="text"
          placeholder="Search workers, jobs, or equipment..."
        />
        <button>Search</button>

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
    </>
  );
}

export default App;
