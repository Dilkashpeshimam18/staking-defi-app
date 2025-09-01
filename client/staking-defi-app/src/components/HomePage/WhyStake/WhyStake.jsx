import React from "react";
import "./WhyStake.css";

function WhyStake() {
  return (
    <section className="why-stake">
   

      <div className="why-right">
        <h2>
          Why <span className="highlight">Stake</span> with Us
        </h2>
        <p className="why-desc">
          Discover the advantages of staking with DSTAKE – where security,
          simplicity, and high rewards come together to help you grow your
          crypto effortlessly.
        </p>

        <div className="stake-cards">
          <div className="stake-card">
            <div className="icon">💹</div>
            <h3>High Returns</h3>
            <p>Earn competitive APY on your staked assets.</p>
          </div>

          <div className="stake-card">
            <div className="icon">🛡️</div>
            <h3>Security First</h3>
            <p>Your funds are protected with top-tier encryption and smart contracts.</p>
          </div>

          <div className="stake-card">
            <div className="icon">➕</div>
            <h3>Easy to Use</h3>
            <p>Stake in just a few clicks – no technical expertise required.</p>
          </div>

          <div className="stake-card">
            <div className="icon">⚙️</div>
            <h3>Flexible Options</h3>
            <p>Choose from a wide range of supported cryptocurrencies.</p>
          </div>

          <div className="stake-card">
            <div className="icon">⏰</div>
            <h3>24/7 Support</h3>
            <p>Our team is here to help you anytime.</p>
          </div>
           <div className="stake-card">
            <div className="icon">⏰</div>
            <h3>24/7 Support</h3>
            <p>Our team is here to help you anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyStake;
