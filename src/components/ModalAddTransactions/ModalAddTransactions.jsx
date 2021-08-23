// import { useState, useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import shortid from 'shortid';
// import { contactsOperations, contactsSelectors } from '../../redux/contacts';

/* Modules */
import { Formik, Field, Form } from 'formik';
import Datetime from 'react-datetime';
import moment from 'moment';
import * as Yup from 'yup';

/* Components */
import { ReactComponent as IncomeIcon } from '../../icons/ModalAddTransactions/income.svg';
import { ReactComponent as ExpenseIcon } from '../../icons/ModalAddTransactions/expense.svg';
import { ReactComponent as CloseIcon } from '../../icons/ModalAddTransactions/close.svg';
import { ReactComponent as CalendarIcon } from '../../icons/ModalAddTransactions/calendar.svg';

/* Styles */
import styles from './ModalAddTransactions.module.css';
import "react-datetime/css/react-datetime.css";

function ModalAddTransactions({ onClose }) {
  // const [type, setType] = useState(null);
  // const [sum, setSum] = useState(null);
  // const [date, setDate] = useState(null);
  // const [comment, setComment] = useState(null);

  // const contacts = useSelector(contactsSelectors.getAllContacts);
  // const dispatch = useDispatch();
  // const onSubmit = () => dispatch(contactsOperations.addContact(name, number));

  // const handleChange = useCallback(e => {
  //   switch (e.currentTarget.name) {
  //     case 'name':
  //       setName(e.currentTarget.value);
  //       break;
  //     case 'number':
  //       setNumber(e.currentTarget.value);
  //       break;
  //     default:
  //       console.error('Error from ContactEditor');
  //   }
  // }, []);

  // const handleSubmit = useCallback(e => {
  //   e.preventDefault();

  //   if (contacts.find(contact => contact.name === name)) {
  //     alert(`${name} is already in contacts.`);
  //     return;
  //   };

  //   onSubmit();
  //   onSave();
  //   setType(null);
  //   setSum(null);
  //   setDate(null);
  //   setComment(null);
  // }, [contacts, dispatch, name, number, onSave]);

  // const nameInputId = shortid.generate();
  // const numberInputId = shortid.generate();
  
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
    category: '0',
    sum: 0.00,
    date: new Date(),
    comment: '',
  }

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const handleSubmit = async (values) => {
    onClose();
    await sleep(500);
    alert(JSON.stringify(values, null, 2));
  }
  
  const beforeYesterday = moment().subtract(1, "day");
  const validDate = (current) => {
    return current.isAfter(beforeYesterday);
  }

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
            <option value="0">Основной</option>
            <option value="1">Еда</option>
            <option value="2">Авто</option>
            <option value="3">Развитие</option>
            <option value="4">Дети</option>
            <option value="5">Дом</option>
            <option value="6">Образование</option>
            <option value="7">Основные</option>
          </Field>
          }

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
              timeFormat={false}
              isValidDate={validDate}
              initialValue={new Date()}
              onChange={e => { values.date = e._d }}
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

