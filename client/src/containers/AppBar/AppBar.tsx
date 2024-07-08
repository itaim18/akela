import { FC, useEffect } from 'react';
import { useUser } from '../../hooks';
import { Button } from '../../components';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

const AppBar: FC = () => {
  const navigate = useNavigate();
  const { isLoggedIn, username, logout } = useUser();

  useEffect(() => {
    if (!isLoggedIn) navigate('/login');
  }, [isLoggedIn]);

  return (
    <div className={styles.container}>
      <p>Hello {username}</p>
      <Button variant="secondary" onClick={logout}>
        Logout
      </Button>
    </div>
  );
};

export default AppBar;
