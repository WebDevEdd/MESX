const mongoose = require('mongoose');

// Define the schema
const jobSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  postedDate: {
    type: Date,
    default: Date.now
  },
  model: {
      required: true
  }
});

// Create and export the model based on the schema
const Job = mongoose.model('Job', jobSchema);
module.exports = Job;