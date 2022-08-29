// import React, { useState, useEffect } from "react";
// import axios from 'axios'
// import Home from "./Home";
// import { BrowserRouter, Route, useNavigate } from 'react-router-dom'

// function ShowCountryInfo() {
//     const [countries, setCountries] = useState([]);

//     useEffect(() => {
//         axios
//         .get('https://restcountries.com/v3.1/all')
//         .then(
//         (response) => {
//             console.log(response)
//             setCountries(response.data)
//         },
//         (error) => console.error(error)
//         )
//         .catch((error) => console.error(error))
//     }, []) 

//     const navigate = useNavigate();

//     return (
//         <div className='country-info'>
//             <BrowserRouter>
//                 <Route exact path='/'>
//                     <button onClick={() => navigate(-1)}>
//                         Back
//                         <Home />
//                     </button>
//                 </Route>
//             </BrowserRouter>
//         </div>
        
//     )
// }

// export default ShowCountryInfo