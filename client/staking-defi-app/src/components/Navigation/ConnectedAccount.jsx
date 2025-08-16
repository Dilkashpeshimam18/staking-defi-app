import React,{useContext} from 'react'
import Web3Context from '../../context/Web3Context'

const ConnectedAccount = () => {
    const {account}=useContext(Web3Context);
    console.log('account',account)
  return (
    <div>Connected Account:{account}</div>
  )
}

export default ConnectedAccount