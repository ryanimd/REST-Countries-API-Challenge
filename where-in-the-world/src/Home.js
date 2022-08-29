import React, { useState, useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import ShowCountryInfo from './ShowCountryInfo';

function GetCountries() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios
        .get('https://restcountries.com/v3.1/all')
        .then(
        (response) => {
            console.log(response)
            setCountries(response.data)
        },
        (error) => console.error(error)
        )
        .catch((error) => console.error(error))
    }, [])

    return (
        <div className='home'>
            {countries.map(country => (
                // <BrowserRouter>
                //     <Link style={{textDecoration:'none'}} to='/ShowCountryInfo'>
                        <div className='country' key={country.cca2}>
                            <b className='country-name'>{country.name.common}</b>
                            <p>Population: {country.population}</p>
                            <p>Region: {country.region}</p>
                            <p>Capital: {country.capital}</p>
                        </div>
                //     </Link>
                //     <Routes>
                //         <Route>
                //             <ShowCountryInfo />
                //         </Route>
                //     </Routes>
                    
                // </BrowserRouter>
            ))}
        </div>
    )
}

export default GetCountries