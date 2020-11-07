const mongoose = require("mongoose");

const videoSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: Number,
  title: String,
  type: String,
  videoId: String,
  genres: Array,
  vote_average: Number,
  overview: String
});

module.exports = mongoose.model("Video", videoSchema);


