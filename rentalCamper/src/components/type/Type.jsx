import css from './Type.module.css';
import Icon from '../icon/icon';

const Type = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Vehicle type</h3>
      <ul className={css.list}>
        <li className={css.listItem}>
          <Icon width="32" height="32" icon="camper-1" />
          <p className={css.textList}>Van</p>
        </li>
        <li className={css.listItem}>
          <Icon width="32" height="32" icon="camper-2" style={{ minWidth: '32px', minHeight: '32px' }} />
          <p className={css.textList}>Fully Integrated</p>
        </li>
        <li className={css.listItem}>
          <Icon width="32" height="32" icon="camper-3" />
          <p className={css.textList}>Alcove</p>
        </li>
      </ul>
    </div>
  );
};

export default Type;

