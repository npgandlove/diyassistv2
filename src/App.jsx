import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1>The DIY Assist</h1>
      <h3>Live Video Help From Trusted DIY Professionals</h3>

      <p>
        The DIY Assist connects you with vetted professionals who guide you live over video
        while you work on your DIY project.
      </p>

      <h2>How It Works</h2>
      <ol>
        <li>Describe your project</li>
        <li>Get matched with a professional</li>
        <li>Work together live over video</li>
      </ol>

      <h2>Get Started</h2>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSd6VfLTLr1TVZtTZpFUNYyfEcAqhFvlAjbVFRZygrhKU3XsYQ/viewform?usp=publish-editor">
        <button style={{ padding: "12px 20px", fontSize: "16px" }}>
          Request Live DIY Help
        </button>
      </a>
    </div>
  );
}

export default App;
