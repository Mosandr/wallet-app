import { useFormikContext } from 'formik';
import styles from './ProgressBar.module.css';

const ProgressBar = () => {
  const { values } = useFormikContext();
  const { length } = values.password;
  const calcProgressLine = () => {
    const width = length * (100 / 12);
    const color =
      length < 6
        ? 'red'
        : length <= 10
        ? 'yellow'
        : length <= 12
        ? 'green'
        : 'red';
    return { width: `${width}%`, backgroundColor: color };
  };
  return (
    <div className={styles.progressBar}>
      <div
        className={styles.progressBarInnerLine}
        style={calcProgressLine()}
      ></div>
    </div>
  );
};

export default ProgressBar;
