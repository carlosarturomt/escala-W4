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
  let meses = new makeArray(12);
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
  meses[11] = "Deciembre";

  //arreglo de los dias
  let dias_de_la_semana = new makeArray(7);
  dias_de_la_semana[0] = "Domingo";
  dias_de_la_semana[1] = "Lunes";
  dias_de_la_semana[2] = "Martes";
  dias_de_la_semana[3] = "Miércoles";
  dias_de_la_semana[4] = "Jueves";
  dias_de_la_semana[5] = "Viernes";
  dias_de_la_semana[6] = "Sábado";

  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getYear();
  let dia = today.getDay();
  if (year < 1000) {
    year += 1900;
  }

  const yearToday = document.getElementById("yearToday");
  yearToday.innerText = year;
  const monthToday = document.getElementById("monthToday");
  monthToday.innerText = meses[month];
  const dayToday = document.getElementById("dayToday");
  dayToday.innerText = dias_de_la_semana[dia];

  alert(
    "Hoy es " +
      dias_de_la_semana[dia] +
      ", " +
      day +
      " de " +
      meses[month] +
      " del " +
      year
  );
}
console.groupEnd();
// ..........................
console.group("Calcular Edad");
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

  const ageYear = valueTodayYear - valueBirthdayYear;
  const ageMonth = valueTodayMonth - valueBirthdayMonth;
  const ageDay = 31 - parseInt(valueBirthdayDay) + parseInt(valueTodayDay);

  const resultYear = document.getElementById("resultYear");
  resultYear.innerText = ageYear;
  const resultMonth = document.getElementById("resultMonth");
  resultMonth.innerText = ageMonth;
  const resultDay = document.getElementById("resultDay");
  resultDay.innerText = ageDay;

  if (ageMonth < 0) {
    const newAgeYear = ageYear - 1;
    const newAgeMonth = 12 + ageMonth;
    // console.log("Se cumple condición para los que aún no cumplen años.");
    const resultYear = document.getElementById("resultYear");
    resultYear.innerText = newAgeYear;
    const resultMonth = document.getElementById("resultMonth");
    resultMonth.innerText = newAgeMonth;
  } else {
    // console.log("Cumplió años este año.");
  }
  if (ageDay > 31) {
    const newAgeDay = 31 + parseInt(valueBirthdayDay) - parseInt(valueTodayDay);
    const resultDay = document.getElementById("resultDay");
    resultDay.innerText = newAgeDay;
    // console.log("Se cumple condición para día de nacido.");
  } 
  if (valueTodayDay >= valueBirthdayDay) {
    const ageDay = parseInt(valueTodayDay) - parseInt(valueBirthdayDay);
    const resultDay = document.getElementById("resultDay");
    resultDay.innerText = ageDay;  
    // console.log('Hoy o bien hace unos días ha cumplido otro mes.')
  }
  if ((valueTodayMonth == valueBirthdayMonth)&&(valueTodayDay < valueBirthdayDay)){
    const ageYearAlter = ageYear - 1;
    const newAgeMonth = 11;
    const ageDay = 31 - parseInt(valueBirthdayDay) + parseInt(valueTodayDay);
    const resultYear = document.getElementById("resultYear");
    resultYear.innerText = ageYearAlter;  
    const resultMonth = document.getElementById("resultMonth");
    resultMonth.innerText = newAgeMonth;
    const resultDay = document.getElementById("resultDay");
    resultDay.innerText = ageDay;  
    // console.log('Este mes cumple años.')
  }
  return [ageYear,ageMonth];
}
console.groupEnd();