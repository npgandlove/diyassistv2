import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Providers from "./Providers";

function Home() {
  return (
    <div style={{ fontFamily: "Arial", padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1>The DIY Assist</h1>
      <h3>Live Video Help From Trusted DIY Professionals</h3>

      <p>
        Get real-time guidance from vetted professionals while you work on your DIY project.
      </p>

      <a href="https://form.jotform.com/260167434511047">
        <button style={{ padding: "12px 20px", fontSize: "16px", marginRight: "10px" }}>
          Request Live DIY Help
        </button>
      </a>

      <Link to="/providers">
        <button style={{ padding: "12px 20px", fontSize: "16px" }}>
          Become a Provider
        </button>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/providers" element={<Providers />} />
      </Routes>
    </Router>
  );
}

export default App;
