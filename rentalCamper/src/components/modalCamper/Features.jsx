import React from 'react';
import Icon from '../icon/Icon';
import css from './ModalCamper.module.css';
import { PiWindLight } from "react-icons/pi";

const Features = ({catalog}) => {
  return (
    <div className={css.containerFeatures}>
      <div className={css.containerDetails}>
        <ul className={css.detailsList}>
              <li className={css.detailsItem}><Icon width="20" height="20" icon="people" /><span className={css.detailText}>{catalog.adults} adults</span></li>
              <li className={css.detailsItem}><Icon width="20" height="20" icon="change" /><span className={css.detailText}>Automatic</span></li>
              <li className={css.detailsItem}><PiWindLight size={20} /><span className={css.detailText}> AC</span></li>
              <li className={css.detailsItem}><Icon width="20" height="20" icon="petrol" /><span className={css.detailText}>Petrol</span></li>
              <li className={css.detailsItem}><Icon width="20" height="20" icon="kitchen" /><span className={css.detailText}>Kitchen</span></li>
              <li className={css.detailsItem}><Icon width="20" height="20" icon="beds" /><span className={css.detailText}>{ catalog.details.beds} beds</span></li>
              <li className={css.detailsItem}><Icon width="20" height="20" icon="airConditioner" /><span className={css.detailText}>{catalog.details.airConditioner } air conditioner</span></li>
              <li className={css.detailsItem}><Icon width="20" height="20" icon="cd" /><span className={css.detailText}>CD</span></li>
              <li className={css.detailsItem}><Icon width="20" height="20" icon="radio" /><span className={css.detailText}>Radio</span></li>
          <li className={css.detailsItem}><Icon width="20" height="20" icon="hob" /><span className={css.detailText}>{catalog.details.hob } hob</span></li>
        </ul>
      </div>
      <div className={css.containerVehicle}>
        <h3 className={css.vehicleTitle}>Vehicle details</h3>
        <ul className={css.vehicleList}>
          <li className={css.vehicleItem}><span>Form</span> {catalog.form} </li>
          <li className={css.vehicleItem}><span>Length</span> {catalog.length}</li>
          <li className={css.vehicleItem}><span>Width</span> {catalog.width}</li>
          <li className={css.vehicleItem}><span>Heigth </span>{catalog.height }</li>
          <li className={css.vehicleItem}><span>Tank </span>{catalog.tank }</li>
          <li className={css.vehicleItem}><span>Consumption </span>{catalog.consumption }</li>
        </ul>
      </div>
    </div>
  )
}

export default Features
