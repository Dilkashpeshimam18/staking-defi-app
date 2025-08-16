import React, { useState, useContext, useEffect } from 'react';
import Web3Context from '../../context/Web3Context';
import { ethers } from 'ethers';

const EarnedReward = () => {
   const { stakingContract,account } = useContext(Web3Context);
  const [earnedReward, setEarnedReward] = useState(0);

  useEffect(() => {
    const fetchEarnedReward = async () => {
      try {
        const earnedReward = await stakingContract.reward(account);
        const earnedRewardEth = ethers.formatEther(earnedReward.toString(), 18);

        console.log(earnedRewardEth);
        const roundReward=parseFloat(earnedRewardEth).toFixed(2)
        setEarnedReward(roundReward);
      } catch (err) {
        console.log('Error fetching earned reward', err);
      }
    };
    stakingContract && fetchEarnedReward();
  }, [stakingContract,account]);
  return (
    <div>
    Earned Reward : {earnedReward} 
    </div>
  )
}

export default EarnedReward