import React from 'react';

const protein = [{
    id: 0,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/almonds.webp',
    name: 'Almonds'
},
{
    id: 1,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/amaranth-grain.webp',
    name: 'Amaranth Grain'
},
{
    id: 2,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/blackeye-cowpea.webp',
    name: 'Blackeye Cowpea'
},
{
    id: 3,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/brazil-nuts.webp',
    name: 'Brazil Nuts'
},
{
    id: 4,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/bulgur.webp',
    name: 'Bulgur'
},
{
    id: 5,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/cashews.webp',
    name: 'Cashews'
},
{
    id: 6,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/chickpeas.webp',
    name: 'Chickpeas'
},
{
    id: 7,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/cotton-seeds.webp',
    name: 'Cotton Seeds'
},
{
    id: 8,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/edamame.webp',
    name: 'Edamame'
},
{
    id: 9,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/farro.webp',
    name: 'Farro'
},
{
    id: 10,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/flax-seeds.webp',
    name: 'Flax Seeds'
},
{
    id: 11,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/hemp-seeds.webp',
    name: 'Hemp Seeds'
},
{
    id: 12,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/kidney-bean.webp',
    name: 'Kidney Bean'
},
{
    id: 13,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/lentils.webp',
    name: 'Lentils'
},
{
    id: 14,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/lima-beans.webp',
    name: 'Lima Beans'
},
{
    id: 15,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/lupines.webp',
    name: 'Lupines'
},
{
    id: 16,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/mung-bean.webp',
    name: 'Mung Bean'
},
{
    id: 17,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/oats.webp',
    name: 'Oats'
},
{
    id: 18,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/pecans.webp',
    name: 'Pecans'
},
{
    id: 19,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/pigeon-pea.webp',
    name: 'Pigeon Pea'
},
{
    id: 20,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/pinto-beans.webp',
    name: 'Pinto Beans'
},
{
    id: 21,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/pumpkin-seeds.webp',
    name: 'Pumpkin Seeds'
},
{
    id: 22,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/quinoa.webp',
    name: 'Quinoa'
},
{
    id: 23,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/sesame-seeds.webp',
    name: 'Sesame Seeds'
},

{
    id: 24,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/soya-beans.webp',
    name: 'Soya Beans'
},
{
    id: 25,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/spelt.webp',
    name: 'Spelt'
},
{
    id: 26,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/sprouted-grains.webp',
    name: 'Sprouted Grains'
},
{
    id: 27,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/sunflower-seeds.webp',
    name: 'Sunflower Seeds'
},
{
    id: 28,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/teff.webp',
    name: 'Teff'
},
{
    id: 29,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/walnut.webp',
    name: 'Walnut'
},
{
    id: 30,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/white-beans.webp',
    name: 'White Beans'
},
{
    id: 31,
    nutrient: 'protein',
    img: '/img/veganutrients/3.protein/winged-bean.webp',
    name: 'Winged Bean'
}]

export default function Protein() {
    return protein.map((nutrient: any, index: any) =>
        <div className="card" key={index}>
            <img src={nutrient.img} alt={nutrient.name} />
            <br />
            <b>{nutrient.name}</b>
        </div>
    )
}