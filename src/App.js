import React from 'react';
import './App.css';

import Header from './components/Header/Header.js';
import MainPic from './components/MainPic/MainPic.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import ContactsPage from './components/ContactsPage/ContactsPage.js';

import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Route exact path='/'render={() => <MainPic />} />
        <Route path='/about-us' render={() => <AboutUs />} />
        <Route path='/contacts' render={() => <ContactsPage />} />
      </div>
    </BrowserRouter>
  );
}

export default App;
