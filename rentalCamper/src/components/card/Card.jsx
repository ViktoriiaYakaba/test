import React from 'react';
import { useSelector } from 'react-redux';
import { FaRegHeart, FaBed, FaShower, FaTv, FaFireExtinguisher } from 'react-icons/fa'; // Importa le icone necessarie
import { CiStar } from 'react-icons/ci';
import css from './Card.module.css';
import { selectFilteredCatalog } from '../../redux/catalog/selectors'; // Assicurati che il percorso sia corretto

const detailIcons = {
  airConditioner: <FaFireExtinguisher />,
  beds: <FaBed />,
  shower: <FaShower />,
  TV: <FaTv />,
  // Aggiungi altre mappature per icone qui
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
            <h3 className={css.name}>{catalog.name}</h3>
            <p className={css.price}>${catalog.price}</p>
              <FaRegHeart className={css.heart} />
            <p className={css.rating}>Rating:  <CiStar className={css.star} />{catalog.rating}</p>
            <p className={css.location}>{catalog.location}</p>
            <p className={css.description}>{catalog.description}</p>
            <ul className={css.detailsList}>
              {catalog.details && Object.entries(catalog.details).slice(0, 6).map(([key, value]) => (
                <li key={`${catalog._id}-${key}`} className={css.detailItem}>
                  <span className={css.detailIcon}>
                    {detailIcons[key] || <span>🔘</span>} {/* Icona predefinita se non trovata */}
                  </span>
                  <span className={css.detailText}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                  </span>
                </li>
              ))}
            </ul>
            <button className={css.showMore}>Show more</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;









