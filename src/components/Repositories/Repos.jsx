import "./Repos.css";
import UserNameStore from "../../Store/usernameStore";
import { FaStar } from "react-icons/fa6";
import { LuGitFork } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Repos = () => {
  const username = UserNameStore((state) => state.username);
  const [noOfRepos, setNoOfRepos] = useState(null);
  const [repos, setRepos] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [errorEncounter, setErrorEncounter] = useState(false);

  const apiFetch = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/repos`,
      );

      if (!response.ok) {
        throw new Error(
          "Something went wrong! We are unable to get your request",
        );
      } else {
        const data = await response.json();
        console.log(data);
        setNoOfRepos(data.length);
        setRepos(data);
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
      <div className="repositories-section">
        <h2>We are setting up things for you...</h2>
      </div>
    );
  }

  if (errorEncounter) {
    return (
      <div className="repositories-section">
        {" "}
        <h2>
          Something went wrong! We are unable to get the repository request.
          Please try again later
        </h2>
      </div>
    );
  }

  return (
    <section className="repos-section">
      <h2 className="section-title">repositories ({noOfRepos})</h2>
      <div className="repositories-container">
        {repos.map((currentRepo, i) => {
          return (
            <Link
              to={currentRepo.html_url}
              target="_blank"
              className="repo-link"
            >
              <div className="repo-card">
                <div className="repo-card-header">
                  <h3 className="repo-title">{currentRepo.name}</h3>
                  <p className="repo-description">{currentRepo.description}</p>
                </div>
                <div className="repo-card-footer">
                  <p>
                    <LuGitFork />
                    {currentRepo.forks_count} forks
                  </p>
                  <p>
                    <FaStar />
                    {currentRepo.stargazers_count} stars
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Repos;
