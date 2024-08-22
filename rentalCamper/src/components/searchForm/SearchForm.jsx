import React from 'react';
import InputLocation from '../inputLocation/InputLocation';
import Equipment from '../equipment/Equipment';
import Type from '../type/Type';
import ButtonSearch from '../buttonSeasrch/ButtonSearch';
import css from './SearchForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setLocationFilter, toggleEquipmentFilter, setCamperTypeFilter, clearFilters } from '../../redux/filters/slice';
import { selectLocationFilter, selectEquipmentFilter, selectCamperTypeFilter} from '../../redux/filters/selectors';


const SearchForm = () => {
    const dispatch = useDispatch();
    const location = useSelector(selectLocationFilter);
    const equipment = useSelector(selectEquipmentFilter);
    const type = useSelector(selectCamperTypeFilter);

    const handleLocationChange = (value) => {
    dispatch(setLocationFilter(value)); // Make sure this updates the location state
  };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('location:', location);
        console.log('equipment:', equipment);
        console.log('type:', type); 
        dispatch(clearFilters());
    };
   
    return (
        <div className={css.container}>
            <form onSubmit={handleSubmit} >
                <InputLocation value={location} onChange={handleLocationChange} />
                <Equipment value={equipment} onChange={(e)=>toggleEquipmentFilter(e.target.value)}  />
                <Type  value={type} onChange={(e)=>setCamperTypeFilter(e.target.value)} />
                <ButtonSearch />
            </form>
        </div>
    );
};

export default SearchForm;
