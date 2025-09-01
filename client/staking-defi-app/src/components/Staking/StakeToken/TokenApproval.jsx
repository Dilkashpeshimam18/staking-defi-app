import React, { useState, useContext, useRef } from 'react';
import Web3Context from '../../../context/Web3Context.jsx';
import { ethers } from 'ethers';
import StakingContext from '../../../context/StakingContext.jsx';

const TokenApproval = () => {
  const { stakeTokenContract, stakingContract } = useContext(Web3Context);
  const [tranStatus, setTranStatus] = useState('');
  const { isReload, setIsReload } = useContext(StakingContext);

  const approveTokenRef = useRef();
  const approveToken = async (e) => {
    e.preventDefault();
    try {
      // const amount = approveTokenRef.current.value.trim();
      // if (isNaN(amount || amount <= 0)) {
      //   console.error('Please enter a valid positive number');
      //   return;
      // }
      // const amountToSend = ethers.parseUnits(amount, 18).toString();

      // before approve or stake:
      const tokenDecimals = await stakeTokenContract.decimals(); // -> 0
      const amountStr = approveTokenRef.current.value.trim();

      // enforce integer input for 0-decimal tokens
      if (!/^\d+$/.test(amountStr) || BigInt(amountStr) <= 0n) {
        setTranStatus('Enter a whole number > 0');
        return;
      }

      const amountToSend = ethers.parseUnits(amountStr, tokenDecimals); // == BigInt(amountStr)

      const transaction = await stakeTokenContract.approve(stakingContract.target, amountToSend); //staking.target will give contract address
      setTranStatus('Transaction is in pending...');
      const receipt = await transaction.wait();
      if (receipt.status === 1) {
        setTranStatus('Transaction is successful');
        setIsReload(!isReload);

        setTimeout(() => {
          setTranStatus('');
        }, 5000);
        approveTokenRef.current.value = '';
      } else {
        setTranStatus('Transactionn Failed');
      }
    } catch (error) {
      console.log('Token approval failed', error);
    }
  };
  return (
    <div>
      {tranStatus && <div className="tab-status">{tranStatus}</div>}
      <form>
        <label>Token Approval:</label>
        <input ref={approveTokenRef} type="text" placeholder="Enter approval amount..." />

        <button onClick={approveToken} type="submit">
          Token Approved
        </button>
      </form>
    </div>
  );
};

export default TokenApproval;
