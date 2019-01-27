const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const developerSchema = new Schema({
  _project: {
    type: String,
    ref: "Project"
  },
  name: {
    type: String,
    required: true
  },
  github_link: {
    type: String,
    required: true
  },
  linkedin_link: {
    type: String,
    required: true
  },
  portfolio_link: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  },
  imageURL: String,
  interview_count: Number,
});

const Developer = mongoose.model("Developer", developerSchema);

module.exports = Developer;