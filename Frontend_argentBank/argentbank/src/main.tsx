import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './pages/home/Home'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Error } from './components/Error/Error'
import { SignIn } from './pages/signIn/SignIn'
import { User } from "./pages/user/User"
import { Profile } from './pages/profile/Profile'


import "./assets/main.css"


const root = ReactDOM.createRoot(document.getElementById('root')!)


root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/user" element={<User />} />
        <Route path="/profil" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
