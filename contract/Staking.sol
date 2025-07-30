// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";


contract Staking is ReentrancyGuard{
    IERC20 public stakeToken;
    IERC20 public rewardToken;
    uint256 public rewardPerTokenStored;
    uint256 public  lastUpdateTime;
     uint256 public constant REWARD_TOKEN=10;
     uint256 private totalStakedToken;

     mapping (address=>uint256) public stakedAmount;
     mapping (address=>uint256) public reward;
     mapping (address=>uint256) public userRewardPerTokenPaid;

     event Staked(address indexed user,uint256  indexed amount);
     event Withdrawn(address indexed user,uint256  indexed amount);
     event RewardClaimed(address indexed user,uint256  indexed amount);

    constructor(address _stakeToken,address _rewardToken){
        stakeToken=IERC20(_stakeToken);
        rewardToken=IERC20(_rewardToken);
    }

    function rewardPerToken() public view returns (uint){
        if(totalStakedToken==0){
            return rewardPerTokenStored;
        }

        uint totalTime=block.timestamp-lastUpdateTime;//(latestTime-stakeTime)
        uint totalReward=REWARD_TOKEN * totalTime;

        return rewardPerTokenStored+(totalReward/totalStakedToken);
    }

    function earnedReward(address account) public view returns (uint){
        return ((stakedAmount[account])*(rewardPerToken()-userRewardPerTokenPaid[account]));
    }

    modifier updateReward(address account){
        rewardPerTokenStored=rewardPerToken();
        lastUpdateTime=block.timestamp;
        reward[account]=earnedReward(account);
        userRewardPerTokenPaid[account]=rewardPerTokenStored;
        _;
    }

    function stake(uint amount) external nonReentrant updateReward(msg.sender)  {
        require(amount>0,"Amount must be greater than zero");
        totalStakedToken += amount;
        stakedAmount[msg.sender] +=amount;
        emit Staked(msg.sender, amount);
        bool success=stakeToken.transferFrom(msg.sender,address(this),amount);
        require(success,"Tranfer Failed");
    }

    function withdraw(uint amount) external nonReentrant updateReward(msg.sender)  {
        require(amount>0,"Amount must be greater than zero");
        totalStakedToken -= amount;
        stakedAmount[msg.sender] -=amount;
        emit Withdrawn(msg.sender, amount);
        bool success=stakeToken.transfer(msg.sender,amount);
        require(success,"Tranfer Failed");
    }
   function claimReward() external nonReentrant updateReward(msg.sender)  {
        uint userReward=reward[msg.sender];
        require(userReward>0,"No reward");
        reward[msg.sender]=0;
        emit RewardClaimed(msg.sender, userReward);
        bool success=rewardToken.transfer(msg.sender,userReward);
        require(success,"Tranfer Failed");
    }

}

