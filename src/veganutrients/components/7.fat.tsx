import React from 'react';

const fat = [{
    id: 0,
    nutrient: 'fat',
    img: '/img/veganutrients/7.fat/avocado.webp',
    name: 'Avocado'
},
{
    id: 1,
    nutrient: 'fat',
    img: '/img/veganutrients/7.fat/brazil-nuts.webp',
    name: 'Brazil Nuts'
},
{
    id: 2,
    nutrient: 'fat',
    img: '/img/veganutrients/7.fat/canola.webp',
    name: 'Canola'
},
{
    id: 3,
    nutrient: 'fat',
    img: '/img/veganutrients/7.fat/coconut.webp',
    name: 'Coconut'
},
{
    id: 4,
    nutrient: 'fat',
    img: '/img/veganutrients/7.fat/corn.webp',
    name: 'Corn'
},
{
    id: 5,
    nutrient: 'fat',
    img: '/img/veganutrients/7.fat/cotton-seeds.webp',
    name: 'Cotton Seeds'
},
{
    id: 6,
    nutrient: 'fat',
    img: '/img/veganutrients/7.fat/flax-seeds.webp',
    name: 'Flax Seeds'
},
{
    id: 7,
    nutrient: 'fat',
    img: '/img/veganutrients/7.fat/grape-seeds.webp',
    name: 'Grape Seeds'
},
{
    id: 8,
    nutrient: 'fat',
    img: '/img/veganutrients/7.fat/hemp-seeds.webp',
    name: 'Hemp Seeds'
},
{
    id: 9,
    nutrient: 'fat',
    img: '/img/veganutrients/7.fat/olives.webp',
    name: 'Olives'
},
{
    id: 10,
    nutrient: 'fat',
    img: '/img/veganutrients/7.fat/peanut.webp',
    name: 'Peanut'
},
{
    id: 11,
    nutrient: 'fat',
    img: '/img/veganutrients/7.fat/sesame-seeds.webp',
    name: 'Sesame Seeds'
},
{
    id: 12,
    nutrient: 'fat',
    img: '/img/veganutrients/7.fat/soya-beans.webp',
    name: 'Soya Beans'
},
{
    id: 13,
    nutrient: 'fat',
    img: '/img/veganutrients/7.fat/sunflower.webp',
    name: 'Sunflower'
},
{
    id: 14,
    nutrient: 'fat',
    img: '/img/veganutrients/7.fat/walnut.webp',
    name: 'Walnut'
},
{
    id: 15,
    nutrient: 'fat',
    img: '/img/veganutrients/7.fat/whole-grains.webp',
    name: 'Whole Grains'
}]

export default function Fat() {
    return fat.map((nutrient: any, index: any) =>
        <div className="card" key={index}>
            <img src={nutrient.img} alt={nutrient.name} />
            <br />
            <b>{nutrient.name}</b>
        </div>
    )
}