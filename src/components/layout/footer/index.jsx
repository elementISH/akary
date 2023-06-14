import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Link from "next/link";

export default function Footer(props) {
  return (
    <footer>
      <div className="container">
        <div className="row text-white">
          <div className="col-12 col-md-5">
            <img
              className="footer__logo"
              src="/images/logo.png"
              alt="akary logo"
            />
            <h4>Mission and Value</h4>
            <p>
              We seek to facilitate the bying nd selling process of the real
              estate market amoung people through the use of artificial
              intelligence
            </p>
            <div className="contact__social d-flex gap-3 mb-4 ">
              <Link href="#">
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="fs-2"
                  style={{ color: "white" }}
                />
              </Link>
              <Link href="#">
                <FontAwesomeIcon
                  className="fs-2"
                  icon={faTwitter}
                  style={{ color: "white" }}
                />
              </Link>
              <Link href="#">
                <FontAwesomeIcon
                  className="fs-2"
                  icon={faInstagram}
                  style={{ color: "white" }}
                />
              </Link>
              <Link href="#">
                <FontAwesomeIcon
                  className="fs-2"
                  icon={faFacebook}
                  style={{ color: "white" }}
                />
              </Link>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <h3 className="mb-4">AKARY</h3>
            <ul className="footer__list list-unstyled">
              <li className="footer__list-item">
                <Link href="/">Home</Link>
              </li>
              <li className="footer__list-item">
                <Link href="/about">About us</Link>
              </li>
              <li className="footer__list-item">
                <Link href="/contact">Contact us</Link>
              </li>
              <li className="footer__list-item">
                <Link
                  href="/"
                  onClick={(e) => {
                    props.setLoginActive(true);
                    props.setLogin(true);
                    e.preventDefault();
                  }}
                >
                  Login
                </Link>
              </li>
              <li className="footer__list-item">
                <Link
                  href="/"
                  onClick={(e) => {
                    props.setLoginActive(true);
                    props.setLogin(false);
                    e.preventDefault();
                  }}
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4">
            <h3 className="mb-4">SERVICES</h3>
            <ul className="footer__list list-unstyled">
              <li className="footer__list-item">
                <Link href="/services/unit_pricing">Unit pricing</Link>
              </li>
              <li className="footer__list-item">
                <Link href="/services/calculation-of-finishing">
                  Finishing Quantity
                </Link>
              </li>
              <li className="footer__list-item">
                <Link href="/services/sell_unit">Add unit</Link>
              </li>
              <li className="footer__list-item">
                <Link href="/services/all_units">Units</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
/*
<button className='nav__login-button fw-bolder' 
        onClick={() => {setLoginActive(true)
                      setLogin(true)}}>
  Login
</button>
<button className='nav__login-button fw-bolder'
        
  Register
</button>
*/
