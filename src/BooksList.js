import { API } from 'aws-amplify';
import { useState, useEffect } from 'react';
import Book from './Book';

const fetchBooks = async () => {
    try {
      // Replace 'YourApiName' with the name of your API and '/books' with your endpoint path
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
        console.log('result', result);
        setBooks(result);
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        {books.length ? (
          books.map(book => <Book key={book.id} book={book} />)
        ) : (
          <p>No books found.</p>
        )}
      </div>
    );
  
  };

  export default BooksList;