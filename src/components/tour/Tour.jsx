import React from "react";
import classes from "./tour.module.css";
import {  Outlet, useNavigate } from "react-router-dom";

const Tour = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.Tour}>
      <div className={classes.inner}>
        <h2>Все туры</h2>
        <div className={classes.btnGroup}>
          <button
            className={classes.allBtn}
            onClick={() => navigate("/main/tour/all")}
          >
            <i className="fa-solid fa-list" />
            Все туры
          </button>
          <button
            className={classes.fileBtn}
            onClick={() => navigate("/main/tour/files")}
          >
            <i className="fa-solid fa-box-archive" />
            Архив туров
          </button>
          <button
            className={classes.addBtn}
            onClick={() => navigate("/main/tour/add")}
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

export default Tour;
