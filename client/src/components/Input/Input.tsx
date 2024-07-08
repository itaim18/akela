import { FC, InputHTMLAttributes } from 'react';
import styles from './styles.module.css';
import { mergeClassNames } from '../../utils';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  fullWidth?: boolean;
}

const Input: FC<Props> = ({ label, fullWidth = false, ...inputProps }) => {
  const inputClassName = mergeClassNames(styles.input, fullWidth && styles.fullWidth);

  const containerClassName = mergeClassNames(styles.container, fullWidth && styles.fullWidth);

  return (
    <div className={containerClassName}>
      <label className={styles.label}>{label}</label>
      <input className={inputClassName} {...inputProps} />
    </div>
  );
};

export default Input;
