import Follow from "../Follow/Follow";
import apiFetch from "../API/API";
import UserNameStore from "../../Store/usernameStore";

const Followers = () => {
  const username = UserNameStore((state) => state.username);
  const data = apiFetch(`https://api.github.com/users/${username}/followers`);
  const followers = {
    noOfFollowers: data.length,
    followerUsername: data[1].login,
    avatar: data[1].avatar_url,
    githubLink: data[1].html_url,
  };
  console.log(followers);
  return (
    <section className="followers-section">
      <h2 className="section-title">followers (30)</h2>
      <Follow />
    </section>
  );
};

export default Followers;
