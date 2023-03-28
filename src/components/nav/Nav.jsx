import React from "react";
import classes from "./nav.module.css";
import logo from "../../assets/logo-horizontal.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNavItem } from "../../store/slices/nav";

const Nav = () => {
  const navList = useSelector((state) => state.navSlice.list);
  const listItem = useSelector((state) => state.navSlice.value);
  const dispatch = useDispatch();


  return (
    <div className={classes.Nav}>
      <div className={classes.top}>
        <img src={logo} alt="logo" />
      </div>
      <ul>
        {navList.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            onClick={() => dispatch(getNavItem(item.name))}
          >
            <li
              className={
                listItem === item.name
                  ? `${classes.item} ${classes.active}`
                  : `${classes.item}`
              }
            >
              <i className={item.icon} />
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
