import React from 'react'
import InputLocation from '../components/inputLocation/InputLocation';
import Equipment from '../components/equipment/Equipment';
import Type from '../components/type/Type';
import ButtonSearch from '../components/buttonSeasrch/ButtonSearch';
import Card from '../components/card/Card';
import css from './Styles.module.css';


const Catalog = () => {
  return (
    <div className={css.container}>
     <div className={css.containerDetails}>
        <InputLocation />
        <Equipment />
        <Type />
        <ButtonSearch />
     </div>
      <div className={css.containerCard}>
        <Card />
      </div>
    </div>
  )
}

export default Catalog
