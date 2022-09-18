import React from "react";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./swiper.css";


export default function SwiperComponent(props) {
  console.log(props);
  return (
    <>
      <div className="content">
        <div className="swiper" style={{ width: props.wid === true ? '75%' : '100%' }}>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={props.slides}
            navigation
            pagination={props.pagination ? { clickable: true } : false}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            style={{ height: "100%", width: "100%", borderRadius: "15px", color: "#ccc", paddingLeft: props.pad === true ? '40px' : '0px'}}
          >
            {props.arr.map((item, idx) => (
              <SwiperSlide key={idx}>
                <props.card item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
<<<<<<< HEAD
        {
          props.skid ? (
            <div className="skidka">
              <img src="/swiper/skidka.png" alt="img" />
              <img src="/swiper/baby.png" alt="img" />
            </div>
          ) : (
            <div style={{ width: '0px', height: '0px' }}>
              <></>
            </div>
          )
        }
=======
>>>>>>> 6b95b5f6b6ab24585ec8a81ec4e0cc1ff9950a40
      </div>
    </>
  );
}
