import './JobCard.css';

const JobCard = ({ job, onClick }) => {
  return (
    <div className="job-card" onClick={onClick}>
      <h3>{job.title}</h3>
      <p className="company">{job.company}</p>
      <p className="location">{job.location}</p>
      <div className="job-meta">
        <span>{job.employmentType}</span>
        <span>${job.salary}/year</span>
      </div>
    </div>
  );
};

export default JobCard;