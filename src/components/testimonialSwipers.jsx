import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper";
const NewsSwiper = () => {
    return (
        <div style={{ width: "80%", height: "50vh", margin: "auto", padding: "1em" }}>
            <Swiper
                spaceBetween={30}
                centeredSlides={false}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: false,
                }}
                navigation={false}
                modules={[Autoplay, Pagination]}

            >
                <SwiperSlide>
                    <div >
                      <h1>sdfghjkjhgffghjk</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div >
                      <h1>sdfghjkjhgffghjk</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div >
                      <h1>sdfghjkjhgffghjk</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div >
                      <h1>sdfghjkjhgffghjk</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div >
                      <h1>sdfghjkjhgffghjk</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default NewsSwiper