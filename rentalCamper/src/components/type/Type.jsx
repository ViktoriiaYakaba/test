import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import css from './Type.module.css';
import Icon from '../icon/icon';
import { setCamperTypeFilter } from '../../redux/filters/slice';
import clsx from 'clsx';

const Type = () => {
  const dispatch = useDispatch();
  const camperType = useSelector((state) => state.filters.camperType);

  const handleCamperTypeChange = (type) => {
    dispatch(setCamperTypeFilter(type)); 
  };

  const buildLinkClass = (key) => {
    return clsx(css.listItem,camperType === key && css.active);
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle type</h3>
      <ul className={css.list}>
        <li className={buildLinkClass('Van')}>
          <input
            className={css.radio}
            type="radio"
            id="van"
            name="camperType"
            value="Van"
            checked={camperType === "Van"}
            onChange={() => handleCamperTypeChange("Van")}
          />
          <label htmlFor="van">
            <Icon width="32" height="32" icon="camper-1" />
            <p className={css.textList}>Van</p>
          </label>
        </li>
        <li className={buildLinkClass('Fully Integrated')}>
          <input
            className={css.radio}
            type="radio"
            id="fullyIntegrated"
            name="camperType"
            value="Fully Integrated"
            checked={camperType === "Fully Integrated"}
            onChange={() => handleCamperTypeChange("Fully Integrated")}
          />
          <label htmlFor="fullyIntegrated">
            <Icon width="32" height="32" icon="camper-2" />
            <p className={css.textList}>Fully Integrated</p>
          </label>
        </li>
        <li className={buildLinkClass('Alcove')}>
          <input
            className={css.radio}
            type="radio"
            id="alcove"
            name="camperType"
            value="Alcove"
            checked={camperType === "Alcove"}
            onChange={() => handleCamperTypeChange("Alcove")}
          />
          <label htmlFor="alcove">
            <Icon width="32" height="32" icon="camper-3" />
            <p className={css.textList}>Alcove</p>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Type;



