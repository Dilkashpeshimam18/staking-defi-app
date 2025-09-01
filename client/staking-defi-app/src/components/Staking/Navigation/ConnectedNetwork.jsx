import React, { useContext } from "react";
import Web3Context from "../../../context/Web3Context";

const ConnectedNetwork = () => {
  const { chainId } = useContext(Web3Context);

   return (
    <div className="displayPannel__text">
      {chainId ? `Chain: ${chainId}` : "Network: Not Connected"}
    </div>
  );
};

export default ConnectedNetwork;
