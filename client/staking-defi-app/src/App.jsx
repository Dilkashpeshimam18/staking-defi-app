import './App.css';
import Footer from './components/HomePage/Footer/Footer.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Wallet from './components/Staking/Wallet/Wallet.jsx';
import Staking from './components/Staking/Staking';
import { StakingProvider } from './context/StakingContext.jsx';
import Web3Context from './context/Web3Context';
import { useContext } from 'react';

function AppRoutes() {
  const { account } = useContext(Web3Context);

  return (
    <Routes>
      <Route path="/" element={account ? <Navigate to="/staking" replace /> : <HomePage />} />
      <Route path="/staking" element={<Staking />} />
    </Routes>
  );
}
function App() {
  return (
    <Router>
      <Wallet>
        <StakingProvider>
          <div className="app">
            <Navbar />
            <AppRoutes />

            <Footer />
          </div>
        </StakingProvider>
      </Wallet>
    </Router>
  );
}

export default App;
