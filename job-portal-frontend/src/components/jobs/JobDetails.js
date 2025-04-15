import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader from '../ui/Loader';
import Error from '../ui/Error';
import Button from '../ui/Button';
import './JobDetails.css';

const mockJob = {
  id: 1,
  title: 'Senior Frontend Developer',
  company: 'Tech Innovations Inc.',
  location: 'San Francisco, CA (Remote possible)',
  salary: 120000,
  employmentType: 'Full-time',
  description: 'We are looking for an experienced frontend developer...',
  requirements: [
    '5+ years of React experience',
    'Strong JavaScript/TypeScript skills',
    'Experience with state management (Redux/MobX)'
  ],
  skills: ['React', 'JavaScript', 'TypeScript', 'CSS'],
  postedAt: '2023-05-15',
  companyWebsite: 'https://techinnovations.com',
  companyLogo: 'https://via.placeholder.com/150'
};

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [similarJobs, setSimilarJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [applying, setApplying] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        setJob(mockJob);
        setSimilarJobs([
          { id: 2, title: 'Frontend Engineer', company: 'Tech Corp', salary: 95000 },
          { id: 3, title: 'React Developer', company: 'Digital Solutions', salary: 85000 }
        ]);
        setLoading(false);
      } catch (err) {
        setError('Failed to load job details');
        setLoading(false);
      }
    }, 800);
  }, [id]);

  const handleApply = async () => {
    setApplying(true);
    setTimeout(() => {
      setApplying(false);
      alert('Application submitted successfully!');
    }, 1500);
  };

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;
  if (!job) return <div>Job not found</div>;

  return (
    <div className="job-details">
      <div className="job-header">
        <div className="company-logo">
          <img src={job.companyLogo} alt={job.company} />
        </div>
        <div className="job-info">
          <h1>{job.title}</h1>
          <h2>{job.company}</h2>
          <div className="job-meta">
            <span>{job.location}</span>
            <span>{job.employmentType}</span>
            <span>${job.salary.toLocaleString()}/year</span>
          </div>
          <div className="job-actions">
            <Button onClick={handleApply} disabled={applying}>
              {applying ? 'Applying...' : 'Apply Now'}
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open(job.companyWebsite, '_blank')}
            >
              Visit Company Website
            </Button>
          </div>
        </div>
      </div>

      <div className="job-content">
        <section className="job-description">
          <h3>Job Description</h3>
          <p>{job.description}</p>
        </section>

        <section className="job-requirements">
          <h3>Requirements</h3>
          <ul>
            {job.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </section>

        <section className="job-skills">
          <h3>Skills</h3>
          <div className="skill-tags">
            {job.skills.map(skill => (
              <span key={skill} className="skill-tag">{skill}</span>
            ))}
          </div>
        </section>
      </div>

      {similarJobs.length > 0 && (
        <section className="similar-jobs">
          <h3>Similar Jobs</h3>
          <div className="similar-jobs-list">
            {similarJobs.map(sJob => (
              <div 
                key={sJob.id} 
                className="similar-job-card"
                onClick={() => navigate(`/jobs/${sJob.id}`)}
              >
                <h4>{sJob.title}</h4>
                <p>{sJob.company}</p>
                <p>${sJob.salary.toLocaleString()}/year</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default JobDetails;