import React from 'react';
import './index.scss'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ProtectedRoute } from './components/protectedRoute/ProtectedRoute';
import { Home } from './pages/home/Home';
import { Profil } from './pages/profil/Profil';
import { SignIn } from './pages/signIn/SignIn';
import { RootState } from './app/store';
import { useSelector } from 'react-redux';

export const App:React.FC = () => {
 
  const { isAuthenticated} = useSelector((state: RootState) => state.auth);
  
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={isAuthenticated ? <Navigate to="/profile" />:<SignIn />} />
      {/* Protégez la route du profil avec le composant ProtectedRoute */}
      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profil />} />
      </Route>
    </Routes>
  </Router>
  )
}


