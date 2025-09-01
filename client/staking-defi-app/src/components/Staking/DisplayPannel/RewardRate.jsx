import React, { useState, useContext, useEffect } from 'react';
import Web3Context from '../../../context/Web3Context.jsx';

const RewardRate = () => {
  const { stakingContract } = useContext(Web3Context);
  const [rewardRate, setRewardRate] = useState(0);

  useEffect(() => {
    const fetchRewardRate = async () => {
      try {

        const rewardRate = await stakingContract.REWARD_TOKEN();

        setRewardRate(rewardRate.toString());
      } catch (err) {
        console.log('Error fetching reward rate', err);
      }
    };
    stakingContract && fetchRewardRate();
  }, [stakingContract]);
  return <div className="displayPannel__text">RewardRate : {rewardRate} token/second</div>;
};

export default RewardRate;
