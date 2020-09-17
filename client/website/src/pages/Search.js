import React, { useState } from "react";
import { useStateValue } from "../StateProvider";
import "./Search.css";
import { Link } from "react-router-dom";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import SearchComponent from "../components/Search";
import { UseGoogleSearch } from "../UseGoogleSearch";

function Search() {
  const [{ term }, dispatch] = useStateValue();
    const { data } = UseGoogleSearch(term);

  return (
    <div className="searchPage">
      <div className="searchPage-header">
        <Link>
          <img
            className="search-page-logo"
            alt=""
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          />
        </Link>
        <div className="search-page-header-body">
          <SearchComponent hideButtons />

          <div className="search-page-options">
            <div className="search-page-options-left">
              <div className="search-page-option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="search-page-option">
                <DescriptionIcon />
                <Link to="/all">News</Link>
              </div>
              <div className="search-page-option">
                <ImageIcon />
                <Link to="/all">Images</Link>
              </div>
              <div className="search-page-option">
                <LocalOfferIcon />
                <Link to="/all">Shopping</Link>
              </div>
              <div className="search-page-option">
                <RoomIcon />
                <Link to="/all">Maps</Link>
              </div>
              <div className="search-page-option">
                <MoreVertIcon />
                <Link to="/all">More</Link>
              </div>
            </div>
            <div className="search-page-option-right">
              <div className="search-page-option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="search-page-option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {term && (
        <div className="searchPage-results">
          <p className="searchPage-resultCount">
            About {data?.searchInformation.formattedTotalResults} results{" "}
            {data?.searchInformation.formattedSearchTime} for {term}
          </p>

          {data?.items.map((item) => {
            return (
              <div className="searchPage-result">
                <a href={item.link}>
                  {item.pagemap?.cse_image?.length > 0 &&
                    item.pagemap?.cse_image[0]?.src && (
                      <img
                        className="searchPage-resultImage"
                        src={
                          item.pagemap?.cse_image[0]?.src
                        }
                      />
                    )}

                  {item.displayLink}
                </a>
                <a href={item.link} className="searchPage-resultTitle">
                  <h2>{item.title}</h2>
                </a>
                <p className="searchPage-resultSnippet">{item.snippet}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Search;
