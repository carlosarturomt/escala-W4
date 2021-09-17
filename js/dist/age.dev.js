"use strict";

console.group("Calcular Fecha de Hoy");

function makeArray(n) {
  this.length = n;

  for (i = 1; i <= n; i++) {
    this[i] = 0;
  }

  return this;
}

function calculateToday() {
  //arreglo de los meses
  var meses = new makeArray(12);
  meses[0] = "Enero";
  meses[1] = "Febrero";
  meses[2] = "Marzo";
  meses[3] = "Abril";
  meses[4] = "Mayo";
  meses[5] = "Junio";
  meses[6] = "Julio";
  meses[7] = "Agosto";
  meses[8] = "Septiembre";
  meses[9] = "Octubre";
  meses[10] = "Noviembre";
  meses[11] = "Deciembre"; //arreglo de los dias

  var dias_de_la_semana = new makeArray(7);
  dias_de_la_semana[0] = "Domingo";
  dias_de_la_semana[1] = "Lunes";
  dias_de_la_semana[2] = "Martes";
  dias_de_la_semana[3] = "Miércoles";
  dias_de_la_semana[4] = "Jueves";
  dias_de_la_semana[5] = "Viernes";
  dias_de_la_semana[6] = "Sábado";
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth();
  var year = today.getYear();
  var dia = today.getDay();

  if (year < 1000) {
    year += 1900;
  }

  var yearToday = document.getElementById("yearToday");
  yearToday.innerText = year;
  var monthToday = document.getElementById("monthToday");
  monthToday.innerText = meses[month];
  var dayToday = document.getElementById("dayToday");
  dayToday.innerText = dias_de_la_semana[dia];
  alert("Hoy es " + dias_de_la_semana[dia] + ", " + day + " de " + meses[month] + " del " + year);
}

console.groupEnd(); // ..........................

console.group("Calcular Edad");

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
  var ageYear = valueTodayYear - valueBirthdayYear;
  var ageMonth = valueTodayMonth - valueBirthdayMonth;
  var ageDay = 31 - parseInt(valueBirthdayDay) + parseInt(valueTodayDay);
  var resultYear = document.getElementById("resultYear");
  resultYear.innerText = ageYear;
  var resultMonth = document.getElementById("resultMonth");
  resultMonth.innerText = ageMonth;
  var resultDay = document.getElementById("resultDay");
  resultDay.innerText = ageDay;

  if (ageMonth < 0) {
    var newAgeYear = ageYear - 1;
    var newAgeMonth = 12 + ageMonth;
    console.log("Se cumple condición para los que aún no cumplen año.");

    var _resultYear = document.getElementById("resultYear");

    _resultYear.innerText = newAgeYear;

    var _resultMonth = document.getElementById("resultMonth");

    _resultMonth.innerText = newAgeMonth;
  } else {
    console.log("Cumplió años este año.");
  }

  if (ageDay > 31) {
    var newAgeDay = 31 + parseInt(valueBirthdayDay) - parseInt(valueTodayDay);
    console.log("Se cumple condición para día de nacido.");

    var _resultDay = document.getElementById("resultDay");

    _resultDay.innerText = newAgeDay;
  }

  if (valueTodayDay >= valueBirthdayDay) {
    var _ageDay = parseInt(valueTodayDay) - parseInt(valueBirthdayDay);

    var _resultDay2 = document.getElementById("resultDay");

    _resultDay2.innerText = _ageDay;
    console.log('Hoy o bien hace unos días ha cumplido otro mes.');
  }

  if (valueTodayMonth == valueBirthdayMonth && valueTodayDay < valueBirthdayDay) {
    var ageYearAlter = ageYear - 1;
    var _newAgeMonth = 11;

    var _ageDay2 = 31 - parseInt(valueBirthdayDay) + parseInt(valueTodayDay);

    var _resultYear2 = document.getElementById("resultYear");

    _resultYear2.innerText = ageYearAlter;

    var _resultMonth2 = document.getElementById("resultMonth");

    _resultMonth2.innerText = _newAgeMonth;

    var _resultDay3 = document.getElementById("resultDay");

    _resultDay3.innerText = _ageDay2;
    console.log('Este mes cumple años.');
  }
}

console.groupEnd();