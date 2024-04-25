import mongoose from "mongoose";
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  text: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswerIndex: { type: Number, required: true },
});

const quizSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  questions: { type: [questionSchema], required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
