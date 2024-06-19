import './Header.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const [username, setUsername] = useState("github")

  // setUsername("Manase44");

  const apiFetch = async() => {
    try{
      const response = await fetch(`https://api.github.com/users/${username}`)
      if (!response.ok) {
        throw new Error("Something went wrong! We are unable to get your request")
      }else{
        const data = await response.json();
        console.log(data.avatar_url);
      }
    }
    catch(err){
      console.log(err)
    }
  }

  const handleSearchClick = e => {
    e.preventDefault();
    apiFetch();
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
