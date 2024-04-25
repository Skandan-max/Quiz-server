import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/quizApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const authRoutes = require("./routes/authRoutes");
const quizRoutes = require("./routes/quizRoutes");
app.use("/api/auth", authRoutes);
app.use("/api/quizzes", quizRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
