import './Aside.css'
import apiFetch from '../API/API';
import UserNameStore from '../../Store/usernameStore';
import { Link } from 'react-router-dom'
import { RiGitRepositoryFill } from "react-icons/ri";
import { MdGroups } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import profile from '../../assets/dummypic.jpg'

const Aside = () => {
  const username = UserNameStore((state) => state.username);
  const data = apiFetch(`https://api.github.com/users/${username}`)
  const userDetails = 
          {
            'imageurl': data.avatar_url,
            'name': data.name,
            'gitusername': data.login,
            'bio': data.bio,
            'giturl': data.url,
            'location': data.location,
            'noOfRepos ': data.public_repos,
            'followers': data.followers,
            'following': data.following,
          }
          console.log(userDetails);
  return (
    <aside className='profile-side-bar'>
      <div className="profile-header">
        <div className="profile-picture">
            <img src={profile} alt="the profile of the user"/>
        </div>
        <h2>GitHub</h2>
        <p>github</p>
        <p>How people build software</p>
        <Link to={"https://github.com/Manase44"} target='_blank'>< FaArrowUpRightFromSquare/> view on github</Link>
      </div>
      <ul className="profile-details">
        <li className="profile-details-link">
            < IoLocationOutline />
            <span>San Francisco, CA</span>
        </li>
        <li className="profile-details-link">
        < RiGitRepositoryFill/>
        <span>200 repositories</span>
        </li>
        <li className="profile-details-link">
        < MdGroups/>
        <span>30 followers</span>
        </li>
        <li className="profile-details-link">
        < MdGroups/>
        <span>0 following</span>
        </li>
      </ul>
    </aside>
  )
}

export default Aside
