import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Pages/Home/Home';
import TV from './Pages/tv/tv';
import LIBRARY from './Pages/library/library';
import TICKET from './Pages/ticket/ticket';
import MONEY from './Pages/money/money';
import MIRROR from './Pages/mirror/mirror';
import APPLE from './Pages/apple/apple';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
    
  },
  {
    path:'/TV',
    element:<TV/>
  },
  {
    path:'/Library',
    element:<LIBRARY/>
  },
  {
    path:'/Ticket',
    element:<TICKET/>
  },
  {
    path:'/Money',
    element:<MONEY/>
  },
  {
    path:'/Mirror',
    element:<MIRROR/>
  },
  {
    path:'/Apple',
    element:<APPLE/>
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
