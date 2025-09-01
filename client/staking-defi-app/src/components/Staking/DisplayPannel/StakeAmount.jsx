import React, { useState, useContext, useEffect } from 'react';
import Web3Context from '../../../context/Web3Context.jsx';
import StakingContext from '../../../context/StakingContext.jsx';
const DisplayStakeAmount = () => {
  const { stakingContract, account } = useContext(Web3Context);
  const [stakeAmount, setStakeAmount] = useState(0);

  const { isReload } = useContext(StakingContext);

  useEffect(() => {
    const fetchStakeBalance = async () => {
      try {
        const amountStake = await stakingContract.stakedAmount(account);

        setStakeAmount(amountStake.toString());
      } catch (err) {
        console.log('Error fetching staking balance', err);
      }
    };
    fetchStakeBalance();
  }, [stakeAmount, account, isReload]);
  return <div className="displayPannel__text">StakeAmount :{stakeAmount || 0}</div>;
};

export default DisplayStakeAmount;
