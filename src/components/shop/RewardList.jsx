/* eslint-disable react/prop-types */
import Reward from './Reward';
import './reward.css';

const RewardList = ({
  rewardsToDisplay,
  onRewardClick,
  setClickedRewardKey,
}) => {
  return (
    <div className="rewards">
      {rewardsToDisplay.map((reward, i) => {
        return (
          <Reward
            key={reward.id}
            id={i}
            rewardName={reward.name}
            price={reward.price}
            active={reward.active}
            onRewardClick={onRewardClick}
            setClickedRewardKey={setClickedRewardKey}
          />
        );
      })}
    </div>
  );
};

export default RewardList;
