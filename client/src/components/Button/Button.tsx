import { ButtonHTMLAttributes, FC } from 'react';
import styles from './styles.module.css';
import { mergeClassNames } from '../../utils';

type Variant = 'primary' | 'secondary';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

const BUTTON_VARIANT_TO_CLASSNAME: Record<Variant, string> = {
  primary: styles.primary,
  secondary: styles.secondary
};

const Button: FC<Props> = ({ variant = 'primary', children, className = undefined, ...props }) => {
  const buttonClassName = mergeClassNames(
    styles.button,
    BUTTON_VARIANT_TO_CLASSNAME[variant],
    className
  );

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;
