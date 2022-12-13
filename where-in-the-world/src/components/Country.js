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
            <Link to='/' style={{ textDecoration: 'none', color: 'black' }}><button>Back</button></Link>
            {country.map(c => (
                <div key={c.name.common}>
                    <img src={c.flags.png} alt={`Flag of ${c.name}`} className='info-flag' />
                    <div className='info-sec-1'><h1>{c.name.common}</h1></div>
                    <div className='info-sec-2'>
                        <p><b>Native Name:</b> {c.altSpellings[1]}</p>
                        <p><b>Capital:</b> {c.capital}</p>
                        <p><b>Population:</b> {c.population.toLocaleString()}</p>
                        <p><b>Region:</b> {c.region}</p>
                        <p><b>Sub Region:</b> {c.subregion}</p>
                    </div>
                    <div className='info-sec-3'>
                        <p><b>Top Level Domain:</b> {c.tld}</p>
                    {country.map(curr => 
                        <p key={curr.name.common}><b>Currencies:</b> {Object.values(curr.currencies)[0].name}</p>
                    )}
                    {country.map((lang => 
                        <p key={lang.name.common}><b>Languages:</b> {Object.values(lang.languages).join(", ")}</p>
                    ))}   
                    {/*Some countries borders could not be reached and was causing a bug that would cause the country info not to be shown*/}
                    {/* {country.map((border, i) => 
                    // This is the closest I've gotten to the button appearing and seeing the switch to a new page in the url
                        <div><Link to={`/info/${border.borders[i]}`} key={i}><button>{Object.values(border.borders)[i]}</button></Link></p>
                        )}     */}
                    </div>
                </div>
                ))}              
        </div> 
  )
    }
//   if (borders === cca3) {
//      return country.name.common
// }

export default Country