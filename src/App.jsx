import "./App.css";
import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import friends from "./jsons/friends.json";
import tab from "./jsons/table.json";
import userData from "/src/jsons/task1.json";

const adaptedData = {
  name: userData.username,
  tag: userData.tag,
  location: userData.location,
  image: userData.avatar,
  stats: userData.stats,
};

const App = () => {
  return (
    <div>
      <Profile
        name={adaptedData.name}
        tag={adaptedData.tag}
        location={adaptedData.location}
        image={adaptedData.image}
        stats={adaptedData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={tab} />
    </div>
  );
};

export default App;
