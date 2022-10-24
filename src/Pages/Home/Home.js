import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = ({ regions }) => {

  return (
    <div className="home__wrapper">
      <h1>Regions</h1>
      {/* TODO: Refactor to do once and pass as props from parent */}
      {Object.keys(regions).map(region => {
        let totalCalories = 0;
        let totalFat = 0;

        regions[region].forEach(region => {
          if (!isNaN(parseInt(region.Calories))) {
            totalCalories += parseInt(region.Calories);
          }
          if (!isNaN(parseFloat(region.FatTotal))) {
            totalFat += parseFloat(region.FatTotal)
          }
        })

        return (
          <Link to={`region/${region}`} state={{
            region: regions[region],
            name: region,
            averageCalories: Math.round(totalCalories / regions[region].length),
            averageFat: Math.round(totalFat / regions[region].length),
          }} key={region} className='region__container'>
            <h3>{region}</h3>
            <span>Average Calories: {Math.round(totalCalories / regions[region].length)} cal/serving</span>
            <span>Average Fat: {Math.round(totalFat / regions[region].length)}g/serving</span>
          </Link>
        )
      }
      )}
    </div>
  )
}

export default Home