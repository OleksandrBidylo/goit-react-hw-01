import s from "./task2.module.css";

const FriendListItem = ({ friend }) => {
  return (
    <li className={s.friendItem}>
      <img src={friend.avatar} alt={`${friend.name} avatar`} />
      <p className={s.fname}>{friend.name}</p>
      <p className={friend.isOnline ? s.statusOnline : s.statusOffline}>
        {friend.isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendListItem;
