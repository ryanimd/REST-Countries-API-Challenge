import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import axios from 'axios'


function Country() {
    const { name } = useParams();
    const [country, setCountry] = useState([]);

    useEffect(() => {
        axios
        .get(`https://restcountries.com/v3.1/name/${name}`)
        .then(
        (response) => {
            console.log(response.data)
            setCountry(response.data)
        },
        (error) => console.error(error)
        )
        .catch((error) => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[name])

    return (
    <div className='info'>
         {country.map(c => (
            <div key={c.name.common}>               
                <h1>{c.name.common}</h1>
                <img src={c.flags.png} alt={`Flag of ${c.name.common}`} className='info-flag'/>
                <p><b>Native Name:</b> {c.altSpellings[1]}</p>
                <p><b>Population:</b> {c.population.toLocaleString()}</p>
                <p><b>Region:</b> {c.region}</p>
                <p><b>Sub Region:</b> {c.subregion}</p>
                <p><b>Capital:</b> {c.capital[0]}</p>
                <p><b>Top Level Domain:</b> {c.tld[0]}</p>
                <p><b>Currencies:</b>{c.currencies.name}</p>
                <p><b>Languages:</b> {c.language}</p>
            </div>
         ))}
    </div> 
  )
    }
  

export default Country