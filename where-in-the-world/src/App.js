import React from 'react'
import axios from 'axios'

function getCountries() {
  axios
    .get('https://restcountries.com/v3.1/all')
    .then(
      (response) => {
        console.log(response)
      },
      (error) => console.error(error)
    )
    .catch((error) => console.error(error))
}

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <button onClick={getCountries}>Click Me</button>
    </div>
  );
}

export default App;
