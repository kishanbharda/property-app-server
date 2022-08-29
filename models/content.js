const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  featuredProperties: [{
    type: Schema.Types.ObjectId,
    ref: "Property"
  }],
  trendingProperties: [{
    type: Schema.Types.ObjectId,
    ref: "Property"
  }]
}, {
  collection: "content",
  timestamps: true
});

module.exports = mongoose.model("Content", contentSchema);