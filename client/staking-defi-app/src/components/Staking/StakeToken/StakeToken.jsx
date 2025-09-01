import React, { useState, useContext, useRef } from 'react';
import Web3Context from '../../../context/Web3Context.jsx';
import { ethers } from 'ethers';
import StakingContext from '../../../context/StakingContext.jsx';

const StakeToken = () => {
  const { stakingContract, stakeTokenContract } = useContext(Web3Context);
  const [tranStatus, setTranStatus] = useState('');
  const { isReload, setIsReload } = useContext(StakingContext);

  const stakeTokenRef = useRef();

  const stakeToken = async (e) => {
    e.preventDefault();
    try {
      // const amount = stakeTokenRef.current.value.trim();
      // if (isNaN(amount || amount <= 0)) {
      //   console.error('Please enter a valid positive number');
      //   return;
      // }
      // const amountToStake = ethers.parseUnits(amount, 18).toString();

      if (!stakeTokenContract || !stakingContract) {
        setTranStatus('Wallet not connected');
        return;
      }
      const tokenDecimals = await stakeTokenContract.decimals(); // -> 0
      const amountStr = stakeTokenRef.current.value.trim();

      // enforce integer input for 0-decimal tokens
      if (!/^\d+$/.test(amountStr) || BigInt(amountStr) <= 0n) {
        setTranStatus('Enter a whole number > 0');
        return;
      }

      const amountToStake = ethers.parseUnits(amountStr, tokenDecimals);
      const transaction = await stakingContract.stake(amountToStake);
      setTranStatus('Staking Transaction is in pending...');
      const receipt = await transaction.wait();
      if (receipt.status === 1) {
        setTranStatus(' Staking transaction is successful');
        setIsReload(!isReload);
        setTimeout(() => {
          setTranStatus('');
        }, 5000);
        stakeTokenRef.current.value = '';
      } else {
        setTranStatus('Staking Transactionn Failed');
      }
    } catch (error) {
      console.log('Staking transaction failed', error);
    }
  };
  return (
    <div>
      {tranStatus && <div className="tab-status">{tranStatus}</div>}
      <form>
        <label>Stake Amount:</label>
        <input ref={stakeTokenRef} type="text" placeholder="Enter stake amount..." />

        <button onClick={stakeToken} type="submit">
          Stake
        </button>
      </form>
    </div>
  );
};

export default StakeToken;
