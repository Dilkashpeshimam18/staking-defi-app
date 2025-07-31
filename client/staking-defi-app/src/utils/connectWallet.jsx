import { ethers, Contract } from 'ethers';
import stakeTokenAbi from '../abi/stakeTokenAbi.json';
import stakingAbi from '../abi/stakingAbi.json';

export const connectWallet = async () => {
  try {
    let [provider, stakingContract, stakeTokenContract, chainId, signer] = [null];
    if (!window.ethereum) {
      throw new Error('Metamask not installed');
    }

    const accounts =await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    console.log(accounts)
    const chainIdHex =await window.ethereum.request({
      method: 'eth_chainId',
    });
    chainId = parseInt(chainIdHex, 10);
    const selectedAccount = accounts[0];
    if (!selectedAccount) {
      throw new Error('No ethereum account available!');
    }
    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();

    const stakeTokenContractAddress = '0x9D7f74d0C41E726EC95884E0e97Fa6129e3b5E99';
    const stakeContractAddress = '0xddaAd340b0f1Ef65169Ae5E41A8b10776a75482d';

    stakingContract = new Contract(stakeContractAddress, stakingAbi, signer);
    stakeTokenContract = new Contract(stakeTokenContractAddress, stakeTokenAbi, signer);
    return { provider, selectedAccount,stakingContract, stakeTokenContract,  signer, chainId };
  } catch (err) {
    console.error(err);
    throw err;
  }
};
