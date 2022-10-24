import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './Layout.css';

const Layout = ({ regions }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" className='link'>Home</Link>
          </li>
          {/* Calculate average calories and fat for each region to pass as props */}
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

            const averageCalories =  Math.round(totalCalories / regions[region].length);
            const averageFat = Math.round(totalFat / regions[region].length);

            return (
              <li key={region}>
                <Link
                  className='link'
                  to={`region/${region}`}
                  state={{
                    region: regions[region],
                    name: region,
                    averageCalories,
                    averageFat
                  }}>
                  {region}
                </Link>
              </li>
            )
          }
          )}
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout