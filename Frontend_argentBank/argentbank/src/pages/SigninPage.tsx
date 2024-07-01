import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { login } from '../app/slices/connSlice';
import { AppDispatch, RootState } from '../app/store';

export const SigninPage = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const error = useSelector((state: RootState) => state.auth.error);
  const navigate = useNavigate();

  const [username, setUsername] = useState('tony@stark.com');
  const [password, setPassword] = useState('password123');
  const [loading, setLoading] = useState(false);
  const dispatch:AppDispatch = useDispatch();

  const handleLogin = async () => {
    setLoading(true);
    try {
      await dispatch(login({ email: username, password: password }));
    } catch (error) {
      console.error('Error during login:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/user');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="SigninPage">
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="button" className="sign-in-button" onClick={handleLogin} disabled={loading}>
              {loading ? 'Loading...' : 'Sign In'}
            </button>
            {error && <h1 style={{ color: "red" }}>{error}</h1>}
          </form>
        </section>
      </main>
    </div>
  );
}


