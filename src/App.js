import React from 'react';
import './App.css';
import Hello from './Hello.js';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'red',
    color: 'aqua',
    fontSize: '24',
    padding:'1rem'
  }
  return (
    <>
      <Hello name="react" color="red" />
      <Hello color="pink" />
    </>
  );
}

export default App;
