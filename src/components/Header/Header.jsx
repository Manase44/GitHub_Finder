import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <Link to={"/"} className="header-title">
          <h1>github finder</h1>
        </Link>
        <p className="header-author">By 
          <a href="" target='_blank'> Manase Gunga</a>
        </p>
        <div className="header-search">
          <form className="search-form">
            <input type="text" name="username" id="username" placeholder='enter a username' />
            <button>Search</button>
          </form>
        </div>
    </header>
  )
}

export default Header
