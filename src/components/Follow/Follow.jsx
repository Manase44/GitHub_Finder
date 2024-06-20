import "./Follow.css";
import { IoLink } from "react-icons/io5";
import UserNameStore from "../../Store/usernameStore";
// import pic from "../../assets/dummypic.jpg";

const Follow = ({ avatar, name }) => {
  const setUsername = UserNameStore((state) => state.changeUsername);

  const handleFollowLink = (e) => {
    e.preventDefault();
    setUsername(name);
  };
  return (
    <div className="follower-card">
      <div className="follower-profile">
        <img src={avatar} alt="the follower profile" />
      </div>
      <h3 className="follower-username">{name}</h3>
      <button onClick={handleFollowLink}>
        <IoLink />
        view {name}
      </button>
    </div>
  );
};

export default Follow;
