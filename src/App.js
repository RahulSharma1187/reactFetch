import './App.css';
import React, { useState } from 'react';
import Fetch from './component/Fetch';
import ToDoList from './component/ToDoList'

function App() {


  return (
    <>
      <Fetch />
      <br></br>
      <ToDoList />
    </>
  );
}

export default App;
