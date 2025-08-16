import React from 'react'
import StakeAmount from './StakeAmount'
import RewardRate from './RewardRate'
import EarnedReward from './EarnedReward'
const DisplayPannel = () => {
  return (
    <div>
    <StakeAmount />
    <RewardRate />
    <EarnedReward />
    </div>
  )
}

export default DisplayPannel