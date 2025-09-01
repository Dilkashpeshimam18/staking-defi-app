export const handleChainChange = async (setState) => {
  try {
    const chainIdHex = await window.ethereum.request({ method: 'eth_chainId' });
    const chainId = parseInt(chainIdHex, 10);

    setState((prevState) => ({ ...prevState, chainId }));
  } catch (err) {
    console.log(err);
  }
};
