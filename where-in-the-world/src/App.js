import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Countries from './components/Countries';
import Country from './components/Country';

import axios from 'axios'

function App() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios
        .get('https://restcountries.com/v3.1/all')
        .then(
        (response) => {
            console.log(response.data)
            setCountries(response.data)
        },
        (error) => console.error(error)
        )
        .catch((error) => console.error(error))
    }, [])


  return (
    <div>
      <h1>Where In The World</h1>
      <Routes>
        <Route path='/' element={<Countries countries={countries} />} />
        <Route path='/info/:name' element={<Country />}></Route>
      </Routes>     
    </div>
  )
};

export default App