import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import { postJob } from '../../services/api';
import './PostJob.css';

const PostJob = ({ onPostJob }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    employmentType: 'Full-time',
    description: '',
    requirements: '',
    skills: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await postJob(formData);
      console.log('Job posted:', data);
      alert('Job posted successfully!');
    } catch (error) {
      console.error('Posting failed:', error);
      alert('Failed to post job');
    }
  };

  return (
    <div className="post-job-container">
      <h2>Post a New Job</h2>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Job Title*</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Company*</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Location*</label>
            <input
              type="text"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Salary (USD/year)*</label>
            <input
              type="number"
              value={formData.salary}
              onChange={(e) => setFormData({...formData, salary: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <label>Employment Type*</label>
            <select
              value={formData.employmentType}
              onChange={(e) => setFormData({...formData, employmentType: e.target.value})}
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Job Description*</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            required
            rows={5}
          />
        </div>

        <div className="form-group">
          <label>Requirements (One per line)*</label>
          <textarea
            value={formData.requirements}
            onChange={(e) => setFormData({...formData, requirements: e.target.value})}
            required
            rows={5}
            placeholder="5+ years of experience\nBachelor's degree in CS"
          />
        </div>

        <div className="form-group">
          <label>Skills (Comma separated)*</label>
          <input
            type="text"
            value={formData.skills}
            onChange={(e) => setFormData({...formData, skills: e.target.value})}
            required
            placeholder="React, JavaScript, CSS"
          />
        </div>

        <div className="form-actions">
          <Button type="submit">Post Job</Button>
          <Button variant="outline" onClick={() => navigate('/jobs')}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PostJob;