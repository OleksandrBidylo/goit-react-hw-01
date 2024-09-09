import s from "./task2.module.css";
import friends from "../../jsons/friends.json";
const Task2 = () => {
  return (
    <ul className={s.list}>
      {friends.map((friend) => (
        <li key={friend.id} className={s.friendItem}>
          <img src={friend.avatar} alt={`${friend.name} avatar`} />
          <p className={s.fname}>{friend.name}</p>
          <p className={friend.isOnline ? s.statusOnline : s.statusOffline}>
            {friend.isOnline ? "Online" : "Offline"}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Task2;
