import React from 'react';

const minerals = [{
    id: 0,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/avocado.webp',
    name: 'Avocado'
},
{
    id: 1,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/banana.webp',
    name: 'Banana'
},
{
    id: 2,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/beans.webp',
    name: 'Beans'
},
{
    id: 3,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/brazil-nuts.webp',
    name: 'Brazil Nuts'
},
{
    id: 4,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/broccoli.webp',
    name: 'Broccoli'
},
{
    id: 5,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/carrot.webp',
    name: 'Carrot'
},
{
    id: 6,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/cinnamon.webp',
    name: 'Cinnamon'
},
{
    id: 7,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/dates.webp',
    name: 'Dates'
},
{
    id: 8,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/dill.webp',
    name: 'Dill'
},
{
    id: 9,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/grape.webp',
    name: 'Grape'
},
{
    id: 10,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/green-leafy.webp',
    name: 'Green Leafy'
},
{
    id: 11,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/legumes.webp',
    name: 'Legumes'
},
{
    id: 12,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/lentils.webp',
    name: 'Lentils'
},
{
    id: 13,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/nuts.webp',
    name: 'Nuts'
},
{
    id: 14,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/oats.webp',
    name: 'Oats'
},
{
    id: 15,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/orange.webp',
    name: 'Orange'
},
{
    id: 16,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/oregano.webp',
    name: 'Oregano'
},
{
    id: 17,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/potatoes.webp',
    name: 'Potatoes'
},
{
    id: 18,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/prune.webp',
    name: 'Prune'
},
{
    id: 19,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/rice.webp',
    name: 'Rice'
},
{
    id: 20,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/sapote.webp',
    name: 'Sapote'
},
{
    id: 21,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/sea-salt.webp',
    name: 'Sea Salt'
},
{
    id: 22,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/seaweed.webp',
    name: 'Seaweed'
},
{
    id: 23,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/seeds.webp',
    name: 'Seeds'
},

{
    id: 24,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/spinach.webp',
    name: 'Spinach'
},
{
    id: 25,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/sweet-potatoes.webp',
    name: 'Sweet Potatoes'
},
{
    id: 26,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/thyme.webp',
    name: 'Thyme'
},
{
    id: 27,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/tomato.webp',
    name: 'Tomato'
},
{
    id: 28,
    nutrient: 'minerals',
    img: '/img/veganutrients/4.minerals/whole-grains.webp',
    name: 'Whole Grains'
}]

export default function Minerals() {
    return minerals.map((nutrient: any, index: any) =>
        <div className="card" key={index}>
            <img src={nutrient.img} alt={nutrient.name} />
            <br />
            <b>{nutrient.name}</b>
        </div>
    )
}