import './Repos.css'
import apiFetch from '../API/API';
import UserNameStore from '../../Store/usernameStore';
import { FaStar } from "react-icons/fa6";
import { LuGitFork } from "react-icons/lu";
import { Link } from 'react-router-dom';

const Repos = () => {
  const username = UserNameStore((state) => state.username);
    const data = apiFetch(`https://api.github.com/users/${username}/repos`);
    const repoDetails = {
                'noOfRepos': data.length,
                'name' : data[15].name,
                'repourl' : data[15].html_url,
                'description' : data[15].description,
                'noOfForks' : data[15].forks_count,
                'noOfStars' : data[15].stargazers_count
              }
    console.log(repoDetails)
    return (
        <section className="repos-section">
            <h2 className="section-title">repositories (30)</h2>
            <div className="repositories-container">
                <Link to={"#"} target='_blank' className='repo-link'>
                    <div className="repo-card">
                        <div className="repo-card-header">
                            <h3 className="repo-title">github</h3>
                            <p className="repo-description">
                                Community health files for the @GitHub organization
                            </p>
                        </div>
                        <div className="repo-card-footer">
                            <p><LuGitFork />200 forks</p>
                            <p><FaStar />20 stars</p>
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Repos
