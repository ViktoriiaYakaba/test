import React from 'react'
import HeroImage from '../../assets/images/homeImage.jpg';
import { useNavigate } from 'react-router-dom';
import css from './HeroHome.module.css';

const HeroHome = () => {
  const navigate = useNavigate();

   const handleSearchClick = () => {
    navigate('/catalog');
  };

  return (
    <div className={css.container}>
        <ul className={css.list}>
            <li className={css.listItem}>
                  <img className={css.img} src={HeroImage} alt="camper" width={672} height={736}/>    
            </li>
              <li className={css.listItem}>
          <h1 className={css.text}>Campers of your dreams</h1>
          <p className={css.span}>You can find everything you want in our catalog</p>
                         <button type='button' className={css.btn} onClick={handleSearchClick}>View now</button> 
              </li>
              
        </ul>
    </div>
  )
}

export default HeroHome;
