import React from 'react';
import './App.css';
import Layout from '../Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import History from "../Pages/History/History";

import './App.css'
import Main from "../Pages/Main/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path={''} element={ <Layout/> }>
          <Route path={'history'} element={ <History /> }/>
          <Route path={'main'} element={ <Main /> } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
