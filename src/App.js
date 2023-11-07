import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import config from './amplify-config';
import { API } from 'aws-amplify';
import React, { useState, useEffect } from 'react';

Amplify.configure(config);

const fetchBooks = async () => {
  try {
    const bookData = await API.get('recommendedBooks', '/books');
    console.log('Books fetched successfully:', bookData);
    return bookData; // This should be an array of book items
  } catch (error) {
    console.error('Error fetching books:', error);
    return []; // Return an empty array in case of an error
  }
};


const BooksList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchBooks();
      setBooks(result);
    };

    fetchData();
  }, []);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React the right way
        </a>
      </header>
    </div>
  );
}

export default App;
