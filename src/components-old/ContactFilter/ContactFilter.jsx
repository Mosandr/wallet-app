import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../redux/contacts';
import styles from './ContactFilter.module.css';

export default function ContactFilter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const onChange = useCallback(e => {
    dispatch(changeFilter(e.target.value))
  }, [dispatch]);

  return (
    <label className={styles.text}>
      Find contacts by name:
      <input className={styles.input} type="text" value={value} onChange={onChange} />
    </label>
  );
}

// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { contactsSelectors, changeFilter } from '../../redux/contacts'
// import styles from './ContactFilter.module.css'

// const ContactFilter = ({ value, onChange }) => (
//   <label className={styles.text}>
//     Find contacts by name:
//     <input className={styles.input} type="text" value={value} onChange={onChange} />
//   </label>
// );

// ContactFilter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired
// };

// const mapStateToProps = state => ({
//   value: contactsSelectors.getFilter(state),
// });

// const mapDispatchToProps = dispatch => ({
//   onChange: (e) => dispatch(changeFilter(e.target.value)),
// });

// export default  connect(mapStateToProps, mapDispatchToProps)(ContactFilter);