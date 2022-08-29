const mongoose = require("mongoose");

const connect = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    dbName: "homeOwners"
  })
}

module.exports = {
  connect,
}