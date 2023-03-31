import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProfilePage from './pages/ProfilePage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NotFound from './pages/NotfoundPage';
import Layout from './pages/Layout';
import MyPage from './pages/MyPage';
import LoginPage from './pages/LoginPage';


function MaterialApp() {
  return (
    <Router>
      <Routes>
        <Route exact path = "/" element = {<Layout/>}>
          <Route path="" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/profile/:username" element={<ProfilePage />} />
        </Route>
        <Route path="/articles" element={<ArticleListPage />}>
          <Route path=":id" element={<ArticlePage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        <Route path='/login' element={<LoginPage/>}/>
      <Route path='/my-page' element={<MyPage/>}/>
      </Routes>
    </Router>
  );
};

export default MaterialApp;
