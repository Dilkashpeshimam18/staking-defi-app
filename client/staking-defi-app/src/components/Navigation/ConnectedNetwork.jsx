import React, { useContext } from 'react';
import Web3Context from '../../context/Web3Context';
const ConnectedNetwork = () => {
  const { chainId } = useContext(Web3Context);
  if (chainId === 11155111) {
    return <div>Connected Network: Sepolia</div>;
  } else {
    return <div>Connected Network: Unsuported Network</div>;
  }
};

export default ConnectedNetwork;
