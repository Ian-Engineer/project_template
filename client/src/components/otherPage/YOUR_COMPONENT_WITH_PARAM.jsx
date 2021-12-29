/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */

import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from '../../App.jsx';

export default function ProfilePage() {
  const {
    
  } = useContext(AppContext);

  // declare state variables
  const [template, setTemplate] = useState();

  // delcare variable and define it based on URL
  const { query_param } = useParams();

  // use effect - load data when rendering the page
  useEffect(() => {

  }, []);

  return (
    <div>
      {query_param}
    </div>
  );
}