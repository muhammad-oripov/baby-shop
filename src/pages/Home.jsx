import React from "react";
import { Helmet } from "react-helmet";
import SwiperComponent from "../Components/swiper/SwiperComponent";

export default function Home() {
	let cardImg = [
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

	return (
		<>
			<Helmet>
				<link
					rel="icon"
					href="/public/logo.png"
				/>
				<title>Bernu: подарки для ваших детей</title>
			</Helmet>
			<div style={{ display: 'flex', alignItems: 'center', width: '97%', margin: '0 auto' }}>
				<SwiperComponent
					arr={cardImg}
					card={Images}
					slides={1}
					pagination={true}
				/>
				<div className="skidka">
					<img src="/swiper/skidka.png" alt="img" />
					<img src="/swiper/baby.png" alt="img" />
				</div>
			</div>
		</>
	);
}

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
