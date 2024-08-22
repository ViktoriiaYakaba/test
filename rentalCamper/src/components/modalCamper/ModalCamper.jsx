import React from 'react';
import css from './ModalCamper.module.css';
import Icon from '../icon/icon';
import { CiLocationOn } from 'react-icons/ci';
import { MdClose } from "react-icons/md";

const ModalCamper = ({ catalog, onClose }) => {
  if (!catalog) return null;

  return (
    <div className={css.containerModal}>
      <div className={css.container}>
        <div className={css.containerName}>
          <h2 className={css.name}>{catalog.name}</h2>
          <button onClick={onClose} className={css.closeButton}>
          <MdClose size={32} />
        </button>
        </div>
        <div className={css.containerRating}>
              <p className={css.rating}>
                <Icon width="16" height="16" icon="star" /> {catalog.rating}
              </p>
              <p className={css.location}>
                <CiLocationOn className={css.icon} size={18} /> {catalog.location}
              </p>
        </div>
         <p className={css.price}> ${catalog.price.toFixed(2)}</p>
        
        {catalog.gallery && catalog.gallery.length > 0 && (
          <div className={css.galleryContainer}>
            {catalog.gallery.map((image, index) => (
              <img
                key={index} 
                src={image}
                alt={`${catalog.name} image ${index + 1}`} 
                className={css.modalImage}
              />
            ))}
          </div>
        )}
        
        <p>{catalog.description}</p>
        
        
      </div>
    </div>
  );
};

export default ModalCamper;


