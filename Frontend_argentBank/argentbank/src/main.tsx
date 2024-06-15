import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Error } from './pages/Error/Error';
import { SignIn } from './pages/SignIn/SignIn';
import { Profile } from './pages/Profile/Profile';
import { Home } from './pages/Home/Home';

import { Provider } from 'react-redux'
import { store } from './app/store';

import "./assets/main.css"



const root = ReactDOM.createRoot(document.getElementById('root')!)


root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
    </Provider>
  </React.StrictMode>,
)
