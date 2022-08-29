import React, { useState, useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
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
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={country.flags.png} />
                                <Card.Body>
                                    <Card.Title className='country-name'>{country.name.common}</Card.Title>
                                        <Card.Text>
                                            <b>Population:</b> {country.population}
                                            <br />
                                            <b>Region:</b> {country.region}
                                            <br />
                                            <b>Capital:</b> {country.capital}
                                        </Card.Text>
                                </Card.Body>
                            </Card>        
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