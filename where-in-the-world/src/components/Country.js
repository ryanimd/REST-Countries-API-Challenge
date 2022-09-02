import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

import axios from 'axios'


function Country() {
    const { name } = useParams();
    const [country, setCountry] = useState([]);

    useEffect(() => {
        axios
        .get(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
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
            <button><Link to='/' style={{ textDecoration: 'none', color: 'black' }}>Back</Link></button>
            {country.map(c => (
                <div key={c.name.common}>
                    <h1>{c.name.common}</h1>
                    <img src={c.flags.png} alt={`Flag of ${c.name}`} className='info-flag' />
                    <p><b>Native Name:</b> {c.altSpellings[1]}</p>
                    <p><b>Population:</b> {c.population.toLocaleString()}</p>
                    <p><b>Region:</b> {c.region}</p>
                    <p><b>Sub Region:</b> {c.subregion}</p>
                    <p><b>Capital:</b> {c.capital}</p>
                    <p><b>Top Level Domain:</b> {c.tld}</p>
                    {country.map(curr => 
                        <p key={curr.name.common}><b>Currencies:</b> {Object.values(curr.currencies)[0].name}</p>
                    )}
                    {country.map((lang) => 
                        <p key={lang.name.common}><b>Languages:</b> {Object.values(lang.languages) + ','}</p>
                    )}               
                    {country.map((border) => 
                        <button key={border.name.common}><a href={`info/${border.borders}`}> {Object.values(border.borders)} </a></button>
                        )}    
                </div>
                ))}              
        </div> 
  )
    }
  

export default Country