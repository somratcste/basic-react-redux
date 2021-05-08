import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions, counterActions } from '../store';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const counter = useSelector(state => state.counter.counter);

  const logoutHandler = () => {
    dispatch(authActions.logout());
    dispatch(counterActions.reset());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
