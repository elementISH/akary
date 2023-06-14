import Login from "./Login";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Navbar(props) {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <nav className="bg-white">
      <div className="nav-content container d-flex justify-content-between align-items-center">
        <div className="nav__logo">
          <img src="/images/asset-1.png" alt="logo" />
        </div>
        <ul
          className={
            "nav__list container container-md-fluid justify-content-center d-flex list-unstyled mb-2 mt-3 fw-bolder "
          }
          // ref={refNavlist}
        >
          <li className="nav__item px-3 py-2">
            <Link href="/" className="px-2 py-2">
              Home
            </Link>
          </li>
          <li className="nav__item nav__services-item px-3 py-2 position-relative">
            <Link
              href="/services"
              className="px-2 py-2"
              onClick={(event) => event.preventDefault()}
            >
              Services
            </Link>
            <ul className="nav__services list-unstyled position-absolute">
              <li>
                <Link href="/services/unit_pricing">Unit Pricing</Link>
              </li>
              <li>
                <Link href="/services/finishing_pricing">Finishing</Link>
              </li>
              <li>
                <Link href="/services/sell_unit">Sell Unit</Link>
              </li>
              <li>
                <Link href="/services/all_units">All Units</Link>
              </li>
            </ul>
          </li>
          <li className="nav__item px-3 py-2">
            <Link href="/about" className="px-2 py-2">
              About
            </Link>
          </li>
          <li className="nav__item px-3 py-2">
            <Link href="/contact" className="px-2 py-2">
              Contact
            </Link>
          </li>
        </ul>
        <div className="nav__user mt-1">
          <div className="nav__login">
            {isLogged ? (
              <span
                className="nav__login-button fw-bolder"
                onClick={() => setIsLogged(false)}
              >
                Logout
              </span>
            ) : (
              <>
                <span
                  className="nav__login-button fw-bolder"
                  onClick={() => {
                    props.setLoginActive(true);
                    props.setLogin(true);
                  }}
                >
                  Login
                </span>
                <span
                  className="nav__login-button fw-bolder"
                  onClick={() => {
                    props.setLoginActive(true);
                    props.setLogin(false);
                  }}
                >
                  Register
                </span>
              </>
            )}
          </div>
          <div className="nav__profile">
            <a href="/profile">
              <img
                className="nav__profile-icon"
                src="/images/profile-user.png"
                alt="profile-icon"
              />
            </a>
          </div>
          <span className={"nav__bars"}>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </div>
      </div>
      <Login
        loginActive={props.loginActive}
        setLoginActive={props.setLoginActive}
        login={props.login}
        setLogin={props.setLogin}
        logged={setIsLogged}
      />
    </nav>
  );
}
