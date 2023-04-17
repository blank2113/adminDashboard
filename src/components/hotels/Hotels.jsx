import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import classes from './hotels.module.css'

const Hotels = () => {
    const navigate = useNavigate()
  return (
    <div className={classes.Hotels}>
          <div className={classes.inner}>
        <h2>Гостиницы</h2>
        <div className={classes.btnGroup}>
          <button
            className={classes.allBtn}
            onClick={() => navigate("/main/hotels/all")}
          >
            <i className="fa-solid fa-list" />
            Все гостиницы
          </button>
          <button
            className={classes.addBtn}
            onClick={() => navigate("/main/hotels/add")}
          >
            <i className="fa-solid fa-plus" />
            Добавить
          </button>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Hotels