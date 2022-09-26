import React from 'react'
import SVGIcons from '../SVGIcons'
import bg1 from './images/image 3 (3).png'
import bg2 from './images/image 3 (4).png'
import bg3 from './images/image 3 (5).png'
import bg4 from './images/image 3 (6).png'


const Swip_arr = () => {
    return (
        <div></div>
    )
}

export default Swip_arr


export function Images({ item }) {
    return (
        <div>
            <img
                src={item.img}
                alt="img"
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
            />
        </div>
    );
}

export let cardImg = [
    {
        img: "/swiper/first.png",
    },
    {
        img: "/swiper/first.png",
    },
    {
        img: "/swiper/first.png",
    },
    {
        img: "/swiper/first.png",
    },
    {
        img: "/swiper/first.png",
    },
];


export const Swip_arr1 = [
    {
        bg: bg1,
        title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        leftIcon: 'Discount',
        mony: '100 €',
        skidM: true
    },
    {
        bg: bg2,
        title: 'Футболка DJ Dutchjeans E38091-45 Anthracite 16...',
        leftIcon: 'Hit',
        mony: '1200 €'
    },
    {
        bg: bg3,
        title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        mony: '1000 €',
        skidM: true
    },
    {
        bg: bg4,
        title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        leftIcon: 'New',
        mony: '100 €',
        skidM: true
    },
    {
        bg: bg3,
        title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        mony: '1000 €',
        skidM: true
    },
    {
        bg: bg4,
        title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        leftIcon: 'New',
        mony: '100 €',
        skidM: true
    },
    {
        bg: bg1,
        title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        leftIcon: 'Discount',
        mony: '100 €',
        skidM: true
    },
    {
        bg: bg2,
        title: 'Футболка DJ Dutchjeans E38091-45 Anthracite 16...',
        leftIcon: 'Hit',
        mony: '1200 €'
    },
]

export const Swiper_arr2 = [
    {
        bg: '',
        title: '',
        leftIcon: '',
        mony: ''
    }
]