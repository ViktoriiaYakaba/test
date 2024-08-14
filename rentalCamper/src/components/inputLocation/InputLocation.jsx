import css from './InputLocation.module.css';
import { CiLocationOn } from 'react-icons/ci';

const InputLocation = () => {
  return (
    <div className={css.container}>
      <label htmlFor="locationInput">Location</label>
      <div className={css.inputWrapper}>
        <CiLocationOn className={css.icon} />
        <input
          id="locationInput"
          type="text"
          placeholder="City"
          className={css.input}
        />
      </div>
    </div>
  );
};

export default InputLocation;
