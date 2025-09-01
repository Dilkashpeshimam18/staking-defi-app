import React, { useState, useEffect } from 'react';
import { connectWallet } from '../../../utils/connectWallet.jsx';
import Web3Context from '../../../context/Web3Context.jsx';
import { handleAccountChange } from '../../../utils/handleAccountChange.jsx';
import { handleChainChange } from '../../../utils/handleChainChange.jsx';
import { useNavigate } from 'react-router-dom';

const Wallet = ({ children }) => {
  const [state, setState] = useState({
    provider: null,
    account: null,
    stakingContract: null,
    stakeTokenContract: null,
    chainId: null,
    signer: null,
    rewardTokenContract: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!window.ethereum) return;

    const accountChangedHandler = () => handleAccountChange(setState);
    const chainChangedHandler = () => handleChainChange(setState);

    window.ethereum.on('accountsChanged', accountChangedHandler);
    window.ethereum.on('chainChanged', chainChangedHandler);

    return () => {
      window.ethereum.removeListener('accountsChanged', accountChangedHandler);
      window.ethereum.removeListener('chainChanged', chainChangedHandler);
    };
  }, []);

  const handleWallet = async () => {
    try {
      setIsLoading(true);
      const { provider, selectedAccount, stakingContract, stakeTokenContract, signer, chainId, rewardTokenContract } =
        await connectWallet();

      setState({
        provider,
        account: selectedAccount,
        stakingContract,
        stakeTokenContract,
        chainId,
        signer,
        rewardTokenContract,
      });

      navigate('/staking');
    } catch (err) {
      console.log('Error connecting wallet:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Web3Context.Provider value={{ ...state, handleWallet, isLoading }}>{children}</Web3Context.Provider>
    </div>
  );
};

export default Wallet;
