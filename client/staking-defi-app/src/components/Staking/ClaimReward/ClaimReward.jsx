import { useState, useContext } from 'react';
import Web3Context from '../../../context/Web3Context.jsx';
const ClaimReward = () => {
  const { stakingContract } = useContext(Web3Context);
  const [tranStatus, setTranStatus] = useState('');

  const claimReward = async (e) => {
    e.preventDefault();
    try {
      const transaction = await stakingContract.claimReward();
      setTranStatus('Claim reward transaction is in pending...');
      const receipt = await transaction.wait();
      if (receipt.status === 1) {
        setTranStatus(' Claim reward transaction is successful');
        setTimeout(() => {
          setTranStatus('');
        }, 5000);
      } else {
        setTranStatus('Claim reward transactionn Failed');
      }
    } catch (error) {
      console.log('Claim reward transaction failed', error);
    }
  };
  return (
    <div>
      {tranStatus && (
        <div style={{ marginTop: '15px' }} className="tab-status">
          {tranStatus}
        </div>
      )}
      <button className="claim-reward" onClick={claimReward}>
        Claim Reward
      </button>
    </div>
  );
};

export default ClaimReward;
