import React, { useState, useContext, useEffect } from 'react';
import Web3Context from '../../../context/Web3Context.jsx';
import { ethers } from 'ethers';

const EarnedReward = () => {
  const { stakingContract, account, rewardTokenContract } = useContext(Web3Context);
  const [earnedReward, setEarnedReward] = useState(0);

  useEffect(() => {
    const fetchEarnedReward = async () => {
      try {
        const tokenDecimals = await rewardTokenContract.decimals();

        const earnedReward = await stakingContract.reward(account);
        const display = ethers.formatUnits(earnedReward, tokenDecimals);

        // const roundReward = parseFloat(earnedRewardEth).toFixed(2);
        setEarnedReward(Number(display).toFixed(2));
      } catch (err) {
        console.log('Error fetching earned reward', err);
      }
    };

    const interval = setInterval(() => {
      stakingContract && fetchEarnedReward();
    }, 2000);
    return () => clearInterval(interval);
  }, [stakingContract, account,earnedReward]);
  return <div className="displayPannel__text">Earned Reward : {earnedReward}</div>;
};

export default EarnedReward;
