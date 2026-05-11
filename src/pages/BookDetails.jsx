// src/pages/BookDetails.jsx
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const BookDetails = () => {
  const { id } = useParams(); // [cite: 72]
  const [book, setBook] = useState(null);

  useEffect(() => {
    // [cite: 73]
    axios.get(`https://openlibrary.org/works/${id}.json`)
      .then(res => setBook(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!book) return <h2 style={{ textAlign: 'center' }}>Loading...</h2>;

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>{book.title}</h1>

      <div style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        gap: '40px', 
        alignItems: 'flex-start',
        flexWrap: 'wrap' 
      }}>
        
        <div style={{ flex: '0 0 auto' }}>
          {book.covers ? (
            <img 
              style={{ 
                width: '200px', 
                height: '300px', 
                objectFit: 'cover',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
              }} 
              src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`} 
              alt="Cover" 
            />
          ) : (
            <div style={{ 
              width: '200px', 
              height: '300px', 
              background: '#eee', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>No Cover</div>
          )}
        </div>

        <div style={{ flex: '1', minWidth: '300px' }}>
          <h3 style={{ borderBottom: '2px solid #eee', paddingBottom: '10px' }}>Description:</h3>
          <p style={{ 
            lineHeight: '1.6', 
            fontSize: '1.1rem', 
            textAlign: 'justify',
            whiteSpace: 'pre-wrap' 
          }}>
            {book.description?.value || book.description || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;