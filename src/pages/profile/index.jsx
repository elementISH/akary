import React, { useState } from "react";
import Breadcrumb from "@/components/BreadCrumb";
import UnitCard from "@/components/UnitCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Data from "@/components/profile/data/Data";

export default function Profile() {
  let path = [{ text: "Home", link: "/" }, { text: "Profile" }];
  const [tabsActive, setTabsActive] = useState("personal");
  const [password, setPassword] = useState(false);

  return (
    <div className="page">
      <div className="profile__header pt-5 pb-5 pb-lg-0">
        <div className="container d-lg-flex justify-content-between">
          <Breadcrumb path={path} />
          <h2 className="profile__name">Nour</h2>
        </div>
      </div>
      <div>
        <div className="profile__img-cont p-2">
          <img
            src="/images/profile-user.png"
            className="profile__img"
            alt="profile"
          />
        </div>
        <div className="container">
          <div className="profile__tabs">
            <ul className="d-flex justify-content-center gap-3 list-unstyled mb-5">
              <li
                className={`profile__tabs-item py-2 px-1 px-md-3 ${
                  tabsActive === "personal" ? "active" : ""
                }`}
                onClick={() => setTabsActive("personal")}
              >
                Personal Data
              </li>
              <li
                className={`profile__tabs-item py-2 px-1 px-md-3 ${
                  tabsActive === "favourite" ? "active" : ""
                }`}
                onClick={() => setTabsActive("favourite")}
              >
                Favourite units
              </li>
              <li
                className={`profile__tabs-item py-2 px-1 px-md-3 ${
                  tabsActive === "units" ? "active" : ""
                }`}
                onClick={() => setTabsActive("units")}
              >
                My units
              </li>
            </ul>
          </div>
          <div className="profile__tabs-content">
            <div
              className={`profile__tabs-content-item ${
                tabsActive === "personal" ? "profile__tab--active" : ""
              }`}
            >
              <Data />
            </div>
            <div
              className={`profile__tabs-content-item ${
                tabsActive === "favourite" ? "profile__tab--active" : ""
              }`}
            >
              <div className="row">
                <UnitCard
                  img="/images/asset-2.jpeg"
                  title="house for sale"
                  desc="This unit is very good you have to buy it now!"
                  location="5 Mosaddak, dokki"
                  bedrooms="2"
                  bathrooms="1"
                  size="210"
                  fav
                />
              </div>
            </div>
            <div
              className={`profile__tabs-content-item ${
                tabsActive === "units" ? "profile__tab--active" : ""
              }`}
            >
              <div className="row">
                <UnitCard
                  img="/images/asset-2.jpeg"
                  title="house for sale"
                  desc="This unit is very good you have to buy it now!"
                  location="5 Mosaddak, dokki"
                  bedrooms="2"
                  bathrooms="1"
                  size="210"
                  fav
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
