import { faHeart as heartRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faBath,
  faBed,
  faHouse,
  faLocationDot,
  faUserGroup,
  faHeart as heartSolid,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function UnitCard(props) {
  const isFav = false;
  const router = useRouter();
  const handleClick = () => {
    // Do some validation or other logic here as needed
    router.push("/unit/1");
  };
  return (
    <div
      className="unit-card col-12 col-sm-6 col-md-4"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="unit-card__content">
        <img className="unit-card__img" src={props.img} alt="" />
        <div className="unit-card__text p-3">
          <h4 className="mb-1">
            <Link className="text-decoration-none secondary-color" href="">
              {props.title}
            </Link>
          </h4>
          <div className="unit-card__header my-2 d-flex justify-content-between">
            <span className="unit-card__favourite">
              {props.fav ? (
                <FontAwesomeIcon icon={heartSolid} />
              ) : (
                <FontAwesomeIcon icon={heartRegular} />
              )}
              <>{/* <FontAwesomeIcon icon={faUserGroup} /> <span>5</span> */}</>
            </span>
          </div>
          <div className="unit-card__description">{props.desc}</div>
          <hr />
          <div className="mb-2">
            <FontAwesomeIcon icon={faBed} />
            <span className="unit-card__bedrooms px-1">{props.bedrooms}</span>
            <FontAwesomeIcon icon={faBath} />
            <span className="unit-card__bathrooms px-1">{props.bathrooms}</span>
            <FontAwesomeIcon icon={faHouse} />
            <span className="unit-card__bathrooms px-1">{props.size}</span>m
            <sup>2</sup>
          </div>
          <div className="unit-card__location">
            <FontAwesomeIcon icon={faLocationDot} /> {props.location}
          </div>
        </div>
      </div>
    </div>
  );
}
