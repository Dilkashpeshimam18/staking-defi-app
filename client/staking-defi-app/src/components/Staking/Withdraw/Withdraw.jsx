import React, { useState, useContext, useRef } from 'react';
import Web3Context from '../../../context/Web3Context.jsx';
import { ethers } from 'ethers';
import StakingContext from '../../../context/StakingContext.jsx';

const Withdraw = () => {
  const { stakingContract, stakeTokenContract } = useContext(Web3Context);
  const [tranStatus, setTranStatus] = useState('');
  const { isReload, setIsReload } = useContext(StakingContext);

  const withdrawTokenRef = useRef();

  const withdrawToken = async (e) => {
    e.preventDefault();
    try {
      const tokenDecimals = await stakeTokenContract.decimals(); // -> 0
      const amountStr = withdrawTokenRef.current.value.trim();

      // enforce integer input for 0-decimal tokens
      if (!/^\d+$/.test(amountStr) || BigInt(amountStr) <= 0n) {
        setTranStatus('Enter a whole number > 0');
        return;
      }

      const amountToWithdraw = ethers.parseUnits(amountStr, tokenDecimals);
      const transaction = await stakingContract.withdraw(amountToWithdraw);
      setTranStatus('Withdraw Transaction is in pending...');
      const receipt = await transaction.wait();
      if (receipt.status === 1) {
        setTranStatus(' Withdraw transaction is successful');
        setIsReload(!isReload);
        setTimeout(() => {
          setTranStatus('');
        }, 5000);
        withdrawTokenRef.current.value = '';
      } else {
        setTranStatus('Withdraw Transactionn Failed');
      }
    } catch (error) {
      console.log('Withdraw transaction failed', error);
    }
  };
  return (
    <div>
      {tranStatus && <div className="tab-status">{tranStatus}</div>}
      <form>
        <label>Withdraw Amount:</label>
        <input ref={withdrawTokenRef} type="text" placeholder="Enter withdrawal amount..." />

        <button onClick={withdrawToken} type="submit">
          Withdraw
        </button>
      </form>
    </div>
  );
};

export default Withdraw;
