import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

  const handleSearchClick = e => {
    e.preventDefault();
  };

  return (
    <header>
        <h1 className="header-title">github finder</h1>
        <p className="header-author">By 
          <a href="" target='_blank'> Manase Gunga</a>
        </p>
        <div className="header-search">
          <form className="search-form">
            <input type="text" name="username" id="username" placeholder='enter a username'/>
            <button onClick={handleSearchClick}>Search</button>
          </form>
        </div>
    </header>
  )
}

export default Header
