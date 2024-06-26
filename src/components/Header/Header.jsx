import "./Header.css";
import { useState } from "react";
import UserNameStore from "../../Store/usernameStore";

const Header = () => {
  const setUsername = UserNameStore((state) => state.changeUsername);
  const username = UserNameStore((state) => state.username);
  const [usernameInput, setUsernameInput] = useState(username);

  const handleMyRender = (e) => {
    e.preventDefault();
    setUsername("Manase44");
  };

  const handleChange = (e) => {
    setUsernameInput(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    setUsername(usernameInput);
  };

  return (
    <header>
      <h1 className="header-title">github finder</h1>
      <p className="header-author">
        By
        <a onClick={handleMyRender} href="">
          {" "}
          Manase Gunga
        </a>
      </p>
      <div className="header-search">
        <form className="search-form">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="enter a username"
            onChange={handleChange}
          />
          <button onClick={handleSearchClick}>Search</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
