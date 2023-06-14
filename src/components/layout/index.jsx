import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ page }) {
  const [loginActive, setLoginActive] = useState(false);
  const [login, setLogin] = useState(true);

  return (
    <>
      <Navbar
        loginActive={loginActive}
        setLoginActive={setLoginActive}
        login={login}
        setLogin={setLogin}
      />
      {page}
      <Footer
        loginActive={loginActive}
        setLoginActive={setLoginActive}
        login={login}
        setLogin={setLogin}
      />
    </>
  );
}
