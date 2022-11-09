import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from "react-router-dom";
import MainPage from './components/MainPage/MainPage';

function App() {

  return (
    <div>
      <Header />
      <MainPage />
      <Outlet />
    </div>
  );
}

export default App;
