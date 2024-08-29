import React from 'react'
import SearchButton from './SearchButton';
import '../css/HeroSection2.css'


const Herosection2 = () => {
  return (
    <div className="main-section">
      {/* Part 1 contain button and heading  */}
      <div className="part1">
        <div>
          <h1>Find Popular Trips</h1>
        </div>
        <div className='buttonAndtext'>
          <p>
            Whether you are looking for places for a vacation. We are here to
          </p>
          <SearchButton text="View More"/>
          
        </div>

        
      </div>
    </div>
  );
}


export default Herosection2