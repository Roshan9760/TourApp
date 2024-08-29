import React from "react";
import "../css/HeroSection1.css"; 
// import SearchButton from "./components/SearchButton";
import SearchButton from "../components/SearchButton";

const Herosection1 = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>
          Your gateway to amazing <br />
          adventure experiences
        </h1>
        <p>
          A travel agency is a private retailer or public service that provides
          travel and tourism-related services to the general public
        </p>
      </div>
      <div className="search-plan">
        <div className="search-item">
          <label>Location</label>
          <select>
            <option>New York City</option>
            <option>Delhi</option>
            <option>Bihar</option>

            {/* Add more options as needed */}
          </select>
        </div>
        <div className="search-item">
          <label>Time Period</label>
          <input type="date" />
        </div>
        <div className="search-item">
          <label>Tour Type</label>
          <select>
            <option>Family Tour</option>
            <option>Couple Tour</option>
            <option>Office Tour</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <SearchButton  text={"Search Plan"}/>
        {/* <button className="search-button">Search Plan</button> */}
      </div>
    </div>
  );
};

export default Herosection1;
