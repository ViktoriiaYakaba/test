import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import * as Yup from 'yup';
import css from './ModalCamper.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingForm = () => {
  const initialValues = {
    name: '',
    email: '',
    bookingDate: null,
    comment: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    bookingDate: Yup.date().nullable().required('Booking date is required'),
    comment: Yup.string(),
  });

  const handleSubmit = ({ resetForm }) => {
    toast.success("Booking successful!");
    resetForm(); 
  };

  const today = new Date();

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className={css.bookingForm}>
            <div className={css.title}>
              <h2 className={css.formTitle}>Book your campervan now</h2>
              <p className={css.formText}>Stay connected! We are always ready to help you.</p>
            </div>
            <div className={css.formGroup}>
              <div className={css.formItem}>
                <Field name="name" type="text" placeholder='Name' className={css.input} />
                <ErrorMessage name="name" component="div" className={css.error} />
              </div>
              <div className={css.formItem}>
                <Field name="email" type="email" placeholder='Email' className={css.input} />
                <ErrorMessage name="email" component="div" className={css.error} />
              </div>
              <div className={css.formItem}>
                <div className={css.datePickerContainer}>
                  <Field name="bookingDate">
                    {({ field }) => (
                      <DatePicker
                        {...field}
                        selected={field.value}
                        onChange={(date) => setFieldValue('bookingDate', date)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Booking date"
                        className={css.input}
                        minDate={today}
                      />
                    )}
                  </Field>
                </div>
                <ErrorMessage name="bookingDate" component="div" className={css.error} />
              </div>
              <div className={css.formItem}>
                <Field as="textarea" name="comment" placeholder='Comment' className={css.textarea} />
              </div>
            </div>
            <button type="submit" className={css.submitButton}>Send</button>
          </Form>
        )}
      </Formik>
      <ToastContainer /> {/* Add ToastContainer here */}
    </>
  );
};

export default BookingForm;



