import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import css from './Styles.module.css';
import { useEffect } from "react";

const NotFoundPage = () => {

     const nav = useNavigate();
  const time = 100000;

  useEffect(() => {
    const index = setTimeout(() => {
      nav('/');
    }, time);
    return () => clearTimeout(index);
  }, [nav]);

  return (
    <div className={css.containerError}>
      <p className={css.text}>The page you are looking for may have been moved, deleted, or possibly never existed</p>
      <p className={css.text}>You will be returned to the main page in {time / 1000} seconds</p>
      <p className={css.text}>Or just click</p>
      <Link to="/" className={css.link}>Back to main page</Link>
    </div>
  )
}

export default NotFoundPage;
