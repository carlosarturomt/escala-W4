"use strict";

function year(yearT, yearB) {
  return yearT - yearB;
}

function month(monthT, monthB) {
  return monthT - monthB;
}

function day(dayT, dayB) {
  dayT = parseInt(dayT);
  dayB = parseInt(dayB);
  return 30 - dayB + dayT;
}

console.group("Calcular edad");

function calculateYear() {
  //  Y E A R
  var inputTodayYear = document.getElementById("yearToday");
  var valueTodayYear = inputTodayYear.value;
  var inputBirthdayYear = document.getElementById("yearBirthday");
  var valueBirthdayYear = inputBirthdayYear.value; // M O N T H

  var inputTodayMonth = document.getElementById("monthToday");
  var valueTodayMonth = inputTodayMonth.value;
  var inputBirthdayMonth = document.getElementById("monthBirthday");
  var valueBirthdayMonth = inputBirthdayMonth.value; // D A Y

  var inputTodayDay = document.getElementById("dayToday");
  var valueTodayDay = inputTodayDay.value;
  var inputBirthdayDay = document.getElementById("dayBirthday");
  var valueBirthdayDay = inputBirthdayDay.value;
  var ageYear = year(valueTodayYear, valueBirthdayYear);
  var ageMonth = month(valueTodayMonth, valueBirthdayMonth);
  var ageDay = day(valueTodayDay, valueBirthdayDay);
  var resultYear = document.getElementById("resultYear");
  resultYear.innerText = ageYear;
  var resultMonth = document.getElementById("resultMonth");
  resultMonth.innerText = ageMonth;
  var resultDay = document.getElementById("resultDay");
  resultDay.innerText = ageDay;

  if (ageMonth < 0) {
    var newAgenYear = ageYear - 1;
    var newAgeMonth = 12 + ageMonth;
    console.log("Se cumple condición para los que aún no cumplen años.");

    var _resultYear = document.getElementById("resultYear");

    _resultYear.innerText = newAgenYear;

    var _resultMonth = document.getElementById("resultMonth");

    _resultMonth.innerText = newAgeMonth;
  }
}

console.groupEnd();