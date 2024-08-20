import css from './InputLocation.module.css';
import { IoLocationOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { setLocationFilter } from '../../redux/filters/slice';

const InputLocation = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.filters.location); 

  const handleInputChange = (e) => {
    dispatch(setLocationFilter(e.target.value)); 
  };

  return (
    <div className={css.container}>
      <label htmlFor="locationInput">Location</label>
      <div className={css.inputWrapper}>
       <button className={css.btn}><IoLocationOutline size={20}/></button>
        <input
          id="locationInput"
          type="text"
          placeholder="City"
          className={css.input}
          value={location}
          onChange={handleInputChange} 
        />
      </div>
    </div>
  );
};

export default InputLocation;
