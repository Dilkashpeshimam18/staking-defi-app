import React, { useState, useEffect } from 'react';
import { connectWallet } from '../../utils/connectWallet';
import Web3Context from '../../context/Web3Context';
import { handleAccountChange } from '../../utils/handleAccountChange';
import { handleChainChange } from '../../utils/handleChainChange';

const Wallet = ({ children }) => {
  const [state, setState] = useState({
    provider: null,
    account: null,
    stakingContract: null,
    stakeTokenContract: null,
    chainId: null,
    signer: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.ethereum.on('accountsChanged', () => handleAccountChange(setState));
    window.ethereum.on('chainChanged', () => handleChainChange(setState));

    return ()=>{
      window.ethereum.removeListener('accountsChanged', () => handleAccountChange(setState));
    window.ethereum.removeListener('chainChanged', () => handleChainChange(setState));
    }
  }, []);

  const handleWallet = async () => {
    try {
      setIsLoading(true);
      const { provider, selectedAccount, stakingContract, stakeTokenContract, signer, chainId } = await connectWallet();
      console.log(
        'Provider:',
        provider,
        'Selected Account:',
        selectedAccount,
        stakingContract,
        stakeTokenContract,
        signer,
        chainId
      );
      setState({
        provider,
        account: selectedAccount,
        stakingContract,
        stakeTokenContract,
        chainId,
        signer,
      });
    } catch (err) {
      console.log('Error connecting wallet:', err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Web3Context.Provider value={state}>{children}</Web3Context.Provider>
      {isLoading && <p>Loading...</p>}
      <button onClick={handleWallet}>Connect Wallet</button>
    </div>
  );
};

export default Wallet;
