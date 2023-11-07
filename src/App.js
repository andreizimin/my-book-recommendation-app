import logo from './logo.svg';
import './App.css';
import {Amplify} from 'aws-amplify';
import config from './aws-exports';
import React, { useState, useEffect } from 'react';
import BooksList from './BooksList';

Amplify.configure(config);


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <BooksList />
      </header>
    </div>
  );
}

export default App;