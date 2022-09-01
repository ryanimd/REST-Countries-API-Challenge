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
            <div>
                <h1>{c.name.common}</h1>
                <img src={c.flags.png} alt={`Flag of ${c.name.common}`}/>
            </div>
         ))}
    </div> 
  )
    }
  

export default Country