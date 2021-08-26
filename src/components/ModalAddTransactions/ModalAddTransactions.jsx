/* Modules */
// import { useState, useCallback, useEffect } from 'react';
// import shortid from 'shortid';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import Datetime from 'react-datetime';
import moment from 'moment';
import * as Yup from 'yup';

/* Components */
import categoriesOperations from '../../redux/categories/categoriesOperations';
import categoriesSelectors from '../../redux/categories/categoriesSelectors';
import transactionsOperations from '../../redux/transactions/transactionsOperations';
import transactionsSelectors from '../../redux/transactions/transactionsSelectors';
import { ReactComponent as IncomeIcon } from '../../icons/ModalAddTransactions/income.svg';
import { ReactComponent as ExpenseIcon } from '../../icons/ModalAddTransactions/expense.svg';
import { ReactComponent as CloseIcon } from '../../icons/ModalAddTransactions/close.svg';
import { ReactComponent as CalendarIcon } from '../../icons/ModalAddTransactions/calendar.svg';

/* Styles */
import styles from './ModalAddTransactions.module.css';
import "react-datetime/css/react-datetime.css";

function ModalAddTransactions({ onClose }) {  
  const validationSchema = Yup.object().shape({
    typeToggle: Yup.boolean().required(),
    category: Yup.string().required(),
    sum: Yup.number().required().min(0.01),
    date: Yup.date().required(),
    comment: Yup.string(),
  });

  const validation = (obj) => {
    validationSchema.validate(obj).catch(function (err) {
      alert(err.name + ': ' + err.errors)
    });
  }

  const initialValue = {
    typeToggle: false,
    category: '6124b0cacab0f143c8d6bfbd',
    sum: 0.00,
    date: new Date(),
    comment: '',
  }

  const newTransaction = values => {
    return {
      timeStamp: Date.now(values.date),
      category: values.category,
      sum: values.sum,
      comment: values.comment ? values.comment : "user did not leave a comment",
    }
  }

  const dispatch = useDispatch();
  
  const handleSubmit = async (values) => {
    dispatch(transactionsOperations.addTransaction(newTransaction(values)));
    onClose();
  }
  
  const beforeYesterday = moment().subtract(1, "day");
  const validDate = (current) => {
    return current.isAfter(beforeYesterday);
  }

  const getOptions = items => {
    let optionList = [];
    items
      .filter(({ type }) => type === '-')
      .forEach(({ _id, name }) => {
        optionList.push(<option key={_id} value={_id}>{name}</option>);
      });
    return optionList;
  }

  useEffect(() => {
    dispatch(categoriesOperations.getCategories())
  }, []);

  const categories = useSelector(categoriesSelectors.getCategories);

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit} validationSchema={validationSchema}>
      {({ values }) => (
        <Form className={styles.container}>
          <button className={styles.closeButton} type="button" onClick={onClose}>
            <CloseIcon className={styles.closeIcon} width="16" height="16" />
          </button>

          <h2 className={styles.title}>Добавить транзакцию</h2>

          <label className={styles.typeLabel}>
            <Field className={styles.typeInput} name="typeToggle" type="checkbox" />

            {values.typeToggle}

            {(values.typeToggle) && <IncomeIcon width="220" height="44" />}
            {(!values.typeToggle) && <ExpenseIcon width="220" height="44" />}
          </label>

          {(!values.typeToggle) &&
            <Field
              className={styles.categoryInput}
              name="category"
              as="select"
              placeholder="Виберите категорию"
          >
            {getOptions(categories)};
          </Field>}

          <Field
            className={styles.sumInput}
            name="sum"
            type="number"
            step="0.01"
            placeholder="0,00"
          />

          <div className={styles.dateCont}>
            <Datetime
              inputProps={{
                className: styles.dateInput
              }}
              className={styles.dateInputCont}
              dateFormat="DD.MM.YYYY"
              timeFormat="HH:MM"
              // timeFormat={false}
              isValidDate={validDate}
              initialValue={new Date()}
              // onChange={e => { values.date = e._d }}
              onChange={e => { values.date = e._d; console.log(e._d) }}
            >
            </Datetime>
            <CalendarIcon className={styles.calendarIcon} width="18" height="20" />
          </div>

          <Field
            className={styles.commentInput}
            component="textarea"
            name="comment"
            placeholder="Комментарий"
          />

          <button
            className={styles.formButton + ' ' + styles.ok}
            type="submit"
            onClick={() => validation(values)}
          >
            Добавить
        </button>

          <button
            className={styles.formButton + ' ' + styles.notOk}
            type="button"
            onClick={onClose}
          >
            Отмена
        </button>
        </Form>
      )}
    </Formik>
  )
}

export default ModalAddTransactions;
