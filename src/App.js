import './App.css';
import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Questions from './components/Questions';
import Header from './components/Header'
import Mcq from './components/Mcq'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Signup from './components/Signup';

function App() {
  

  return (
    <div className="App">
      <Signup/>
      
    </div>
  );
}

export default App;
