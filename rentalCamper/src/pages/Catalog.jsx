import React, { useEffect } from 'react';
import SearchForm from '../components/searchForm/SearchForm';
import Card from '../components/card/Card';
import css from './Styles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredCatalog } from '../redux/filters/selectors';
import { clearFilters } from '../redux/filters/slice'; 

const Catalog = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectFilteredCatalog);

  useEffect(() => {
    dispatch(clearFilters());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <div className={css.containerDetails}>
        <SearchForm />
      </div>
      <div className={css.containerCard}>
        <Card catalogs={items} />
      </div>
    </div>
  );
}

export default Catalog;
