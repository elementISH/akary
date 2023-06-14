import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

export default function Carousel(props) {
  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      loop={true}
      className="mySwiper"
      style={{ transform: null }}
    >
      {props.imgs.map((img, i) => {
        return (
          <SwiperSlide key={i}>
            <img
              className="main-carousel__image"
              src={img}
              alt="unit"
              key={i}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
