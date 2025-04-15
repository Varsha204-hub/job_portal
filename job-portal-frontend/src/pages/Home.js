import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="hero">
        <h1>Find Your Dream Job Today</h1>
        <p>Browse thousands of job listings and find the perfect match for your skills</p>
        <Button onClick={() => navigate('/jobs')}>
          Browse Jobs
        </Button>
      </div>
      
      <div className="features">
        <div className="feature-card">
          <h3>Search Jobs</h3>
          <p>Filter by salary, location, and job type</p>
        </div>
        <div className="feature-card">
          <h3>Save Listings</h3>
          <p>Bookmark jobs you're interested in</p>
        </div>
        <div className="feature-card">
          <h3>Easy Apply</h3>
          <p>Apply to jobs with just one click</p>
        </div>
      </div>
    </div>
  );
};

export default Home;