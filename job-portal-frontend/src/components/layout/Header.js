import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo" onClick={() => navigate('/')}>
        JobPortal
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/post-job">Post Job</Link>
        {isAuthenticated ? (
          <button onClick={onLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;