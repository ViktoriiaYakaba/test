import React, { useState, useEffect } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import css from './Card.module.css';
import LoadMore from '../buttonLoadMore/LoadMore';
import Icon from '../icon/icon';
import { PiWindLight } from "react-icons/pi";
import ModalCamper from '../modalCamper/ModalCamper';

const Card = ({ catalogs }) => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [activeHearts, setActiveHearts] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCatalog, setSelectedCatalog] = useState(null);

  useEffect(() => {
    const savedHearts = localStorage.getItem('activeHearts');
    if (savedHearts) {
      setActiveHearts(JSON.parse(savedHearts));
    }
  }, []);

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  const handleToggle = (id) => {
    const newActiveHearts = {
      ...activeHearts,
      [id]: !activeHearts[id]
    };
    setActiveHearts(newActiveHearts);
    localStorage.setItem('activeHearts', JSON.stringify(newActiveHearts));
  };

  const openModal = (catalog) => {
    setSelectedCatalog(catalog); 
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false); 
    setSelectedCatalog(null); 
  };

  if (!Array.isArray(catalogs) || catalogs.length === 0) {
    return <p className={css.text}>No data available based on the filters applied.</p>;
  }

  return (
    <div className={css.cardContainer}>
      {catalogs.slice(0, visibleCount).map((catalog) => (
        <div key={catalog._id} className={css.card}>
          <div className={css.imageContainer}>
            {catalog.gallery && catalog.gallery.length > 0 ? (
              <img
                src={catalog.gallery[0]} 
                alt={`${catalog.name} image`}
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
                <li className={css.listItem}>
                  <p className={css.price}>${catalog.price}</p>
                </li>
                <li className={css.listItem}>
                  <button 
                    className={css.btnHeart} 
                    onClick={() => handleToggle(catalog._id)} 
                  >
                    {activeHearts[catalog._id] ? (
                      <Icon width="24" height="24" icon="heart-2" className={css.heart} />
                    ) : (
                      <Icon width="24" height="24" icon="heart-1" className={css.heart} />
                    )}
                  </button>
                </li>
              </ul>
            </div>
            <div className={css.containerRating}>
              <p className={css.rating}>
                <Icon width="16" height="16" icon="star" /> {catalog.rating}
                ({catalog.reviews?.length || 0} reviews)
              </p>
              <p className={css.location}>
                <CiLocationOn className={css.icon} size={18} /> {catalog.location}
              </p>
            </div>
            <p className={css.description}>{catalog.description}</p>
            <ul className={css.detailsList}>
              <li className={css.detailsItem}><Icon width="20" height="20" icon="people" /><span className={css.detailText}>{catalog.adults} adults</span></li>
              <li className={css.detailsItem}><Icon width="20" height="20" icon="change" /><span className={css.detailText}>Automatic</span></li>
              <li className={css.detailsItem}><Icon width="20" height="20" icon="petrol" /><span className={css.detailText}>Petrol</span></li>
              <li className={css.detailsItem}><Icon width="20" height="20" icon="kitchen" /><span className={css.detailText}>Kitchen</span></li>
              <li className={css.detailsItem}><Icon width="20" height="20" icon="beds" /><span className={css.detailText}>{catalog.details.beds} beds</span></li>
              <li className={css.detailsItem}><PiWindLight size={20} /><span className={css.detailText}>AC</span></li>
            </ul>
            <button className={css.showMore} onClick={() => openModal(catalog)}>
              Show more
            </button>
          </div>
        </div>
      ))}

      {visibleCount < catalogs.length && (
        <LoadMore onClick={loadMore} />
      )}

      {isModalOpen && (
        <ModalCamper catalog={selectedCatalog} onClose={closeModal} />
      )}
    </div>
  );
};

export default Card;











