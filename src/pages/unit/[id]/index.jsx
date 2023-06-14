import React from "react";
import Carousel from "@/components/swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as heartRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faBath,
  faBed,
  faHouse,
  faLocationDot,
  faHeart as heartSolid,
} from "@fortawesome/free-solid-svg-icons";
import Breadcrumb from "@/components/BreadCrumb";

export default function Unit() {
  let imgs = [
    "/images/Scroll Group 1.png",
    "/images/Scroll Group 1.png",
    "/images/Scroll Group 1.png",
  ];
  const isFav = false;
  return (
    <div className="single-unit mb-5">
      <div className="container">
        <div className="single-unit__text mb-5">
          <div className="d-flex justify-content-between">
            <h4 className="single-unit__title">house for sale</h4>
            <div className="d-flex justify-content-between">
              <div>
                <div className="profile__img-cont d-flex align-items-center h-100">
                  <img
                    src="/images/profile-user.png"
                    className="profile__img"
                    alt="profile"
                    style={{ width: "50px", height: "50px" }}
                  />
                </div>
              </div>
              <div className="pt-3 pb-5 pb-lg-0 ">
                <div className="container d-lg-flex justify-content-between flex-column">
                  <h2 className="profile__name fs-5">Nour</h2>
                  <h6>
                    <FontAwesomeIcon icon="fa-phone" /> 01115535536, 01114112235
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className="single-unit__header my-2 d-flex justify-content-between">
            <span className="single-unit__price main-color">250,000 L.E.</span>
            <span className="single-unit__favourite">
              <FontAwesomeIcon icon={heartSolid} />
            </span>
          </div>
          <div className="mb-2">
            <FontAwesomeIcon icon={faBed} />
            <span className="single-unit__bedrooms px-2">2</span>
            <FontAwesomeIcon icon={faBath} />
            <span className="single-unit__bedrooms px-2">1</span>
            <FontAwesomeIcon icon={faHouse} />
            <span className="single-unit__bathrooms px-2">
              210 m<sup>2</sup>
            </span>
          </div>
          <div className="single-unit__sub-description mb-1">
            This unit is very good you have to buy it now!
          </div>
          <div className="single-unit__location">
            <FontAwesomeIcon icon={faLocationDot} /> 5 Mossadak, Dokki
          </div>
        </div>
        <div className="single-unit__rooms mb-4">
          <table className="w-100">
            <thead>
              <tr>
                <td className="main-color">Type</td>
                <td className="main-color">Height</td>
                <td className="main-color">Length</td>
                <td className="main-color">Width</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>Bedroom</span>
                </td>
                <td>
                  <span>4</span>
                </td>
                <td>
                  <span>4</span>
                </td>
                <td>
                  <span>2</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Bedroom</span>
                </td>
                <td>
                  <span>4</span>
                </td>
                <td>
                  <span>4</span>
                </td>
                <td>
                  <span>2</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>Bathroom</span>
                </td>
                <td>
                  <span>4</span>
                </td>
                <td>
                  <span>4</span>
                </td>
                <td>
                  <span>2</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="single-unit__description mb-5">
          <h4 className="text-center main-color fw-bolder mb-3">Description</h4>
          <div className="single-unit__description-text">
            this is an amazing unit for sale for sale for sale for sale for sale
            for sale for sale for sale for sale for sale for sale for sale for
            sale for sale for sale for sale for sale for sale for sale for sale
          </div>
        </div>
      </div>
    </div>
  );
}
