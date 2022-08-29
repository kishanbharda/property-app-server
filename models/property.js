const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema({
  name: {
    type: Schema.Types.String,
  },
  category: {
    type: Schema.Types.String
  },
  location: {
    type: Schema.Types.String,
  },
  image: {
    type: Schema.Types.String
  },
  details: {
    beds: {
      type: Schema.Types.Number
    },
    baths: {
      type: Schema.Types.Number,
    },
    guests: {
      type: Schema.Types.Number,
    },
    area: {
      type: Schema.Types.String,
    },
    petAllowed: {
      type: Schema.Types.Boolean,
    },
  },
  generalInformation: {
    type: Schema.Types.String,
  },
  rate: {
    type: Schema.Types.String
  },
  slug: {
    type: String,
    unique: true
  },
  featured: {
    type: Schema.Types.Boolean,
    default: false,
  },
  trending: {
    type: Schema.Types.Boolean,
    default: false,
  }
}, {
  collection: "properties",
  timestamps: true
});

propertySchema.pre("save", function (next) {
  this.slug = slugify(this.name);
  next();
});

const slugify = (text) => {
  return text.toString().toLowerCase()
  .replace(/\s+/g, '-')           // Replace spaces with -
  .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
  .replace(/\-\-+/g, '-')         // Replace multiple - with single -
  .replace(/^-+/, '')             // Trim - from start of text
  .replace(/-+$/, '');    
}

module.exports = mongoose.model("Property", propertySchema);