import React from 'react';
import './App.scss';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from './Components/Navbar/Navbar';
import TourList from './Components/TourList';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <TourList/>
    </React.Fragment>
  );
}

export default App;
