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
  const inputTodayYear = document.getElementById("yearToday");
  const valueTodayYear = inputTodayYear.value;
  const inputBirthdayYear = document.getElementById("yearBirthday");
  const valueBirthdayYear = inputBirthdayYear.value;
  // M O N T H
  const inputTodayMonth = document.getElementById("monthToday");
  const valueTodayMonth = inputTodayMonth.value;
  const inputBirthdayMonth = document.getElementById("monthBirthday");
  const valueBirthdayMonth = inputBirthdayMonth.value;
  // D A Y
  const inputTodayDay = document.getElementById("dayToday");
  const valueTodayDay = inputTodayDay.value;
  const inputBirthdayDay = document.getElementById("dayBirthday");
  const valueBirthdayDay = inputBirthdayDay.value;

  const ageYear = year(valueTodayYear, valueBirthdayYear);
  const ageMonth = month(valueTodayMonth, valueBirthdayMonth);
  const ageDay = day(valueTodayDay, valueBirthdayDay);

  const resultYear = document.getElementById("resultYear");
  resultYear.innerText = ageYear;
  const resultMonth = document.getElementById("resultMonth");
  resultMonth.innerText = ageMonth;
  const resultDay = document.getElementById("resultDay");
  resultDay.innerText = ageDay;

  if (ageMonth < 0) {
    const newAgenYear = ageYear - (1);
    const newAgeMonth = (12)+ageMonth;
    console.log("Se cumple condición para los que aún no cumplen años.");

    const resultYear = document.getElementById("resultYear");
    resultYear.innerText = newAgenYear;  
    const resultMonth = document.getElementById("resultMonth");
    resultMonth.innerText = newAgeMonth;  
  }
}
console.groupEnd();