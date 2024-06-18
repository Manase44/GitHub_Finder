import './Notfound.css'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='notfound-contaner'>
      <div className="notfound-content">
        <h1 className="notfound-text">page not found</h1>
        <Link to={"/"}>return to home page</Link>
      </div>
    </div>
  )
}

export default Notfound
