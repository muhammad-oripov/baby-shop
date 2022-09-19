import React from 'react'
import bg1 from '../images/image 3 (3).png'
import bg2 from '../images/image 3 (4).png'
import bg3 from '../images/image 3 (5).png'
import bg4 from '../images/image 3 (6).png'
import Sale1 from '../images/image 2 (1).png'
import Sale2 from '../images/image 2 (2).png'
import Sale3 from '../images/image 2 (3).png'
import Sale4 from '../images/image 2 (4).png'
import siper from '../images/image 2 (5).png'
import siper1 from '../images/image 2 (6).png'
import siper2 from '../images/image 2 (7).png'
import siper3 from '../images/image 2 (8).png'
import siper4 from '../images/image 2 (9).png'
import siper5 from '../images/image 2 (10).png'
import siper6 from '../images/image 2 (11).png'
import siper7 from '../images/image 2 (12).png'



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
        bg: Sale1,
        title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        leftIcon: 'Discount',
        mony: '100 €',
    },
    {
        bg: Sale2,
        title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        leftIcon: 'Discount',
        mony: '100 €',
    },
    {
        bg: Sale3,
        title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        leftIcon: 'Discount',
        mony: '100 €',
    },
    {
        bg: Sale4,
        title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        leftIcon: 'Discount',
        mony: '100 €',
    },
    {
        bg: Sale2,
        title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        leftIcon: 'Discount',
        mony: '100 €',
    },
    {
        bg: Sale3,
        title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        leftIcon: 'Discount',
        mony: '100 €',
    },
]

export const Swiper_arr3 = [
    {
        bg: siper,
        title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        leftIcon: 'Hit',
        mony: '100 €',
    },
    {
        bg: siper1,
        title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        leftIcon: 'Hit',
        mony: '100 €',
    },
    {
        bg: siper2,
        title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        leftIcon: 'Hit',
        mony: '100 €',
    },
    {
        bg: siper3,
        title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        leftIcon: 'Hit',
        mony: '100 €',
    },
    {
        bg: siper1,
        title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        leftIcon: 'Hit',
        mony: '100 €',
    },
    {
        bg: siper2,
        title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        leftIcon: 'Hit',
        mony: '100 €',
    },
]


export const Swiper_arr4 = [
    {
        bg: siper4,
        title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        leftIcon: 'New',
        mony: '100 €',
    },
    {
        bg: siper5,
        title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        leftIcon: 'New',
        mony: '100 €',
    },
    {
        bg: siper6,
        title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        leftIcon: 'New',
        mony: '100 €',
    },
    {
        bg: siper7,
        title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        leftIcon: 'New',
        mony: '100 €',
    },
    {
        bg: siper4,
        title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        leftIcon: 'New',
        mony: '100 €',
    },
    {
        bg: siper5,
        title: 'Safety 1st Timba Natural Wood 3 в 1 Стульчик для кормления + подушка',
        leftIcon: 'New',
        mony: '100 €',
    },
]
