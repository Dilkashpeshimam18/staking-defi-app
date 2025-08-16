import './App.css';
import DisplayPannel from './components/DisplayPannel/DisplayPannel';
import StakeAmount from './components/DisplayPannel/StakeAmount';
import Navigation from './components/Navigation/Navigation';
import TokenApproval from './components/StakeToken/TokenApproval';
import Wallet from './components/Wallet/Wallet';

function App() {
  return (
    <>
      <Wallet>
        <Navigation />
        <DisplayPannel />
        <StakeAmount />
        <TokenApproval />
      </Wallet>
    </>
  );
}

export default App;
