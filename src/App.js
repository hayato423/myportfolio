import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './componensts/Header/Header';
import Navbar from './componensts/NavigationBar/NavigationBar';
import Profile from './componensts/Profile/Profile';
import Skils from './componensts/Skils/Skils';
import Works from './componensts/Works/Works';
import Footer from './componensts/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Profile/>
      <Skils/>
      <Works/>
      <Footer/>
    </div>
  );
}

export default App;
