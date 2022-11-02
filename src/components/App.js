import './../styles/App.css';
import React, { Component } from 'react';
import CreateLink from './CreateLink';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import LinkList from './LinkList';
import Login from './Login';


const App = () => {
  return (
    <div>
      <Header />
      <div className='ph3 pv1 background-gray'>
        <Routes>
          <Route path="/" element={<LinkList />} />
          <Route
            path="/create"
            element={<CreateLink />}
            />
            <Route path='login' element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}
export default App;