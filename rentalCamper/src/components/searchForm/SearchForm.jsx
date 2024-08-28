import { Formik, Form, Field } from 'formik';
import css from './SearchForm.module.css';
import Icon from '../icon/icon';
import { useDispatch } from 'react-redux';
import { setFilters} from '../../redux/filters/slice'; 
import { PiWindLight } from "react-icons/pi";
import clsx from 'clsx';

const SearchForm = () => {
  const dispatch = useDispatch();

  const initialFilterValues = {
    location: '',
    airConditioner: false,
    automatic: false,
    kitchen: false,
    TV: false,
    shower: false,
    type: '',
  };

  const buildLinkClass = (key, values) => {
    return clsx(css.listItem, values[key] && css.active);
  };

  const buildLinkTypeClass = (key, values) => {
    return clsx(css.listItem, values.type === key && css.active);
  };

  return (
    <Formik
      initialValues={initialFilterValues} 
      onSubmit={(values, { resetForm }) => {
        dispatch(setFilters(values));
        resetForm(); 
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className={css.form}>
          <div className={css.containerInput}>
            <label className={css.label}>Location</label>
            <div className={css.inputWraper}>
              <Field
                type="text"
                name="location"
                placeholder="City"
                className={css.input}
              />
            </div>
          </div>

          <div className={css.container}>
            <h3 className={css.name}>Vehicle equipment</h3>
            <p className={css.title}>Filters</p>
            <ul className={css.list}>
              <li
                className={buildLinkClass('airConditioner', values)}
                onClick={() => setFieldValue('airConditioner', !values.airConditioner)}
              >
                <Field
                  type="checkbox"
                  name="airConditioner"
                  style={{ display: 'none' }}
                  checked={values.airConditioner}
                />
                <PiWindLight size={32} />
                <span className={css.text}>AC</span>
              </li>
              <li
                className={buildLinkClass('automatic', values)}
                onClick={() => setFieldValue('automatic', !values.automatic)}
              >
                <Field
                  type="checkbox"
                  name="automatic"
                  style={{ display: 'none' }}
                  checked={values.automatic}
                />
                <Icon width="32" height="32" icon="change" />
                <span className={css.text}>Automatic</span>
              </li>
              <li
                className={buildLinkClass('kitchen', values)}
                onClick={() => setFieldValue('kitchen', !values.kitchen)}
              >
                <Field
                  type="checkbox"
                  name="kitchen"
                  style={{ display: 'none' }}
                  checked={values.kitchen}
                />
                <Icon width="32" height="32" icon="kitchen" />
                <span className={css.text}>Kitchen</span>
              </li>
              <li
                className={buildLinkClass('TV', values)}
                onClick={() => setFieldValue('TV', !values.TV)}
              >
                <Field
                  type="checkbox"
                  name="TV"
                  style={{ display: 'none' }}
                  checked={values.TV}
                />
                <Icon width="32" height="32" icon="TV" />
                <span className={css.text}>TV</span>
              </li>
              <li
                className={buildLinkClass('shower', values)}
                onClick={() => setFieldValue('shower', !values.shower)}
              >
                <Field
                  type="checkbox"
                  name="shower"
                  style={{ display: 'none' }}
                  checked={values.shower}
                />
                <Icon width="32" height="32" icon="batch" />
                <span className={css.text}>Shower/WC</span>
              </li>
            </ul>
          </div>

          <div className={css.container}>
            <h3 className={css.name}>Vehicle type</h3>
            <ul className={css.list}>
              <li
                className={buildLinkTypeClass('panelTruck', values)}
                onClick={() => setFieldValue('type', 'panelTruck')}
              >
                <Field
                  type="radio"
                  id="van"
                  name="type"
                  value="panelTruck"
                  style={{ display: 'none' }}
                  checked={values.type === 'panelTruck'}
                />
                <Icon width="32" height="32" icon="camper-1" />
                <span className={css.text}>Van</span>
              </li>
              <li
                className={buildLinkTypeClass('fullyIntegrated', values)}
                onClick={() => setFieldValue('type', 'fullyIntegrated')}
              >
                <Field
                  type="radio"
                  id="fullyIntegrated"
                  name="type"
                  value="fullyIntegrated"
                  style={{ display: 'none' }}
                  checked={values.type === 'fullyIntegrated'}
                />
                <Icon width="32" height="32" icon="camper-2" />
                <span className={css.text}>Fully Integrated</span>
              </li>
              <li
                className={buildLinkTypeClass('alcove', values)}
                onClick={() => setFieldValue('type', 'alcove')}
              >
                <Field
                  type="radio"
                  id="alcove"
                  name="type"
                  value="alcove"
                  style={{ display: 'none' }}
                  checked={values.type === 'alcove'}
                />
                <Icon width="32" height="32" icon="camper-3" />
                <span className={css.text}>Alcove</span>
              </li>
            </ul>
          </div>
          <button type="submit" className={css.btn}>Search</button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchForm;
