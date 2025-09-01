import React, { useState } from 'react';

import DisplayPannel from './DisplayPannel/DisplayPannel.jsx';
import Navigation from './Navigation/Navigation.jsx';
import TokenApproval from './StakeToken/TokenApproval.jsx';
import Wallet from './Wallet/Wallet.jsx';
import Stake from './StakeToken/StakeToken.jsx';
import Withdraw from './Withdraw/Withdraw.jsx';
import ClaimReward from './ClaimReward/ClaimReward.jsx';
import { StakingProvider } from '../../context/StakingContext.jsx';
import './Staking.css';

function Staking() {
  const [activeTab, setActiveTab] = useState('stake');

  return (
    <div className="staking-container">
      <DisplayPannel />

      <div className="tabs-container">
        <div className="tabs">
          <button className={activeTab === 'stake' ? 'tab active' : 'tab'} onClick={() => setActiveTab('stake')}>
            Stake
          </button>
          <button className={activeTab === 'withdraw' ? 'tab active' : 'tab'} onClick={() => setActiveTab('withdraw')}>
            Withdraw
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'stake' && (
            <>
              <TokenApproval />
              <Stake />
            </>
          )}
          {activeTab === 'withdraw' && <Withdraw />}
        </div>
      </div>

      {/* Claim Reward */}
      <ClaimReward />
    </div>
  );
}

export default Staking;
