import React from 'react';
import './App.css';
import Input from './components/input';
import Login from './components/login';

var isCondition = false
var getTime = new Date().getHours()

console.log(getTime)
function App() {
  return (
    <div className="container">
      <Login />
    </div>
  )
    
  
}

export default App;
