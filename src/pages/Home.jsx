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
					href="https://static.npmjs.com/attachments/ck3uweazy72ye8874y9kkxnx1-gak.png"
				/>
				<title>Bernu: подарки для ваших детей</title>
			</Helmet>
			<div>
				<SwiperComponent
					arr={cardImg}
					card={Images}
					slides={1}
					pagination={true}
				/>
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
