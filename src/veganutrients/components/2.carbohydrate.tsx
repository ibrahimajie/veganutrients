import React from 'react';

const carbohydrate = [{
    id: 0,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/amaranth-grain.webp',
    name: 'Amaranth Grain'
},
{
    id: 1,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/arrowroot.webp',
    name: 'Arrowroot'
},
{
    id: 2,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/barley.webp',
    name: 'Barley'
},
{
    id: 3,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/beans.webp',
    name: 'Beans'
},
{
    id: 4,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/breadfruit.webp',
    name: 'Breadfruit'
},
{
    id: 5,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/buckwheat.webp',
    name: 'Buckwheat'
},
{
    id: 6,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/bulgur.webp',
    name: 'Bulgur'
},
{
    id: 7,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/butternut-squash.webp',
    name: 'Butternut Squash'
},
{
    id: 8,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/cassava.webp',
    name: 'Cassava'
},
{
    id: 9,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/chickpeas.webp',
    name: 'Chickpeas'
},
{
    id: 10,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/corn.webp',
    name: 'Corn'
},
{
    id: 11,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/farro.webp',
    name: 'Farro'
},
{
    id: 12,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/lentils.webp',
    name: 'Lentils'
},
{
    id: 13,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/oats.webp',
    name: 'Oats'
},
{
    id: 14,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/peas.webp',
    name: 'Peas'
},
{
    id: 15,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/potatoes.webp',
    name: 'Potatoes'
},
{
    id: 16,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/pumpkin.webp',
    name: 'Pumpkin'
},
{
    id: 17,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/quinoa.webp',
    name: 'Quinoa'
},
{
    id: 18,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/rice.webp',
    name: 'Rice'
},
{
    id: 19,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/sorghum.webp',
    name: 'Sorghum'
},
{
    id: 20,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/spelt.webp',
    name: 'Spelt'
},
{
    id: 21,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/sprouted-grains.webp',
    name: 'Sprouted Grains'
},
{
    id: 22,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/sweet-potatoes.webp',
    name: 'Sweet Potatoes'
},
{
    id: 23,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/taro.webp',
    name: 'Taro'
},
{
    id: 24,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/teff.webp',
    name: 'Teff'
},
{
    id: 25,
    nutrient: 'carbohydrate',
    img: '/img/veganutrients/2.carbohydrate/wheat-berries.webp',
    name: 'Wheat Berries'
}]

export default function Carbohydrate() {
    return carbohydrate.map((nutrient: any, index: any) =>
        <div className="card" key={index}>
            <img src={nutrient.img} alt={nutrient.name} />
            <br />
            <b>{nutrient.name}</b>
        </div>
    )
}