import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shortid from 'shortid';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import styles from './ContactEditor.module.css';

export default function ContactEditor({ onSave }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const contacts = useSelector(contactsSelectors.getAllContacts);
  const dispatch = useDispatch();
  const onSubmit = () => dispatch(contactsOperations.addContact(name, number));

  const handleChange = useCallback(e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        console.error('Error from ContactEditor');
    }
  }, []);

  const handleSubmit = useCallback(e => {
    e.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    };

    onSubmit();
    onSave();
    setName('');
    setNumber('');
  }, [contacts, dispatch, name, number, onSave]);

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <label className={styles.text} htmlFor={nameInputId}>Name:</label>
      <input
          id={nameInputId}
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
        />

      <label className={styles.text} htmlFor={numberInputId}>Number:</label>
      <input
          id={numberInputId}
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
      />
      
      <button className={styles.button} type="submit">Add Contact</button>
    </form>
  )
}

// import { Component } from 'react';
// import shortid from 'shortid';
// import { connect } from 'react-redux';
// import { contactsOperations, contactsSelectors } from '../../redux/contacts';
// import styles from './ContactEditor.module.css';

// class ContactEditor extends Component {
//   state = {
//     name: '',
//     number: '',
//   }

//   handleChange = e => {
//     this.setState({ [e.currentTarget.name]: e.currentTarget.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     const { name, number } = this.state;

//     if (this.props.contacts.find(contact => contact.name === name)) {
//           alert(`${name} is already in contacts.`);
//           return;
//     };

//     this.props.onSubmit(name, number);
//     this.props.onSave();
//     this.setState({ name: '', number: '' });
//   }

//   nameInputId = shortid.generate();
//   numberInputId = shortid.generate();

//   render() {
//     return (
//       <form className={styles.container} onSubmit={this.handleSubmit}>
//         <label className={styles.text} htmlFor={this.nameInputId}>Name:</label>
//         <input
//             id={this.nameInputId}
//             className={styles.input}
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//             value={this.state.name}
//             onChange={this.handleChange}
//           />

//         <label className={styles.text} htmlFor={this.numberInputId}>Number:</label>
//         <input
//             id={this.numberInputId}
//             className={styles.input}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//             value={this.state.number}
//             onChange={this.handleChange}
//         />
        
//         <button className={styles.button} type="submit">Add Contact</button>
//       </form>
//     )
//   }
// }

// const mapStateToProps = state => ({
//   contacts: contactsSelectors.getAllContacts(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onSubmit: (name, number) => dispatch(contactsOperations.addContact(name, number))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactEditor);