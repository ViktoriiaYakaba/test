import React from 'react';
import { useSelector } from 'react-redux';
import { FaRegHeart, FaShower, FaTv} from 'react-icons/fa'; 
import { CiStar, CiLocationOn } from 'react-icons/ci';
import css from './Card.module.css';
import { selectFilteredCatalog } from '../../redux/catalog/selectors'; 
import { PiWindLight } from "react-icons/pi";
import { LiaBedSolid } from "react-icons/lia";
import { IoDiscOutline } from "react-icons/io5";
import { TbToolsKitchen3 } from "react-icons/tb";
import { MdOutlineBathroom } from "react-icons/md";
import LoadMore from '../buttonLoadMore/LoadMore';

const detailIcons = {
  airConditioner: <PiWindLight size={20} />,
  beds: <LiaBedSolid size={20}/>,
  shower: <FaShower size={20} />,
  TV: <FaTv size={20}/>,
  CD: <IoDiscOutline size={20}/>,
  kitchen: <TbToolsKitchen3 size={20}/>, 
  bathroom: <MdOutlineBathroom size={20}/>,
};

const Card = () => {
  const catalogs = useSelector(selectFilteredCatalog);

  if (!Array.isArray(catalogs) || catalogs.length === 0) {
    return <p>No items available</p>;
  }

  return (
    <div className={css.cardContainer}>
      {catalogs.map((catalog) => (
        <div key={catalog._id} className={css.card}>
          <div className={css.imageContainer}>
            {catalog.gallery && catalog.gallery.length > 0 ? (
              <img
                src={catalog.gallery[0]} 
                alt="First gallery image"
                className={css.image}
              />
            ) : (
              <p>No image available</p>
            )}
          </div>
          <div className={css.details}>
            <div className={css.containerName}>
              <h3 className={css.name}>{catalog.name}</h3>
              <ul className={css.list}>
                <li className={css.listItem}><p className={css.price}>${catalog.price}</p></li>
                <li className={css.listItem}> 
                  <button className={css.btnHeart}><FaRegHeart className={css.heart} size={24} /></button>
                </li>
              </ul>
            </div>
            <div className={css.containerRating}>
              <p className={css.rating}><CiStar className={css.star} fill='#ffc531' size={24}/>{catalog.rating}</p>
              <p className={css.location}><CiLocationOn className={css.icon} size={14} />{catalog.location}</p>
            </div>
            <p className={css.description}>{catalog.description}</p>
            <ul className={css.detailsList}>
              {catalog.details && Object.entries(catalog.details).slice(0, 6).map(([key, value]) => (
                value > 0 && ( // Condizione per saltare gli elementi con valore pari a zero
                  <li key={`${catalog._id}-${key}`} className={css.detailItem}>
                    <span className={css.detailIcon}>
                      {detailIcons[key] || <span>🔘</span>} 
                    </span>
                    <span className={css.detailText}>
                      {value} {key.charAt(0).toUpperCase() + key.slice(1)} 
                    </span>
                  </li>
                )
              ))}
            </ul>
            <button className={css.showMore}>Show more</button>
          </div>
        </div>
      ))}
      <LoadMore/>
    </div>
  );
};

export default Card;










