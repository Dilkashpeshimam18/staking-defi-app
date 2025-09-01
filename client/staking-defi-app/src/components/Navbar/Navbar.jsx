import { useContext, useState } from "react";
import Web3Context  from "../../context/Web3Context";
import './Navbar.css'
function Navbar() {
  const { handleWallet, account } = useContext(Web3Context);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">🔋 DSTAKE</div>

      {/* Hamburger */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>Home</li>
        <li>How It Works</li>
        <li>Supported Cryptos</li>
        <li>Staking Plans</li>
        <li>FAQ</li>
        <li>Contact Us</li>

        {/* Wallet Button inside menu for mobile */}
        <li className="menu-wallet">
          {account ? (
            <button className="wallet-btn">Connected</button>
          ) : (
            <button onClick={handleWallet} className="wallet-btn">
              Connect Wallet
            </button>
          )}
        </li>
      </ul>

      {/* Wallet button on desktop */}
      <div className="desktop-wallet">
        {account ? (
          <button className="wallet-btn">Connected</button>
        ) : (
          <button onClick={handleWallet} className="wallet-btn">
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
