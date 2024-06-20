import "./Aside.css";
import { useEffect, useState } from 'react'
import UserNameStore from "../../Store/usernameStore";
import { Link } from "react-router-dom";
import { RiGitRepositoryFill } from "react-icons/ri";
import { MdGroups } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Aside = () => {
  const username = UserNameStore((state) => state.username);
  const [userAvatar, setUserAvatar] = useState(null)
  const [userLoginName, setUserLoginName] = useState(null)
  const [userName, setUserName] = useState(null)
  const [userBio, setUserBio] = useState(null)
  const [userGitHubUrl, setUserGitHubUrl] = useState(null)
  const [userLocation, setuserLocation] = useState(null)
  const [userNoOfRepos, setUserNoOfRepos] = useState(null)
  const [userNoOfFollowers, setUserNoOfFollowers] = useState(null)
  const [userNoOfFollowing, setUserNoOfFollowing] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [errorEncounter, setErrorEncounter] = useState(false)


  const apiFetch = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
  
      if (!response.ok) {
        throw new Error(
          "Something went wrong! We are unable to get your request",
        );
      } else {
        const data = await response.json();
        console.log(data)
        setUserAvatar(data.avatar_url);
        setUserName(data.name)
        setUserLoginName(data.login)
        setUserBio(data.bio)
        setUserGitHubUrl(data.html_url)
        setuserLocation(data.location)
        setUserNoOfRepos(data.public_repos)
        setUserNoOfFollowers(data.followers)
        setUserNoOfFollowing(data.following)
        setIsLoading(false)
      }
    } catch (err) {
      console.log(err);
      setErrorEncounter(true)
      setIsLoading(false)
    }
  };

  useEffect(() => {
    apiFetch()
  }, [username]);

  if (isLoading) {
    return <div className="profile-header"><h2>We are setting up things for you...</h2></div>
    
  }

  if (errorEncounter) {
    return <div className="profile-header"> <h2>Something went wrong! We are unable to get your request. Please try again later</h2></div>
  }

  return (
    
    <aside className="profile-side-bar">
      <div className="profile-header">
        <div className="profile-picture">
          
          <img src={userAvatar} alt="the profile of the user" />
        </div>
        <h2>{userName}</h2>
        <p>{userLoginName}</p>
        <p>{userBio}</p>
        <Link to={userGitHubUrl} target="_blank">
          <FaArrowUpRightFromSquare /> view on github
        </Link>
      </div>
      <ul className="profile-details">
        <li className="profile-details-link">
          <IoLocationOutline />
          <span>{userLocation}</span>
        </li>
        <li className="profile-details-link">
          <RiGitRepositoryFill />
          <span>{userNoOfRepos} repositories</span>
        </li>
        <li className="profile-details-link">
          <MdGroups />
          <span>{userNoOfFollowers} followers</span>
        </li>
        <li className="profile-details-link">
          <MdGroups />
          <span>{userNoOfFollowing} following</span>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
