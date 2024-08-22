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
                          <p className={css.text}>The road is yours, freedom is yours. <span>Camper, van, and campervan rentals.</span></p>
                         <button type='button' className={css.btn} onClick={handleSearchClick}>Search now</button> 
              </li>
              
        </ul>
    </div>
  )
}

export default HeroHome;
