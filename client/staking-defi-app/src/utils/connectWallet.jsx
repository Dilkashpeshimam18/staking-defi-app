import { ethers, Contract } from 'ethers';
import stakeTokenAbi from '../abi/stakeTokenAbi.json';
import stakingAbi from '../abi/stakingAbi.json';
import rewardAbi from '../abi/rewardTokenAbi.json'
export const connectWallet = async () => {
  try {
    if (!window.ethereum) throw new Error('Metamask not installed');

    // Request accounts
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    const selectedAccount = accounts[0];
    if (!selectedAccount) throw new Error('No ethereum account available!');

    // Get chainId properly
    const chainIdHex = await window.ethereum.request({ method: 'eth_chainId' });
    const chainId = parseInt(chainIdHex, 16);

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const stakeTokenContractAddress = '0x8a5b010C35F331AE3fa53A8D945f4788Ea921c3b';
    const stakeContractAddress = '0xAa7833d7902C57C1252A8A2AeE6ee90B514Db605';
    const rewardTokenContractAddress = '0x4e9A02eb2007C1F99978CF7CF4F000b7f3562F02';

    const stakingContract = new Contract(stakeContractAddress, stakingAbi, signer);
    const stakeTokenContract = new Contract(stakeTokenContractAddress, stakeTokenAbi, signer);
    const rewardTokenContract = new Contract(rewardTokenContractAddress, rewardAbi, signer);

    return {
      provider,
      selectedAccount,
      stakingContract,
      stakeTokenContract,
      rewardTokenContract,
      signer,
      chainId,
    };
  } catch (err) {
    console.error(err);
    throw err;
  }
};
