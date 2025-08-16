import React, { useState, useContext, useEffect } from 'react';
import Web3Context from '../../context/Web3Context';
import { ethers } from 'ethers';

const StakeAmount = () => {
  const { stakingContract, account } = useContext(Web3Context);
  const [stakeAmount, setStakeAmount] = useState(0);

  useEffect(() => {
    const fetchStakeBalance = async () => {
      try {
        const amountStake = await stakingContract.stakedAmount(account);
        const amountStakeEth=ethers.formatEther(amountStake.toString(),18)
        console.log(amountStakeEth);
        setStakeAmount(amountStakeEth);
      } catch (err) {
        console.log('Error fetching staking balance', err);
      }
    };
    fetchStakeBalance();
  }, [stakeAmount,account]);
  return <div>StakeAmount :{stakeAmount}</div>;
};

export default StakeAmount;
