import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { actionTypes } from '../reducer'
import { useHistory } from "react-router-dom";
import { useStateValue } from '../StateProvider'
import "./Search.css";

function SearchComponent({ hideButtons = false }) {
  const [input, setInput] = useState("");
  const history = useHistory();
  const [{}, dispatch] = useStateValue()

  const search = (e) => {
    e.preventDefault();

    console.log("work", input);

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })

    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search-input">
        <SearchIcon className="search-input-icon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search-buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm feeling lucky</Button>
        </div>
      ) : (
        <div className="search-buttons">
          <Button className="src-btn-hidden" type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button className="src-btn-hidden" variant="outlined">I'm feeling lucky</Button>
        </div>
      )}
    </form>
  );
}

export default SearchComponent;
