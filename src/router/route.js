import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Auth/Login';
// import Register from '../pages/Auth/Register';
// import ForgotPassword from '../pages/Auth/ForgotPassword';
import Profile from '../pages/Profile';
import Home from '../pages/Home';
import Employee from '../pages/Employee';
import About from '../pages/About';
import { rootLoader } from './rootLoader';
import Unit from 'pages/Unit';
import Category from 'pages/Category';
import Table from 'pages/Table';
import OrderPage from "../pages/Order/OrderPage";

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
    loader: ({ request }) =>
      rootLoader({ request }, false, 'LOAD_AUTH_PAGE'),
  },
  // {
  //   path: '/forgot-password',
  //   element: <ForgotPassword />,
  //   loader: ({ request }) =>
  //     rootLoader({ request }, false, 'LOAD_AUTH_PAGE'),
  // },
  {
    path: '/profile',
    element: <Profile />,
    loader: ({ request }) =>
      rootLoader({ request }, true, 'LOAD_PROFILE_PAGE'),
  },
  {
    path: '',
    element: <Home />,
    loader: ({ request }) =>
      rootLoader({ request }, true, 'LOAD_HOME_PAGE'),
  },
  {
    path: '/about',
    element: <About />,
    loader: ({ request }) =>
      rootLoader({ request }, true, 'LOAD_ABOUT_PAGE'),
    children: [
      {
        path: ':id',
        element: <About />,
        loader: ({ request }) =>
          rootLoader({ request }, true, 'LOAD_ABOUT_PAGE'),
      },
    ],
  },
  {
    path: '/employee',
    element: <Employee />,
    loader: ({ request }) =>
      rootLoader({ request }, true, 'LOAD_EMPLOYEE_PAGE'),
  },
  {
    path: '/unit',
    element: <Unit />,
    loader: ({ request }) =>
      rootLoader({ request }, true, 'LOAD_UNIT_PAGE'),
  },
  {
    path: '/category',
    element: <Category />,
    loader: ({ request }) =>
      rootLoader({ request }, true, 'LOAD_CATEGORY_PAGE'),
  },
  {
    path: '/table', // Đường dẫn cho Table Management
    element: <Table />,
    loader: ({ request }) =>
      rootLoader({ request }, true, 'LOAD_TABLE_PAGE'),
  },
  {
    path: '/order', // Đường dẫn cho Order Management
    element: <OrderPage />,
    loader: ({ request }) =>
      rootLoader({ request }, true, 'LOAD_ORDER_PAGE'),
  },
  {
    path: '/order/:tableId',  // Đảm bảo có route cho order theo bàn
    element: <OrderPage />,
    loader: ({ request }) =>
      rootLoader({ request }, true, 'LOAD_ORDER_PAGE'),
  },
]);

export default router;
