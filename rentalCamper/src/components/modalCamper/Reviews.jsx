import React from 'react';
import Icon from '../icon/Icon';
import css from './ModalCamper.module.css';

const Reviews = ({ catalog }) => {
  if (!catalog || !catalog.reviews) return null; 

  return (
    <div className={css.reviewsContainer}>
      {catalog.reviews.map((review, index) => {
        const reviewerName = review.reviewer_name; 
        const reviewerRating = review?.reviewer_rating || 0; 
        const initials = reviewerName.charAt(0).toUpperCase(); 

        return (
          <div key={index} className={css.reviewItem}>
              <div className={css.reviewerInitial}>{initials}</div>
              <div className={css.reviewContent}>
                <h4 className={css.reviewerName}>{reviewerName}</h4>
                <div className={css.starRating}>
                   {[...Array(reviewerRating)].map((_, i) => (
                  <Icon
                    width='20'
                    height='20'
                    icon='star'
                    key={`filled-${i}`}
                  />
                ))}
                {[...Array(5 - reviewerRating)].map((_, i) => (
                  <Icon
                    width='20'
                    height='20'
                    icon='star-2'
                    key={`empty-${i}`}
                  />
                ))}
                </div>
           </div>
              <p className={css.comment}>{review.comment }</p>
            </div>   
        );
      })}
    </div>
  );
};

export default Reviews;


