import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";

export default function Login(props) {
  const [loginError, setLoginError] = useState(false);
  const checkEmail = async (values) => {
    const res = await fetch("/api/user/checkEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    return data.exists;
  };
  const checkUser = async (values) => {
    const res = await fetch("/api/user/check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    return data.exists;
  };

  const createUser = async (values) => {
    const userExists = await checkEmail(values);
    if (userExists) return;
    const res = await fetch("/api/user/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await res.json();
  };

  const loginUser = async (values) => {
    const userExists = await checkUser(values);
    if (userExists) {
      props.logged(true);
    } else {
      setLoginError(true);
    }
  };

  const formik = useFormik({
    initialValues: {
      phone: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};
      if (props.login) {
        if (!values.email) {
          errors.email = "Email is required";
        }
        if (!values.password) {
          errors.password = "Password is required";
        }
      } else {
        if (!values.phone) {
          errors.phone = "Phone is required";
        }
        if (!values.email) {
          errors.email = "Email is required";
        }
        if (!values.password) {
          errors.password = "Password is required";
        }
        if (!values.terms) {
          errors.terms = "You must agree to terms and conditions";
        }
      }
      return errors;
    },
    onSubmit: (values) => {
      createUser(values);
      props.setLoginActive(false);
      setInterval(() => {
        loginUser(values);
      }, 1000);
    },
  });

  return (
    <>
      {props.loginActive && (
        <div className="user-login__cont rounded-4">
          <div className="position-relative">
            <img
              className="user-login__logo m-auto mb-3"
              src="/images/logo.png"
              alt="akary logo"
            />
            <div className="login__tabs mb-3">
              <button
                className={"login__tab nav_button " + (props.login && "active")}
                onClick={() => props.setLogin(true)}
              >
                Login
              </button>
              <button
                className={
                  "login__tab nav_button " + (!props.login && "active")
                }
                onClick={() => props.setLogin(false)}
              >
                Register
              </button>
            </div>
            {props.login ? (
              <div className="login__cont">
                <p>Log in to your account</p>
                <form
                  className="login__form d-flex flex-column gap-2"
                  onSubmit={(event) => {
                    event.preventDefault();
                    loginUser(formik.values);
                    props.setLoginActive(false);
                  }}
                >
                  <input
                    type="text"
                    className={
                      "w-100 " + (formik.errors.email && "border border-danger")
                    }
                    placeholder="Email address"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && (
                    <div className="text-danger">{formik.errors.email}</div>
                  )}
                  <input
                    type="text"
                    className={
                      "w-100 mb-1 " +
                      (formik.errors.password && "border border-danger")
                    }
                    placeholder="Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.password && (
                    <div className="text-danger">{formik.errors.password}</div>
                  )}
                  {loginError && (
                    <div className="text-danger">
                      Incorrect email or password
                    </div>
                  )}
                  <br />
                  {formik.errors.login && (
                    <div className="text-danger">{formik.errors.login}</div>
                  )}
                  <input type="submit" className="w-100" value="Login" />
                </form>
              </div>
            ) : (
              <div className="register__cont">
                <p>Create account</p>
                <form
                  className="register__form d-flex flex-column gap-2"
                  onSubmit={formik.handleSubmit}
                >
                  <input
                    type="text"
                    className={
                      "w-100 " + (formik.errors.phone && "border border-danger")
                    }
                    placeholder="Phone"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.phone && (
                    <div className="text-danger">{formik.errors.phone}</div>
                  )}
                  <input
                    type="text"
                    className={
                      "w-100 " + (formik.errors.email && "border border-danger")
                    }
                    placeholder="Email address"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.email && (
                    <div className="text-danger">{formik.errors.email}</div>
                  )}
                  <input
                    type="text"
                    className={
                      "w-100 mb-1 " +
                      (formik.errors.password && "border border-danger")
                    }
                    placeholder="Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.password && (
                    <div className="text-danger">{formik.errors.password}</div>
                  )}
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className={
                        "form-check-input " +
                        (formik.errors.terms && "border border-danger")
                      }
                      name="terms"
                      value={formik.values.terms}
                      onChange={formik.handleChange}
                    />
                    <label className="form-check-label">
                      I agree to the
                      <Link href="/terms-and-conditions">
                        <span className="underline">Terms and Conditions</span>
                      </Link>
                    </label>
                    {formik.errors.terms && (
                      <div className="text-danger">{formik.errors.terms}</div>
                    )}
                  </div>
                  <input type="submit" className="w-100" value="Register" />
                </form>
              </div>
            )}
            <div
              className="login__close"
              onClick={() => props.setLoginActive(false)}
            >
              <FontAwesomeIcon icon={faX} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
