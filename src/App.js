import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DiscoverPage from './DiscoverPage';
import ArticlePage from './ArticlePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DiscoverPage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;

