import React from 'react';
import { useState } from 'react';
import css from './ModalCamper.module.css';
import Icon from '../icon/Icon';
import { CiLocationOn } from 'react-icons/ci';
import { MdClose } from "react-icons/md";
import Features from './Features';
import Reviews from './Reviews';

const ModalCamper = ({ catalog, onClose }) => {
  const [activeTab, setActiveTab] = useState('features');

   const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  if (!catalog) return null;

  return (
    <div className={css.containerModal}>
      <div className={css.container}>
        <div className={css.containerName}>
          <h2 className={css.name}>{catalog.name}</h2>
          <button onClick={onClose} className={css.closeButton}>
          <MdClose size={32} className={css.icon} />
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
        <p className={css.description}>{catalog.description}</p>
        <div className={css.tabs}>
          <nav className={css.nav}>
            <a href="#" className={`${css.tabLink} ${activeTab === 'features' ? css.active : ''}`} onClick={() => handleTabChange('features')}>
              Features
            </a>
            <a href="#" className={`${css.tabLink} ${activeTab === 'reviews' ? css.active : ''}`} onClick={() => handleTabChange('reviews')}>
              Reviews
            </a>
          </nav>
        </div>
        <div className={css.content}>
          {activeTab === 'features' && <Features catalog={catalog} />}
          {activeTab === 'reviews' && <Reviews />}
        </div>
      </div>
    </div>
  );
};

export default ModalCamper;


