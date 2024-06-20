import "./Aside.css";
import { useEffect, useState } from "react";
import UserNameStore from "../../Store/usernameStore";
import { Link } from "react-router-dom";
import { RiGitRepositoryFill } from "react-icons/ri";
import { MdGroups } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { PiBuildingOfficeBold } from "react-icons/pi";

const Aside = () => {
  const username = UserNameStore((state) => state.username);
  const [userDetails, setUserDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorEncounter, setErrorEncounter] = useState(false);

  const apiFetch = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);

      if (!response.ok) {
        throw new Error(
          "Something went wrong! We are unable to get your request",
        );
      } else {
        const data = await response.json();
        console.log(data);
        setUserDetails(data);
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
      <div className="profile-header">
        <h2>We are setting up things for you...</h2>
      </div>
    );
  }

  if (errorEncounter) {
    return (
      <div className="profile-header">
        {" "}
        <h2>
          Something went wrong! We are unable to get your request. Please try
          again later
        </h2>
      </div>
    );
  }

  return (
    <aside className="profile-side-bar">
      <div className="profile-header">
        <div className="profile-picture">
          <img src={userDetails.avatar_url} alt="the profile of the user" />
        </div>
        <h2>{userDetails.name}</h2>
        <p>{userDetails.login}</p>
        <p>{userDetails.bio}</p>
        <Link to={userDetails.html_url} target="_blank">
          <FaArrowUpRightFromSquare /> view on github
        </Link>
      </div>
      <ul className="profile-details">
        {userDetails.location && (
          <li className="profile-details-link">
            <IoLocationOutline />
            <span>{userDetails.location}</span>
          </li>
        )}
        {userDetails.company && (
          <li className="profile-details-link">
            <PiBuildingOfficeBold />
            <span>{userDetails.company}</span>
          </li>
        )}
        <li className="profile-details-link">
          <RiGitRepositoryFill />
          <span>{userDetails.public_repos} repositories</span>
        </li>
        <li className="profile-details-link">
          <MdGroups />
          <span>{userDetails.followers} followers</span>
        </li>
        <li className="profile-details-link">
          <MdGroups />
          <span>{userDetails.following} following</span>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
