import React from 'react';
import './Hero.css';
import HeroImg from '../../../assets/nft-icon.png';
function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="subtitle">● GROW YOUR ASSETS EFFORTLESSLY!</p>
        <h1>
          Earn <span className="highlight">Passive</span> Income <br />
          with Crypto Staking
        </h1>
        <p className="desc">
          Stake your cryptocurrencies and earn up to 15% APY. Secure, transparent, and beginner-friendly.
        </p>
        <div className="btn-group">
          <button className="start-btn">Start Staking Now</button>
          <button className="learn-btn">Learn How It Works</button>
        </div>
      </div>

      <div className="hero-img">
        <img src={HeroImg} />
      </div>
    </section>
  );
}

export default Hero;
