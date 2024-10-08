import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import SignUpPage from './pages/SignUpPage';
import RecipeFilterPage from './pages/RecipeFilter'; // Ensure correct import path

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/recipe/:id" element={<RecipeFilterPage />} /> {/* New route */}
      </Routes>
    </Router>
  );
};

export default App;
