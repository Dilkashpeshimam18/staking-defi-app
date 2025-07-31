export const handleAccountChange=async(setState)=>{
  try{
    const accounts=window.ethereum({
        method:'eth_requestAccounts'
    })
    const selectedAccount=accounts[0]
    console.log(selectedAccount)
    setState(prevState=>({...prevState,account:selectedAccount}))

  }catch(err){
    console.log(err)
  }
}