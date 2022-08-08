import React from 'react';
import './Country.css'
const Country = (props) => {
    const {area,region,population,name,flags}=props.country;

    return (
        <div className='country'>
            <h2>Country Name:{name.common}</h2>
            <h3>Area Name:{area}km</h3>
            <p>Region : {region}</p>
            <h4>Population:{population}</h4>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;