import s from "./task2.module.css";
import friends from "../../jsons/friends.json";
import FriendListItem from "./FriendListItem";

const FriendList = () => {
  return (
    <ul className={s.list}>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
};

export default FriendList;
