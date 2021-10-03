import React from "react";
import "./style.scss";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <nav>
        <h1>Rick and Morty</h1>
        <div className="input">
          <FaSearch />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src="https://images.unsplash.com/photo-1512473199894-0cee3b672650?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          alt="avatar"
          className="avatar"
        />
      </nav>
    </header>
  );
};

export default Header;
