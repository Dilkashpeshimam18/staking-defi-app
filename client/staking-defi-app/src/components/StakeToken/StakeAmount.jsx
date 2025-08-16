import React, { useState, useContext, useRef } from 'react';
import Web3Context from '../../context/Web3Context';
import { ethers } from 'ethers';
const StakeAmount = () => {
          const {  stakingContract } = useContext(Web3Context);
  const [tranStatus, setTranStatus] = useState('');

  const stakeTokenRef = useRef();

  const stakeToken = async (e) => {
    e.preventDefault();
    try {
      const amount = stakeTokenRef.current.value.trim();
      if (isNaN(amount || amount <= 0)) {
        console.error('Please enter a valid positive number');
        return;
      }
      const amountToStake= ethers.parseUnits(amount, 18).toString();
      console.log(amountToStake)
     const transaction= await stakingContract.stake(amountToStake) 
     console.log(transaction)
     setTranStatus('Staking Transaction is in pending...')
    const receipt=await transaction.wait()
    if(receipt.status===1){
        setTranStatus(' Staking transaction is successful')
        setTimeout(()=>{
            setTranStatus('')
        },5000)
        stakeTokenRef.current.value=''
    }else{
        setTranStatus('Staking Transactionn Failed')
    }
    } catch (error) {
      console.log('Staking transaction failed',error);
    }
  };
  return (
    <div>
    {tranStatus && <div>{tranStatus}</div>}
      <form>
        <label>Stake Amount:</label>
        <input ref={stakeTokenRef} type="text" />

        <button onClick={stakeToken} type="submit">
          Stake
        </button>
      </form>
    </div>
  )
}

export default StakeAmount