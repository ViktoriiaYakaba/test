import React, { useState } from "react"; 
import Icon from "../icon/icon";
import css from './Equipment.module.css';
import { PiWindLight } from "react-icons/pi";
import clsx from "clsx";

const Equipment = () => {
  const [selectedEquipment, setSelectedEquipment] = useState({
    AC: false,
    Automatic: false,
    Kitchen: false,
    TV: false,
    Shower: false,
  });

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedEquipment((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle equipment</h3>
      <p className={css.text}>Filters</p>
      <ul className={css.list}>
        <li className={css.listItem}>
          <input
            type="checkbox"
            name="AC"
            checked={selectedEquipment.AC}
            onChange={handleCheckboxChange}
            className={css.checkbox} 
          />
          <PiWindLight size={32} />
          <p className={css.textList}>AC</p>
        </li>
        <li className={css.listItem}>
          <input
            type="checkbox"
            name="Automatic"
            checked={selectedEquipment.Automatic}
            onChange={handleCheckboxChange}
            className={css.checkbox} 
          />
          <Icon width="32" height="32" icon="change" />
          <p className={css.textList}>Automatic</p>
        </li>
        <li className={css.listItem}>
          <input
            type="checkbox"
            name="Kitchen"
            checked={selectedEquipment.Kitchen}
            onChange={handleCheckboxChange}
            className={css.checkbox} 
          />
          <Icon width="32" height="32" icon="kitchen" />
          <p className={css.textList}>Kitchen</p>
        </li>
        <li className={css.listItem}>
          <input
            type="checkbox"
            name="TV"
            checked={selectedEquipment.TV}
            onChange={handleCheckboxChange}
            className={css.checkbox} 
          />
          <Icon width="32" height="32" icon="TV" />
          <p className={css.textList}>TV</p>
        </li>
        <li className={css.listItem}>
          <input
            type="checkbox"
            name="Shower"
            checked={selectedEquipment.Shower}
            onChange={handleCheckboxChange}
            className={css.checkbox} 
          />
          <Icon width="32" height="32" icon="batch" />
          <p className={css.textList}>Shower/WC</p>
        </li>
      </ul>
    </div>
  );
}

export default Equipment;


