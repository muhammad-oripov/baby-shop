import { Box } from "@mui/system";
import React from "react";
import { Helmet } from "react-helmet";
import SwiperComponent from "../Components/swiper/SwiperComponent";
import Swiper_shop from "../Components/swiper/Swiper_shop";
import { Images } from "../Components/swiper/Swip_arr";
import { cardImg } from "../Components/swiper/Swip_arr";
import { Swip_arr1 } from "../Components/swiper/Swip_arr";


export default function Home() {
	return (
		<>
			<Helmet>
				<link
					rel="icon"
					href="https://static.npmjs.com/attachments/ck3uweazy72ye8874y9kkxnx1-gak.png"
				/>
				<title>Bernu: подарки для ваших детей</title>
			</Helmet>
			<div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
				<SwiperComponent
					arr={cardImg}
					card={Images}
					slides={1}
					pagination={true}
					skid={true}
					wid={true}
				/>
				<Box display='flex' flexDirection='column' margin='0px auto'>
					<Box maxWidth='1920px' height='610px' textAlign='center' display='flex' flexDirection='column' gap='30px'>
						<h1 style={{ marginTop: '60px' }}>Вы уже смотрели</h1>
						<SwiperComponent
							arr={Swip_arr1}
							card={Swiper_shop}
							slides={6}
							pagination={false}
							pad={true}
						/>
					</Box>
					<Box maxWidth='1920px' height='610px' textAlign='center' display='flex' flexDirection='column' gap='30px' bgcolor='#F4F5F9'>
						<h1 style={{ marginTop: '60px' }}>Акции и скидки</h1>
						<SwiperComponent
							arr={Swip_arr1}
							card={Swiper_shop}
							slides={6}
							pagination={false}
							pad={true}
						/>
					</Box>
					<Box>

					</Box>
					<Box>

					</Box>
					<Box>

					</Box>
				</Box>
			</div>
		</>
	);
}