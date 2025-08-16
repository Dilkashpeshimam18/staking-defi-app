import React, { useState, useContext, useRef } from 'react';
import Web3Context from '../../context/Web3Context';
import { ethers } from 'ethers';

const TokenApproval = () => {
      const { stakeTokenContract, stakingContract } = useContext(Web3Context);
  const [tranStatus, setTranStatus] = useState('');

  const approveTokenRef = useRef();
  const approveToken = async (e) => {
    e.preventDefault();
    try {
      const amount = approveTokenRef.current.value.trim();
      if (isNaN(amount || amount <= 0)) {
        console.error('Please enter a valid positive number');
        return;
      }
      const amountToSend = ethers.parseUnits(amount, 18).toString();
      console.log(amountToSend)
     const transaction= await stakeTokenContract.approve(stakingContract.target,amountToSend) //staking.target will give contract address
     console.log(transaction)
     setTranStatus('Transaction is in pending...')
    const receipt=await transaction.wait()
    if(receipt.status===1){
        setTranStatus('Transaction is successful')
        setTimeout(()=>{
            setTranStatus('')
        },5000)
        approveTokenRef.current.value=''
    }else{
        setTranStatus('Transactionn Failed')
    }
    } catch (error) {
      console.log('Token approval failed',error);
    }
  };
  return (
    <div>
    {tranStatus && <div>{tranStatus}</div>}
      <form>
        <label>Token Approval:</label>
        <input ref={approveTokenRef} type="text" />

        <button onClick={approveToken} type="submit">
          Token Approved
        </button>
      </form>
    </div>
  );
};

export default TokenApproval;
