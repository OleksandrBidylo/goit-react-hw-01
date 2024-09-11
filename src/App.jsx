import "./App.css";
import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
const App = () => {
  return (
    <div>
      <Profile />
      <FriendList />
      <TransactionHistory />
    </div>
  );
};

export default App;
