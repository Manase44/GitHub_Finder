import "./Follow.css";
import { Link } from "react-router-dom";
import { IoLink } from "react-icons/io5";
import pic from "../../assets/dummypic.jpg";

const Follow = () => {
  return (
    <div className="followers-container">
      <div className="follower-card">
        <div className="follower-profile">
          <img src={pic} alt="the follower profile" />
        </div>
        <h3 className="follower-username">bruce</h3>
        <Link to={"#"}>
          <IoLink />
          view bruce
        </Link>
      </div>
    </div>
  );
};

export default Follow;
