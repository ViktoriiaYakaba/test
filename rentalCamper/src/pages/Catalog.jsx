import React from 'react';
import SearchForm from '../components/searchForm/SearchForm';
import Card from '../components/card/Card';
import css from './Styles.module.css';
import { useSelector } from 'react-redux';
import { selectFilteredCatalog } from '../redux/filters/selectors';


const Catalog = () => {
  const items = useSelector(selectFilteredCatalog);
  return (
    <div className={css.container}>
     <div className={css.containerDetails}>
        <SearchForm/>
     </div>
      <div className={css.containerCard}>
        <Card catalogs={items} />
      </div>
    </div>
  )
}

export default Catalog;
