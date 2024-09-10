import s from "./task1.module.css";
import userData from "/src/jsons/task1.json";

const task1 = () => {
  return (
    <div className={s.container}>
      <div className={s.infowrap}>
        <img src={userData.avatar} alt="User avatar" />
        <p className={s.name}>{userData.username}</p>
        <p className={s.gtext}>@{userData.tag}</p>
        <p className={s.gtext}>{userData.location}</p>
      </div>

      <ul className={s.someinfo}>
        <li className={s.item}>
          <span>Followers</span>
          <span className={s.boldspan}>{userData.stats.followers}</span>
        </li>
        <li className={s.item}>
          <span>Views</span>
          <span className={s.boldspan}>{userData.stats.views}</span>
        </li>
        <li className={s.item}>
          <span>Likes</span>
          <span className={s.boldspan}>{userData.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default task1;
