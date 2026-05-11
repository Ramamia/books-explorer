// src/pages/Home.jsx
const Home = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '50px',
      textAlign: 'center' 
    }}>
      <img 
        src="/logo.png" 
        alt="My Logo" 
        style={{ 
          width: '300px', 
          borderRadius: '20px', 
          boxShadow: '0 8px 16px rgba(0,0,0,0.1)' 
        }} 
      />
      
      <h1 style={{ marginTop: '20px', fontSize: '2.5rem', color: '#2c3e50' }}>
         Welcome to my book library 
      </h1>
      
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', lineHeight: '1.6' }}>
        Dive into a world of stories! Browse our collection and view detailed 
        information using the Open Library API. [cite: 101]
      </p>
    </div>
  );
};

export default Home;