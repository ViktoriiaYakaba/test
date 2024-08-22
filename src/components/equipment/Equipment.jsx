import React from "react";
import Icon from "../icon/icon";
import css from './Equipment.module.css';
import { PiWindLight } from "react-icons/pi";
import clsx from "clsx";
import { useSelector, useDispatch } from 'react-redux';
import { toggleEquipmentFilter } from '../../redux/filters/slice';

const Equipment = () => {
  const dispatch = useDispatch();
  const equipment = useSelector((state) => state.filters.equipment);

  const toggleEquipment = (key) => {
    dispatch(toggleEquipmentFilter(key)); 
  };

  const buildLinkClass = (key) => {
    return clsx(css.listItem, equipment.includes(key) && css.active);
  };

  const equipmentList = ['AC', 'Automatic', 'Kitchen', 'TV', 'Shower']; 

  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle equipment</h3>
      <p className={css.text}>Filters</p>
      <ul className={css.list}>
        {equipmentList.map((key) => (
          <li
            key={key}
            className={buildLinkClass(key)}
            onClick={() => toggleEquipment(key)}
          >
            <input
              type="checkbox"
              name={key}
              checked={equipment.includes(key)} 
              readOnly
              className={css.checkbox}
            />
            {key === "AC" && <PiWindLight size={32} />}
            {key === "Automatic" && <Icon width="32" height="32" icon="change" />}
            {key === "Kitchen" && <Icon width="32" height="32" icon="kitchen" />}
            {key === "TV" && <Icon width="32" height="32" icon="TV" />}
            {key === "Shower" && <Icon width="32" height="32" icon="batch" />}
            <p className={css.textList}>{key}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Equipment;










