import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './componensts/Header/Header';
import Profile from './componensts/Profile/Profile';
import Skils from './componensts/Skils/Skils';
import Works from './componensts/Works/Works';

function App() {
  return (
    <div className="App">
      <Header/>
      <Profile/>
      <Skils/>
      <Works/>
    </div>
  );
}

export default App;
