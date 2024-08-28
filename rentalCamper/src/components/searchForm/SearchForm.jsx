import React from 'react';
import InputLocation from '../inputLocation/InputLocation';
import Equipment from '../equipment/Equipment';
import Type from '../type/Type';
import ButtonSearch from '../buttonSeasrch/ButtonSearch'
import css from './SearchForm.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { 
    setLocationFilter, 
    toggleEquipmentFilter, 
    setCamperTypeFilter, 
    clearFilters 
} from '../../redux/filters/slice';
import { 
    selectLocationFilter, 
    selectEquipmentFilter, 
    selectCamperTypeFilter 
} from '../../redux/filters/selectors';

const SearchForm = () => {
    const dispatch = useDispatch();
    const location = useSelector(selectLocationFilter);
    const equipment = useSelector(selectEquipmentFilter);
    const type = useSelector(selectCamperTypeFilter);

    const handleLocationChange = (value) => {
        dispatch(setLocationFilter(value)); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Searching with filters:", { location, equipment, type });
        dispatch(clearFilters());
    };

    const handleEquipmentChange = (value) => {
        dispatch(toggleEquipmentFilter(value)); 
    };

    const handleTypeChange = (value) => {
        dispatch(setCamperTypeFilter(value)); 
    };

    return (
        <div className={css.container}>
            <form onSubmit={handleSubmit}>
                <InputLocation 
                    value={location} 
                    onChange={handleLocationChange} 
                />
                <Equipment 
                    value={equipment} 
                    onChange={handleEquipmentChange} 
                />
                <Type  
                    value={type} 
                    onChange={handleTypeChange}
                />
                <ButtonSearch />
            </form>
        </div>
    );
};

export default SearchForm;
