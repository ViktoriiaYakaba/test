import css from './Type.module.css';

const Type = () => {
  return (
    <div className={css.container}>
          <h3 className={css.title}>Vehicle type</h3>
          <ul className={css.list}>
              <li className={css.listItem}>
                  <p className={css.textList}>Van</p>
              </li>
              <li className={css.listItem}>
                  <p className={css.textList}>Fully Integrated</p>
              </li>
              <li className={css.listItem}>
                  <p className={css.textList}>Alcove</p>
              </li>
          </ul>
    </div>
  )
}

export default Type
