import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Ecole from './pages/Ecole';
import Cours from './pages/Cours';
import Contact from './pages/Contact'
import InfosUtiles from './pages/InfosUtiles';
import Login from './pages/Login';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import reportWebVitals from './reportWebVitals';
import CoursDetail from './pages/CoursDetail';
import Logincreate from './components/LoginCreate/LoginCreate'
import AddInfoUtileArticle from "./components/AddInfoUtileArticle/AddInfoUtileArticle"
import InfoUtileArticleUpdate from "./components/InfoUtileArticleUpdate/InfoUtileArticleUpdate"
import InfoUtileDetail from "./pages/InfoUtileDetail"
import Editform from "./components/Editform/Editform"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },

      {
        path: '/ecole',
        element: <Ecole />
      },
      {
        path: '/cours',
        element: <Cours />
      },
      {
        path: '/cours/:id',
        element: <CoursDetail />,
      },
      {
        path: '/info',
        element: <InfosUtiles />,
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/addinfoutilearticle',
        element: <AddInfoUtileArticle />,
      },
      {
        path: '/info/:id',
        element: <InfoUtileDetail />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/admin',
        element: <Admin />,
      },
      {
        path: '/infoupdate/:id',
        element: <InfoUtileArticleUpdate />,
      },
      {
        path: '/logincreate',
        element: <Logincreate />,
      },
      {
        path: '/editform/:id',
        element: <Editform />,
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

