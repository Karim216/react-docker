import { Fragment } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Containers/Home/Home';
import HomePage from './Containers/Home/HomePage/HomePage';
import ShowArticle from './Containers/Home/ShowArticle/ShowArticle';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<HomePage />} />
            <Route path='/accueil' element={<HomePage />} />
            <Route path='/article' element={<ShowArticle />}/>
          </Route>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
