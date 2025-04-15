import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Job endpoints
export const fetchJobs = () => API.get('/jobs');
export const postJob = (jobData) => API.post('/jobs', jobData);