import { useDispatch } from 'react-redux';
import authOps from '../../redux/auth/authOperations';
import ButtonsBlock from '../ButtonsBlock/ButtonsBlock';
import styles from './ModalLogout.module.css';

const ModalLogout = ({ onClose }) => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(authOps.logOut());
  };
  const buttonsSettings = {
    btn_1_text: 'Выйти',
    btn_2_text: 'Отмена',
    btn_1_callback: onLogout,
    btn_2_callback: onClose,
  };
  return (
    <div className={styles.modalLogout}>
      <p className={styles.title}>Точно хотите выйти?</p>
      <ButtonsBlock {...buttonsSettings} />
    </div>
  );
};

export default ModalLogout;
