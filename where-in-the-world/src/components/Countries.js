import React from 'react';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';

import Country from './Country';

function Countries(props) {
    return (
        <div className='home'>
            {props.countries.map(country => (
                <Link to={`/info/${country.name.common}`} element={<Country />} key={country.name.common}>
                    <div className='country' >
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={country.flags.png} style={{ width: '18rem', height: '10rem', borderRadius: '5px 5px 0 0' }} />
                            <Card.Body>
                                <Card.Title><b>{country.name.common}</b></Card.Title>
                                    <Card.Text>
                                        <b>Population:</b> {country.population.toLocaleString()}
                                        <br />
                                        <b>Region:</b> {country.region}
                                        <br />
                                        <b>Capital:</b> {country.capital}
                                    </Card.Text>
                            </Card.Body>
                        </Card>        
                    </div>
                </Link>
                
            ))}
        </div>
    )
}

   
export default Countries