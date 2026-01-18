import React from "react";

function Providers() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "40px",
        maxWidth: "900px",
        margin: "0 auto",
        lineHeight: "1.6"
      }}
    >
      {/* Header */}
      <h1>The DIY Assist</h1>
      <h3>Get Paid for Your Expertise — Without Leaving the Jobsite</h3>

      <p>
        Turn your professional knowledge into income. The DIY Assist connects
        homeowners with experienced professionals who provide real-time guidance
        during DIY projects over live video.
      </p>

      {/* Who This Is For */}
      <h2>Who This Is For</h2>
      <ul>
        <li>Licensed electricians</li>
        <li>Licensed plumbers</li>
        <li>General contractors</li>
        <li>Experienced handymen</li>
        <li>IT and home networking professionals</li>
        <li>Smart home specialists</li>
      </ul>

      {/* How It Works */}
      <h2>How It Works</h2>
      <ol>
        <li>Apply and submit your credentials</li>
        <li>Get vetted by our team</li>
        <li>Accept requests that fit your schedule</li>
        <li>Provide guidance over live video</li>
      </ol>

      {/* Why Join */}
      <h2>Why Join The DIY Assist?</h2>
      <ul>
        <li>💰 Earn from your downtime</li>
        <li>📱 Work remotely</li>
        <li>⏱ Set your own rates</li>
        <li>🛠 You guide — the client does the work</li>
        <li>📄 Independent contractor (1099)</li>
      </ul>

      {/* Pricing */}
      <h2>Pricing & Fees</h2>
      <ul>
        <li>$250 annual membership</li>
        <li>13% service fee per completed session</li>
        <li>No minimum hours</li>
        <li>No exclusivity</li>
		    <li>No extra fees for narketing or advertising</li>
      </ul>

      {/* Requirements */}
      <h2>Requirements</h2>
      <ul>
        <li>18 years or older</li>
        <li>Legally authorized to work in the U.S.</li>
        <li>Valid licenses, certifications, or verifiable experience</li>
        <li>Compliance with applicable laws and regulations</li>
      </ul>

      {/* CTA */}
      <div style={{ marginTop: "30px" }}>
        <a
          href="https://form.jotform.com/260168284665061"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            style={{
              padding: "14px 24px",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Apply to Become a Provider
          </button>
        </a>
      </div>

      {/* Footer */}
      <p style={{ marginTop: "40px", fontSize: "14px", color: "#555" }}>
        Questions? Contact us at{" "}
        <a href="mailto:info@thediyassist.com">
          info@thediyassist.com
        </a>
      </p>
    </div>
  );
}

export default Providers;
