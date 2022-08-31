import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import axios from 'axios'


function Country() {
    const params = useParams();
    const [country, setCountry] = useState({});

    useEffect(() => {
        axios
        .get(`https://restcountries.com/v3.1/name/${params.countryId}`)
        .then(
        (response) => {
            console.log(response.data)
            setCountry(response.data)
        },
        (error) => console.error(error)
        )
        .catch((error) => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
    <div>
        <h1>{country.name.common}</h1>
        {/* <img src={country.flags.png} alt={`Flag of ${country.name.common}`}/> */}
    </div> 
  )
    }
  

export default Country