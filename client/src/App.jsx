/* eslint-disable import/no-cycle */
/* eslint-disable comma-dangle */
/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
import React, {
  useState, useEffect, useContext, createContext
} from 'react';
import axios from 'axios';
import {
  Routes, Route,
} from 'react-router-dom';

import Header from './components/header/Header.jsx';
import HomePage from './components/homepage/HomePage.jsx';
import NoPath from './components/noPath/NoPath.jsx';
import PageTemplate from './components/otherPage/PageTemplate.jsx';
import YOUR_MODAL_NAME from './components/modal/YOUR_MODAL_NAME.jsx'

export const AppContext = React.createContext();

export const App = function () {
  // declare state variables
  const [template, setTemplate] = useState();

  // use effect to gather data and render page
  useEffect(() => {
  }, []);

  // use effect to load modal
  useEffect(() => {
  }, []);

  return (

    <div className="app">
      <AppContext.Provider value={{

      }}
      >
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
            <Route path="/template" element={<PageTemplate />} />
            <Route path="/:query_param" element={<YOUR_COMPONENT_WITH_PARAM />} />
            <Route path="*" element={<NoPath />} />
          </Route>
        </Routes>
        <YOUR_MODAL_NAME />
      </AppContext.Provider>
    </div>
  );
};