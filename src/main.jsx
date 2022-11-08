import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import ErrorPage from "./error-page";
import App from './App';
import Section from './components/Section/Section';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/books",
        element: <Section sectionType={"books"} />,
      },
      {
        path: "/sports",
        element: <Section sectionType={"sports"} />,
      },
      {
        path: "/culture",
        element: <Section sectionType={"culture"} />,
      },
      {
        path: "/business",
        element: <Section sectionType={"business"} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
