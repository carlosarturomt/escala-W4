"use strict";

function calculateSumScores() {
  // ........................- 10 - C I T -........................
  var inputSumScoresCIT10 = document.getElementById("SumScoresCIT10");
  inputSumScoresCIT10.innerText = SumScoresCIT;
  var SumScoresCIT10_averageScore = parseInt(SumScoresCIT) / 10;
  var inputSumScoresCIT10_averageScore = document.getElementById("SumScoresCIT10_averageScore");
  inputSumScoresCIT10_averageScore.innerText = SumScoresCIT10_averageScore; // ........................- 3 - C V -........................

  var inputSumScoresICV3 = document.getElementById("SumScoresICV3");
  inputSumScoresICV3.innerText = SumScoresICV3;
  var SumScoresICV3_averageScore = parseInt(SumScoresICV3) / 3;
  var inputSumScoresICV3_averageScore = document.getElementById("SumScoresICV3_averageScore");
  inputSumScoresICV3_averageScore.innerText = SumScoresICV3_averageScore.toFixed(2); // ........................- 3 - R P -........................

  var inputSumScoresIRP3 = document.getElementById("SumScoresIRP3");
  inputSumScoresIRP3.innerText = SumScoresIRP3;
  var SumScoresIRP3_averageScore = parseInt(SumScoresIRP3) / 3;
  var inputSumScoresIRP3_averageScore = document.getElementById("SumScoresIRP3_averageScore");
  inputSumScoresIRP3_averageScore.innerText = SumScoresIRP3_averageScore.toFixed(2);
}