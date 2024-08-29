import React from "react";
import "../css/SearchButton.css";
import { useNavigate } from "react-router-dom";

const SearchButton = (props) => {

   const navigator = useNavigate()
  const useLinkClickHandler = ()=>{
      
       navigator('/contact') 
  }

  
  const { text } = props;
  return (
    <button className="search-button" onClick={useLinkClickHandler}>
      <span className="button-text">{text}</span>
    </button>
  );
};

export default SearchButton;
