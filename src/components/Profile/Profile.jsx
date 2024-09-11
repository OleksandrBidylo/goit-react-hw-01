import s from "./task1.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.container}>
      <div className={s.infowrap}>
        <img src={image} alt="User avatar" />
        <p className={s.name}>{name}</p>
        <p className={s.gtext}>@{tag}</p>
        <p className={s.gtext}>{location}</p>
      </div>

      <ul className={s.someinfo}>
        <li className={s.item}>
          <span>Followers</span>
          <span className={s.boldspan}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span>Views</span>
          <span className={s.boldspan}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span>Likes</span>
          <span className={s.boldspan}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
