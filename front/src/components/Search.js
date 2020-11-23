import React, { useState, useContext } from "react";
import { OutlinedInput } from "@material-ui/core";
import { GlobalContext } from "../context/GlobalContext";

const Search = () => {
  const [input, setInput] = useState("");
  const { getSearchedMovies } = useContext(GlobalContext);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getSearchedMovies(input);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <OutlinedInput
          placeholder="Eyal ha gever"
          className="searchInput"
          variant="outlined"
          size="small"
          color="primary"
          value={input}
          onChange={onInputChange}
        />
      </form>
    </div>
  );
};

export default Search;
