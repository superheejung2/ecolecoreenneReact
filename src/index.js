import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Ecole from './pages/Ecole';
import Cours from './pages/Cours';
import InfosUtiles from './pages/InfosUtiles';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      {
        path: '/ecole',
        element: <Ecole />,
      },
      {
        path: '/cours',
        element: <Cours />,
      },
      {
        path: '/info',
        element: <InfosUtiles />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/admin',
        element: <Admin />,
      }, 
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
