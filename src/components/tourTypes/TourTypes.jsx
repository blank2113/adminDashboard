import React from "react";
import classes from "./tourTypes.module.css";
import { Outlet, useNavigate } from "react-router-dom";

const TourTypes = () => {
  const navigate = useNavigate();
 

  return (
    <div className={classes.TourTypes}>
      <div className={classes.inner}>
        <h2>Типы туров</h2>
        <div className={classes.btnGroup}>
          <button
            className={classes.allBtn}
            onClick={() => navigate("/main/tour_types/all")}
          >
            <i className="fa-solid fa-list" />
            Все типы туры
          </button>
          <button
            className={classes.addBtn}
            onClick={() => navigate("/main/tour_types/add")}
          >
            <i className="fa-solid fa-plus" />
            Добавить тур
          </button>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default TourTypes;
