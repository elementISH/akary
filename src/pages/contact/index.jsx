import React from "react";
import Breadcrumb from "@/components/BreadCrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Contact() {
  let path = [{ text: "Home", link: "/" }, { text: "Contact" }];
  return (
    <div className="container py-5">
      <Breadcrumb path={path} />
      <h1 className="text-center">Contact With AKARY</h1>
      <div className="d-md-flex gap-3">
        <div className="contact__left">
          <form className="contact-form d-flex flex-column">
            <label>Name</label>
            <div className="d-flex gap-2">
              <input type="text" className="w-100" placeholder="First" />
              <input type="text" className="w-100" placeholder="Last" />
            </div>
            <label>Phone</label>
            <input type="phone" placeholder="Phone number" />
            <label>E-mail</label>
            <input type="email" placeholder="Email Address" />
            <label>Subject</label>
            <input type="text" placeholder="How can we help you" />
            <label>Message</label>
            <textarea className="contact__textarea"></textarea>
            <input type="submit" placeholder="" />
          </form>
        </div>
        <div className="contact__right">
          <h6 className="contact__sub-title mb-1">Other Ways to Reach Us</h6>
          <div className="contact__social d-flex gap-3 mb-4 ">
            <Link href="#">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="fs-2"
                style={{ color: "#311a56" }}
              />
            </Link>
            <Link href="#">
              <FontAwesomeIcon
                className="fs-2"
                icon={faTwitter}
                style={{ color: "#311a56" }}
              />
            </Link>
            <Link href="#">
              <FontAwesomeIcon
                className="fs-2"
                icon={faInstagram}
                style={{ color: "#311a56" }}
              />
            </Link>
            <Link href="#">
              <FontAwesomeIcon
                className="fs-2"
                icon={faFacebook}
                style={{ color: "#311a56" }}
              />
            </Link>
          </div>
          <h6 className="contact__sub-title mb-3">Other Ways to Reach Us</h6>
          <p className="contact__email mb-4">akary8792@gmail.com</p>
          <h6 className="contact__sub-title mb-1">Mailing Address</h6>
          <p className="text-muted">
            We love getting stuff int the mail Except credit card offers. Send
            any thing here:
          </p>
          <h6>AKARY, inc 5 Mosadak street, Dokky, Giza, Egypt</h6>
        </div>
      </div>
    </div>
  );
}
