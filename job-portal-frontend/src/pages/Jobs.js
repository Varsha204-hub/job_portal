import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import JobFilters from '../components/jobs/JobFilters';
import JobCard from '../components/jobs/JobCard';
import Loader from '../components/ui/Loader';
import Error from '../components/ui/Error';
import { fetchJobs } from '../services/api';
import './Jobs.css';

const Jobs = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    employmentType: [],
    minSalary: ''
  });

  // Fetch jobs from backend
  useEffect(() => {
    const loadJobs = async () => {
      try {
        const { data } = await fetchJobs();
        setJobs(data);
        setFilteredJobs(data);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Failed to load jobs');
        setLoading(false);
      }
    };
    loadJobs();
  }, []);

  // Apply filters
  useEffect(() => {
    let results = [...jobs];
    
    if (filters.employmentType.length > 0) {
      results = results.filter(job => 
        filters.employmentType.includes(job.employmentType)
      );
    }
    
    if (filters.minSalary) {
      results = results.filter(job => 
        job.salary >= Number(filters.minSalary)
      );
    }
    
    setFilteredJobs(results);
  }, [filters, jobs]);

  const handleFilterChange = (filterName, value) => {
    if (filterName === 'employmentType') {
      setFilters(prev => ({
        ...prev,
        employmentType: prev.employmentType.includes(value)
          ? prev.employmentType.filter(type => type !== value)
          : [...prev.employmentType, value]
      }));
    } else {
      setFilters(prev => ({
        ...prev,
        [filterName]: value
      }));
    }
  };

  if (loading) return <Loader />;
  if (error) return <Error message={error} onRetry={() => window.location.reload()} />;

  return (
    <div className="jobs-page">
      <h1>Job Listings</h1>
      <div className="jobs-container">
        <JobFilters filters={filters} onFilterChange={handleFilterChange} />
        <div className="jobs-list">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <JobCard 
                key={job._id} 
                job={job}
                onClick={() => navigate(`/jobs/${job._id}`)}
              />
            ))
          ) : (
            <p>No jobs found matching your criteria</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;