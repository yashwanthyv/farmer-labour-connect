import "./App.css";
import { useState } from "react";

function App() {
  const [workerMessage, setWorkerMessage] = useState("");
  const [jobMessage, setJobMessage] = useState("");
  const [equipmentMessage, setEquipmentMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSearch, setActiveSearch] = useState("");

  const handleSearch = () => {
    setActiveSearch(searchTerm.trim());
  };
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

        <div className="search-container">
          <input
            type="text"
            placeholder="Search workers, jobs, or equipment..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button onClick={handleSearch}>Search</button>

          <button
            onClick={() => {
              setSearchTerm("");
              setActiveSearch("");
            }}
          >
            Clear Search
          </button>
        </div>

        <div className="services-container">
          {("find workers".includes(activeSearch.toLowerCase().trim()) ||
            "workers".includes(activeSearch.toLowerCase().trim()) ||
            activeSearch.trim() === "") && (
            <div className="service-card" id="workers">
              <h3>Find Workers</h3>
              <p>Connect with agricultural labourers for your farm.</p>
              <button
                onClick={() => setWorkerMessage("Worker search coming soon!")}
              >
                Explore Workers
              </button>

              {workerMessage && (
                <div className="worker-message">
                  <p>{workerMessage}</p>
                  <button onClick={() => setWorkerMessage("")}>Close</button>
                </div>
              )}
            </div>
          )}

          {("find jobs".includes(activeSearch.toLowerCase().trim()) ||
            "jobs".includes(activeSearch.toLowerCase().trim()) ||
            activeSearch.trim() === "") && (
            <div className="service-card" id="jobs">
              <h3>Find Jobs</h3>
              <p>Discover farming jobs that match your skills.</p>
              <button onClick={() => setJobMessage("Job search coming soon!")}>
                Explore Jobs
              </button>

              {jobMessage && (
                <div className="worker-message">
                  <p>{jobMessage}</p>
                  <button onClick={() => setJobMessage("")}>Close</button>
                </div>
              )}
            </div>
          )}

          {("rent equipment".includes(activeSearch.toLowerCase().trim()) ||
            "equipment".includes(activeSearch.toLowerCase().trim()) ||
            activeSearch.trim() === "") && (
            <div className="service-card" id="equipment">
              <h3>Rent Equipment</h3>
              <p>Access tractors and other agricultural machinery.</p>
              <button
                onClick={() =>
                  setEquipmentMessage("Equipment rental coming soon!")
                }
              >
                Explore Equipment
              </button>

              {equipmentMessage && (
                <div className="worker-message">
                  <p>{equipmentMessage}</p>
                  <button onClick={() => setEquipmentMessage("")}>Close</button>
                </div>
              )}
            </div>
          )}

          {activeSearch.trim() !== "" &&
            ![
              "find workers",
              "workers",
              "find jobs",
              "jobs",
              "rent equipment",
              "equipment",
            ].some((service) =>
              service.includes(activeSearch.toLowerCase().trim()),
            ) && (
              <p className="no-results">
                No services found. Try searching for workers, jobs, or
                equipment.
              </p>
            )}
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
