import React from 'react';
import StakeAmount from './StakeAmount';
import RewardRate from './RewardRate';
import EarnedReward from './EarnedReward';
import Navigation from '../Navigation/Navigation';
const DisplayPannel = () => {
  return (
    <div className="displayPannel">
      <StakeAmount />
      <RewardRate />
      <EarnedReward />
      <Navigation />
    </div>
  );
};

export default DisplayPannel;
