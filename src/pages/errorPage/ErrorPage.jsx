import React from 'react'
import classes from './errorPage.module.css'

const ErrorPage = () => {
  return (
    <div className={classes.ErrorPage}>
        <h1>Ошибка 404</h1>
        <p>страница не существует!!!</p>
    </div>
  )
}

export default ErrorPage