import React, { useContext, useRef, useState } from "react";
import HeaderButton from "./HeaderButton";
import classes from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import Button from "../UI/Button";
import AuthContext from "../store/auth-Context";
import { FaBars } from "react-icons/fa";

const Header = (props) => {
  const [mobileHeader, setMobileHeader] = useState("false");
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    authCtx.logout();
  };

  const expandHeader = () => {
    setMobileHeader(!mobileHeader);
  };

  return (
    <div className={`${classes.header_container} ${mobileHeader==true?classes.headerContainer_active:''}`} >
    <FaBars className={classes.icon_active} onClick={expandHeader} />
      <header className={`${classes.header} ${mobileHeader==true?classes.header_active:''}`}>
        {authCtx.isLoggedIn && (
          <Button className={classes.logOutbtn} onClick={logoutHandler}>
            Logout
          </Button>
        )}
        <ul className={classes.headerList}>
          {authCtx.isLoggedIn && (
            <li>
              <NavLink to="/home" activeClassName={classes.active}>
                Home
              </NavLink>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li>
              <NavLink exact to="/" activeClassName={classes.active}>
                Store
              </NavLink>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li>
              <NavLink to="/about" activeClassName={classes.active}>
                About
              </NavLink>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li>
              <NavLink to="/contact" activeClassName={classes.active}>
                Contact
              </NavLink>
            </li>
          )}
        </ul>
        {!authCtx.isLoggedIn && (
          <Link to="/auth" className={classes.authLogin}>
            Login
          </Link>
        )}

        {authCtx.isLoggedIn && (
          <HeaderButton
            className={classes.headerButton}
            onConfirmation={props.onShowCart}
          />
        )}
      </header>
      </div>
  );
};

export default Header;
