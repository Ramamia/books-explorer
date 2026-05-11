// src/pages/Books.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('https://openlibrary.org/search.json?q=programming')
      .then(res => setBooks(res.data.docs))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '10px', marginBottom: '60px' }}>
      {books.map((book) => {
        const id = book.key.split('/').pop(); 
        return (
          <div key={book.key} style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
            <img 
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} 
              alt={book.title} 
              style={{ width: '150px', height: '200px', objectFit: 'cover' }}
            />
            <h4>{book.title}</h4>
            <p style={{ fontSize: '0.8rem' }}>{book.author_name?.join(', ')}</p>
            <Link style={{ textDecoration: 'underline' ,color: '#3498db' }} to={`/books/${id}`}>
              View Details
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Books;