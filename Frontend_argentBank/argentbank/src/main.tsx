import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/main.scss'


import { store } from './app/store';
import { Provider } from 'react-redux';

import {PrincipalPage} from './pages/PrincipalPage';
import {SigninPage} from './pages/SigninPage';
import {UserPage} from './pages/UserPage';
import {Header} from './components/Header';
import {Footer} from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PrincipalPage />} />
        <Route path="/sign-in" element={<SigninPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </Provider>
);