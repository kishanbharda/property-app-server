const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const db = require("./db");
const PropertyRoute = require("./routes/property");

dotenv.config();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

try {
  db.connect();
} catch (error) {
  console.log("Error in database connection");
}

app.get("/", (req, res) => {
  res.send("Welcome to the property management server");
});

app.use("/api", PropertyRoute);

app.use((err, req, res) => {
  console.log(err);
  return res.status(200).json({
    success: false,
    message: "Something wrong happended!!!",
    data: null,
    error: null,
  });
});

app.listen(port, () => {
  console.log(`Admin panel server is running on : ${port}`);
});