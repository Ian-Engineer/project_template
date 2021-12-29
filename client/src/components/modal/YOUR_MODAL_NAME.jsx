/* eslint-disable react/function-component-definition */
/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */

import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { AppContext } from '../../App.jsx';
import Modal from '../../utilities/Modal.jsx';

export default function SearchModal() {
  // get context from app
  const {
    
  } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {

  }, []);

  return (

    <Modal
      value={A_VARIABLE_THAT_IS_A_BOOLEAN} // this variable passed through here determines if the modal is displayed or not
    >
      <div>
        Example
      </div>
    </Modal>
  );
}