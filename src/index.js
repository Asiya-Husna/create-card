import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Import necessary modules from Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faCog, faSpinner, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import Bigcard from './card';

// Add the imported icons to the library
library.add(faCoffee, faCog, faSpinner, faPhoneVolume);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Bigcard />
  </React.StrictMode>
);
