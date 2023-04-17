import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import classes from './destinations.module.css'

const Destinations = () => {
    const navigate = useNavigate()
    
  return (
    <div className={classes.Destinations}>
          <div className={classes.inner}>
        <h2>Города</h2>
        <div className={classes.btnGroup}>
          <button
            className={classes.allBtn}
            onClick={() => navigate("/main/destinations/all")}
          >
            <i className="fa-solid fa-list" />
            Все города
          </button>
          <button
            className={classes.addBtn}
            onClick={() => navigate("/main/destinations/addCity")}
          >
            <i className="fa-solid fa-plus" />
            Добавить город
          </button>
          <button
            className={classes.allBtn}
            onClick={() => navigate("/main/destinations/allCities")}
          >
            <i className="fa-solid fa-list" />Страны
          </button>
          <button
            className={classes.addBtn}
            onClick={() => navigate("/main/destinations/addCountry")}
          >
            <i className="fa-solid fa-plus" />
            Добавить страну
          </button>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Destinations