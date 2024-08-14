import React from 'react'
import HeroImage from '../../../images/homeImage.jpg';
import css from './HeroHome.module.css';

const HeroHome = () => {
  return (
    <div className={css.container}>
        <ul className={css.list}>
            <li className={css.listItem}>
                  <img className={css.img} src={HeroImage} alt="camper" width={672} height={736}/>    
            </li>
              <li className={css.listItem}>
                          <p className={css.text}>The road is yours, freedom is yours. <span>Camper, van, and campervan rentals.</span></p>
                         <button type='button' className={css.btn}>Search now</button> 
              </li>
              
        </ul>
    </div>
  )
}

export default HeroHome;
