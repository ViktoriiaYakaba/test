import React from 'react';
import css from './LoadMore.module.css'

const LoadMore = ({onClick}) => {
  return (
     <div>
          <button type='button' onClick={onClick} className={css.btn} >
              Load more
          </button>
     </div>
  )
}

export default LoadMore;
