import Follow from "../Follow/Follow";
import UserNameStore from "../../Store/usernameStore";
import { useState, useEffect } from "react";

const Followers = () => {
  const username = UserNameStore((state) => state.username);

  const [noOfFollowers, setNoOfFollowers] = useState(null)
  const [followers, setFollowers] = useState([])

  const [isLoading, setIsLoading] = useState(true)
  const [errorEncounter, setErrorEncounter] = useState(false)

  const apiFetch = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/followers`);
  
      if (!response.ok) {
        throw new Error(
          "Something went wrong! We are unable to get your request",
        );
      } else {
        const data = await response.json();
        console.log(data)
        setNoOfFollowers(data.length)
        setFollowers(data)
        setIsLoading(false)
      }
    } catch (err) {
      console.log(err);
      setErrorEncounter(true)
      setIsLoading(false)
    }
  };
  useEffect(() => {
    apiFetch();
  }, [username])

  if (isLoading) {
    return <div className="followers-section"><h2>We are setting up things for you...</h2></div>
    
  }

  if (errorEncounter) {
    return <div className="followers-section"> <h2>Something went wrong! We are unable to get the followers request. Please try again later</h2></div>
  }

  return (
    <section className="followers-section">
      <h2 className="section-title">followers ({noOfFollowers})</h2>
      {followers.map((currentFollower, i) => {
        return (<Follow  key={i} avatar={currentFollower.avatar_url} name={currentFollower.login}/>)
      })}
    </section>
  );
};

export default Followers;
