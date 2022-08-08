import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import'./Countries.css'

const Countries = () => {
    // useState for 
    const [countries,setCountires]= useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res =>res.json())
        .then(data=> setCountires(data))
    },[]);
    return (
        <div>
            <h2>Countries: {countries.length}</h2>
           <div className='grid-country'>
           {
                countries.map(country => <Country country={country}
                    key={country.cca3}>
                     </Country>)
            }
           </div>
        </div>
    );
};

export default Countries;