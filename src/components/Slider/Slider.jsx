// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper } from 'swiper/react';}
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper rounded-lg h-[350px] md:h-[550px]"
      >
        <SwiperSlide>
          <img 
            src="https://i.ibb.co/rcbc1dH/photo-1582407947304-fd86f028f716.jpg"
            alt=""
            className="w-full object-fill object-center h-full"
          />

          

        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/QdkzGLK/istockphoto-1409298953-170667a.webp"
            alt=""
            className="w-full object-fill object-center h-full"
          />
          
        
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/5G8Zkgr/house-2511060-640.jpg"
            alt=""
            className="w-full object-fill object-center h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/XtmzwW4/home-real-estate-residential-living-room.jpg"
            alt=""
            className="w-full object-fill object-center h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/rcbc1dH/photo-1582407947304-fd86f028f716.jpg"
            alt=""
            className="w-full object-fill object-center h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/99PmVp4/wp4110663.webp"
            alt=""
            className="w-full object-fill object-center h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/5G8Zkgr/house-2511060-640.jpg"
            alt=""
            className="w-full object-fill object-center h-full"
          />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;
