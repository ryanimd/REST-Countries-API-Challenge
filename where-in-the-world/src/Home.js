import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
        <div className='main'>
            {countries.map(country => (
                <div className='country' key={country.cca2}>{country.name.common}</div>
            ))}
        </div>
    )
}

export default GetCountries