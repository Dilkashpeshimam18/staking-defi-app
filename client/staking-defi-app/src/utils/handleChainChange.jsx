export const handleChainChange = async (setState) => {
  try {
    const chainIdHex = await window.ethereum.request({
      method: 'eth_chainId',
    });
    let chainId = parseInt(chainIdHex, 10);
        console.log(chainId)

    setState((prevState) => ({ ...prevState, chainId }));
  } catch (err) {
    console.log(err);
  }
};
