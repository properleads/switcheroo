var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:3000/node-demo");

var nameSchema = new mongoose.Schema({
  firstQuestion: String,
  secondQuestion: String,
  thirdQuestion: String,
  forthQuestion: String
});

var SurveyData = mongoose.model("SurveyData", nameSchema);