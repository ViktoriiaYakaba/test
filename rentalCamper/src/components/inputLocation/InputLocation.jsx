import React from 'react';
import css from './InputLocation.module.css';
import { IoLocationOutline } from "react-icons/io5";


const InputLocation = ({value, onChange}) => {

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
          value={value}
          onChange={(e) => onChange(e.target.value)} 
        />
      </div>
    </div>
  );
};

export default InputLocation;
