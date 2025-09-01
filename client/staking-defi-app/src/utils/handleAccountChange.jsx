export const handleAccountChange = async (setState) => {
  try {
    const accounts = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    const selectedAccount = accounts[0] || null;
    setState((prevState) => ({ ...prevState, account: selectedAccount }));
  } catch (err) {
    console.log(err);
  }
};
