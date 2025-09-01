import React, { useContext } from 'react';
import Web3Context from '../../../context/Web3Context';

const ConnectedAccount = () => {
  const { account } = useContext(Web3Context);

  return <div className="displayPannel__text">{account ? `Connected: ${account}` : 'Account: Not Connected'}</div>;
};

export default ConnectedAccount;
