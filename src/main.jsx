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
        element: <Section sectionType={"books"} key={1} />,
      },
      {
        path: "/sports",
        element: <Section sectionType={"sport"} key={2} />,
      },
      {
        path: "/culture",
        element: <Section sectionType={"culture"} key={3} />,
      },
      {
        path: "/business",
        element: <Section sectionType={"business"} key={4} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
