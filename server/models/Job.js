const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  salary: { type: Number, required: true },
  employmentType: { 
    type: String, 
    enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
    required: true 
  },
  description: { type: String, required: true },
  requirements: { type: [String], required: true },
  skills: { type: [String], required: true },
  postedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Job', JobSchema);