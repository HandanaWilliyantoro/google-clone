import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import SearchComponent from '../components/Search'
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-header">
        <div className="home-header-left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home-header-right">
          <Link to="/about">Gmail</Link>
          <Link to="/about">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home-body">
        <img
          alt=""
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        />
        <div className="home-input-container">
            <SearchComponent hideButtons={false} />
        </div>
      </div>
    </div>
  );
}

export default Home;
