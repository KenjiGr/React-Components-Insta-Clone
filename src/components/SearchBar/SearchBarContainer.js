// You do not need to change any code in this file
import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <i className="fab fa-instagram fa-2x" />
        <img className='img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' alt='instagram logo'></img>
      </div>
      <form className="search-form">
        <input
          type="text"
          placeholder="Search"
        />
      </form>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass fa-2x" />
        </div>
        <div className="social">
          <i className="far fa-heart fa-2x" />
        </div>
        <div className="social">
          <i className="far fa-user-circle fa-2x" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
