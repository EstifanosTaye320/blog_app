const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PostSchema = new Schema({
  title: {
    type: String,
    requried: true,
  },
  body: {
    type: String,
    requried: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = PostSchema;
