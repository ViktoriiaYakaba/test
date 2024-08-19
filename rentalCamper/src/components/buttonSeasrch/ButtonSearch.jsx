import css from './ButtonSearch.module.css';

const ButtonSearch = () => {
  return (
    <div className={css.container}>
      <button type='button' className={css.btn}>Search</button>
    </div>
  )
}

export default ButtonSearch
