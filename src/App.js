import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './componensts/Header/Header';
import Profile from './componensts/Profile/Profile';
import Skils from './componensts/Skils/Skils';

function App() {
  return (
    <div className="App">
      <Header/>
      <Profile/>
      <Skils/>
    </div>
  );
}

export default App;
