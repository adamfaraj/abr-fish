import React from 'react';
import { useLocation } from 'react-router-dom';
import './Region.css';

const Region = () => {
  const location = useLocation()
  const { averageCalories, averageFat, name, region } = location.state;

  return (
    <div className='region__wrapper'>
      <h1>{name}</h1>
      <p>Average Calories: {averageCalories} cal/serving</p>
      <p>Average Fat: {averageFat} g/serving</p>

      <div className="fish__container">
        {region.map(fish => 
          <div className="fish">
            <p>{fish.SpeciesName} ({fish.ScientificName})</p>
            <img src={fish.ImageGallery ? fish.ImageGallery.src || fish.ImageGallery[0].src : ''} alt={fish.SpeciesName} />
            <p>{fish.Calories} cal <br /> {fish.FatTotal}</p>
            <div dangerouslySetInnerHTML={{__html: fish.Color + fish.Taste + fish.Texture}}></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Region