import { Link } from 'react-router-dom';
//i should have named the branch navbarFooter rather than headerFooter so lets just ignore that hehe
const Navbar = () => (
  <nav style={{ background: '#04182c', color: 'white', padding: '1rem', display: 'flex', gap: '20px' }}>
    <b style={{ marginRight: 'auto' }}>Rama's book Explorer</b>
    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
    <Link to="/books" style={{ color: 'white', textDecoration: 'none' }}>Books</Link>
  </nav>
);
export default Navbar;
