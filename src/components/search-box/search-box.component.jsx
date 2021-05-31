// import React from "react"
// import "./seach-box.styles.css"

// export const SeachBox = ({ placeholder, handleChange }) => (
//     <input 
//     className = "search"
//     type = "search" 
//     placeholder = {placeholder} 
//     onChange = {handleChange}
//     />
// );

  
import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);