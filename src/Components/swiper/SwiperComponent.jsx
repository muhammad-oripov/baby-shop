import React from "react";
import { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./swiper.css";

export default function SwiperComponent(props) {
  return (
    <>
      <div className="content">
        <div className="swiper">
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={props.slides}
            navigation
            pagination={props.pagination ? { clickable: true } : false}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            style={{ height: "100%", width: "100%", borderRadius: "15px", color : "#ccc"}}
          >
            {props.arr.map((item, idx) => (
              <SwiperSlide key={idx}>
                <props.card item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="skidka">
          <img src="/swiper/skidka.png" alt="img" />
          <img src="/swiper/baby.png" alt="img" />
        </div>
      </div>
    </>
  );
}
