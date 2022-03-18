import { Link } from "react-router-dom"
import { Login } from "../user/Login"
import { SignUp } from "../user/SignUp"
import { Nav } from "./Nav"

import 'scss/header.scss';

export const Header =() => {
  return(
    <header className="header">
      <div className="headerWrap">
        <Link to="/" className="logo">
          <figure></figure>
        </Link>
  
        <Nav />
  
        <div className="loginWrap">
          <Login />
          <span></span>
          <SignUp />
        </div>

      </div>
    </header>
  )
}