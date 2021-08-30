/* Modules */
import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import Datetime from 'react-datetime';
import moment from 'moment';
import * as Yup from 'yup';

/* Components */
import authOperations from '../../redux/auth/authOperations';
import categoriesOperations from '../../redux/categories/categoriesOperations';
import categoriesSelectors from '../../redux/categories/categoriesSelectors';
import transactionsOperations from '../../redux/transactions/transactionsOperations';
import Selector from '../../components/Selector/Selector';
import { ReactComponent as IncomeIcon } from '../../icons/ModalAddTransactions/income.svg';
import { ReactComponent as ExpenseIcon } from '../../icons/ModalAddTransactions/expense.svg';
import { ReactComponent as CloseIcon } from '../../icons/ModalAddTransactions/close.svg';
import { ReactComponent as CalendarIcon } from '../../icons/ModalAddTransactions/calendar.svg';

/* Styles */
import styles from './ModalAddTransactions.module.css';
import 'react-datetime/css/react-datetime.css';

function ModalAddTransactions({ onClose }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(categoriesOperations.getCategories());
  }, [dispatch]);

  const validationSchema = Yup.object().shape({
    typeToggle: Yup.boolean().required(),
    // category: Yup.string().required(),
    sum: Yup.number().required().min(0.01),
    // date: Yup.date().required(),
    comment: Yup.string(),
  });

  const validation = obj => {
    validationSchema.validate(obj).catch(function (err) {
      alert(err.name + ': ' + err.errors);
    });
  };

  const beforeYesterday = moment().subtract(1, 'day');
  const validDate = current => {
    return current.isAfter(beforeYesterday);
  };

  const initialValue = {
    typeToggle: false,
    // category: '6124b0cacab0f143c8d6bfbd',
    sum: '',
    // date: new Date(),
    comment: '',
  };

  const [date, setDate] = useState(new Date());

  const [incomeCategory, setIncomeCategory] = useState({
    value: '6124b052cab0f143c8d6bfa9',
    label: 'Регулярный доход',
  });

  const [expenseCategory, setExpenseCategory] = useState({
    value: '6124b0cacab0f143c8d6bfbd',
    label: 'Разное',
  });

  const handleDateChange = useCallback(item => {
    setDate(item);
  }, []);

  const handleCategoryChange = useCallback((item, type) => {
    type === '+' && setIncomeCategory(item);
    type === '-' && setExpenseCategory(item);
  }, []);

  /*
  const getOptions = items => {
    let optionList = [];
    items
      .filter(({ type }) => type === '-')
      .forEach(({ _id, name }) => {
        optionList.push(<option key={_id} value={_id}>{name}</option>);
      });
    return optionList;
  }
  */

  const getOptions = (items, type) => {
    return items
      .filter(item => item.type === type)
      .map(({ _id, name }) => {
        return { value: _id, label: name };
      });
  };

  const categories = useSelector(categoriesSelectors.getCategories);

  const newTransaction = values => {
    const newDate = new Date(date);
    const dateStamp = newDate.getTime();
    const typeCategory = values.typeToggle
      ? incomeCategory.value
      : expenseCategory.value;

    return {
      timeStamp: dateStamp,
      // timeStamp: Date.now(values.date),
      category: typeCategory,
      // category: values.category,
      sum: values.sum,
      comment: values.comment
        ? values.comment
        : 'Здесь могла быть Ваша реклама!',
    };
  };

  const handleSubmit = async values => {
    await dispatch(
      transactionsOperations.addTransaction(newTransaction(values)),
    );
    await dispatch(transactionsOperations.getTransactions());
    dispatch(authOperations.getCurrentUser());
    onClose();
  };

  // react_devtools_backend.js:2850 Warning: An unhandled error was caught from submitForm() 
  // TypeError: _redux_transactions_transactionsOperations__WEBPACK_IMPORTED_MODULE_9__.default.getTransaction is not a function
  //  at handleSubmit (ModalAddTransactions.jsx:123)

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ values }) => (
        <Form className={styles.container}>
          <button
            className={styles.closeButton}
            type="button"
            onClick={onClose}
          >
            <CloseIcon className={styles.closeIcon} width="16" height="16" />
          </button>

          <h2 className={styles.title}>Добавить транзакцию</h2>

          <label className={styles.typeLabel}>
            <Field
              className={styles.typeInput}
              name="typeToggle"
              type="checkbox"
            />

            {values.typeToggle}

            {values.typeToggle && <IncomeIcon width="220" height="44" />}
            {!values.typeToggle && <ExpenseIcon width="220" height="44" />}
          </label>

          {values.typeToggle && (
            <Selector
              className="react-type-select-container"
              classNamePrefix="react-type-select"
              options={getOptions(categories, '+')}
              value={incomeCategory}
              onChange={e => handleCategoryChange(e, '+')}
            />
          )}

          {!values.typeToggle && (
            <Selector
              className="react-type-select-container"
              classNamePrefix="react-type-select"
              options={getOptions(categories, '-')}
              value={expenseCategory}
              onChange={e => handleCategoryChange(e, '-')}
            />
          )}

          {/* {(!values.typeToggle) &&
            <Field
              className={styles.categoryInput}
              name="category"
              as="select"
              placeholder="Виберите категорию"
          >
            {getOptions(categories)};
          </Field>} */}

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
                className: styles.dateInput,
              }}
              className={styles.dateInputCont}
              dateFormat="DD.MM.YYYY"
              timeFormat={false}
              isValidDate={validDate}
              initialValue={new Date()}
              // value={date}
              onChange={e => handleDateChange(e._d)}
            ></Datetime>
            <CalendarIcon
              className={styles.calendarIcon}
              width="18"
              height="20"
            />
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
  );
}

export default ModalAddTransactions;
