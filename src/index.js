import React from 'react';
import ReactDOM from 'react-dom/client';
import MyApp from './MyApp';
import MyApp2 from './MyApp2';
import MyApp3 from './MyApp3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1> Alejandro Gomez Llanos - 2201157 </h1>
    <MyApp value = {0} />
    <MyApp2 />
    <MyApp3 />
  </React.StrictMode>
);

