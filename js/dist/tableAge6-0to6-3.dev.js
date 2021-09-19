"use strict";

console.group("Calcular Puntuaciones Escalares 6/7 años");

function calculateSumScores() {
  var inputDC = document.getElementById("inputDC");
  var valueinputDC = inputDC.value;
  var inputSE = document.getElementById("inputSE");
  var valueinputSE = inputSE.value;
  var inputRD = document.getElementById("inputRD");
  var valueinputRD = inputRD.value;
  var inputCD = document.getElementById("inputCD");
  var valueinputCD = inputCD.value;
  var inputCL = document.getElementById("inputCL");
  var valueinputCL = inputCL.value;
  var inputVB = document.getElementById("inputVB");
  var valueinputVB = inputVB.value;
  var inputNL = document.getElementById("inputNL");
  var valueinputNL = inputNL.value;
  var inputMT = document.getElementById("inputMT");
  var valueinputMT = inputMT.value;
  var inputCM = document.getElementById("inputCM");
  var valueinputCM = inputCM.value;
  var inputBS = document.getElementById("inputBS");
  var valueinputBS = inputBS.value;
  var inputFI = document.getElementById("inputFI");
  var valueinputFI = inputFI.value;
  var inputRG = document.getElementById("inputRG");
  var valueinputRG = inputRG.value;
  var inputIN = document.getElementById("inputIN");
  var valueinputIN = inputIN.value;
  var inputAR = document.getElementById("inputAR");
  var valueinputAR = inputAR.value;
  var inputPC = document.getElementById("inputPC");
  var valueinputPC = inputPC.value;

  if (calculateYear() == "6,0" || calculateYear() == "6,1" || calculateYear() == "6,2" || calculateYear() == "6,3") {
    console.log("Cumple el rango de edad de 6:0 a 6:3 años." + "\r\n" + "Teniendo " + calculateYear() + " años."); //..........D I S E Ñ O - C O N - C U B O S..........//

    console.log("La Puntuación Natural de DC es: " + valueinputDC);

    switch (valueinputDC) {
      case "0":
        var punctuationDC_0_0 = document.getElementById("punctuationDC_0");
        punctuationDC_0_0.innerText = 1;
        var punctuationDC_1_0 = document.getElementById("punctuationDC_1");
        punctuationDC_1_0.innerText = 1;
        var punctuationDC_2_0 = document.getElementById("punctuationDC_2");
        punctuationDC_2_0.innerText = 1;
        console.log("La Puntuación Escalar de DC es: 1");
        break;

      case "1":
        var punctuationDC_0_1 = document.getElementById("punctuationDC_0");
        punctuationDC_0_1.innerText = 2;
        var punctuationDC_1_1 = document.getElementById("punctuationDC_1");
        punctuationDC_1_1.innerText = 2;
        var punctuationDC_2_1 = document.getElementById("punctuationDC_2");
        punctuationDC_2_1.innerText = 2;
        console.log("La Puntuación Escalar de DC es: 2");
        break;

      case "2":
        var punctuationDC_0_2 = document.getElementById("punctuationDC_0");
        punctuationDC_0_2.innerText = 3;
        var punctuationDC_1_2 = document.getElementById("punctuationDC_1");
        punctuationDC_1_2.innerText = 3;
        var punctuationDC_2_2 = document.getElementById("punctuationDC_2");
        punctuationDC_2_2.innerText = 3;
        console.log("La Puntuación Escalar de DC es: 3");
        break;

      case "3":
        var punctuationDC_0_3 = document.getElementById("punctuationDC_0");
        punctuationDC_0_3.innerText = 4;
        var punctuationDC_1_3 = document.getElementById("punctuationDC_1");
        punctuationDC_1_3.innerText = 4;
        var punctuationDC_2_3 = document.getElementById("punctuationDC_2");
        punctuationDC_2_3.innerText = 4;
        console.log("La Puntuación Escalar de DC es: 4");
        break;

      case "4":
        var punctuationDC_0_4 = document.getElementById("punctuationDC_0");
        punctuationDC_0_4.innerText = 5;
        var punctuationDC_1_4 = document.getElementById("punctuationDC_1");
        punctuationDC_1_4.innerText = 5;
        var punctuationDC_2_4 = document.getElementById("punctuationDC_2");
        punctuationDC_2_4.innerText = 5;
        console.log("La Puntuación Escalar de DC es: 5");
        break;

      case "5":
        var punctuationDC_0_5 = document.getElementById("punctuationDC_0");
        punctuationDC_0_5.innerText = 6;
        var punctuationDC_1_5 = document.getElementById("punctuationDC_1");
        punctuationDC_1_5.innerText = 6;
        var punctuationDC_2_5 = document.getElementById("punctuationDC_2");
        punctuationDC_2_5.innerText = 6;
        console.log("La Puntuación Escalar de DC es: 6");
        break;

      case "6":
      case "7":
        var punctuationDC_0_6 = document.getElementById("punctuationDC_0");
        punctuationDC_0_6.innerText = 7;
        var punctuationDC_1_6 = document.getElementById("punctuationDC_1");
        punctuationDC_1_6.innerText = 7;
        var punctuationDC_2_6 = document.getElementById("punctuationDC_2");
        punctuationDC_2_6.innerText = 7;
        console.log("La Puntuación Escalar de DC es: 7");
        break;

      case "8":
      case "9":
      case "10":
        var punctuationDC_0_8 = document.getElementById("punctuationDC_0");
        punctuationDC_0_8.innerText = 8;
        var punctuationDC_1_8 = document.getElementById("punctuationDC_1");
        punctuationDC_1_8.innerText = 8;
        var punctuationDC_2_8 = document.getElementById("punctuationDC_2");
        punctuationDC_2_8.innerText = 8;
        console.log("La Puntuación Escalar de DC es: 8");
        break;

      case "11":
      case "12":
        var punctuationDC_0_11 = document.getElementById("punctuationDC_0");
        punctuationDC_0_11.innerText = 9;
        var punctuationDC_1_11 = document.getElementById("punctuationDC_1");
        punctuationDC_1_11.innerText = 9;
        var punctuationDC_2_11 = document.getElementById("punctuationDC_2");
        punctuationDC_2_11.innerText = 9;
        console.log("La Puntuación Escalar de DC es: 9");
        break;

      case "13":
      case "14":
        var punctuationDC_0_13 = document.getElementById("punctuationDC_0");
        punctuationDC_0_13.innerText = 10;
        var punctuationDC_1_13 = document.getElementById("punctuationDC_1");
        punctuationDC_1_13.innerText = 10;
        var punctuationDC_2_13 = document.getElementById("punctuationDC_2");
        punctuationDC_2_13.innerText = 10;
        console.log("La Puntuación Escalar de DC es: 10");
        break;

      case "15":
      case "16":
        var punctuationDC_0_15 = document.getElementById("punctuationDC_0");
        punctuationDC_0_15.innerText = 11;
        var punctuationDC_1_15 = document.getElementById("punctuationDC_1");
        punctuationDC_1_15.innerText = 11;
        var punctuationDC_2_15 = document.getElementById("punctuationDC_2");
        punctuationDC_2_15.innerText = 11;
        console.log("La Puntuación Escalar de DC es: 11");
        break;

      case "17":
      case "18":
      case "19":
        var punctuationDC_0_17 = document.getElementById("punctuationDC_0");
        punctuationDC_0_17.innerText = 12;
        var punctuationDC_1_17 = document.getElementById("punctuationDC_1");
        punctuationDC_1_17.innerText = 12;
        var punctuationDC_2_17 = document.getElementById("punctuationDC_2");
        punctuationDC_2_17.innerText = 12;
        console.log("La Puntuación Escalar de DC es: 12");
        break;

      case "20":
      case "21":
      case "22":
      case "23":
        var punctuationDC_0_20 = document.getElementById("punctuationDC_0");
        punctuationDC_0_20.innerText = 13;
        var punctuationDC_1_20 = document.getElementById("punctuationDC_1");
        punctuationDC_1_20.innerText = 13;
        var punctuationDC_2_20 = document.getElementById("punctuationDC_2");
        punctuationDC_2_20.innerText = 13;
        console.log("La Puntuación Escalar de DC es: 13");
        break;

      case "24":
      case "25":
      case "26":
      case "27":
      case "28":
        var punctuationDC_0_24 = document.getElementById("punctuationDC_0");
        punctuationDC_0_24.innerText = 14;
        var punctuationDC_1_24 = document.getElementById("punctuationDC_1");
        punctuationDC_1_24.innerText = 14;
        var punctuationDC_2_24 = document.getElementById("punctuationDC_2");
        punctuationDC_2_24.innerText = 14;
        console.log("La Puntuación Escalar de DC es: 14");
        break;

      case "29":
      case "30":
      case "31":
      case "32":
      case "33":
        var punctuationDC_0_29 = document.getElementById("punctuationDC_0");
        punctuationDC_0_29.innerText = 15;
        var punctuationDC_1_29 = document.getElementById("punctuationDC_1");
        punctuationDC_1_29.innerText = 15;
        var punctuationDC_2_29 = document.getElementById("punctuationDC_2");
        punctuationDC_2_29.innerText = 15;
        console.log("La Puntuación Escalar de DC es: 15");
        break;

      case "34":
      case "35":
      case "36":
      case "37":
      case "38":
      case "39":
        var punctuationDC_0_34 = document.getElementById("punctuationDC_0");
        punctuationDC_0_34.innerText = 16;
        var punctuationDC_1_34 = document.getElementById("punctuationDC_1");
        punctuationDC_1_34.innerText = 16;
        var punctuationDC_2_34 = document.getElementById("punctuationDC_2");
        punctuationDC_2_34.innerText = 16;
        console.log("La Puntuación Escalar de DC es: 16");
        break;

      case "40":
      case "41":
      case "42":
      case "43":
      case "44":
      case "45":
        var punctuationDC_0_40 = document.getElementById("punctuationDC_0");
        punctuationDC_0_40.innerText = 17;
        var punctuationDC_1_40 = document.getElementById("punctuationDC_1");
        punctuationDC_1_40.innerText = 17;
        var punctuationDC_2_40 = document.getElementById("punctuationDC_2");
        punctuationDC_2_40.innerText = 17;
        console.log("La Puntuación Escalar de DC es: 17");
        break;

      case "46":
      case "47":
      case "48":
      case "49":
      case "50":
      case "51":
      case "52":
        var punctuationDC_0_46 = document.getElementById("punctuationDC_0");
        punctuationDC_0_46.innerText = 18;
        var punctuationDC_1_46 = document.getElementById("punctuationDC_1");
        punctuationDC_1_46.innerText = 18;
        var punctuationDC_2_46 = document.getElementById("punctuationDC_2");
        punctuationDC_2_46.innerText = 18;
        console.log("La Puntuación Escalar de DC es: 18");
        break;

      case "53":
      case "54":
      case "55":
      case "56":
      case "57":
      case "58":
      case "59":
      case "60":
      case "61":
      case "62":
      case "63":
      case "64":
      case "65":
      case "66":
      case "67":
      case "68":
        var punctuationDC_0_53 = document.getElementById("punctuationDC_0");
        punctuationDC_0_53.innerText = 19;
        var punctuationDC_1_53 = document.getElementById("punctuationDC_1");
        punctuationDC_1_53.innerText = 19;
        var punctuationDC_2_53 = document.getElementById("punctuationDC_2");
        punctuationDC_2_53.innerText = 19;
        console.log("La Puntuación Escalar de DC es: 19");
        break;

      default:
        alert("La Puntuación de DC no corresponde a ninguna equivalencia, verifica lo que has colocado.");
        break;
    } //..........S E M E J A N Z A S..........//


    console.log("La Puntuación Natural de SE es: " + valueinputSE);

    switch (valueinputSE) {
      case "":
        var punctuationSE_0_0 = document.getElementById("punctuationSE_0");
        punctuationSE_0_0.innerText = 1;
        var punctuationSE_1_0 = document.getElementById("punctuationSE_1");
        punctuationSE_1_0.innerText = 1;
        var punctuationSE_2_0 = document.getElementById("punctuationSE_2");
        punctuationSE_2_0.innerText = 1;
        console.log("La Puntuación Escalar de SE es: 1");
        break;

      case "0":
        var punctuationSE_0_1 = document.getElementById("punctuationSE_0");
        punctuationSE_0_1.innerText = 2;
        var punctuationSE_1_1 = document.getElementById("punctuationSE_1");
        punctuationSE_1_1.innerText = 2;
        var punctuationSE_2_1 = document.getElementById("punctuationSE_2");
        punctuationSE_2_1.innerText = 2;
        console.log("La Puntuación Escalar de SE es: 2");
        break;

      case "1":
        var punctuationSE_0_2 = document.getElementById("punctuationSE_0");
        punctuationSE_0_2.innerText = 3;
        var punctuationSE_1_2 = document.getElementById("punctuationSE_1");
        punctuationSE_1_2.innerText = 3;
        var punctuationSE_2_2 = document.getElementById("punctuationSE_2");
        punctuationSE_2_2.innerText = 3;
        console.log("La Puntuación Escalar de SE es: 3");
        break;

      case "2":
        var punctuationSE_0_3 = document.getElementById("punctuationSE_0");
        punctuationSE_0_3.innerText = 4;
        var punctuationSE_1_3 = document.getElementById("punctuationSE_1");
        punctuationSE_1_3.innerText = 4;
        var punctuationSE_2_3 = document.getElementById("punctuationSE_2");
        punctuationSE_2_3.innerText = 4;
        console.log("La Puntuación Escalar de SE es: 4");
        break;

      case "3":
        var punctuationSE_0_4 = document.getElementById("punctuationSE_0");
        punctuationSE_0_4.innerText = 5;
        var punctuationSE_1_4 = document.getElementById("punctuationSE_1");
        punctuationSE_1_4.innerText = 5;
        var punctuationSE_2_4 = document.getElementById("punctuationSE_2");
        punctuationSE_2_4.innerText = 5;
        console.log("La Puntuación Escalar de SE es: 5");
        break;

      case "4":
        var punctuationSE_0_5 = document.getElementById("punctuationSE_0");
        punctuationSE_0_5.innerText = 6;
        var punctuationSE_1_5 = document.getElementById("punctuationSE_1");
        punctuationSE_1_5.innerText = 6;
        var punctuationSE_2_5 = document.getElementById("punctuationSE_2");
        punctuationSE_2_5.innerText = 6;
        console.log("La Puntuación Escalar de SE es: 6");
        break;

      case "5":
        var punctuationSE_0_6 = document.getElementById("punctuationSE_0");
        punctuationSE_0_6.innerText = 7;
        var punctuationSE_1_6 = document.getElementById("punctuationSE_1");
        punctuationSE_1_6.innerText = 7;
        var punctuationSE_2_6 = document.getElementById("punctuationSE_2");
        punctuationSE_2_6.innerText = 7;
        console.log("La Puntuación Escalar de SE es: 7");
        break;

      case "6":
        var punctuationSE_0_8 = document.getElementById("punctuationSE_0");
        punctuationSE_0_8.innerText = 8;
        var punctuationSE_1_8 = document.getElementById("punctuationSE_1");
        punctuationSE_1_8.innerText = 8;
        var punctuationSE_2_8 = document.getElementById("punctuationSE_2");
        punctuationSE_2_8.innerText = 8;
        console.log("La Puntuación Escalar de SE es: 8");
        break;

      case "7":
        var punctuationSE_0_11 = document.getElementById("punctuationSE_0");
        punctuationSE_0_11.innerText = 9;
        var punctuationSE_1_11 = document.getElementById("punctuationSE_1");
        punctuationSE_1_11.innerText = 9;
        var punctuationSE_2_11 = document.getElementById("punctuationSE_2");
        punctuationSE_2_11.innerText = 9;
        console.log("La Puntuación Escalar de SE es: 9");
        break;

      case "8":
        var punctuationSE_0_13 = document.getElementById("punctuationSE_0");
        punctuationSE_0_13.innerText = 10;
        var punctuationSE_1_13 = document.getElementById("punctuationSE_1");
        punctuationSE_1_13.innerText = 10;
        var punctuationSE_2_13 = document.getElementById("punctuationSE_2");
        punctuationSE_2_13.innerText = 10;
        console.log("La Puntuación Escalar de SE es: 10");
        break;

      case "9":
      case "10":
        var punctuationSE_0_15 = document.getElementById("punctuationSE_0");
        punctuationSE_0_15.innerText = 11;
        var punctuationSE_1_15 = document.getElementById("punctuationSE_1");
        punctuationSE_1_15.innerText = 11;
        var punctuationSE_2_15 = document.getElementById("punctuationSE_2");
        punctuationSE_2_15.innerText = 11;
        console.log("La Puntuación Escalar de SE es: 11");
        break;

      case "11":
      case "12":
        var punctuationSE_0_17 = document.getElementById("punctuationSE_0");
        punctuationSE_0_17.innerText = 12;
        var punctuationSE_1_17 = document.getElementById("punctuationSE_1");
        punctuationSE_1_17.innerText = 12;
        var punctuationSE_2_17 = document.getElementById("punctuationSE_2");
        punctuationSE_2_17.innerText = 12;
        console.log("La Puntuación Escalar de SE es: 12");
        break;

      case "13":
      case "14":
        var punctuationSE_0_20 = document.getElementById("punctuationSE_0");
        punctuationSE_0_20.innerText = 13;
        var punctuationSE_1_20 = document.getElementById("punctuationSE_1");
        punctuationSE_1_20.innerText = 13;
        var punctuationSE_2_20 = document.getElementById("punctuationSE_2");
        punctuationSE_2_20.innerText = 13;
        console.log("La Puntuación Escalar de SE es: 13");
        break;

      case "15":
      case "16":
        var punctuationSE_0_24 = document.getElementById("punctuationSE_0");
        punctuationSE_0_24.innerText = 14;
        var punctuationSE_1_24 = document.getElementById("punctuationSE_1");
        punctuationSE_1_24.innerText = 14;
        var punctuationSE_2_24 = document.getElementById("punctuationSE_2");
        punctuationSE_2_24.innerText = 14;
        console.log("La Puntuación Escalar de SE es: 14");
        break;

      case "17":
      case "18":
        var punctuationSE_0_29 = document.getElementById("punctuationSE_0");
        punctuationSE_0_29.innerText = 15;
        var punctuationSE_1_29 = document.getElementById("punctuationSE_1");
        punctuationSE_1_29.innerText = 15;
        var punctuationSE_2_29 = document.getElementById("punctuationSE_2");
        punctuationSE_2_29.innerText = 15;
        console.log("La Puntuación Escalar de SE es: 15");
        break;

      case "19":
      case "20":
        var punctuationSE_0_34 = document.getElementById("punctuationSE_0");
        punctuationSE_0_34.innerText = 16;
        var punctuationSE_1_34 = document.getElementById("punctuationSE_1");
        punctuationSE_1_34.innerText = 16;
        var punctuationSE_2_34 = document.getElementById("punctuationSE_2");
        punctuationSE_2_34.innerText = 16;
        console.log("La Puntuación Escalar de SE es: 16");
        break;

      case "21":
      case "22":
        var punctuationSE_0_40 = document.getElementById("punctuationSE_0");
        punctuationSE_0_40.innerText = 17;
        var punctuationSE_1_40 = document.getElementById("punctuationSE_1");
        punctuationSE_1_40.innerText = 17;
        var punctuationSE_2_40 = document.getElementById("punctuationSE_2");
        punctuationSE_2_40.innerText = 17;
        console.log("La Puntuación Escalar de SE es: 17");
        break;

      case "23":
      case "24":
        var punctuationSE_0_46 = document.getElementById("punctuationSE_0");
        punctuationSE_0_46.innerText = 18;
        var punctuationSE_1_46 = document.getElementById("punctuationSE_1");
        punctuationSE_1_46.innerText = 18;
        var punctuationSE_2_46 = document.getElementById("punctuationSE_2");
        punctuationSE_2_46.innerText = 18;
        console.log("La Puntuación Escalar de SE es: 18");
        break;

      case "25":
      case "26":
      case "27":
      case "28":
      case "29":
      case "30":
      case "31":
      case "32":
      case "33":
      case "34":
      case "35":
      case "36":
      case "37":
      case "38":
      case "39":
      case "40":
      case "41":
      case "42":
      case "43":
      case "44":
        var punctuationSE_0_53 = document.getElementById("punctuationSE_0");
        punctuationSE_0_53.innerText = 19;
        var punctuationSE_1_53 = document.getElementById("punctuationSE_1");
        punctuationSE_1_53.innerText = 19;
        var punctuationSE_2_53 = document.getElementById("punctuationSE_2");
        punctuationSE_2_53.innerText = 19;
        console.log("La Puntuación Escalar de SE es: 19");
        break;

      default:
        alert("La Puntuación de SE no corresponde a ninguna equivalencia, verifica lo que has colocado.");
        break;
    } //..........R E T E N C I O N - D E - D I G I T O S..........//


    console.log("La Puntuación Natural de RD es: " + valueinputRD);

    switch (valueinputRD) {
      case "0":
      case "1":
      case "2":
        var punctuationRD_0_0 = document.getElementById("punctuationRD_0");
        punctuationRD_0_0.innerText = 1;
        var punctuationRD_1_0 = document.getElementById("punctuationRD_1");
        punctuationRD_1_0.innerText = 1;
        var punctuationRD_2_0 = document.getElementById("punctuationRD_2");
        punctuationRD_2_0.innerText = 1;
        console.log("La Puntuación Escalar de RD es: 1");
        break;

      case "3":
        var punctuationRD_0_1 = document.getElementById("punctuationRD_0");
        punctuationRD_0_1.innerText = 2;
        var punctuationRD_1_1 = document.getElementById("punctuationRD_1");
        punctuationRD_1_1.innerText = 2;
        var punctuationRD_2_1 = document.getElementById("punctuationRD_2");
        punctuationRD_2_1.innerText = 2;
        console.log("La Puntuación Escalar de RD es: 2");
        break;

      case "4":
        var punctuationRD_0_2 = document.getElementById("punctuationRD_0");
        punctuationRD_0_2.innerText = 3;
        var punctuationRD_1_2 = document.getElementById("punctuationRD_1");
        punctuationRD_1_2.innerText = 3;
        var punctuationRD_2_2 = document.getElementById("punctuationRD_2");
        punctuationRD_2_2.innerText = 3;
        console.log("La Puntuación Escalar de RD es: 3");
        break;

      case "4.5":
        var punctuationRD_0_3 = document.getElementById("punctuationRD_0");
        punctuationRD_0_3.innerText = 4;
        var punctuationRD_1_3 = document.getElementById("punctuationRD_1");
        punctuationRD_1_3.innerText = 4;
        var punctuationRD_2_3 = document.getElementById("punctuationRD_2");
        punctuationRD_2_3.innerText = 4;
        console.log("La Puntuación Escalar de RD es: 4");
        break;

      case "5":
        var punctuationRD_0_4 = document.getElementById("punctuationRD_0");
        punctuationRD_0_4.innerText = 5;
        var punctuationRD_1_4 = document.getElementById("punctuationRD_1");
        punctuationRD_1_4.innerText = 5;
        var punctuationRD_2_4 = document.getElementById("punctuationRD_2");
        punctuationRD_2_4.innerText = 5;
        console.log("La Puntuación Escalar de RD es: 5");
        break;

      case "6":
        var punctuationRD_0_5 = document.getElementById("punctuationRD_0");
        punctuationRD_0_5.innerText = 6;
        var punctuationRD_1_5 = document.getElementById("punctuationRD_1");
        punctuationRD_1_5.innerText = 6;
        var punctuationRD_2_5 = document.getElementById("punctuationRD_2");
        punctuationRD_2_5.innerText = 6;
        console.log("La Puntuación Escalar de RD es: 6");
        break;

      case "7":
        var punctuationRD_0_6 = document.getElementById("punctuationRD_0");
        punctuationRD_0_6.innerText = 7;
        var punctuationRD_1_6 = document.getElementById("punctuationRD_1");
        punctuationRD_1_6.innerText = 7;
        var punctuationRD_2_6 = document.getElementById("punctuationRD_2");
        punctuationRD_2_6.innerText = 7;
        console.log("La Puntuación Escalar de RD es: 7");
        break;

      case "8":
      case "9":
        var punctuationRD_0_8 = document.getElementById("punctuationRD_0");
        punctuationRD_0_8.innerText = 8;
        var punctuationRD_1_8 = document.getElementById("punctuationRD_1");
        punctuationRD_1_8.innerText = 8;
        var punctuationRD_2_8 = document.getElementById("punctuationRD_2");
        punctuationRD_2_8.innerText = 8;
        console.log("La Puntuación Escalar de RD es: 8");
        break;

      case "10":
        var punctuationRD_0_11 = document.getElementById("punctuationRD_0");
        punctuationRD_0_11.innerText = 9;
        var punctuationRD_1_11 = document.getElementById("punctuationRD_1");
        punctuationRD_1_11.innerText = 9;
        var punctuationRD_2_11 = document.getElementById("punctuationRD_2");
        punctuationRD_2_11.innerText = 9;
        console.log("La Puntuación Escalar de RD es: 9");
        break;

      case "11":
        var punctuationRD_0_13 = document.getElementById("punctuationRD_0");
        punctuationRD_0_13.innerText = 10;
        var punctuationRD_1_13 = document.getElementById("punctuationRD_1");
        punctuationRD_1_13.innerText = 10;
        var punctuationRD_2_13 = document.getElementById("punctuationRD_2");
        punctuationRD_2_13.innerText = 10;
        console.log("La Puntuación Escalar de RD es: 10");
        break;

      case "12":
        var punctuationRD_0_15 = document.getElementById("punctuationRD_0");
        punctuationRD_0_15.innerText = 11;
        var punctuationRD_1_15 = document.getElementById("punctuationRD_1");
        punctuationRD_1_15.innerText = 11;
        var punctuationRD_2_15 = document.getElementById("punctuationRD_2");
        punctuationRD_2_15.innerText = 11;
        console.log("La Puntuación Escalar de RD es: 11");
        break;

      case "13":
        var punctuationRD_0_17 = document.getElementById("punctuationRD_0");
        punctuationRD_0_17.innerText = 12;
        var punctuationRD_1_17 = document.getElementById("punctuationRD_1");
        punctuationRD_1_17.innerText = 12;
        var punctuationRD_2_17 = document.getElementById("punctuationRD_2");
        punctuationRD_2_17.innerText = 12;
        console.log("La Puntuación Escalar de RD es: 12");
        break;

      case "14":
        var punctuationRD_0_20 = document.getElementById("punctuationRD_0");
        punctuationRD_0_20.innerText = 13;
        var punctuationRD_1_20 = document.getElementById("punctuationRD_1");
        punctuationRD_1_20.innerText = 13;
        var punctuationRD_2_20 = document.getElementById("punctuationRD_2");
        punctuationRD_2_20.innerText = 13;
        console.log("La Puntuación Escalar de RD es: 13");
        break;

      case "15":
        var punctuationRD_0_24 = document.getElementById("punctuationRD_0");
        punctuationRD_0_24.innerText = 14;
        var punctuationRD_1_24 = document.getElementById("punctuationRD_1");
        punctuationRD_1_24.innerText = 14;
        var punctuationRD_2_24 = document.getElementById("punctuationRD_2");
        punctuationRD_2_24.innerText = 14;
        console.log("La Puntuación Escalar de RD es: 14");
        break;

      case "15.5":
        var punctuationRD_0_29 = document.getElementById("punctuationRD_0");
        punctuationRD_0_29.innerText = 15;
        var punctuationRD_1_29 = document.getElementById("punctuationRD_1");
        punctuationRD_1_29.innerText = 15;
        var punctuationRD_2_29 = document.getElementById("punctuationRD_2");
        punctuationRD_2_29.innerText = 15;
        console.log("La Puntuación Escalar de RD es: 15");
        break;

      case "16":
        var punctuationRD_0_34 = document.getElementById("punctuationRD_0");
        punctuationRD_0_34.innerText = 16;
        var punctuationRD_1_34 = document.getElementById("punctuationRD_1");
        punctuationRD_1_34.innerText = 16;
        var punctuationRD_2_34 = document.getElementById("punctuationRD_2");
        punctuationRD_2_34.innerText = 16;
        console.log("La Puntuación Escalar de RD es: 16");
        break;

      case "17":
        var punctuationRD_0_40 = document.getElementById("punctuationRD_0");
        punctuationRD_0_40.innerText = 17;
        var punctuationRD_1_40 = document.getElementById("punctuationRD_1");
        punctuationRD_1_40.innerText = 17;
        var punctuationRD_2_40 = document.getElementById("punctuationRD_2");
        punctuationRD_2_40.innerText = 17;
        console.log("La Puntuación Escalar de RD es: 17");
        break;

      case "18":
        var punctuationRD_0_46 = document.getElementById("punctuationRD_0");
        punctuationRD_0_46.innerText = 18;
        var punctuationRD_1_46 = document.getElementById("punctuationRD_1");
        punctuationRD_1_46.innerText = 18;
        var punctuationRD_2_46 = document.getElementById("punctuationRD_2");
        punctuationRD_2_46.innerText = 18;
        console.log("La Puntuación Escalar de RD es: 18");
        break;

      case "19":
      case "20":
      case "21":
      case "22":
      case "23":
      case "24":
      case "25":
      case "26":
      case "27":
      case "28":
      case "29":
      case "30":
      case "31":
      case "32":
        var punctuationRD_0_53 = document.getElementById("punctuationRD_0");
        punctuationRD_0_53.innerText = 19;
        var punctuationRD_1_53 = document.getElementById("punctuationRD_1");
        punctuationRD_1_53.innerText = 19;
        var punctuationRD_2_53 = document.getElementById("punctuationRD_2");
        punctuationRD_2_53.innerText = 19;
        console.log("La Puntuación Escalar de RD es: 19");
        break;

      default:
        alert("La Puntuación de RD no corresponde a ninguna equivalencia, verifica lo que has colocado.");
        break;
    } //..........C O N C E P T O - C O N - D I B U J O S..........//


    console.log("La Puntuación Natural de CD es: " + valueinputCD);

    switch (valueinputCD) {
      case "0":
        var punctuationCD_0_0 = document.getElementById("punctuationCD_0");
        punctuationCD_0_0.innerText = 1;
        var punctuationCD_1_0 = document.getElementById("punctuationCD_1");
        punctuationCD_1_0.innerText = 1;
        var punctuationCD_2_0 = document.getElementById("punctuationCD_2");
        punctuationCD_2_0.innerText = 1;
        console.log("La Puntuación Escalar de CD es: 1");
        break;

      case "1":
        var punctuationCD_0_1 = document.getElementById("punctuationCD_0");
        punctuationCD_0_1.innerText = 2;
        var punctuationCD_1_1 = document.getElementById("punctuationCD_1");
        punctuationCD_1_1.innerText = 2;
        var punctuationCD_2_1 = document.getElementById("punctuationCD_2");
        punctuationCD_2_1.innerText = 2;
        console.log("La Puntuación Escalar de CD es: 2");
        break;

      case "1.5":
        var punctuationCD_0_2 = document.getElementById("punctuationCD_0");
        punctuationCD_0_2.innerText = 3;
        var punctuationCD_1_2 = document.getElementById("punctuationCD_1");
        punctuationCD_1_2.innerText = 3;
        var punctuationCD_2_2 = document.getElementById("punctuationCD_2");
        punctuationCD_2_2.innerText = 3;
        console.log("La Puntuación Escalar de CD es: 3");
        break;

      case "2":
        var punctuationCD_0_3 = document.getElementById("punctuationCD_0");
        punctuationCD_0_3.innerText = 4;
        var punctuationCD_1_3 = document.getElementById("punctuationCD_1");
        punctuationCD_1_3.innerText = 4;
        var punctuationCD_2_3 = document.getElementById("punctuationCD_2");
        punctuationCD_2_3.innerText = 4;
        console.log("La Puntuación Escalar de CD es: 4");
        break;

      case "3":
        var punctuationCD_0_4 = document.getElementById("punctuationCD_0");
        punctuationCD_0_4.innerText = 5;
        var punctuationCD_1_4 = document.getElementById("punctuationCD_1");
        punctuationCD_1_4.innerText = 5;
        var punctuationCD_2_4 = document.getElementById("punctuationCD_2");
        punctuationCD_2_4.innerText = 5;
        console.log("La Puntuación Escalar de CD es: 5");
        break;

      case "4":
        var punctuationCD_0_5 = document.getElementById("punctuationCD_0");
        punctuationCD_0_5.innerText = 6;
        var punctuationCD_1_5 = document.getElementById("punctuationCD_1");
        punctuationCD_1_5.innerText = 6;
        var punctuationCD_2_5 = document.getElementById("punctuationCD_2");
        punctuationCD_2_5.innerText = 6;
        console.log("La Puntuación Escalar de CD es: 6");
        break;

      case "5":
        var punctuationCD_0_6 = document.getElementById("punctuationCD_0");
        punctuationCD_0_6.innerText = 7;
        var punctuationCD_1_6 = document.getElementById("punctuationCD_1");
        punctuationCD_1_6.innerText = 7;
        var punctuationCD_2_6 = document.getElementById("punctuationCD_2");
        punctuationCD_2_6.innerText = 7;
        console.log("La Puntuación Escalar de CD es: 7");
        break;

      case "6":
        var punctuationCD_0_8 = document.getElementById("punctuationCD_0");
        punctuationCD_0_8.innerText = 8;
        var punctuationCD_1_8 = document.getElementById("punctuationCD_1");
        punctuationCD_1_8.innerText = 8;
        var punctuationCD_2_8 = document.getElementById("punctuationCD_2");
        punctuationCD_2_8.innerText = 8;
        console.log("La Puntuación Escalar de CD es: 8");
        break;

      case "7":
        var punctuationCD_0_11 = document.getElementById("punctuationCD_0");
        punctuationCD_0_11.innerText = 9;
        var punctuationCD_1_11 = document.getElementById("punctuationCD_1");
        punctuationCD_1_11.innerText = 9;
        var punctuationCD_2_11 = document.getElementById("punctuationCD_2");
        punctuationCD_2_11.innerText = 9;
        console.log("La Puntuación Escalar de CD es: 9");
        break;

      case "8":
      case "9":
        var punctuationCD_0_13 = document.getElementById("punctuationCD_0");
        punctuationCD_0_13.innerText = 10;
        var punctuationCD_1_13 = document.getElementById("punctuationCD_1");
        punctuationCD_1_13.innerText = 10;
        var punctuationCD_2_13 = document.getElementById("punctuationCD_2");
        punctuationCD_2_13.innerText = 10;
        console.log("La Puntuación Escalar de CD es: 10");
        break;

      case "10":
      case "11":
        var punctuationCD_0_15 = document.getElementById("punctuationCD_0");
        punctuationCD_0_15.innerText = 11;
        var punctuationCD_1_15 = document.getElementById("punctuationCD_1");
        punctuationCD_1_15.innerText = 11;
        var punctuationCD_2_15 = document.getElementById("punctuationCD_2");
        punctuationCD_2_15.innerText = 11;
        console.log("La Puntuación Escalar de CD es: 11");
        break;

      case "12":
        var punctuationCD_0_17 = document.getElementById("punctuationCD_0");
        punctuationCD_0_17.innerText = 12;
        var punctuationCD_1_17 = document.getElementById("punctuationCD_1");
        punctuationCD_1_17.innerText = 12;
        var punctuationCD_2_17 = document.getElementById("punctuationCD_2");
        punctuationCD_2_17.innerText = 12;
        console.log("La Puntuación Escalar de CD es: 12");
        break;

      case "13":
        var punctuationCD_0_20 = document.getElementById("punctuationCD_0");
        punctuationCD_0_20.innerText = 13;
        var punctuationCD_1_20 = document.getElementById("punctuationCD_1");
        punctuationCD_1_20.innerText = 13;
        var punctuationCD_2_20 = document.getElementById("punctuationCD_2");
        punctuationCD_2_20.innerText = 13;
        console.log("La Puntuación Escalar de CD es: 13");
        break;

      case "14":
        var punctuationCD_0_24 = document.getElementById("punctuationCD_0");
        punctuationCD_0_24.innerText = 14;
        var punctuationCD_1_24 = document.getElementById("punctuationCD_1");
        punctuationCD_1_24.innerText = 14;
        var punctuationCD_2_24 = document.getElementById("punctuationCD_2");
        punctuationCD_2_24.innerText = 14;
        console.log("La Puntuación Escalar de CD es: 14");
        break;

      case "15":
        var punctuationCD_0_29 = document.getElementById("punctuationCD_0");
        punctuationCD_0_29.innerText = 15;
        var punctuationCD_1_29 = document.getElementById("punctuationCD_1");
        punctuationCD_1_29.innerText = 15;
        var punctuationCD_2_29 = document.getElementById("punctuationCD_2");
        punctuationCD_2_29.innerText = 15;
        console.log("La Puntuación Escalar de CD es: 15");
        break;

      case "16":
      case "17":
        var punctuationCD_0_34 = document.getElementById("punctuationCD_0");
        punctuationCD_0_34.innerText = 16;
        var punctuationCD_1_34 = document.getElementById("punctuationCD_1");
        punctuationCD_1_34.innerText = 16;
        var punctuationCD_2_34 = document.getElementById("punctuationCD_2");
        punctuationCD_2_34.innerText = 16;
        console.log("La Puntuación Escalar de CD es: 16");
        break;

      case "18":
        var punctuationCD_0_40 = document.getElementById("punctuationCD_0");
        punctuationCD_0_40.innerText = 17;
        var punctuationCD_1_40 = document.getElementById("punctuationCD_1");
        punctuationCD_1_40.innerText = 17;
        var punctuationCD_2_40 = document.getElementById("punctuationCD_2");
        punctuationCD_2_40.innerText = 17;
        console.log("La Puntuación Escalar de CD es: 17");
        break;

      case "19":
        var punctuationCD_0_46 = document.getElementById("punctuationCD_0");
        punctuationCD_0_46.innerText = 18;
        var punctuationCD_1_46 = document.getElementById("punctuationCD_1");
        punctuationCD_1_46.innerText = 18;
        var punctuationCD_2_46 = document.getElementById("punctuationCD_2");
        punctuationCD_2_46.innerText = 18;
        console.log("La Puntuación Escalar de CD es: 18");
        break;

      case "20":
      case "21":
      case "22":
      case "23":
      case "24":
      case "25":
      case "26":
      case "27":
      case "28":
        var punctuationCD_0_53 = document.getElementById("punctuationCD_0");
        punctuationCD_0_53.innerText = 19;
        var punctuationCD_1_53 = document.getElementById("punctuationCD_1");
        punctuationCD_1_53.innerText = 19;
        var punctuationCD_2_53 = document.getElementById("punctuationCD_2");
        punctuationCD_2_53.innerText = 19;
        console.log("La Puntuación Escalar de CD es: 19");
        break;

      default:
        alert("La Puntuación de CD no corresponde a ninguna equivalencia, verifica lo que has colocado.");
        break;
    } //..........C L A V E S..........//


    console.log("La Puntuación Natural de CL es: " + valueinputCL);

    switch (valueinputCL) {
      case "0":
      case "1":
      case "2":
      case "3":
        var punctuationCL_0_0 = document.getElementById("punctuationCL_0");
        punctuationCL_0_0.innerText = 1;
        var punctuationCL_1_0 = document.getElementById("punctuationCL_1");
        punctuationCL_1_0.innerText = 1;
        var punctuationCL_2_0 = document.getElementById("punctuationCL_2");
        punctuationCL_2_0.innerText = 1;
        console.log("La Puntuación Escalar de CL es: 1");
        break;

      case "4":
      case "5":
      case "6":
        var punctuationCL_0_1 = document.getElementById("punctuationCL_0");
        punctuationCL_0_1.innerText = 2;
        var punctuationCL_1_1 = document.getElementById("punctuationCL_1");
        punctuationCL_1_1.innerText = 2;
        var punctuationCL_2_1 = document.getElementById("punctuationCL_2");
        punctuationCL_2_1.innerText = 2;
        console.log("La Puntuación Escalar de CL es: 2");
        break;

      case "7":
      case "8":
      case "9":
      case "10":
        var punctuationCL_0_2 = document.getElementById("punctuationCL_0");
        punctuationCL_0_2.innerText = 3;
        var punctuationCL_1_2 = document.getElementById("punctuationCL_1");
        punctuationCL_1_2.innerText = 3;
        var punctuationCL_2_2 = document.getElementById("punctuationCL_2");
        punctuationCL_2_2.innerText = 3;
        console.log("La Puntuación Escalar de CL es: 3");
        break;

      case "11":
      case "12":
      case "13":
        var punctuationCL_0_3 = document.getElementById("punctuationCL_0");
        punctuationCL_0_3.innerText = 4;
        var punctuationCL_1_3 = document.getElementById("punctuationCL_1");
        punctuationCL_1_3.innerText = 4;
        var punctuationCL_2_3 = document.getElementById("punctuationCL_2");
        punctuationCL_2_3.innerText = 4;
        console.log("La Puntuación Escalar de CL es: 4");
        break;

      case "14":
      case "15":
        var punctuationCL_0_4 = document.getElementById("punctuationCL_0");
        punctuationCL_0_4.innerText = 5;
        var punctuationCL_1_4 = document.getElementById("punctuationCL_1");
        punctuationCL_1_4.innerText = 5;
        var punctuationCL_2_4 = document.getElementById("punctuationCL_2");
        punctuationCL_2_4.innerText = 5;
        console.log("La Puntuación Escalar de CL es: 5");
        break;

      case "16":
      case "17":
      case "18":
        var punctuationCL_0_5 = document.getElementById("punctuationCL_0");
        punctuationCL_0_5.innerText = 6;
        var punctuationCL_1_5 = document.getElementById("punctuationCL_1");
        punctuationCL_1_5.innerText = 6;
        var punctuationCL_2_5 = document.getElementById("punctuationCL_2");
        punctuationCL_2_5.innerText = 6;
        console.log("La Puntuación Escalar de CL es: 6");
        break;

      case "19":
      case "20":
      case "21":
      case "22":
        var punctuationCL_0_6 = document.getElementById("punctuationCL_0");
        punctuationCL_0_6.innerText = 7;
        var punctuationCL_1_6 = document.getElementById("punctuationCL_1");
        punctuationCL_1_6.innerText = 7;
        var punctuationCL_2_6 = document.getElementById("punctuationCL_2");
        punctuationCL_2_6.innerText = 7;
        console.log("La Puntuación Escalar de CL es: 7");
        break;

      case "23":
      case "24":
      case "25":
      case "26":
      case "27":
        var punctuationCL_0_8 = document.getElementById("punctuationCL_0");
        punctuationCL_0_8.innerText = 8;
        var punctuationCL_1_8 = document.getElementById("punctuationCL_1");
        punctuationCL_1_8.innerText = 8;
        var punctuationCL_2_8 = document.getElementById("punctuationCL_2");
        punctuationCL_2_8.innerText = 8;
        console.log("La Puntuación Escalar de CL es: 8");
        break;

      case "28":
      case "29":
      case "30":
      case "31":
      case "32":
        var punctuationCL_0_11 = document.getElementById("punctuationCL_0");
        punctuationCL_0_11.innerText = 9;
        var punctuationCL_1_11 = document.getElementById("punctuationCL_1");
        punctuationCL_1_11.innerText = 9;
        var punctuationCL_2_11 = document.getElementById("punctuationCL_2");
        punctuationCL_2_11.innerText = 9;
        console.log("La Puntuación Escalar de CL es: 9");
        break;

      case "33":
      case "34":
      case "35":
      case "36":
      case "37":
        var punctuationCL_0_13 = document.getElementById("punctuationCL_0");
        punctuationCL_0_13.innerText = 10;
        var punctuationCL_1_13 = document.getElementById("punctuationCL_1");
        punctuationCL_1_13.innerText = 10;
        var punctuationCL_2_13 = document.getElementById("punctuationCL_2");
        punctuationCL_2_13.innerText = 10;
        console.log("La Puntuación Escalar de CL es: 10");
        break;

      case "38":
      case "39":
      case "40":
      case "41":
      case "42":
        var punctuationCL_0_15 = document.getElementById("punctuationCL_0");
        punctuationCL_0_15.innerText = 11;
        var punctuationCL_1_15 = document.getElementById("punctuationCL_1");
        punctuationCL_1_15.innerText = 11;
        var punctuationCL_2_15 = document.getElementById("punctuationCL_2");
        punctuationCL_2_15.innerText = 11;
        console.log("La Puntuación Escalar de CL es: 11");
        break;

      case "43":
      case "44":
      case "45":
      case "46":
      case "47":
        var punctuationCL_0_17 = document.getElementById("punctuationCL_0");
        punctuationCL_0_17.innerText = 12;
        var punctuationCL_1_17 = document.getElementById("punctuationCL_1");
        punctuationCL_1_17.innerText = 12;
        var punctuationCL_2_17 = document.getElementById("punctuationCL_2");
        punctuationCL_2_17.innerText = 12;
        console.log("La Puntuación Escalar de CL es: 12");
        break;

      case "48":
      case "49":
      case "50":
      case "51":
        var punctuationCL_0_20 = document.getElementById("punctuationCL_0");
        punctuationCL_0_20.innerText = 13;
        var punctuationCL_1_20 = document.getElementById("punctuationCL_1");
        punctuationCL_1_20.innerText = 13;
        var punctuationCL_2_20 = document.getElementById("punctuationCL_2");
        punctuationCL_2_20.innerText = 13;
        console.log("La Puntuación Escalar de CL es: 13");
        break;

      case "52":
      case "53":
      case "54":
      case "55":
        var punctuationCL_0_24 = document.getElementById("punctuationCL_0");
        punctuationCL_0_24.innerText = 14;
        var punctuationCL_1_24 = document.getElementById("punctuationCL_1");
        punctuationCL_1_24.innerText = 14;
        var punctuationCL_2_24 = document.getElementById("punctuationCL_2");
        punctuationCL_2_24.innerText = 14;
        console.log("La Puntuación Escalar de CL es: 14");
        break;

      case "56":
      case "57":
      case "58":
        var punctuationCL_0_29 = document.getElementById("punctuationCL_0");
        punctuationCL_0_29.innerText = 15;
        var punctuationCL_1_29 = document.getElementById("punctuationCL_1");
        punctuationCL_1_29.innerText = 15;
        var punctuationCL_2_29 = document.getElementById("punctuationCL_2");
        punctuationCL_2_29.innerText = 15;
        console.log("La Puntuación Escalar de CL es: 15");
        break;

      case "59":
      case "60":
      case "61":
        var punctuationCL_0_34 = document.getElementById("punctuationCL_0");
        punctuationCL_0_34.innerText = 16;
        var punctuationCL_1_34 = document.getElementById("punctuationCL_1");
        punctuationCL_1_34.innerText = 16;
        var punctuationCL_2_34 = document.getElementById("punctuationCL_2");
        punctuationCL_2_34.innerText = 16;
        console.log("La Puntuación Escalar de CL es: 16");
        break;

      case "62":
      case "63":
        var punctuationCL_0_40 = document.getElementById("punctuationCL_0");
        punctuationCL_0_40.innerText = 17;
        var punctuationCL_1_40 = document.getElementById("punctuationCL_1");
        punctuationCL_1_40.innerText = 17;
        var punctuationCL_2_40 = document.getElementById("punctuationCL_2");
        punctuationCL_2_40.innerText = 17;
        console.log("La Puntuación Escalar de CL es: 17");
        break;

      case "64":
        var punctuationCL_0_46 = document.getElementById("punctuationCL_0");
        punctuationCL_0_46.innerText = 18;
        var punctuationCL_1_46 = document.getElementById("punctuationCL_1");
        punctuationCL_1_46.innerText = 18;
        var punctuationCL_2_46 = document.getElementById("punctuationCL_2");
        punctuationCL_2_46.innerText = 18;
        console.log("La Puntuación Escalar de CL es: 18");
        break;

      case "65":
        var punctuationCL_0_53 = document.getElementById("punctuationCL_0");
        punctuationCL_0_53.innerText = 19;
        var punctuationCL_1_53 = document.getElementById("punctuationCL_1");
        punctuationCL_1_53.innerText = 19;
        var punctuationCL_2_53 = document.getElementById("punctuationCL_2");
        punctuationCL_2_53.innerText = 19;
        console.log("La Puntuación Escalar de CL es: 19");
        break;

      default:
        alert("La Puntuación de CL no corresponde a ninguna equivalencia, verifica lo que has colocado.");
        break;
    }
  }
}

console.groupEnd();