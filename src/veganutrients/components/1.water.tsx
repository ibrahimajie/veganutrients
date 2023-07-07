import React from 'react';

const water = [{
    id: 0,
    nutrient: 'water',
    img: '/img/veganutrients/1.water/potablewater.webp',
    name: 'Potable Water'
}]

export default function Water() {
    return water.map((nutrient: any, index: any) =>
        <div className="card" key={index}>
            <img src={nutrient.img} alt={nutrient.name} />
            <br />
            <b>{nutrient.name}</b>
        </div>
    )
}