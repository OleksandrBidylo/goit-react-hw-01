import s from "./task2.module.css";

const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <li className={s.friendItem}>
      <img src={avatar} alt={`${name} avatar`} />
      <p className={s.fname}>{name}</p>
      <p className={isOnline ? s.statusOnline : s.statusOffline}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendListItem;
