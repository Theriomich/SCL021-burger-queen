import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import {Krusty} from './App';
import './App.css';
import routesApp from './routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
<Krusty />
<RouterProvider router={routesApp} />
</>

);


