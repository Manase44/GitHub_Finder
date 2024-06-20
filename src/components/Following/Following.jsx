import Follow from "../Follow/Follow";
import UserNameStore from "../../Store/usernameStore";
import { useState, useEffect } from "react";

const Following = () => {
  const username = UserNameStore((state) => state.username);

  const [noOfFollowing, setNoOfFollowing] = useState(null);
  const [following, setFollowing] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [errorEncounter, setErrorEncounter] = useState(false);

  const apiFetch = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/following`,
      );

      if (!response.ok) {
        throw new Error(
          "Something went wrong! We are unable to get your request",
        );
      } else {
        const data = await response.json();
        console.log(data);
        setNoOfFollowing(data.length);
        setFollowing(data);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      setErrorEncounter(true);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    apiFetch();
  }, [username]);

  if (isLoading) {
    return (
      <div className="followers-section">
        <h2>We are setting up things for you...</h2>
      </div>
    );
  }

  if (errorEncounter) {
    return (
      <div className="followers-section">
        {" "}
        <h2>
          Something went wrong! We are unable to get the following request.
          Please try again later
        </h2>
      </div>
    );
  }

  return (
    <section className="following-section">
      <h2 className="section-title">following ({noOfFollowing})</h2>
      <div className="followers-container">
        {following.map((currentFollowing, i) => {
          return (
            <Follow
              avatar={currentFollowing.avatar_url}
              key={i}
              name={currentFollowing.login}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Following;
