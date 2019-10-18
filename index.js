require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;
let url = "";

// register middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  url = `mongodb+srv://week18Challenge:${process.env.MONGODB_PASSWORD}@cluster0-cx78d.mongodb.net/hackathon-lifesports?retryWrites=true&w=majority`; // connection string for Atlas here
} else {
  url = "mongodb://localhost:27017/hackathon-lifesports"; // connection string for localhost mongo here
}

// connection to database
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection is live " + url);
});
mongoose.set("useFindAndModify", false);

const sportsRouter = require("./routes/sports");
const workoutRouter = require("./routes/workouts");

app.use("/sports", sportsRouter);
app.use("/workout", workoutRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));
