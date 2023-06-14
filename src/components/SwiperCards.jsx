import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function SwiperCards(props) {
  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      navigation={{
        prevEl: props.prevRef,
        nextEl: props.nextRef,
      }}
      loopedSlides={true}
      breakpoints={{
        300: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
      }}
      modules={[Navigation]}
      className="mySwiper"
    >
      {props.content.map((ele) => {
        return (
          <SwiperSlide
            className="slide d-flex justify-content-between flex-column"
            key={Math.random()}
          >
            <div className="slide__info">
              <img src={ele.image} alt="" />
              <div className="slide__text">
                <h6 className="slide__title m-0">{ele.name}</h6>
                {ele.position && (
                  <p className="slide__position">{ele.position}</p>
                )}
              </div>
            </div>
            <div className="slide__social d-flex justify-content-center gap-3 align-content-center">
              <Link href={ele.whatsapp || "#"}>
                <FontAwesomeIcon icon={faWhatsapp} />
              </Link>
              <Link href={ele.twitter || "#"}>
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link href={ele.instagram || "#"}>
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link href={ele.facebook || "#"}>
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
