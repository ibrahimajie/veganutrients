import React from 'react';

const fiber = [{
    id: 0,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/almonds.webp',
    name: 'Almonds'
},
{
    id: 1,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/apple.webp',
    name: 'Apple'
},
{
    id: 2,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/avocado.webp',
    name: 'Avocado'
},
{
    id: 3,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/barley.webp',
    name: 'Barley'
},
{
    id: 4,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/berries.webp',
    name: 'Berries'
},
{
    id: 5,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/bran.webp',
    name: 'Bran'
},
{
    id: 6,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/broccoli.webp',
    name: 'Broccoli'
},
{
    id: 7,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/carrot.webp',
    name: 'Carrot'
},
{
    id: 8,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/cauliflower.webp',
    name: 'Cauliflower'
},
{
    id: 9,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/celery.webp',
    name: 'Celery'
},
{
    id: 10,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/chia-seeds.webp',
    name: 'Chia Seeds'
},
{
    id: 11,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/corn.webp',
    name: 'Corn'
},
{
    id: 12,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/fig.webp',
    name: 'Fig'
},
{
    id: 13,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/flax-seeds.webp',
    name: 'Flax Seeds'
},
{
    id: 14,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/grape.webp',
    name: 'Grape'
},
{
    id: 15,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/green-beans.webp',
    name: 'Green Beans'
},
{
    id: 16,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/jerusalem-artichokes.webp',
    name: 'Jerusalem Artichokes'
},
{
    id: 17,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/kiwifruit.webp',
    name: 'Kiwifruit'
},
{
    id: 18,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/legumes.webp',
    name: 'Legumes'
},
{
    id: 19,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/nopal.webp',
    name: 'Nopal'
},
{
    id: 20,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/nuts.webp',
    name: 'Nuts'
},
{
    id: 21,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/oats.webp',
    name: 'Oats'
},
{
    id: 22,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/pear.webp',
    name: 'Pear'
},
{
    id: 23,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/peas.webp',
    name: 'Peas'
},

{
    id: 24,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/plum.webp',
    name: 'Plum'
},
{
    id: 25,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/potatoes.webp',
    name: 'Potatoes'
},
{
    id: 26,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/prune.webp',
    name: 'Prune'
},
{
    id: 27,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/psyllium-seeds-husks.webp',
    name: 'Psyllium Seeds Husks'
},
{
    id: 28,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/quinces.webp',
    name: 'Quinces'
},
{
    id: 29,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/ripe-banana.webp',
    name: 'Ripe Banana'
},
{
    id: 30,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/root-vegetables.webp',
    name: 'Root Vegetables'
},
{
    id: 31,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/rye.webp',
    name: 'Rye'
},

{
    id: 32,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/seeds.webp',
    name: 'Seeds'
},
{
    id: 33,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/sweet-potatoes.webp',
    name: 'Sweet Potatoes'
},
{
    id: 34,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/tomato.webp',
    name: 'Tomato'
},
{
    id: 35,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/whole-grains.webp',
    name: 'Whole Grains'
},
{
    id: 36,
    nutrient: 'fiber',
    img: '/img/veganutrients/6.fiber/zucchini.webp',
    name: 'Zucchini'
}]

export default function Fiber() {
    return fiber.map((nutrient: any, index: any) =>
        <div className="card" key={index}>
            <img src={nutrient.img} alt={nutrient.name} />
            <br />
            <b>{nutrient.name}</b>
        </div>
    )
}