import React from "react";
import "./HowItWork.css";

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="how-header">
        <h2>
          How Crypto Staking Works in <span className="highlight">3 Simple Steps</span>
        </h2>
        <p>
          Staking your crypto has never been easier. Follow these three simple
          steps to start earning rewards today!
        </p>
      </div>

      <div className="steps-container">
        <div className="step-card">
          <div className="step-number">1</div>
          <h3>Choose Your Crypto</h3>
          <p>Select the cryptocurrency you want to stake.</p>
        </div>

        <div className="step-card">
          <div className="step-number">2</div>
          <h3>Stake & Earn</h3>
          <p>Lock your assets and start earning rewards.</p>
        </div>

        <div className="step-card">
          <div className="step-number">3</div>
          <h3>Withdraw Anytime</h3>
          <p>Unstake and access your funds whenever you need them.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
