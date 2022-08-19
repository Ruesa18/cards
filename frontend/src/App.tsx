import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Courses from './components/Courses';
import CardsWriting from './components/CardsWriting';



function App() {
  return (
    <div className="App">
      <Courses />
      <CardsWriting />
    </div>
  );
}

export default App;
