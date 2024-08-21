import React from 'react';
import SearchForm from '../components/searchForm/SearchForm';
import Card from '../components/card/Card';
import css from './Styles.module.css';


const Catalog = () => {
  return (
    <div className={css.container}>
     <div className={css.containerDetails}>
        <SearchForm/>
     </div>
      <div className={css.containerCard}>
        <Card />
      </div>
    </div>
  )
}

export default Catalog
