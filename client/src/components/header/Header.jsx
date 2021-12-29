/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */

import React from 'react';
import { Outlet } from 'react-router';
import axios from 'axios';
import { AppContext } from '../../App.jsx';

export default function Header() {
  const { 
    
   } = useContext(AppContext);

   const [template, setTemplate] = useState();


  return (
    <div>
      Example
      <Outlet />
    </div>
  );
}