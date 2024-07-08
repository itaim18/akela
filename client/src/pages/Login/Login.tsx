import { FC, useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Button, Input } from '../../components';
import { login } from '../../api';
import { useUser } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { UnauthorizedUserError } from '../../errors/UnauthorizedUserError';

const getErrorMessage = (error: unknown): string => {
  if (error instanceof UnauthorizedUserError) return 'Username and / or password are not correct';

  return 'An error occured, please try again';
};

const Login: FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<unknown>();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { isLoggedIn, setUser } = useUser();

  useEffect(() => {
    if (isLoggedIn) navigate('/');
  }, [isLoggedIn]);

  const handleSubmit = async () => {
    try {
      await login(username, password);

      setUser(username);
    } catch (e: unknown) {
      setError(e);
    }
  };

  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome</h1>
        <h2 className={styles.subtitle}>Please login</h2>
        <div className={styles.inputsContainer}>
          <Input
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            fullWidth
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className={styles.button} onClick={handleSubmit}>
            Login
          </Button>
        </div>
        {!!error && <p className={styles.errorMessage}>{getErrorMessage(error)}</p>}
      </div>
    </div>
  );
};

export default Login;
