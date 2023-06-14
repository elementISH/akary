import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React, { useRef } from "react";
import SwiperCards from "@/components/SwiperCards";
import Stats from "@/components/generic/stats";
import AboutDetails from "@/components/generic/about";

export default function About() {
  let team = [
    {
      name: "Abdelmalek Ahmed",
      image: "images/abdelmalek.webp",
      position: "Account Manager",
      facebook: "",
      twitter: "",
      instagram: "",
      whatsapp: "",
    },
    {
      name: "Ahmed Abdelsattar",
      image: "images/abdelsattar.webp",
      position: "IT Manager",
      facebook: "",
      twitter: "",
      instagram: "",
      whatsapp: "",
    },
    {
      name: "Nouraldeen Mahmoud",
      image: "images/nour.webp",
      position: "CEO",
      facebook: "",
      twitter: "",
      instagram: "",
      whatsapp: "",
    },
    {
      name: "Mohamed Gafaar",
      image: "images/gafaar.webp",
      position: "Project Manager",
      facebook: "",
      twitter: "",
      instagram: "",
      whatsapp: "",
    },
    {
      name: "Mahmoud Osama",
      image: "images/osama.webp",
      position: "Project Manager",
      facebook: "",
      twitter: "",
      instagram: "",
      whatsapp: "",
    },
  ];

  let partners = [
    {
      position: "Memaar Almorshedy",
      image: "images/almorshedy.png",
      facebook: "",
      twitter: "",
      instagram: "",
      whatsapp: "",
    },
    {
      position: "Alnahda Cement",
      image: "images/elnahda.png",
      facebook: "",
      twitter: "",
      instagram: "",
      whatsapp: "",
    },
    {
      position: "Ezz Steel",
      image: "images/EzzSteel.png",
      facebook: "",
      twitter: "",
      instagram: "",
      whatsapp: "",
    },
    {
      position: "Talaat Moustafa",
      image: "images/tmg.png",
      facebook: "",
      twitter: "",
      instagram: "",
      whatsapp: "",
    },
  ];

  return (
    <>
      <section className="section">
        <div className="about__main-section container d-flex align-items-center gap-2">
          <div className="about-main__text">
            <h2 className="section__header text-start">About Us</h2>
            <p className="about-main__paragraph w-75">
              We seek to facilitate the bying nd selling process of the real
              estate market amoung people through the use of artificial
              intelligence.
            </p>
            <a href="#goals">
              <button className="about-main__button border-0 px-5 py-2">
                More Goals
              </button>
            </a>
          </div>
          <div className="about-main__img text-center">
            <img
              className="w-100"
              src="images/Team work-amico-1.png"
              alt="aboutus"
            />
          </div>
        </div>
      </section>
      <AboutDetails />

      <Stats />
      <section className="team section">
        <div className="container p-0">
          <div className="team__text d-flex flex-column justify-content-center">
            <h2>Meet Our Leadership Team</h2>
            <p>
              At Vserve, we believe that Our Success depands on the benfit Our
              clients Recieve...
            </p>
            {team.length > 4 ? (
              <div className="team__swiper-buttons">
                <button id="prevRefTeam" className="team__swiper-button">
                  <FontAwesomeIcon icon={"angle-left"} />
                </button>
                <button id="nextRefTeam" className="team__swiper-button">
                  <FontAwesomeIcon icon={"angle-right"} />
                </button>
              </div>
            ) : null}
          </div>
          <div className="team__swiper">
            <SwiperCards
              prevRef={"#prevRefTeam" || null}
              nextRef={"#nextRefTeam" || null}
              content={team}
            />
          </div>
        </div>
      </section>
      <section className="section" id="goals">
        <div className="container p-0 border rounded-4 d-md-flex align-items-stretch">
          <div className="mission__left w-md-50 text-center">
            <img
              src="images/Good team-rafiki.png"
              className="w-100"
              alt="mission"
            />
          </div>
          <div className="mission__right w-50 rounded-4 p-4 w-100 d-flex flex-column">
            <h4 className="text-center text-gold mb-3">Mission & Value</h4>
            <p className="mb-3 fs-4">
              We seek to facilitate the process of buying and selling the real
              estate market among people through the use of artificial
              intelligence We are interested in increasing the number of users
              of this service by the end of 2025 to reach 20,000 people We are
              also working on adding other services related to real estate, such
              as renting or selling apartments through installments for
              guarantees for each of the two clients
            </p>
          </div>
        </div>
      </section>
      <section className="team section">
        <div className="container p-0 flex-row-reverse">
          <div className="team__text d-flex flex-column justify-content-center">
            <h2>Meet Our Leadership Team</h2>
            <p>
              At Vserve, we believe that Our Success depands on the benfit Out
              clients Recieve...
            </p>
            <div className="team__swiper-buttons">
              <button id="prevRef" className="team__swiper-button">
                <FontAwesomeIcon icon={"angle-left"} />
              </button>
              <button id="nextRef" className="team__swiper-button">
                <FontAwesomeIcon icon={"angle-right"} />
              </button>
            </div>
          </div>
          <div className="team__swiper">
            <SwiperCards
              prevRef={"#prevRef" || null}
              nextRef={"#nextRef" || null}
              content={partners}
            />
          </div>
        </div>
      </section>
    </>
  );
}
