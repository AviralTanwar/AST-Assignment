import React from 'react'
import "./rightpane.css";
import Nav from '../../Components/Nav/Nav';
import Home from '../../Components/Home/Home';
import {Routes,Route} from "react-router-dom";
import Job from '../../Components/Job/Job';

const RightPane = () => {
  return (
    <div className='rightpane'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path="/job/:id" element={<Job />} />
        </Routes>
    </div>
  )
}

export default RightPane