import React, { useState, useEffect } from 'react'
import axios from 'axios'

function GetCountries() {
    const [country, setCountry] = useState([]);

    useEffect(() => {
        axios
        .get('https://restcountries.com/v3.1/all')
        .then(
        (response) => {
            console.log(response)
        },
        (error) => console.error(error)
        )
        .catch((error) => console.error(error))
    })

    return (
        <div className='main'>
            {country.map(country => (
                <div className='country' key={country.data.id}>{country.data.commonname}</div>
            ))}
        </div>
    )
}

export default GetCountries