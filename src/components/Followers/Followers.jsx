import './Followers.css'
import { Link } from 'react-router-dom'
import { IoLink } from "react-icons/io5";
import pic from '../../assets/dummypic.jpg'

const Followers = () => {
  return (
    <section className="followers-section">
        <h2 className="section-title">followers (30)</h2>
        <div className="followers-container">
            <div className="follower-card">
                <div className="follower-profile">
                  <img src={pic} alt="the follower profile" />
                </div>
                <h3 className="follower-username">bruce</h3>
                <Link to={"#"}><IoLink/>view bruce</Link>
            </div>
        </div>
    </section>
  )
}

export default Followers