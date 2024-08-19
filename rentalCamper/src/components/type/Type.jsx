import css from './Type.module.css';
import VanIcon from '../../../images/svg/Button.svg';
import FullIcon from '../../../images/svg/Button-2.svg';
import AlcoveIcon from '../../../images/svg/Button-3.svg';

const Type = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle type</h3>
      <ul className={css.list}>
        <li className={css.listItem}>
          <img src={VanIcon} alt="Van icon" className={css.icon} />
          <p className={css.textList}>Van</p>
        </li>
        <li className={css.listItem}>
          <img src={FullIcon} alt="Fully Integrated icon" className={css.icon} />
          <p className={css.textList}>Fully Integrated</p>
        </li>
        <li className={css.listItem}>
          <img src={AlcoveIcon} alt="Alcove icon" className={css.icon} />
          <p className={css.textList}>Alcove</p>
        </li>
      </ul>
    </div>
  );
};

export default Type;

