import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Layout from './Pages/Layout/Layout';
import Region from './Pages/Region/Region';

function App() {
  const [regions, setRegions] = useState([]);

  // Fetch data on init and transform/organize
  useEffect(() => {
    fetch('http://localhost:5001/gofish?apikey=abrradiology')
      .then(res => res.json())
      .then(data => {
        setRegions(data.reduce((regions, fish) => {
          // Create an object with region names as keys with an array of fish objects of that region
          regions[fish.NOAAFisheriesRegion] = regions[fish.NOAAFisheriesRegion] || [];
          regions[fish.NOAAFisheriesRegion].push(fish);
          return regions;
        }, {}))
      })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout regions={regions} />}>
            <Route index element={<Home regions={regions} />} />
            <Route path="/region/:region" element={<Region />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
