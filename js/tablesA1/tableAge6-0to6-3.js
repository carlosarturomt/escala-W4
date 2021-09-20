function calculateSumScores() {
  const inputDC = document.getElementById("inputDC");
  const valueinputDC = inputDC.value;
  const inputSE = document.getElementById("inputSE");
  const valueinputSE = inputSE.value;
  const inputRD = document.getElementById("inputRD");
  const valueinputRD = inputRD.value;
  const inputCD = document.getElementById("inputCD");
  const valueinputCD = inputCD.value;
  const inputCL = document.getElementById("inputCL");
  const valueinputCL = inputCL.value;
  const inputVB = document.getElementById("inputVB");
  const valueinputVB = inputVB.value;
  const inputNL = document.getElementById("inputNL");
  const valueinputNL = inputNL.value;
  const inputMT = document.getElementById("inputMT");
  const valueinputMT = inputMT.value;
  const inputCM = document.getElementById("inputCM");
  const valueinputCM = inputCM.value;
  const inputBS = document.getElementById("inputBS");
  const valueinputBS = inputBS.value;
  const inputFI = document.getElementById("inputFI");
  const valueinputFI = inputFI.value;
  const inputRG = document.getElementById("inputRG");
  const valueinputRG = inputRG.value;
  const inputIN = document.getElementById("inputIN");
  const valueinputIN = inputIN.value;
  const inputAR = document.getElementById("inputAR");
  const valueinputAR = inputAR.value;
  const inputPC = document.getElementById("inputPC");
  const valueinputPC = inputPC.value;

  if (
    calculateYear() == "6,0" ||
    calculateYear() == "6,1" ||
    calculateYear() == "6,2" ||
    calculateYear() == "6,3"
  ) {
    console.log(
      "Cumple el rango de edad de 6:0 a 6:3 años." +
        "\r\n" +
        "Teniendo " +
        calculateYear() +
        " años."
    );
    //..........D I S E Ñ O - C O N - C U B O S..........//
    console.log("La Puntuación Natural de DC es: " + valueinputDC);
    switch (valueinputDC) {
      case "0":
        let punctuationDC_0_0 = document.getElementById("punctuationDC_0");
        punctuationDC_0_0.innerText = 1;
        let punctuationDC_1_0 = document.getElementById("punctuationDC_1");
        punctuationDC_1_0.innerText = 1;
        let punctuationDC_2_0 = document.getElementById("punctuationDC_2");
        punctuationDC_2_0.innerText = 1;
        console.log("La Puntuación Escalar de DC es: 1");
        break;
      case "1":
        let punctuationDC_0_1 = document.getElementById("punctuationDC_0");
        punctuationDC_0_1.innerText = 2;
        let punctuationDC_1_1 = document.getElementById("punctuationDC_1");
        punctuationDC_1_1.innerText = 2;
        let punctuationDC_2_1 = document.getElementById("punctuationDC_2");
        punctuationDC_2_1.innerText = 2;
        console.log("La Puntuación Escalar de DC es: 2");
        break;
      case "2":
        let punctuationDC_0_2 = document.getElementById("punctuationDC_0");
        punctuationDC_0_2.innerText = 3;
        let punctuationDC_1_2 = document.getElementById("punctuationDC_1");
        punctuationDC_1_2.innerText = 3;
        let punctuationDC_2_2 = document.getElementById("punctuationDC_2");
        punctuationDC_2_2.innerText = 3;
        console.log("La Puntuación Escalar de DC es: 3");
        break;
      case "3":
        let punctuationDC_0_3 = document.getElementById("punctuationDC_0");
        punctuationDC_0_3.innerText = 4;
        let punctuationDC_1_3 = document.getElementById("punctuationDC_1");
        punctuationDC_1_3.innerText = 4;
        let punctuationDC_2_3 = document.getElementById("punctuationDC_2");
        punctuationDC_2_3.innerText = 4;
        console.log("La Puntuación Escalar de DC es: 4");
        break;
      case "4":
        let punctuationDC_0_4 = document.getElementById("punctuationDC_0");
        punctuationDC_0_4.innerText = 5;
        let punctuationDC_1_4 = document.getElementById("punctuationDC_1");
        punctuationDC_1_4.innerText = 5;
        let punctuationDC_2_4 = document.getElementById("punctuationDC_2");
        punctuationDC_2_4.innerText = 5;
        console.log("La Puntuación Escalar de DC es: 5");
        break;
      case "5":
        let punctuationDC_0_5 = document.getElementById("punctuationDC_0");
        punctuationDC_0_5.innerText = 6;
        let punctuationDC_1_5 = document.getElementById("punctuationDC_1");
        punctuationDC_1_5.innerText = 6;
        let punctuationDC_2_5 = document.getElementById("punctuationDC_2");
        punctuationDC_2_5.innerText = 6;
        console.log("La Puntuación Escalar de DC es: 6");
        break;
      case "6":
      case "7":
        let punctuationDC_0_6 = document.getElementById("punctuationDC_0");
        punctuationDC_0_6.innerText = 7;
        let punctuationDC_1_6 = document.getElementById("punctuationDC_1");
        punctuationDC_1_6.innerText = 7;
        let punctuationDC_2_6 = document.getElementById("punctuationDC_2");
        punctuationDC_2_6.innerText = 7;
        console.log("La Puntuación Escalar de DC es: 7");
        break;
      case "8":
      case "9":
      case "10":
        let punctuationDC_0_8 = document.getElementById("punctuationDC_0");
        punctuationDC_0_8.innerText = 8;
        let punctuationDC_1_8 = document.getElementById("punctuationDC_1");
        punctuationDC_1_8.innerText = 8;
        let punctuationDC_2_8 = document.getElementById("punctuationDC_2");
        punctuationDC_2_8.innerText = 8;
        console.log("La Puntuación Escalar de DC es: 8");
        break;
      case "11":
      case "12":
        let punctuationDC_0_11 = document.getElementById("punctuationDC_0");
        punctuationDC_0_11.innerText = 9;
        let punctuationDC_1_11 = document.getElementById("punctuationDC_1");
        punctuationDC_1_11.innerText = 9;
        let punctuationDC_2_11 = document.getElementById("punctuationDC_2");
        punctuationDC_2_11.innerText = 9;
        console.log("La Puntuación Escalar de DC es: 9");
        break;
      case "13":
      case "14":
        let punctuationDC_0_13 = document.getElementById("punctuationDC_0");
        punctuationDC_0_13.innerText = 10;
        let punctuationDC_1_13 = document.getElementById("punctuationDC_1");
        punctuationDC_1_13.innerText = 10;
        let punctuationDC_2_13 = document.getElementById("punctuationDC_2");
        punctuationDC_2_13.innerText = 10;
        console.log("La Puntuación Escalar de DC es: 10");
        break;
      case "15":
      case "16":
        let punctuationDC_0_15 = document.getElementById("punctuationDC_0");
        punctuationDC_0_15.innerText = 11;
        let punctuationDC_1_15 = document.getElementById("punctuationDC_1");
        punctuationDC_1_15.innerText = 11;
        let punctuationDC_2_15 = document.getElementById("punctuationDC_2");
        punctuationDC_2_15.innerText = 11;
        console.log("La Puntuación Escalar de DC es: 11");
        break;
      case "17":
      case "18":
      case "19":
        let punctuationDC_0_17 = document.getElementById("punctuationDC_0");
        punctuationDC_0_17.innerText = 12;
        let punctuationDC_1_17 = document.getElementById("punctuationDC_1");
        punctuationDC_1_17.innerText = 12;
        let punctuationDC_2_17 = document.getElementById("punctuationDC_2");
        punctuationDC_2_17.innerText = 12;
        console.log("La Puntuación Escalar de DC es: 12");
        break;
      case "20":
      case "21":
      case "22":
      case "23":
        let punctuationDC_0_20 = document.getElementById("punctuationDC_0");
        punctuationDC_0_20.innerText = 13;
        let punctuationDC_1_20 = document.getElementById("punctuationDC_1");
        punctuationDC_1_20.innerText = 13;
        let punctuationDC_2_20 = document.getElementById("punctuationDC_2");
        punctuationDC_2_20.innerText = 13;
        console.log("La Puntuación Escalar de DC es: 13");
        break;
      case "24":
      case "25":
      case "26":
      case "27":
      case "28":
        let punctuationDC_0_24 = document.getElementById("punctuationDC_0");
        punctuationDC_0_24.innerText = 14;
        let punctuationDC_1_24 = document.getElementById("punctuationDC_1");
        punctuationDC_1_24.innerText = 14;
        let punctuationDC_2_24 = document.getElementById("punctuationDC_2");
        punctuationDC_2_24.innerText = 14;
        console.log("La Puntuación Escalar de DC es: 14");
        break;
      case "29":
      case "30":
      case "31":
      case "32":
      case "33":
        let punctuationDC_0_29 = document.getElementById("punctuationDC_0");
        punctuationDC_0_29.innerText = 15;
        let punctuationDC_1_29 = document.getElementById("punctuationDC_1");
        punctuationDC_1_29.innerText = 15;
        let punctuationDC_2_29 = document.getElementById("punctuationDC_2");
        punctuationDC_2_29.innerText = 15;
        console.log("La Puntuación Escalar de DC es: 15");
        break;
      case "34":
      case "35":
      case "36":
      case "37":
      case "38":
      case "39":
        let punctuationDC_0_34 = document.getElementById("punctuationDC_0");
        punctuationDC_0_34.innerText = 16;
        let punctuationDC_1_34 = document.getElementById("punctuationDC_1");
        punctuationDC_1_34.innerText = 16;
        let punctuationDC_2_34 = document.getElementById("punctuationDC_2");
        punctuationDC_2_34.innerText = 16;
        console.log("La Puntuación Escalar de DC es: 16");
        break;
      case "40":
      case "41":
      case "42":
      case "43":
      case "44":
      case "45":
        let punctuationDC_0_40 = document.getElementById("punctuationDC_0");
        punctuationDC_0_40.innerText = 17;
        let punctuationDC_1_40 = document.getElementById("punctuationDC_1");
        punctuationDC_1_40.innerText = 17;
        let punctuationDC_2_40 = document.getElementById("punctuationDC_2");
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
        let punctuationDC_0_46 = document.getElementById("punctuationDC_0");
        punctuationDC_0_46.innerText = 18;
        let punctuationDC_1_46 = document.getElementById("punctuationDC_1");
        punctuationDC_1_46.innerText = 18;
        let punctuationDC_2_46 = document.getElementById("punctuationDC_2");
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
        let punctuationDC_0_53 = document.getElementById("punctuationDC_0");
        punctuationDC_0_53.innerText = 19;
        let punctuationDC_1_53 = document.getElementById("punctuationDC_1");
        punctuationDC_1_53.innerText = 19;
        let punctuationDC_2_53 = document.getElementById("punctuationDC_2");
        punctuationDC_2_53.innerText = 19;
        console.log("La Puntuación Escalar de DC es: 19");
        break;
      default:
        alert(
          "La Puntuación de DC no corresponde a ninguna equivalencia, verifica lo que has colocado."
        );
        break;
    }
    //..........S E M E J A N Z A S..........//
    console.log("La Puntuación Natural de SE es: " + valueinputSE);
    switch (valueinputSE) {
      case "":
        let punctuationSE_0_0 = document.getElementById("punctuationSE_0");
        punctuationSE_0_0.innerText = 1;
        let punctuationSE_1_0 = document.getElementById("punctuationSE_1");
        punctuationSE_1_0.innerText = 1;
        let punctuationSE_2_0 = document.getElementById("punctuationSE_2");
        punctuationSE_2_0.innerText = 1;
        console.log("La Puntuación Escalar de SE es: 1");
        break;
      case "0":
        let punctuationSE_0_1 = document.getElementById("punctuationSE_0");
        punctuationSE_0_1.innerText = 2;
        let punctuationSE_1_1 = document.getElementById("punctuationSE_1");
        punctuationSE_1_1.innerText = 2;
        let punctuationSE_2_1 = document.getElementById("punctuationSE_2");
        punctuationSE_2_1.innerText = 2;
        console.log("La Puntuación Escalar de SE es: 2");
        break;
      case "1":
        let punctuationSE_0_2 = document.getElementById("punctuationSE_0");
        punctuationSE_0_2.innerText = 3;
        let punctuationSE_1_2 = document.getElementById("punctuationSE_1");
        punctuationSE_1_2.innerText = 3;
        let punctuationSE_2_2 = document.getElementById("punctuationSE_2");
        punctuationSE_2_2.innerText = 3;
        console.log("La Puntuación Escalar de SE es: 3");
        break;
      case "2":
        let punctuationSE_0_3 = document.getElementById("punctuationSE_0");
        punctuationSE_0_3.innerText = 4;
        let punctuationSE_1_3 = document.getElementById("punctuationSE_1");
        punctuationSE_1_3.innerText = 4;
        let punctuationSE_2_3 = document.getElementById("punctuationSE_2");
        punctuationSE_2_3.innerText = 4;
        console.log("La Puntuación Escalar de SE es: 4");
        break;
      case "3":
        let punctuationSE_0_4 = document.getElementById("punctuationSE_0");
        punctuationSE_0_4.innerText = 5;
        let punctuationSE_1_4 = document.getElementById("punctuationSE_1");
        punctuationSE_1_4.innerText = 5;
        let punctuationSE_2_4 = document.getElementById("punctuationSE_2");
        punctuationSE_2_4.innerText = 5;
        console.log("La Puntuación Escalar de SE es: 5");
        break;
      case "4":
        let punctuationSE_0_5 = document.getElementById("punctuationSE_0");
        punctuationSE_0_5.innerText = 6;
        let punctuationSE_1_5 = document.getElementById("punctuationSE_1");
        punctuationSE_1_5.innerText = 6;
        let punctuationSE_2_5 = document.getElementById("punctuationSE_2");
        punctuationSE_2_5.innerText = 6;
        console.log("La Puntuación Escalar de SE es: 6");
        break;
      case "5":
        let punctuationSE_0_6 = document.getElementById("punctuationSE_0");
        punctuationSE_0_6.innerText = 7;
        let punctuationSE_1_6 = document.getElementById("punctuationSE_1");
        punctuationSE_1_6.innerText = 7;
        let punctuationSE_2_6 = document.getElementById("punctuationSE_2");
        punctuationSE_2_6.innerText = 7;
        console.log("La Puntuación Escalar de SE es: 7");
        break;
      case "6":
        let punctuationSE_0_8 = document.getElementById("punctuationSE_0");
        punctuationSE_0_8.innerText = 8;
        let punctuationSE_1_8 = document.getElementById("punctuationSE_1");
        punctuationSE_1_8.innerText = 8;
        let punctuationSE_2_8 = document.getElementById("punctuationSE_2");
        punctuationSE_2_8.innerText = 8;
        console.log("La Puntuación Escalar de SE es: 8");
        break;
      case "7":
        let punctuationSE_0_11 = document.getElementById("punctuationSE_0");
        punctuationSE_0_11.innerText = 9;
        let punctuationSE_1_11 = document.getElementById("punctuationSE_1");
        punctuationSE_1_11.innerText = 9;
        let punctuationSE_2_11 = document.getElementById("punctuationSE_2");
        punctuationSE_2_11.innerText = 9;
        console.log("La Puntuación Escalar de SE es: 9");
        break;
      case "8":
        let punctuationSE_0_13 = document.getElementById("punctuationSE_0");
        punctuationSE_0_13.innerText = 10;
        let punctuationSE_1_13 = document.getElementById("punctuationSE_1");
        punctuationSE_1_13.innerText = 10;
        let punctuationSE_2_13 = document.getElementById("punctuationSE_2");
        punctuationSE_2_13.innerText = 10;
        console.log("La Puntuación Escalar de SE es: 10");
        break;
      case "9":
      case "10":
        let punctuationSE_0_15 = document.getElementById("punctuationSE_0");
        punctuationSE_0_15.innerText = 11;
        let punctuationSE_1_15 = document.getElementById("punctuationSE_1");
        punctuationSE_1_15.innerText = 11;
        let punctuationSE_2_15 = document.getElementById("punctuationSE_2");
        punctuationSE_2_15.innerText = 11;
        console.log("La Puntuación Escalar de SE es: 11");
        break;
      case "11":
      case "12":
        let punctuationSE_0_17 = document.getElementById("punctuationSE_0");
        punctuationSE_0_17.innerText = 12;
        let punctuationSE_1_17 = document.getElementById("punctuationSE_1");
        punctuationSE_1_17.innerText = 12;
        let punctuationSE_2_17 = document.getElementById("punctuationSE_2");
        punctuationSE_2_17.innerText = 12;
        console.log("La Puntuación Escalar de SE es: 12");
        break;
      case "13":
      case "14":
        let punctuationSE_0_20 = document.getElementById("punctuationSE_0");
        punctuationSE_0_20.innerText = 13;
        let punctuationSE_1_20 = document.getElementById("punctuationSE_1");
        punctuationSE_1_20.innerText = 13;
        let punctuationSE_2_20 = document.getElementById("punctuationSE_2");
        punctuationSE_2_20.innerText = 13;
        console.log("La Puntuación Escalar de SE es: 13");
        break;
      case "15":
      case "16":
        let punctuationSE_0_24 = document.getElementById("punctuationSE_0");
        punctuationSE_0_24.innerText = 14;
        let punctuationSE_1_24 = document.getElementById("punctuationSE_1");
        punctuationSE_1_24.innerText = 14;
        let punctuationSE_2_24 = document.getElementById("punctuationSE_2");
        punctuationSE_2_24.innerText = 14;
        console.log("La Puntuación Escalar de SE es: 14");
        break;
      case "17":
      case "18":
        let punctuationSE_0_29 = document.getElementById("punctuationSE_0");
        punctuationSE_0_29.innerText = 15;
        let punctuationSE_1_29 = document.getElementById("punctuationSE_1");
        punctuationSE_1_29.innerText = 15;
        let punctuationSE_2_29 = document.getElementById("punctuationSE_2");
        punctuationSE_2_29.innerText = 15;
        console.log("La Puntuación Escalar de SE es: 15");
        break;
      case "19":
      case "20":
        let punctuationSE_0_34 = document.getElementById("punctuationSE_0");
        punctuationSE_0_34.innerText = 16;
        let punctuationSE_1_34 = document.getElementById("punctuationSE_1");
        punctuationSE_1_34.innerText = 16;
        let punctuationSE_2_34 = document.getElementById("punctuationSE_2");
        punctuationSE_2_34.innerText = 16;
        console.log("La Puntuación Escalar de SE es: 16");
        break;
      case "21":
      case "22":
        let punctuationSE_0_40 = document.getElementById("punctuationSE_0");
        punctuationSE_0_40.innerText = 17;
        let punctuationSE_1_40 = document.getElementById("punctuationSE_1");
        punctuationSE_1_40.innerText = 17;
        let punctuationSE_2_40 = document.getElementById("punctuationSE_2");
        punctuationSE_2_40.innerText = 17;
        console.log("La Puntuación Escalar de SE es: 17");
        break;
      case "23":
      case "24":
        let punctuationSE_0_46 = document.getElementById("punctuationSE_0");
        punctuationSE_0_46.innerText = 18;
        let punctuationSE_1_46 = document.getElementById("punctuationSE_1");
        punctuationSE_1_46.innerText = 18;
        let punctuationSE_2_46 = document.getElementById("punctuationSE_2");
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
        let punctuationSE_0_53 = document.getElementById("punctuationSE_0");
        punctuationSE_0_53.innerText = 19;
        let punctuationSE_1_53 = document.getElementById("punctuationSE_1");
        punctuationSE_1_53.innerText = 19;
        let punctuationSE_2_53 = document.getElementById("punctuationSE_2");
        punctuationSE_2_53.innerText = 19;
        console.log("La Puntuación Escalar de SE es: 19");
        break;
      default:
        alert(
          "La Puntuación de SE no corresponde a ninguna equivalencia, verifica lo que has colocado."
        );
        break;
    }
    //..........R E T E N C I O N - D E - D I G I T O S..........//
    console.log("La Puntuación Natural de RD es: " + valueinputRD);
    switch (valueinputRD) {
      case "0":
      case "1":
      case "2":
        let punctuationRD_0_0 = document.getElementById("punctuationRD_0");
        punctuationRD_0_0.innerText = 1;
        let punctuationRD_1_0 = document.getElementById("punctuationRD_1");
        punctuationRD_1_0.innerText = 1;
        let punctuationRD_2_0 = document.getElementById("punctuationRD_2");
        punctuationRD_2_0.innerText = 1;
        console.log("La Puntuación Escalar de RD es: 1");
        break;
      case "3":
        let punctuationRD_0_1 = document.getElementById("punctuationRD_0");
        punctuationRD_0_1.innerText = 2;
        let punctuationRD_1_1 = document.getElementById("punctuationRD_1");
        punctuationRD_1_1.innerText = 2;
        let punctuationRD_2_1 = document.getElementById("punctuationRD_2");
        punctuationRD_2_1.innerText = 2;
        console.log("La Puntuación Escalar de RD es: 2");
        break;
      case "4":
        let punctuationRD_0_2 = document.getElementById("punctuationRD_0");
        punctuationRD_0_2.innerText = 3;
        let punctuationRD_1_2 = document.getElementById("punctuationRD_1");
        punctuationRD_1_2.innerText = 3;
        let punctuationRD_2_2 = document.getElementById("punctuationRD_2");
        punctuationRD_2_2.innerText = 3;
        console.log("La Puntuación Escalar de RD es: 3");
        break;
      case "4.5":
        let punctuationRD_0_3 = document.getElementById("punctuationRD_0");
        punctuationRD_0_3.innerText = 4;
        let punctuationRD_1_3 = document.getElementById("punctuationRD_1");
        punctuationRD_1_3.innerText = 4;
        let punctuationRD_2_3 = document.getElementById("punctuationRD_2");
        punctuationRD_2_3.innerText = 4;
        console.log("La Puntuación Escalar de RD es: 4");
        break;
      case "5":
        let punctuationRD_0_4 = document.getElementById("punctuationRD_0");
        punctuationRD_0_4.innerText = 5;
        let punctuationRD_1_4 = document.getElementById("punctuationRD_1");
        punctuationRD_1_4.innerText = 5;
        let punctuationRD_2_4 = document.getElementById("punctuationRD_2");
        punctuationRD_2_4.innerText = 5;
        console.log("La Puntuación Escalar de RD es: 5");
        break;
      case "6":
        let punctuationRD_0_5 = document.getElementById("punctuationRD_0");
        punctuationRD_0_5.innerText = 6;
        let punctuationRD_1_5 = document.getElementById("punctuationRD_1");
        punctuationRD_1_5.innerText = 6;
        let punctuationRD_2_5 = document.getElementById("punctuationRD_2");
        punctuationRD_2_5.innerText = 6;
        console.log("La Puntuación Escalar de RD es: 6");
        break;
      case "7":
        let punctuationRD_0_6 = document.getElementById("punctuationRD_0");
        punctuationRD_0_6.innerText = 7;
        let punctuationRD_1_6 = document.getElementById("punctuationRD_1");
        punctuationRD_1_6.innerText = 7;
        let punctuationRD_2_6 = document.getElementById("punctuationRD_2");
        punctuationRD_2_6.innerText = 7;
        console.log("La Puntuación Escalar de RD es: 7");
        break;
      case "8":
      case "9":
        let punctuationRD_0_8 = document.getElementById("punctuationRD_0");
        punctuationRD_0_8.innerText = 8;
        let punctuationRD_1_8 = document.getElementById("punctuationRD_1");
        punctuationRD_1_8.innerText = 8;
        let punctuationRD_2_8 = document.getElementById("punctuationRD_2");
        punctuationRD_2_8.innerText = 8;
        console.log("La Puntuación Escalar de RD es: 8");
        break;
      case "10":
        let punctuationRD_0_11 = document.getElementById("punctuationRD_0");
        punctuationRD_0_11.innerText = 9;
        let punctuationRD_1_11 = document.getElementById("punctuationRD_1");
        punctuationRD_1_11.innerText = 9;
        let punctuationRD_2_11 = document.getElementById("punctuationRD_2");
        punctuationRD_2_11.innerText = 9;
        console.log("La Puntuación Escalar de RD es: 9");
        break;
      case "11":
        let punctuationRD_0_13 = document.getElementById("punctuationRD_0");
        punctuationRD_0_13.innerText = 10;
        let punctuationRD_1_13 = document.getElementById("punctuationRD_1");
        punctuationRD_1_13.innerText = 10;
        let punctuationRD_2_13 = document.getElementById("punctuationRD_2");
        punctuationRD_2_13.innerText = 10;
        console.log("La Puntuación Escalar de RD es: 10");
        break;
      case "12":
        let punctuationRD_0_15 = document.getElementById("punctuationRD_0");
        punctuationRD_0_15.innerText = 11;
        let punctuationRD_1_15 = document.getElementById("punctuationRD_1");
        punctuationRD_1_15.innerText = 11;
        let punctuationRD_2_15 = document.getElementById("punctuationRD_2");
        punctuationRD_2_15.innerText = 11;
        console.log("La Puntuación Escalar de RD es: 11");
        break;
      case "13":
        let punctuationRD_0_17 = document.getElementById("punctuationRD_0");
        punctuationRD_0_17.innerText = 12;
        let punctuationRD_1_17 = document.getElementById("punctuationRD_1");
        punctuationRD_1_17.innerText = 12;
        let punctuationRD_2_17 = document.getElementById("punctuationRD_2");
        punctuationRD_2_17.innerText = 12;
        console.log("La Puntuación Escalar de RD es: 12");
        break;
      case "14":
        let punctuationRD_0_20 = document.getElementById("punctuationRD_0");
        punctuationRD_0_20.innerText = 13;
        let punctuationRD_1_20 = document.getElementById("punctuationRD_1");
        punctuationRD_1_20.innerText = 13;
        let punctuationRD_2_20 = document.getElementById("punctuationRD_2");
        punctuationRD_2_20.innerText = 13;
        console.log("La Puntuación Escalar de RD es: 13");
        break;
      case "15":
        let punctuationRD_0_24 = document.getElementById("punctuationRD_0");
        punctuationRD_0_24.innerText = 14;
        let punctuationRD_1_24 = document.getElementById("punctuationRD_1");
        punctuationRD_1_24.innerText = 14;
        let punctuationRD_2_24 = document.getElementById("punctuationRD_2");
        punctuationRD_2_24.innerText = 14;
        console.log("La Puntuación Escalar de RD es: 14");
        break;
      case "15.5":
        let punctuationRD_0_29 = document.getElementById("punctuationRD_0");
        punctuationRD_0_29.innerText = 15;
        let punctuationRD_1_29 = document.getElementById("punctuationRD_1");
        punctuationRD_1_29.innerText = 15;
        let punctuationRD_2_29 = document.getElementById("punctuationRD_2");
        punctuationRD_2_29.innerText = 15;
        console.log("La Puntuación Escalar de RD es: 15");
        break;
      case "16":
        let punctuationRD_0_34 = document.getElementById("punctuationRD_0");
        punctuationRD_0_34.innerText = 16;
        let punctuationRD_1_34 = document.getElementById("punctuationRD_1");
        punctuationRD_1_34.innerText = 16;
        let punctuationRD_2_34 = document.getElementById("punctuationRD_2");
        punctuationRD_2_34.innerText = 16;
        console.log("La Puntuación Escalar de RD es: 16");
        break;
      case "17":
        let punctuationRD_0_40 = document.getElementById("punctuationRD_0");
        punctuationRD_0_40.innerText = 17;
        let punctuationRD_1_40 = document.getElementById("punctuationRD_1");
        punctuationRD_1_40.innerText = 17;
        let punctuationRD_2_40 = document.getElementById("punctuationRD_2");
        punctuationRD_2_40.innerText = 17;
        console.log("La Puntuación Escalar de RD es: 17");
        break;
      case "18":
        let punctuationRD_0_46 = document.getElementById("punctuationRD_0");
        punctuationRD_0_46.innerText = 18;
        let punctuationRD_1_46 = document.getElementById("punctuationRD_1");
        punctuationRD_1_46.innerText = 18;
        let punctuationRD_2_46 = document.getElementById("punctuationRD_2");
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
        let punctuationRD_0_53 = document.getElementById("punctuationRD_0");
        punctuationRD_0_53.innerText = 19;
        let punctuationRD_1_53 = document.getElementById("punctuationRD_1");
        punctuationRD_1_53.innerText = 19;
        let punctuationRD_2_53 = document.getElementById("punctuationRD_2");
        punctuationRD_2_53.innerText = 19;
        console.log("La Puntuación Escalar de RD es: 19");
        break;
      default:
        alert(
          "La Puntuación de RD no corresponde a ninguna equivalencia, verifica lo que has colocado."
        );
        break;
    }
    //..........C O N C E P T O - C O N - D I B U J O S..........//
    console.log("La Puntuación Natural de CD es: " + valueinputCD);
    switch (valueinputCD) {
      case "0":
        let punctuationCD_0_0 = document.getElementById("punctuationCD_0");
        punctuationCD_0_0.innerText = 1;
        let punctuationCD_1_0 = document.getElementById("punctuationCD_1");
        punctuationCD_1_0.innerText = 1;
        let punctuationCD_2_0 = document.getElementById("punctuationCD_2");
        punctuationCD_2_0.innerText = 1;
        console.log("La Puntuación Escalar de CD es: 1");
        break;
      case "1":
        let punctuationCD_0_1 = document.getElementById("punctuationCD_0");
        punctuationCD_0_1.innerText = 2;
        let punctuationCD_1_1 = document.getElementById("punctuationCD_1");
        punctuationCD_1_1.innerText = 2;
        let punctuationCD_2_1 = document.getElementById("punctuationCD_2");
        punctuationCD_2_1.innerText = 2;
        console.log("La Puntuación Escalar de CD es: 2");
        break;
      case "1.5":
        let punctuationCD_0_2 = document.getElementById("punctuationCD_0");
        punctuationCD_0_2.innerText = 3;
        let punctuationCD_1_2 = document.getElementById("punctuationCD_1");
        punctuationCD_1_2.innerText = 3;
        let punctuationCD_2_2 = document.getElementById("punctuationCD_2");
        punctuationCD_2_2.innerText = 3;
        console.log("La Puntuación Escalar de CD es: 3");
        break;
      case "2":
        let punctuationCD_0_3 = document.getElementById("punctuationCD_0");
        punctuationCD_0_3.innerText = 4;
        let punctuationCD_1_3 = document.getElementById("punctuationCD_1");
        punctuationCD_1_3.innerText = 4;
        let punctuationCD_2_3 = document.getElementById("punctuationCD_2");
        punctuationCD_2_3.innerText = 4;
        console.log("La Puntuación Escalar de CD es: 4");
        break;
      case "3":
        let punctuationCD_0_4 = document.getElementById("punctuationCD_0");
        punctuationCD_0_4.innerText = 5;
        let punctuationCD_1_4 = document.getElementById("punctuationCD_1");
        punctuationCD_1_4.innerText = 5;
        let punctuationCD_2_4 = document.getElementById("punctuationCD_2");
        punctuationCD_2_4.innerText = 5;
        console.log("La Puntuación Escalar de CD es: 5");
        break;
      case "4":
        let punctuationCD_0_5 = document.getElementById("punctuationCD_0");
        punctuationCD_0_5.innerText = 6;
        let punctuationCD_1_5 = document.getElementById("punctuationCD_1");
        punctuationCD_1_5.innerText = 6;
        let punctuationCD_2_5 = document.getElementById("punctuationCD_2");
        punctuationCD_2_5.innerText = 6;
        console.log("La Puntuación Escalar de CD es: 6");
        break;
      case "5":
        let punctuationCD_0_6 = document.getElementById("punctuationCD_0");
        punctuationCD_0_6.innerText = 7;
        let punctuationCD_1_6 = document.getElementById("punctuationCD_1");
        punctuationCD_1_6.innerText = 7;
        let punctuationCD_2_6 = document.getElementById("punctuationCD_2");
        punctuationCD_2_6.innerText = 7;
        console.log("La Puntuación Escalar de CD es: 7");
        break;
      case "6":
        let punctuationCD_0_8 = document.getElementById("punctuationCD_0");
        punctuationCD_0_8.innerText = 8;
        let punctuationCD_1_8 = document.getElementById("punctuationCD_1");
        punctuationCD_1_8.innerText = 8;
        let punctuationCD_2_8 = document.getElementById("punctuationCD_2");
        punctuationCD_2_8.innerText = 8;
        console.log("La Puntuación Escalar de CD es: 8");
        break;
      case "7":
        let punctuationCD_0_11 = document.getElementById("punctuationCD_0");
        punctuationCD_0_11.innerText = 9;
        let punctuationCD_1_11 = document.getElementById("punctuationCD_1");
        punctuationCD_1_11.innerText = 9;
        let punctuationCD_2_11 = document.getElementById("punctuationCD_2");
        punctuationCD_2_11.innerText = 9;
        console.log("La Puntuación Escalar de CD es: 9");
        break;
      case "8":
      case "9":
        let punctuationCD_0_13 = document.getElementById("punctuationCD_0");
        punctuationCD_0_13.innerText = 10;
        let punctuationCD_1_13 = document.getElementById("punctuationCD_1");
        punctuationCD_1_13.innerText = 10;
        let punctuationCD_2_13 = document.getElementById("punctuationCD_2");
        punctuationCD_2_13.innerText = 10;
        console.log("La Puntuación Escalar de CD es: 10");
        break;
      case "10":
      case "11":
        let punctuationCD_0_15 = document.getElementById("punctuationCD_0");
        punctuationCD_0_15.innerText = 11;
        let punctuationCD_1_15 = document.getElementById("punctuationCD_1");
        punctuationCD_1_15.innerText = 11;
        let punctuationCD_2_15 = document.getElementById("punctuationCD_2");
        punctuationCD_2_15.innerText = 11;
        console.log("La Puntuación Escalar de CD es: 11");
        break;
      case "12":
        let punctuationCD_0_17 = document.getElementById("punctuationCD_0");
        punctuationCD_0_17.innerText = 12;
        let punctuationCD_1_17 = document.getElementById("punctuationCD_1");
        punctuationCD_1_17.innerText = 12;
        let punctuationCD_2_17 = document.getElementById("punctuationCD_2");
        punctuationCD_2_17.innerText = 12;
        console.log("La Puntuación Escalar de CD es: 12");
        break;
      case "13":
        let punctuationCD_0_20 = document.getElementById("punctuationCD_0");
        punctuationCD_0_20.innerText = 13;
        let punctuationCD_1_20 = document.getElementById("punctuationCD_1");
        punctuationCD_1_20.innerText = 13;
        let punctuationCD_2_20 = document.getElementById("punctuationCD_2");
        punctuationCD_2_20.innerText = 13;
        console.log("La Puntuación Escalar de CD es: 13");
        break;
      case "14":
        let punctuationCD_0_24 = document.getElementById("punctuationCD_0");
        punctuationCD_0_24.innerText = 14;
        let punctuationCD_1_24 = document.getElementById("punctuationCD_1");
        punctuationCD_1_24.innerText = 14;
        let punctuationCD_2_24 = document.getElementById("punctuationCD_2");
        punctuationCD_2_24.innerText = 14;
        console.log("La Puntuación Escalar de CD es: 14");
        break;
      case "15":
        let punctuationCD_0_29 = document.getElementById("punctuationCD_0");
        punctuationCD_0_29.innerText = 15;
        let punctuationCD_1_29 = document.getElementById("punctuationCD_1");
        punctuationCD_1_29.innerText = 15;
        let punctuationCD_2_29 = document.getElementById("punctuationCD_2");
        punctuationCD_2_29.innerText = 15;
        console.log("La Puntuación Escalar de CD es: 15");
        break;
      case "16":
      case "17":
        let punctuationCD_0_34 = document.getElementById("punctuationCD_0");
        punctuationCD_0_34.innerText = 16;
        let punctuationCD_1_34 = document.getElementById("punctuationCD_1");
        punctuationCD_1_34.innerText = 16;
        let punctuationCD_2_34 = document.getElementById("punctuationCD_2");
        punctuationCD_2_34.innerText = 16;
        console.log("La Puntuación Escalar de CD es: 16");
        break;
      case "18":
        let punctuationCD_0_40 = document.getElementById("punctuationCD_0");
        punctuationCD_0_40.innerText = 17;
        let punctuationCD_1_40 = document.getElementById("punctuationCD_1");
        punctuationCD_1_40.innerText = 17;
        let punctuationCD_2_40 = document.getElementById("punctuationCD_2");
        punctuationCD_2_40.innerText = 17;
        console.log("La Puntuación Escalar de CD es: 17");
        break;
      case "19":
        let punctuationCD_0_46 = document.getElementById("punctuationCD_0");
        punctuationCD_0_46.innerText = 18;
        let punctuationCD_1_46 = document.getElementById("punctuationCD_1");
        punctuationCD_1_46.innerText = 18;
        let punctuationCD_2_46 = document.getElementById("punctuationCD_2");
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
        let punctuationCD_0_53 = document.getElementById("punctuationCD_0");
        punctuationCD_0_53.innerText = 19;
        let punctuationCD_1_53 = document.getElementById("punctuationCD_1");
        punctuationCD_1_53.innerText = 19;
        let punctuationCD_2_53 = document.getElementById("punctuationCD_2");
        punctuationCD_2_53.innerText = 19;
        console.log("La Puntuación Escalar de CD es: 19");
        break;
      default:
        alert(
          "La Puntuación de CD no corresponde a ninguna equivalencia, verifica lo que has colocado."
        );
        break;
    }
    //..........C L A V E S..........//
    console.log("La Puntuación Natural de CL es: " + valueinputCL);
    switch (valueinputCL) {
      case "0":
      case "1":
      case "2":
      case "3":
        let punctuationCL_0_0 = document.getElementById("punctuationCL_0");
        punctuationCL_0_0.innerText = 1;
        let punctuationCL_1_0 = document.getElementById("punctuationCL_1");
        punctuationCL_1_0.innerText = 1;
        let punctuationCL_2_0 = document.getElementById("punctuationCL_2");
        punctuationCL_2_0.innerText = 1;
        console.log("La Puntuación Escalar de CL es: 1");
        break;
      case "4":
      case "5":
      case "6":
        let punctuationCL_0_1 = document.getElementById("punctuationCL_0");
        punctuationCL_0_1.innerText = 2;
        let punctuationCL_1_1 = document.getElementById("punctuationCL_1");
        punctuationCL_1_1.innerText = 2;
        let punctuationCL_2_1 = document.getElementById("punctuationCL_2");
        punctuationCL_2_1.innerText = 2;
        console.log("La Puntuación Escalar de CL es: 2");
        break;
      case "7":
      case "8":
      case "9":
      case "10":
        let punctuationCL_0_2 = document.getElementById("punctuationCL_0");
        punctuationCL_0_2.innerText = 3;
        let punctuationCL_1_2 = document.getElementById("punctuationCL_1");
        punctuationCL_1_2.innerText = 3;
        let punctuationCL_2_2 = document.getElementById("punctuationCL_2");
        punctuationCL_2_2.innerText = 3;
        console.log("La Puntuación Escalar de CL es: 3");
        break;
      case "11":
      case "12":
      case "13":
        let punctuationCL_0_3 = document.getElementById("punctuationCL_0");
        punctuationCL_0_3.innerText = 4;
        let punctuationCL_1_3 = document.getElementById("punctuationCL_1");
        punctuationCL_1_3.innerText = 4;
        let punctuationCL_2_3 = document.getElementById("punctuationCL_2");
        punctuationCL_2_3.innerText = 4;
        console.log("La Puntuación Escalar de CL es: 4");
        break;
      case "14":
      case "15":
        let punctuationCL_0_4 = document.getElementById("punctuationCL_0");
        punctuationCL_0_4.innerText = 5;
        let punctuationCL_1_4 = document.getElementById("punctuationCL_1");
        punctuationCL_1_4.innerText = 5;
        let punctuationCL_2_4 = document.getElementById("punctuationCL_2");
        punctuationCL_2_4.innerText = 5;
        console.log("La Puntuación Escalar de CL es: 5");
        break;
      case "16":
      case "17":
      case "18":
        let punctuationCL_0_5 = document.getElementById("punctuationCL_0");
        punctuationCL_0_5.innerText = 6;
        let punctuationCL_1_5 = document.getElementById("punctuationCL_1");
        punctuationCL_1_5.innerText = 6;
        let punctuationCL_2_5 = document.getElementById("punctuationCL_2");
        punctuationCL_2_5.innerText = 6;
        console.log("La Puntuación Escalar de CL es: 6");
        break;
      case "19":
      case "20":
      case "21":
      case "22":
        let punctuationCL_0_6 = document.getElementById("punctuationCL_0");
        punctuationCL_0_6.innerText = 7;
        let punctuationCL_1_6 = document.getElementById("punctuationCL_1");
        punctuationCL_1_6.innerText = 7;
        let punctuationCL_2_6 = document.getElementById("punctuationCL_2");
        punctuationCL_2_6.innerText = 7;
        console.log("La Puntuación Escalar de CL es: 7");
        break;
      case "23":
      case "24":
      case "25":
      case "26":
      case "27":
        let punctuationCL_0_8 = document.getElementById("punctuationCL_0");
        punctuationCL_0_8.innerText = 8;
        let punctuationCL_1_8 = document.getElementById("punctuationCL_1");
        punctuationCL_1_8.innerText = 8;
        let punctuationCL_2_8 = document.getElementById("punctuationCL_2");
        punctuationCL_2_8.innerText = 8;
        console.log("La Puntuación Escalar de CL es: 8");
        break;
      case "28":
      case "29":
      case "30":
      case "31":
      case "32":
        let punctuationCL_0_11 = document.getElementById("punctuationCL_0");
        punctuationCL_0_11.innerText = 9;
        let punctuationCL_1_11 = document.getElementById("punctuationCL_1");
        punctuationCL_1_11.innerText = 9;
        let punctuationCL_2_11 = document.getElementById("punctuationCL_2");
        punctuationCL_2_11.innerText = 9;
        console.log("La Puntuación Escalar de CL es: 9");
        break;
      case "33":
      case "34":
      case "35":
      case "36":
      case "37":
        let punctuationCL_0_13 = document.getElementById("punctuationCL_0");
        punctuationCL_0_13.innerText = 10;
        let punctuationCL_1_13 = document.getElementById("punctuationCL_1");
        punctuationCL_1_13.innerText = 10;
        let punctuationCL_2_13 = document.getElementById("punctuationCL_2");
        punctuationCL_2_13.innerText = 10;
        console.log("La Puntuación Escalar de CL es: 10");
        break;
      case "38":
      case "39":
      case "40":
      case "41":
      case "42":
        let punctuationCL_0_15 = document.getElementById("punctuationCL_0");
        punctuationCL_0_15.innerText = 11;
        let punctuationCL_1_15 = document.getElementById("punctuationCL_1");
        punctuationCL_1_15.innerText = 11;
        let punctuationCL_2_15 = document.getElementById("punctuationCL_2");
        punctuationCL_2_15.innerText = 11;
        console.log("La Puntuación Escalar de CL es: 11");
        break;
      case "43":
      case "44":
      case "45":
      case "46":
      case "47":
        let punctuationCL_0_17 = document.getElementById("punctuationCL_0");
        punctuationCL_0_17.innerText = 12;
        let punctuationCL_1_17 = document.getElementById("punctuationCL_1");
        punctuationCL_1_17.innerText = 12;
        let punctuationCL_2_17 = document.getElementById("punctuationCL_2");
        punctuationCL_2_17.innerText = 12;
        console.log("La Puntuación Escalar de CL es: 12");
        break;
      case "48":
      case "49":
      case "50":
      case "51":
        let punctuationCL_0_20 = document.getElementById("punctuationCL_0");
        punctuationCL_0_20.innerText = 13;
        let punctuationCL_1_20 = document.getElementById("punctuationCL_1");
        punctuationCL_1_20.innerText = 13;
        let punctuationCL_2_20 = document.getElementById("punctuationCL_2");
        punctuationCL_2_20.innerText = 13;
        console.log("La Puntuación Escalar de CL es: 13");
        break;
      case "52":
      case "53":
      case "54":
      case "55":
        let punctuationCL_0_24 = document.getElementById("punctuationCL_0");
        punctuationCL_0_24.innerText = 14;
        let punctuationCL_1_24 = document.getElementById("punctuationCL_1");
        punctuationCL_1_24.innerText = 14;
        let punctuationCL_2_24 = document.getElementById("punctuationCL_2");
        punctuationCL_2_24.innerText = 14;
        console.log("La Puntuación Escalar de CL es: 14");
        break;
      case "56":
      case "57":
      case "58":
        let punctuationCL_0_29 = document.getElementById("punctuationCL_0");
        punctuationCL_0_29.innerText = 15;
        let punctuationCL_1_29 = document.getElementById("punctuationCL_1");
        punctuationCL_1_29.innerText = 15;
        let punctuationCL_2_29 = document.getElementById("punctuationCL_2");
        punctuationCL_2_29.innerText = 15;
        console.log("La Puntuación Escalar de CL es: 15");
        break;
      case "59":
      case "60":
      case "61":
        let punctuationCL_0_34 = document.getElementById("punctuationCL_0");
        punctuationCL_0_34.innerText = 16;
        let punctuationCL_1_34 = document.getElementById("punctuationCL_1");
        punctuationCL_1_34.innerText = 16;
        let punctuationCL_2_34 = document.getElementById("punctuationCL_2");
        punctuationCL_2_34.innerText = 16;
        console.log("La Puntuación Escalar de CL es: 16");
        break;
      case "62":
      case "63":
        let punctuationCL_0_40 = document.getElementById("punctuationCL_0");
        punctuationCL_0_40.innerText = 17;
        let punctuationCL_1_40 = document.getElementById("punctuationCL_1");
        punctuationCL_1_40.innerText = 17;
        let punctuationCL_2_40 = document.getElementById("punctuationCL_2");
        punctuationCL_2_40.innerText = 17;
        console.log("La Puntuación Escalar de CL es: 17");
        break;
      case "64":
        let punctuationCL_0_46 = document.getElementById("punctuationCL_0");
        punctuationCL_0_46.innerText = 18;
        let punctuationCL_1_46 = document.getElementById("punctuationCL_1");
        punctuationCL_1_46.innerText = 18;
        let punctuationCL_2_46 = document.getElementById("punctuationCL_2");
        punctuationCL_2_46.innerText = 18;
        console.log("La Puntuación Escalar de CL es: 18");
        break;
      case "65":
        let punctuationCL_0_53 = document.getElementById("punctuationCL_0");
        punctuationCL_0_53.innerText = 19;
        let punctuationCL_1_53 = document.getElementById("punctuationCL_1");
        punctuationCL_1_53.innerText = 19;
        let punctuationCL_2_53 = document.getElementById("punctuationCL_2");
        punctuationCL_2_53.innerText = 19;
        console.log("La Puntuación Escalar de CL es: 19");
        break;
      default:
        alert(
          "La Puntuación de CL no corresponde a ninguna equivalencia, verifica lo que has colocado."
        );
        break;
    }
    //..........V O C A B U L A R I O..........//
    console.log("La Puntuación Natural de VB es: " + valueinputVB);
    switch (valueinputVB) {
      case "0":
      case "1":
        let punctuationVB_0_0 = document.getElementById("punctuationVB_0");
        punctuationVB_0_0.innerText = 1;
        let punctuationVB_1_0 = document.getElementById("punctuationVB_1");
        punctuationVB_1_0.innerText = 1;
        let punctuationVB_2_0 = document.getElementById("punctuationVB_2");
        punctuationVB_2_0.innerText = 1;
        console.log("La Puntuación Escalar de VB es: 1");
        break;
      case "2":
      case "3":
        let punctuationVB_0_1 = document.getElementById("punctuationVB_0");
        punctuationVB_0_1.innerText = 2;
        let punctuationVB_1_1 = document.getElementById("punctuationVB_1");
        punctuationVB_1_1.innerText = 2;
        let punctuationVB_2_1 = document.getElementById("punctuationVB_2");
        punctuationVB_2_1.innerText = 2;
        console.log("La Puntuación Escalar de VB es: 2");
        break;
      case "4":
      case "5":
        let punctuationVB_0_2 = document.getElementById("punctuationVB_0");
        punctuationVB_0_2.innerText = 3;
        let punctuationVB_1_2 = document.getElementById("punctuationVB_1");
        punctuationVB_1_2.innerText = 3;
        let punctuationVB_2_2 = document.getElementById("punctuationVB_2");
        punctuationVB_2_2.innerText = 3;
        console.log("La Puntuación Escalar de VB es: 3");
        break;
      case "6":
      case "7":
        let punctuationVB_0_3 = document.getElementById("punctuationVB_0");
        punctuationVB_0_3.innerText = 4;
        let punctuationVB_1_3 = document.getElementById("punctuationVB_1");
        punctuationVB_1_3.innerText = 4;
        let punctuationVB_2_3 = document.getElementById("punctuationVB_2");
        punctuationVB_2_3.innerText = 4;
        console.log("La Puntuación Escalar de VB es: 4");
        break;
      case "8":
      case "9":
        let punctuationVB_0_4 = document.getElementById("punctuationVB_0");
        punctuationVB_0_4.innerText = 5;
        let punctuationVB_1_4 = document.getElementById("punctuationVB_1");
        punctuationVB_1_4.innerText = 5;
        let punctuationVB_2_4 = document.getElementById("punctuationVB_2");
        punctuationVB_2_4.innerText = 5;
        console.log("La Puntuación Escalar de VB es: 5");
        break;
      case "10":
      case "11":
        let punctuationVB_0_5 = document.getElementById("punctuationVB_0");
        punctuationVB_0_5.innerText = 6;
        let punctuationVB_1_5 = document.getElementById("punctuationVB_1");
        punctuationVB_1_5.innerText = 6;
        let punctuationVB_2_5 = document.getElementById("punctuationVB_2");
        punctuationVB_2_5.innerText = 6;
        console.log("La Puntuación Escalar de VB es: 6");
        break;
      case "12":
        let punctuationVB_0_6 = document.getElementById("punctuationVB_0");
        punctuationVB_0_6.innerText = 7;
        let punctuationVB_1_6 = document.getElementById("punctuationVB_1");
        punctuationVB_1_6.innerText = 7;
        let punctuationVB_2_6 = document.getElementById("punctuationVB_2");
        punctuationVB_2_6.innerText = 7;
        console.log("La Puntuación Escalar de VB es: 7");
        break;
      case "13":
      case "14":
        let punctuationVB_0_8 = document.getElementById("punctuationVB_0");
        punctuationVB_0_8.innerText = 8;
        let punctuationVB_1_8 = document.getElementById("punctuationVB_1");
        punctuationVB_1_8.innerText = 8;
        let punctuationVB_2_8 = document.getElementById("punctuationVB_2");
        punctuationVB_2_8.innerText = 8;
        console.log("La Puntuación Escalar de VB es: 8");
        break;
      case "15":
      case "16":
        let punctuationVB_0_11 = document.getElementById("punctuationVB_0");
        punctuationVB_0_11.innerText = 9;
        let punctuationVB_1_11 = document.getElementById("punctuationVB_1");
        punctuationVB_1_11.innerText = 9;
        let punctuationVB_2_11 = document.getElementById("punctuationVB_2");
        punctuationVB_2_11.innerText = 9;
        console.log("La Puntuación Escalar de VB es: 9");
        break;
      case "17":
        let punctuationVB_0_13 = document.getElementById("punctuationVB_0");
        punctuationVB_0_13.innerText = 10;
        let punctuationVB_1_13 = document.getElementById("punctuationVB_1");
        punctuationVB_1_13.innerText = 10;
        let punctuationVB_2_13 = document.getElementById("punctuationVB_2");
        punctuationVB_2_13.innerText = 10;
        console.log("La Puntuación Escalar de VB es: 10");
        break;
      case "18":
      case "19":
        let punctuationVB_0_15 = document.getElementById("punctuationVB_0");
        punctuationVB_0_15.innerText = 11;
        let punctuationVB_1_15 = document.getElementById("punctuationVB_1");
        punctuationVB_1_15.innerText = 11;
        let punctuationVB_2_15 = document.getElementById("punctuationVB_2");
        punctuationVB_2_15.innerText = 11;
        console.log("La Puntuación Escalar de VB es: 11");
        break;
      case "20":
      case "21":
        let punctuationVB_0_17 = document.getElementById("punctuationVB_0");
        punctuationVB_0_17.innerText = 12;
        let punctuationVB_1_17 = document.getElementById("punctuationVB_1");
        punctuationVB_1_17.innerText = 12;
        let punctuationVB_2_17 = document.getElementById("punctuationVB_2");
        punctuationVB_2_17.innerText = 12;
        console.log("La Puntuación Escalar de VB es: 12");
        break;
      case "22":
      case "23":
        let punctuationVB_0_20 = document.getElementById("punctuationVB_0");
        punctuationVB_0_20.innerText = 13;
        let punctuationVB_1_20 = document.getElementById("punctuationVB_1");
        punctuationVB_1_20.innerText = 13;
        let punctuationVB_2_20 = document.getElementById("punctuationVB_2");
        punctuationVB_2_20.innerText = 13;
        console.log("La Puntuación Escalar de VB es: 13");
        break;
      case "24":
      case "25":
        let punctuationVB_0_24 = document.getElementById("punctuationVB_0");
        punctuationVB_0_24.innerText = 14;
        let punctuationVB_1_24 = document.getElementById("punctuationVB_1");
        punctuationVB_1_24.innerText = 14;
        let punctuationVB_2_24 = document.getElementById("punctuationVB_2");
        punctuationVB_2_24.innerText = 14;
        console.log("La Puntuación Escalar de VB es: 14");
        break;
      case "26":
      case "27":
        let punctuationVB_0_29 = document.getElementById("punctuationVB_0");
        punctuationVB_0_29.innerText = 15;
        let punctuationVB_1_29 = document.getElementById("punctuationVB_1");
        punctuationVB_1_29.innerText = 15;
        let punctuationVB_2_29 = document.getElementById("punctuationVB_2");
        punctuationVB_2_29.innerText = 15;
        console.log("La Puntuación Escalar de VB es: 15");
        break;
      case "28":
      case "29":
        let punctuationVB_0_34 = document.getElementById("punctuationVB_0");
        punctuationVB_0_34.innerText = 16;
        let punctuationVB_1_34 = document.getElementById("punctuationVB_1");
        punctuationVB_1_34.innerText = 16;
        let punctuationVB_2_34 = document.getElementById("punctuationVB_2");
        punctuationVB_2_34.innerText = 16;
        console.log("La Puntuación Escalar de VB es: 16");
        break;
      case "30":
      case "31":
        let punctuationVB_0_40 = document.getElementById("punctuationVB_0");
        punctuationVB_0_40.innerText = 17;
        let punctuationVB_1_40 = document.getElementById("punctuationVB_1");
        punctuationVB_1_40.innerText = 17;
        let punctuationVB_2_40 = document.getElementById("punctuationVB_2");
        punctuationVB_2_40.innerText = 17;
        console.log("La Puntuación Escalar de VB es: 17");
        break;
      case "32":
      case "33":
        let punctuationVB_0_46 = document.getElementById("punctuationVB_0");
        punctuationVB_0_46.innerText = 18;
        let punctuationVB_1_46 = document.getElementById("punctuationVB_1");
        punctuationVB_1_46.innerText = 18;
        let punctuationVB_2_46 = document.getElementById("punctuationVB_2");
        punctuationVB_2_46.innerText = 18;
        console.log("La Puntuación Escalar de VB es: 18");
        break;
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
      case "45":
      case "46":
      case "47":
      case "48":
      case "49":
      case "50":
      case "51":
      case "52":
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
        let punctuationVB_0_53 = document.getElementById("punctuationVB_0");
        punctuationVB_0_53.innerText = 19;
        let punctuationVB_1_53 = document.getElementById("punctuationVB_1");
        punctuationVB_1_53.innerText = 19;
        let punctuationVB_2_53 = document.getElementById("punctuationVB_2");
        punctuationVB_2_53.innerText = 19;
        console.log("La Puntuación Escalar de VB es: 19");
        break;
      default:
        alert(
          "La Puntuación de VB no corresponde a ninguna equivalencia, verifica lo que has colocado."
        );
        break;
    }
    //..........S U C E S I O N - D E - N U M E R O S - Y - L E T R A S..........//
    console.log("La Puntuación Natural de NL es: " + valueinputNL);
    switch (valueinputNL) {
      case "":
        let punctuationNL_0_0 = document.getElementById("punctuationNL_0");
        punctuationNL_0_0.innerText = 1;
        let punctuationNL_1_0 = document.getElementById("punctuationNL_1");
        punctuationNL_1_0.innerText = 1;
        let punctuationNL_2_0 = document.getElementById("punctuationNL_2");
        punctuationNL_2_0.innerText = 1;
        console.log("La Puntuación Escalar de NL es: 1");
        break;
      case "0":
        let punctuationNL_0_1 = document.getElementById("punctuationNL_0");
        punctuationNL_0_1.innerText = 2;
        let punctuationNL_1_1 = document.getElementById("punctuationNL_1");
        punctuationNL_1_1.innerText = 2;
        let punctuationNL_2_1 = document.getElementById("punctuationNL_2");
        punctuationNL_2_1.innerText = 2;
        console.log("La Puntuación Escalar de NL es: 2");
        break;
      case "0.5":
        let punctuationNL_0_2 = document.getElementById("punctuationNL_0");
        punctuationNL_0_2.innerText = 3;
        let punctuationNL_1_2 = document.getElementById("punctuationNL_1");
        punctuationNL_1_2.innerText = 3;
        let punctuationNL_2_2 = document.getElementById("punctuationNL_2");
        punctuationNL_2_2.innerText = 3;
        console.log("La Puntuación Escalar de NL es: 3");
        break;
      case "1":
        let punctuationNL_0_3 = document.getElementById("punctuationNL_0");
        punctuationNL_0_3.innerText = 4;
        let punctuationNL_1_3 = document.getElementById("punctuationNL_1");
        punctuationNL_1_3.innerText = 4;
        let punctuationNL_2_3 = document.getElementById("punctuationNL_2");
        punctuationNL_2_3.innerText = 4;
        console.log("La Puntuación Escalar de NL es: 4");
        break;
      case "2":
        let punctuationNL_0_4 = document.getElementById("punctuationNL_0");
        punctuationNL_0_4.innerText = 5;
        let punctuationNL_1_4 = document.getElementById("punctuationNL_1");
        punctuationNL_1_4.innerText = 5;
        let punctuationNL_2_4 = document.getElementById("punctuationNL_2");
        punctuationNL_2_4.innerText = 5;
        console.log("La Puntuación Escalar de NL es: 5");
        break;
      case "3":
        let punctuationNL_0_5 = document.getElementById("punctuationNL_0");
        punctuationNL_0_5.innerText = 6;
        let punctuationNL_1_5 = document.getElementById("punctuationNL_1");
        punctuationNL_1_5.innerText = 6;
        let punctuationNL_2_5 = document.getElementById("punctuationNL_2");
        punctuationNL_2_5.innerText = 6;
        console.log("La Puntuación Escalar de NL es: 6");
        break;
      case "4":
        let punctuationNL_0_6 = document.getElementById("punctuationNL_0");
        punctuationNL_0_6.innerText = 7;
        let punctuationNL_1_6 = document.getElementById("punctuationNL_1");
        punctuationNL_1_6.innerText = 7;
        let punctuationNL_2_6 = document.getElementById("punctuationNL_2");
        punctuationNL_2_6.innerText = 7;
        console.log("La Puntuación Escalar de NL es: 7");
        break;
      case "5":
        let punctuationNL_0_8 = document.getElementById("punctuationNL_0");
        punctuationNL_0_8.innerText = 8;
        let punctuationNL_1_8 = document.getElementById("punctuationNL_1");
        punctuationNL_1_8.innerText = 8;
        let punctuationNL_2_8 = document.getElementById("punctuationNL_2");
        punctuationNL_2_8.innerText = 8;
        console.log("La Puntuación Escalar de NL es: 8");
        break;
      case "6":
      case "7":
        let punctuationNL_0_11 = document.getElementById("punctuationNL_0");
        punctuationNL_0_11.innerText = 9;
        let punctuationNL_1_11 = document.getElementById("punctuationNL_1");
        punctuationNL_1_11.innerText = 9;
        let punctuationNL_2_11 = document.getElementById("punctuationNL_2");
        punctuationNL_2_11.innerText = 9;
        console.log("La Puntuación Escalar de NL es: 9");
        break;
      case "8":
        let punctuationNL_0_13 = document.getElementById("punctuationNL_0");
        punctuationNL_0_13.innerText = 10;
        let punctuationNL_1_13 = document.getElementById("punctuationNL_1");
        punctuationNL_1_13.innerText = 10;
        let punctuationNL_2_13 = document.getElementById("punctuationNL_2");
        punctuationNL_2_13.innerText = 10;
        console.log("La Puntuación Escalar de NL es: 10");
        break;
      case "9":
        let punctuationNL_0_15 = document.getElementById("punctuationNL_0");
        punctuationNL_0_15.innerText = 11;
        let punctuationNL_1_15 = document.getElementById("punctuationNL_1");
        punctuationNL_1_15.innerText = 11;
        let punctuationNL_2_15 = document.getElementById("punctuationNL_2");
        punctuationNL_2_15.innerText = 11;
        console.log("La Puntuación Escalar de NL es: 11");
        break;
      case "10":
      case "11":
        let punctuationNL_0_17 = document.getElementById("punctuationNL_0");
        punctuationNL_0_17.innerText = 12;
        let punctuationNL_1_17 = document.getElementById("punctuationNL_1");
        punctuationNL_1_17.innerText = 12;
        let punctuationNL_2_17 = document.getElementById("punctuationNL_2");
        punctuationNL_2_17.innerText = 12;
        console.log("La Puntuación Escalar de NL es: 12");
        break;
      case "12":
        let punctuationNL_0_20 = document.getElementById("punctuationNL_0");
        punctuationNL_0_20.innerText = 13;
        let punctuationNL_1_20 = document.getElementById("punctuationNL_1");
        punctuationNL_1_20.innerText = 13;
        let punctuationNL_2_20 = document.getElementById("punctuationNL_2");
        punctuationNL_2_20.innerText = 13;
        console.log("La Puntuación Escalar de NL es: 13");
        break;
      case "13":
      case "14":
        let punctuationNL_0_24 = document.getElementById("punctuationNL_0");
        punctuationNL_0_24.innerText = 14;
        let punctuationNL_1_24 = document.getElementById("punctuationNL_1");
        punctuationNL_1_24.innerText = 14;
        let punctuationNL_2_24 = document.getElementById("punctuationNL_2");
        punctuationNL_2_24.innerText = 14;
        console.log("La Puntuación Escalar de NL es: 14");
        break;
      case "15":
        let punctuationNL_0_29 = document.getElementById("punctuationNL_0");
        punctuationNL_0_29.innerText = 15;
        let punctuationNL_1_29 = document.getElementById("punctuationNL_1");
        punctuationNL_1_29.innerText = 15;
        let punctuationNL_2_29 = document.getElementById("punctuationNL_2");
        punctuationNL_2_29.innerText = 15;
        console.log("La Puntuación Escalar de NL es: 15");
        break;
      case "16":
        let punctuationNL_0_34 = document.getElementById("punctuationNL_0");
        punctuationNL_0_34.innerText = 16;
        let punctuationNL_1_34 = document.getElementById("punctuationNL_1");
        punctuationNL_1_34.innerText = 16;
        let punctuationNL_2_34 = document.getElementById("punctuationNL_2");
        punctuationNL_2_34.innerText = 16;
        console.log("La Puntuación Escalar de NL es: 16");
        break;
      case "17":
        let punctuationNL_0_40 = document.getElementById("punctuationNL_0");
        punctuationNL_0_40.innerText = 17;
        let punctuationNL_1_40 = document.getElementById("punctuationNL_1");
        punctuationNL_1_40.innerText = 17;
        let punctuationNL_2_40 = document.getElementById("punctuationNL_2");
        punctuationNL_2_40.innerText = 17;
        console.log("La Puntuación Escalar de NL es: 17");
        break;
      case "18":
        let punctuationNL_0_46 = document.getElementById("punctuationNL_0");
        punctuationNL_0_46.innerText = 18;
        let punctuationNL_1_46 = document.getElementById("punctuationNL_1");
        punctuationNL_1_46.innerText = 18;
        let punctuationNL_2_46 = document.getElementById("punctuationNL_2");
        punctuationNL_2_46.innerText = 18;
        console.log("La Puntuación Escalar de NL es: 18");
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
        let punctuationNL_0_53 = document.getElementById("punctuationNL_0");
        punctuationNL_0_53.innerText = 19;
        let punctuationNL_1_53 = document.getElementById("punctuationNL_1");
        punctuationNL_1_53.innerText = 19;
        let punctuationNL_2_53 = document.getElementById("punctuationNL_2");
        punctuationNL_2_53.innerText = 19;
        console.log("La Puntuación Escalar de NL es: 19");
        break;
      default:
        alert(
          "La Puntuación de NL no corresponde a ninguna equivalencia, verifica lo que has colocado."
        );
        break;
    }
    //..........M A T R I C E S..........//
    console.log("La Puntuación Natural de MT es: " + valueinputMT);
    switch (valueinputMT) {
      case "0":
        let punctuationMT_0_0 = document.getElementById("punctuationMT_0");
        punctuationMT_0_0.innerText = 1;
        let punctuationMT_1_0 = document.getElementById("punctuationMT_1");
        punctuationMT_1_0.innerText = 1;
        let punctuationMT_2_0 = document.getElementById("punctuationMT_2");
        punctuationMT_2_0.innerText = 1;
        console.log("La Puntuación Escalar de MT es: 1");
        break;
      case "1":
        let punctuationMT_0_1 = document.getElementById("punctuationMT_0");
        punctuationMT_0_1.innerText = 2;
        let punctuationMT_1_1 = document.getElementById("punctuationMT_1");
        punctuationMT_1_1.innerText = 2;
        let punctuationMT_2_1 = document.getElementById("punctuationMT_2");
        punctuationMT_2_1.innerText = 2;
        console.log("La Puntuación Escalar de MT es: 2");
        break;
      case "1.5":
        let punctuationMT_0_2 = document.getElementById("punctuationMT_0");
        punctuationMT_0_2.innerText = 3;
        let punctuationMT_1_2 = document.getElementById("punctuationMT_1");
        punctuationMT_1_2.innerText = 3;
        let punctuationMT_2_2 = document.getElementById("punctuationMT_2");
        punctuationMT_2_2.innerText = 3;
        console.log("La Puntuación Escalar de MT es: 3");
        break;
      case "2":
        let punctuationMT_0_3 = document.getElementById("punctuationMT_0");
        punctuationMT_0_3.innerText = 4;
        let punctuationMT_1_3 = document.getElementById("punctuationMT_1");
        punctuationMT_1_3.innerText = 4;
        let punctuationMT_2_3 = document.getElementById("punctuationMT_2");
        punctuationMT_2_3.innerText = 4;
        console.log("La Puntuación Escalar de MT es: 4");
        break;
      case "3":
        let punctuationMT_0_4 = document.getElementById("punctuationMT_0");
        punctuationMT_0_4.innerText = 5;
        let punctuationMT_1_4 = document.getElementById("punctuationMT_1");
        punctuationMT_1_4.innerText = 5;
        let punctuationMT_2_4 = document.getElementById("punctuationMT_2");
        punctuationMT_2_4.innerText = 5;
        console.log("La Puntuación Escalar de MT es: 5");
        break;
      case "4":
        let punctuationMT_0_5 = document.getElementById("punctuationMT_0");
        punctuationMT_0_5.innerText = 6;
        let punctuationMT_1_5 = document.getElementById("punctuationMT_1");
        punctuationMT_1_5.innerText = 6;
        let punctuationMT_2_5 = document.getElementById("punctuationMT_2");
        punctuationMT_2_5.innerText = 6;
        console.log("La Puntuación Escalar de MT es: 6");
        break;
      case "5":
        let punctuationMT_0_6 = document.getElementById("punctuationMT_0");
        punctuationMT_0_6.innerText = 7;
        let punctuationMT_1_6 = document.getElementById("punctuationMT_1");
        punctuationMT_1_6.innerText = 7;
        let punctuationMT_2_6 = document.getElementById("punctuationMT_2");
        punctuationMT_2_6.innerText = 7;
        console.log("La Puntuación Escalar de MT es: 7");
        break;
      case "6":
      case "7":
        let punctuationMT_0_8 = document.getElementById("punctuationMT_0");
        punctuationMT_0_8.innerText = 8;
        let punctuationMT_1_8 = document.getElementById("punctuationMT_1");
        punctuationMT_1_8.innerText = 8;
        let punctuationMT_2_8 = document.getElementById("punctuationMT_2");
        punctuationMT_2_8.innerText = 8;
        console.log("La Puntuación Escalar de MT es: 8");
        break;
      case "8":
        let punctuationMT_0_11 = document.getElementById("punctuationMT_0");
        punctuationMT_0_11.innerText = 9;
        let punctuationMT_1_11 = document.getElementById("punctuationMT_1");
        punctuationMT_1_11.innerText = 9;
        let punctuationMT_2_11 = document.getElementById("punctuationMT_2");
        punctuationMT_2_11.innerText = 9;
        console.log("La Puntuación Escalar de MT es: 9");
        break;
      case "9":
      case "10":
        let punctuationMT_0_13 = document.getElementById("punctuationMT_0");
        punctuationMT_0_13.innerText = 10;
        let punctuationMT_1_13 = document.getElementById("punctuationMT_1");
        punctuationMT_1_13.innerText = 10;
        let punctuationMT_2_13 = document.getElementById("punctuationMT_2");
        punctuationMT_2_13.innerText = 10;
        console.log("La Puntuación Escalar de MT es: 10");
        break;
      case "11":
        let punctuationMT_0_15 = document.getElementById("punctuationMT_0");
        punctuationMT_0_15.innerText = 11;
        let punctuationMT_1_15 = document.getElementById("punctuationMT_1");
        punctuationMT_1_15.innerText = 11;
        let punctuationMT_2_15 = document.getElementById("punctuationMT_2");
        punctuationMT_2_15.innerText = 11;
        console.log("La Puntuación Escalar de MT es: 11");
        break;
      case "12":
        let punctuationMT_0_17 = document.getElementById("punctuationMT_0");
        punctuationMT_0_17.innerText = 12;
        let punctuationMT_1_17 = document.getElementById("punctuationMT_1");
        punctuationMT_1_17.innerText = 12;
        let punctuationMT_2_17 = document.getElementById("punctuationMT_2");
        punctuationMT_2_17.innerText = 12;
        console.log("La Puntuación Escalar de MT es: 12");
        break;
      case "13":
      case "14":
        let punctuationMT_0_20 = document.getElementById("punctuationMT_0");
        punctuationMT_0_20.innerText = 13;
        let punctuationMT_1_20 = document.getElementById("punctuationMT_1");
        punctuationMT_1_20.innerText = 13;
        let punctuationMT_2_20 = document.getElementById("punctuationMT_2");
        punctuationMT_2_20.innerText = 13;
        console.log("La Puntuación Escalar de MT es: 13");
        break;
      case "15":
      case "16":
        let punctuationMT_0_24 = document.getElementById("punctuationMT_0");
        punctuationMT_0_24.innerText = 14;
        let punctuationMT_1_24 = document.getElementById("punctuationMT_1");
        punctuationMT_1_24.innerText = 14;
        let punctuationMT_2_24 = document.getElementById("punctuationMT_2");
        punctuationMT_2_24.innerText = 14;
        console.log("La Puntuación Escalar de MT es: 14");
        break;
      case "17":
        let punctuationMT_0_29 = document.getElementById("punctuationMT_0");
        punctuationMT_0_29.innerText = 15;
        let punctuationMT_1_29 = document.getElementById("punctuationMT_1");
        punctuationMT_1_29.innerText = 15;
        let punctuationMT_2_29 = document.getElementById("punctuationMT_2");
        punctuationMT_2_29.innerText = 15;
        console.log("La Puntuación Escalar de MT es: 15");
        break;
      case "18":
        let punctuationMT_0_34 = document.getElementById("punctuationMT_0");
        punctuationMT_0_34.innerText = 16;
        let punctuationMT_1_34 = document.getElementById("punctuationMT_1");
        punctuationMT_1_34.innerText = 16;
        let punctuationMT_2_34 = document.getElementById("punctuationMT_2");
        punctuationMT_2_34.innerText = 16;
        console.log("La Puntuación Escalar de MT es: 16");
        break;
      case "19":
      case "20":
        let punctuationMT_0_40 = document.getElementById("punctuationMT_0");
        punctuationMT_0_40.innerText = 17;
        let punctuationMT_1_40 = document.getElementById("punctuationMT_1");
        punctuationMT_1_40.innerText = 17;
        let punctuationMT_2_40 = document.getElementById("punctuationMT_2");
        punctuationMT_2_40.innerText = 17;
        console.log("La Puntuación Escalar de MT es: 17");
        break;
      case "21":
        let punctuationMT_0_46 = document.getElementById("punctuationMT_0");
        punctuationMT_0_46.innerText = 18;
        let punctuationMT_1_46 = document.getElementById("punctuationMT_1");
        punctuationMT_1_46.innerText = 18;
        let punctuationMT_2_46 = document.getElementById("punctuationMT_2");
        punctuationMT_2_46.innerText = 18;
        console.log("La Puntuación Escalar de MT es: 18");
        break;
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
      case "33":
      case "34":
      case "35":
        let punctuationMT_0_53 = document.getElementById("punctuationMT_0");
        punctuationMT_0_53.innerText = 19;
        let punctuationMT_1_53 = document.getElementById("punctuationMT_1");
        punctuationMT_1_53.innerText = 19;
        let punctuationMT_2_53 = document.getElementById("punctuationMT_2");
        punctuationMT_2_53.innerText = 19;
        console.log("La Puntuación Escalar de MT es: 19");
        break;
      default:
        alert(
          "La Puntuación de MT no corresponde a ninguna equivalencia, verifica lo que has colocado."
        );
        break;
    }
    //..........C O M P R E N S I O N..........//
    console.log("La Puntuación Natural de CM es: " + valueinputCM);
    switch (valueinputCM) {
      case "0":
        let punctuationCM_0_0 = document.getElementById("punctuationCM_0");
        punctuationCM_0_0.innerText = 1;
        let punctuationCM_1_0 = document.getElementById("punctuationCM_1");
        punctuationCM_1_0.innerText = 1;
        let punctuationCM_2_0 = document.getElementById("punctuationCM_2");
        punctuationCM_2_0.innerText = 1;
        console.log("La Puntuación Escalar de CM es: 1");
        break;
      case "1":
        let punctuationCM_0_1 = document.getElementById("punctuationCM_0");
        punctuationCM_0_1.innerText = 2;
        let punctuationCM_1_1 = document.getElementById("punctuationCM_1");
        punctuationCM_1_1.innerText = 2;
        let punctuationCM_2_1 = document.getElementById("punctuationCM_2");
        punctuationCM_2_1.innerText = 2;
        console.log("La Puntuación Escalar de CM es: 2");
        break;
      case "2":
        let punctuationCM_0_2 = document.getElementById("punctuationCM_0");
        punctuationCM_0_2.innerText = 3;
        let punctuationCM_1_2 = document.getElementById("punctuationCM_1");
        punctuationCM_1_2.innerText = 3;
        let punctuationCM_2_2 = document.getElementById("punctuationCM_2");
        punctuationCM_2_2.innerText = 3;
        console.log("La Puntuación Escalar de CM es: 3");
        break;
      case "3":
        let punctuationCM_0_3 = document.getElementById("punctuationCM_0");
        punctuationCM_0_3.innerText = 4;
        let punctuationCM_1_3 = document.getElementById("punctuationCM_1");
        punctuationCM_1_3.innerText = 4;
        let punctuationCM_2_3 = document.getElementById("punctuationCM_2");
        punctuationCM_2_3.innerText = 4;
        console.log("La Puntuación Escalar de CM es: 4");
        break;
      case "4":
        let punctuationCM_0_4 = document.getElementById("punctuationCM_0");
        punctuationCM_0_4.innerText = 5;
        let punctuationCM_1_4 = document.getElementById("punctuationCM_1");
        punctuationCM_1_4.innerText = 5;
        let punctuationCM_2_4 = document.getElementById("punctuationCM_2");
        punctuationCM_2_4.innerText = 5;
        console.log("La Puntuación Escalar de CM es: 5");
        break;
      case "5":
        let punctuationCM_0_5 = document.getElementById("punctuationCM_0");
        punctuationCM_0_5.innerText = 6;
        let punctuationCM_1_5 = document.getElementById("punctuationCM_1");
        punctuationCM_1_5.innerText = 6;
        let punctuationCM_2_5 = document.getElementById("punctuationCM_2");
        punctuationCM_2_5.innerText = 6;
        console.log("La Puntuación Escalar de CM es: 6");
        break;
      case "6":
      case "7":
        let punctuationCM_0_6 = document.getElementById("punctuationCM_0");
        punctuationCM_0_6.innerText = 7;
        let punctuationCM_1_6 = document.getElementById("punctuationCM_1");
        punctuationCM_1_6.innerText = 7;
        let punctuationCM_2_6 = document.getElementById("punctuationCM_2");
        punctuationCM_2_6.innerText = 7;
        console.log("La Puntuación Escalar de CM es: 7");
        break;
      case "8":
        let punctuationCM_0_8 = document.getElementById("punctuationCM_0");
        punctuationCM_0_8.innerText = 8;
        let punctuationCM_1_8 = document.getElementById("punctuationCM_1");
        punctuationCM_1_8.innerText = 8;
        let punctuationCM_2_8 = document.getElementById("punctuationCM_2");
        punctuationCM_2_8.innerText = 8;
        console.log("La Puntuación Escalar de CM es: 8");
        break;
      case "9":
        let punctuationCM_0_11 = document.getElementById("punctuationCM_0");
        punctuationCM_0_11.innerText = 9;
        let punctuationCM_1_11 = document.getElementById("punctuationCM_1");
        punctuationCM_1_11.innerText = 9;
        let punctuationCM_2_11 = document.getElementById("punctuationCM_2");
        punctuationCM_2_11.innerText = 9;
        console.log("La Puntuación Escalar de CM es: 9");
        break;
      case "10":
      case "11":
        let punctuationCM_0_13 = document.getElementById("punctuationCM_0");
        punctuationCM_0_13.innerText = 10;
        let punctuationCM_1_13 = document.getElementById("punctuationCM_1");
        punctuationCM_1_13.innerText = 10;
        let punctuationCM_2_13 = document.getElementById("punctuationCM_2");
        punctuationCM_2_13.innerText = 10;
        console.log("La Puntuación Escalar de CM es: 10");
        break;
      case "12":
      case "13":
        let punctuationCM_0_15 = document.getElementById("punctuationCM_0");
        punctuationCM_0_15.innerText = 11;
        let punctuationCM_1_15 = document.getElementById("punctuationCM_1");
        punctuationCM_1_15.innerText = 11;
        let punctuationCM_2_15 = document.getElementById("punctuationCM_2");
        punctuationCM_2_15.innerText = 11;
        console.log("La Puntuación Escalar de CM es: 11");
        break;
      case "14":
        let punctuationCM_0_17 = document.getElementById("punctuationCM_0");
        punctuationCM_0_17.innerText = 12;
        let punctuationCM_1_17 = document.getElementById("punctuationCM_1");
        punctuationCM_1_17.innerText = 12;
        let punctuationCM_2_17 = document.getElementById("punctuationCM_2");
        punctuationCM_2_17.innerText = 12;
        console.log("La Puntuación Escalar de CM es: 12");
        break;
      case "15":
      case "16":
        let punctuationCM_0_20 = document.getElementById("punctuationCM_0");
        punctuationCM_0_20.innerText = 13;
        let punctuationCM_1_20 = document.getElementById("punctuationCM_1");
        punctuationCM_1_20.innerText = 13;
        let punctuationCM_2_20 = document.getElementById("punctuationCM_2");
        punctuationCM_2_20.innerText = 13;
        console.log("La Puntuación Escalar de CM es: 13");
        break;
      case "17":
      case "18":
        let punctuationCM_0_24 = document.getElementById("punctuationCM_0");
        punctuationCM_0_24.innerText = 14;
        let punctuationCM_1_24 = document.getElementById("punctuationCM_1");
        punctuationCM_1_24.innerText = 14;
        let punctuationCM_2_24 = document.getElementById("punctuationCM_2");
        punctuationCM_2_24.innerText = 14;
        console.log("La Puntuación Escalar de CM es: 14");
        break;
      case "19":
        let punctuationCM_0_29 = document.getElementById("punctuationCM_0");
        punctuationCM_0_29.innerText = 15;
        let punctuationCM_1_29 = document.getElementById("punctuationCM_1");
        punctuationCM_1_29.innerText = 15;
        let punctuationCM_2_29 = document.getElementById("punctuationCM_2");
        punctuationCM_2_29.innerText = 15;
        console.log("La Puntuación Escalar de CM es: 15");
        break;
      case "20":
      case "21":
        let punctuationCM_0_34 = document.getElementById("punctuationCM_0");
        punctuationCM_0_34.innerText = 16;
        let punctuationCM_1_34 = document.getElementById("punctuationCM_1");
        punctuationCM_1_34.innerText = 16;
        let punctuationCM_2_34 = document.getElementById("punctuationCM_2");
        punctuationCM_2_34.innerText = 16;
        console.log("La Puntuación Escalar de CM es: 16");
        break;
      case "22":
        let punctuationCM_0_40 = document.getElementById("punctuationCM_0");
        punctuationCM_0_40.innerText = 17;
        let punctuationCM_1_40 = document.getElementById("punctuationCM_1");
        punctuationCM_1_40.innerText = 17;
        let punctuationCM_2_40 = document.getElementById("punctuationCM_2");
        punctuationCM_2_40.innerText = 17;
        console.log("La Puntuación Escalar de CM es: 17");
        break;
      case "23":
      case "24":
        let punctuationCM_0_46 = document.getElementById("punctuationCM_0");
        punctuationCM_0_46.innerText = 18;
        let punctuationCM_1_46 = document.getElementById("punctuationCM_1");
        punctuationCM_1_46.innerText = 18;
        let punctuationCM_2_46 = document.getElementById("punctuationCM_2");
        punctuationCM_2_46.innerText = 18;
        console.log("La Puntuación Escalar de CM es: 18");
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
        let punctuationCM_0_53 = document.getElementById("punctuationCM_0");
        punctuationCM_0_53.innerText = 19;
        let punctuationCM_1_53 = document.getElementById("punctuationCM_1");
        punctuationCM_1_53.innerText = 19;
        let punctuationCM_2_53 = document.getElementById("punctuationCM_2");
        punctuationCM_2_53.innerText = 19;
        console.log("La Puntuación Escalar de CM es: 19");
        break;
      default:
        alert(
          "La Puntuación de CM no corresponde a ninguna equivalencia, verifica lo que has colocado."
        );
        break;
    }
    //..........B U S Q U E D A - D E - S I M B O L O S..........//
    console.log("La Puntuación Natural de BS es: " + valueinputBS);
    switch (valueinputBS) {
      case "0":
        let punctuationBS_0_0 = document.getElementById("punctuationBS_0");
        punctuationBS_0_0.innerText = 1;
        let punctuationBS_1_0 = document.getElementById("punctuationBS_1");
        punctuationBS_1_0.innerText = 1;
        let punctuationBS_2_0 = document.getElementById("punctuationBS_2");
        punctuationBS_2_0.innerText = 1;
        console.log("La Puntuación Escalar de BS es: 1");
        break;
      case "1":
        let punctuationBS_0_1 = document.getElementById("punctuationBS_0");
        punctuationBS_0_1.innerText = 2;
        let punctuationBS_1_1 = document.getElementById("punctuationBS_1");
        punctuationBS_1_1.innerText = 2;
        let punctuationBS_2_1 = document.getElementById("punctuationBS_2");
        punctuationBS_2_1.innerText = 2;
        console.log("La Puntuación Escalar de BS es: 2");
        break;
      case "1.5":
        let punctuationBS_0_2 = document.getElementById("punctuationBS_0");
        punctuationBS_0_2.innerText = 3;
        let punctuationBS_1_2 = document.getElementById("punctuationBS_1");
        punctuationBS_1_2.innerText = 3;
        let punctuationBS_2_2 = document.getElementById("punctuationBS_2");
        punctuationBS_2_2.innerText = 3;
        console.log("La Puntuación Escalar de BS es: 3");
        break;
      case "2":
        let punctuationBS_0_3 = document.getElementById("punctuationBS_0");
        punctuationBS_0_3.innerText = 4;
        let punctuationBS_1_3 = document.getElementById("punctuationBS_1");
        punctuationBS_1_3.innerText = 4;
        let punctuationBS_2_3 = document.getElementById("punctuationBS_2");
        punctuationBS_2_3.innerText = 4;
        console.log("La Puntuación Escalar de BS es: 4");
        break;
      case "3":
        let punctuationBS_0_4 = document.getElementById("punctuationBS_0");
        punctuationBS_0_4.innerText = 5;
        let punctuationBS_1_4 = document.getElementById("punctuationBS_1");
        punctuationBS_1_4.innerText = 5;
        let punctuationBS_2_4 = document.getElementById("punctuationBS_2");
        punctuationBS_2_4.innerText = 5;
        console.log("La Puntuación Escalar de BS es: 5");
        break;
      case "4":
      case "5":
        let punctuationBS_0_5 = document.getElementById("punctuationBS_0");
        punctuationBS_0_5.innerText = 6;
        let punctuationBS_1_5 = document.getElementById("punctuationBS_1");
        punctuationBS_1_5.innerText = 6;
        let punctuationBS_2_5 = document.getElementById("punctuationBS_2");
        punctuationBS_2_5.innerText = 6;
        console.log("La Puntuación Escalar de BS es: 6");
        break;
      case "6":
      case "7":
      case "8":
        let punctuationBS_0_6 = document.getElementById("punctuationBS_0");
        punctuationBS_0_6.innerText = 7;
        let punctuationBS_1_6 = document.getElementById("punctuationBS_1");
        punctuationBS_1_6.innerText = 7;
        let punctuationBS_2_6 = document.getElementById("punctuationBS_2");
        punctuationBS_2_6.innerText = 7;
        console.log("La Puntuación Escalar de BS es: 7");
        break;
      case "9":
      case "10":
      case "11":
        let punctuationBS_0_8 = document.getElementById("punctuationBS_0");
        punctuationBS_0_8.innerText = 8;
        let punctuationBS_1_8 = document.getElementById("punctuationBS_1");
        punctuationBS_1_8.innerText = 8;
        let punctuationBS_2_8 = document.getElementById("punctuationBS_2");
        punctuationBS_2_8.innerText = 8;
        console.log("La Puntuación Escalar de BS es: 8");
        break;
      case "12":
      case "13":
        let punctuationBS_0_11 = document.getElementById("punctuationBS_0");
        punctuationBS_0_11.innerText = 9;
        let punctuationBS_1_11 = document.getElementById("punctuationBS_1");
        punctuationBS_1_11.innerText = 9;
        let punctuationBS_2_11 = document.getElementById("punctuationBS_2");
        punctuationBS_2_11.innerText = 9;
        console.log("La Puntuación Escalar de BS es: 9");
        break;
      case "14":
      case "15":
      case "16":
        let punctuationBS_0_13 = document.getElementById("punctuationBS_0");
        punctuationBS_0_13.innerText = 10;
        let punctuationBS_1_13 = document.getElementById("punctuationBS_1");
        punctuationBS_1_13.innerText = 10;
        let punctuationBS_2_13 = document.getElementById("punctuationBS_2");
        punctuationBS_2_13.innerText = 10;
        console.log("La Puntuación Escalar de BS es: 10");
        break;
      case "17":
      case "18":
      case "19":
        let punctuationBS_0_15 = document.getElementById("punctuationBS_0");
        punctuationBS_0_15.innerText = 11;
        let punctuationBS_1_15 = document.getElementById("punctuationBS_1");
        punctuationBS_1_15.innerText = 11;
        let punctuationBS_2_15 = document.getElementById("punctuationBS_2");
        punctuationBS_2_15.innerText = 11;
        console.log("La Puntuación Escalar de BS es: 11");
        break;
      case "20":
      case "21":
      case "22":
        let punctuationBS_0_17 = document.getElementById("punctuationBS_0");
        punctuationBS_0_17.innerText = 12;
        let punctuationBS_1_17 = document.getElementById("punctuationBS_1");
        punctuationBS_1_17.innerText = 12;
        let punctuationBS_2_17 = document.getElementById("punctuationBS_2");
        punctuationBS_2_17.innerText = 12;
        console.log("La Puntuación Escalar de BS es: 12");
        break;
      case "23":
      case "24":
      case "25":
        let punctuationBS_0_20 = document.getElementById("punctuationBS_0");
        punctuationBS_0_20.innerText = 13;
        let punctuationBS_1_20 = document.getElementById("punctuationBS_1");
        punctuationBS_1_20.innerText = 13;
        let punctuationBS_2_20 = document.getElementById("punctuationBS_2");
        punctuationBS_2_20.innerText = 13;
        console.log("La Puntuación Escalar de BS es: 13");
        break;
      case "26":
      case "27":
      case "28":
        let punctuationBS_0_24 = document.getElementById("punctuationBS_0");
        punctuationBS_0_24.innerText = 14;
        let punctuationBS_1_24 = document.getElementById("punctuationBS_1");
        punctuationBS_1_24.innerText = 14;
        let punctuationBS_2_24 = document.getElementById("punctuationBS_2");
        punctuationBS_2_24.innerText = 14;
        console.log("La Puntuación Escalar de BS es: 14");
        break;
      case "29":
      case "30":
      case "31":
      case "32":
        let punctuationBS_0_29 = document.getElementById("punctuationBS_0");
        punctuationBS_0_29.innerText = 15;
        let punctuationBS_1_29 = document.getElementById("punctuationBS_1");
        punctuationBS_1_29.innerText = 15;
        let punctuationBS_2_29 = document.getElementById("punctuationBS_2");
        punctuationBS_2_29.innerText = 15;
        console.log("La Puntuación Escalar de BS es: 15");
        break;
      case "33":
      case "34":
      case "35":
      case "36":
        let punctuationBS_0_34 = document.getElementById("punctuationBS_0");
        punctuationBS_0_34.innerText = 16;
        let punctuationBS_1_34 = document.getElementById("punctuationBS_1");
        punctuationBS_1_34.innerText = 16;
        let punctuationBS_2_34 = document.getElementById("punctuationBS_2");
        punctuationBS_2_34.innerText = 16;
        console.log("La Puntuación Escalar de BS es: 16");
        break;
      case "37":
      case "38":
      case "39":
        let punctuationBS_0_40 = document.getElementById("punctuationBS_0");
        punctuationBS_0_40.innerText = 17;
        let punctuationBS_1_40 = document.getElementById("punctuationBS_1");
        punctuationBS_1_40.innerText = 17;
        let punctuationBS_2_40 = document.getElementById("punctuationBS_2");
        punctuationBS_2_40.innerText = 17;
        console.log("La Puntuación Escalar de BS es: 17");
        break;
      case "40":
      case "41":
      case "42":
        let punctuationBS_0_46 = document.getElementById("punctuationBS_0");
        punctuationBS_0_46.innerText = 18;
        let punctuationBS_1_46 = document.getElementById("punctuationBS_1");
        punctuationBS_1_46.innerText = 18;
        let punctuationBS_2_46 = document.getElementById("punctuationBS_2");
        punctuationBS_2_46.innerText = 18;
        console.log("La Puntuación Escalar de BS es: 18");
        break;
      case "43":
      case "44":
      case "45":
        let punctuationBS_0_53 = document.getElementById("punctuationBS_0");
        punctuationBS_0_53.innerText = 19;
        let punctuationBS_1_53 = document.getElementById("punctuationBS_1");
        punctuationBS_1_53.innerText = 19;
        let punctuationBS_2_53 = document.getElementById("punctuationBS_2");
        punctuationBS_2_53.innerText = 19;
        console.log("La Puntuación Escalar de BS es: 19");
        break;
      default:
        alert(
          "La Puntuación de BS no corresponde a ninguna equivalencia, verifica lo que has colocado."
        );
        break;
    }
    //..........F I G U R A S - I N C O M P L E T A S..........//
    console.log("La Puntuación Natural de FI es: " + valueinputFI);
    switch (valueinputFI) {
      case "0":
        let punctuationFI_0_0 = document.getElementById("punctuationFI_0");
        punctuationFI_0_0.innerText = 1;
        let punctuationFI_1_0 = document.getElementById("punctuationFI_1");
        punctuationFI_1_0.innerText = 1;
        console.log("La Puntuación Escalar de FI es: 1");
        break;
      case "1":
        let punctuationFI_0_1 = document.getElementById("punctuationFI_0");
        punctuationFI_0_1.innerText = 2;
        let punctuationFI_1_1 = document.getElementById("punctuationFI_1");
        punctuationFI_1_1.innerText = 2;
        console.log("La Puntuación Escalar de FI es: 2");
        break;
      case "2":
        let punctuationFI_0_2 = document.getElementById("punctuationFI_0");
        punctuationFI_0_2.innerText = 3;
        let punctuationFI_1_2 = document.getElementById("punctuationFI_1");
        punctuationFI_1_2.innerText = 3;
        console.log("La Puntuación Escalar de FI es: 3");
        break;
      case "3":
        let punctuationFI_0_3 = document.getElementById("punctuationFI_0");
        punctuationFI_0_3.innerText = 4;
        let punctuationFI_1_3 = document.getElementById("punctuationFI_1");
        punctuationFI_1_3.innerText = 4;
        console.log("La Puntuación Escalar de FI es: 4");
        break;
      case "4":
      case "5":
        let punctuationFI_0_4 = document.getElementById("punctuationFI_0");
        punctuationFI_0_4.innerText = 5;
        let punctuationFI_1_4 = document.getElementById("punctuationFI_1");
        punctuationFI_1_4.innerText = 5;
        console.log("La Puntuación Escalar de FI es: 5");
        break;
      case "6":
      case "7":
        let punctuationFI_0_5 = document.getElementById("punctuationFI_0");
        punctuationFI_0_5.innerText = 6;
        let punctuationFI_1_5 = document.getElementById("punctuationFI_1");
        punctuationFI_1_5.innerText = 6;
        console.log("La Puntuación Escalar de FI es: 6");
        break;
      case "8":
        let punctuationFI_0_6 = document.getElementById("punctuationFI_0");
        punctuationFI_0_6.innerText = 7;
        let punctuationFI_1_6 = document.getElementById("punctuationFI_1");
        punctuationFI_1_6.innerText = 7;
        console.log("La Puntuación Escalar de FI es: 7");
        break;
      case "9":
      case "10":
        let punctuationFI_0_8 = document.getElementById("punctuationFI_0");
        punctuationFI_0_8.innerText = 8;
        let punctuationFI_1_8 = document.getElementById("punctuationFI_1");
        punctuationFI_1_8.innerText = 8;
        console.log("La Puntuación Escalar de FI es: 8");
        break;
      case "11":
      case "12":
        let punctuationFI_0_11 = document.getElementById("punctuationFI_0");
        punctuationFI_0_11.innerText = 9;
        let punctuationFI_1_11 = document.getElementById("punctuationFI_1");
        punctuationFI_1_11.innerText = 9;
        console.log("La Puntuación Escalar de FI es: 9");
        break;
      case "13":
      case "14":
        let punctuationFI_0_13 = document.getElementById("punctuationFI_0");
        punctuationFI_0_13.innerText = 10;
        let punctuationFI_1_13 = document.getElementById("punctuationFI_1");
        punctuationFI_1_13.innerText = 10;
        console.log("La Puntuación Escalar de FI es: 10");
        break;
      case "15":
        let punctuationFI_0_15 = document.getElementById("punctuationFI_0");
        punctuationFI_0_15.innerText = 11;
        let punctuationFI_1_15 = document.getElementById("punctuationFI_1");
        punctuationFI_1_15.innerText = 11;
        console.log("La Puntuación Escalar de FI es: 11");
        break;
      case "16":
      case "17":
        let punctuationFI_0_17 = document.getElementById("punctuationFI_0");
        punctuationFI_0_17.innerText = 12;
        let punctuationFI_1_17 = document.getElementById("punctuationFI_1");
        punctuationFI_1_17.innerText = 12;
        console.log("La Puntuación Escalar de FI es: 12");
        break;
      case "18":
      case "19":
        let punctuationFI_0_20 = document.getElementById("punctuationFI_0");
        punctuationFI_0_20.innerText = 13;
        let punctuationFI_1_20 = document.getElementById("punctuationFI_1");
        punctuationFI_1_20.innerText = 13;
        console.log("La Puntuación Escalar de FI es: 13");
        break;
      case "20":
        let punctuationFI_0_24 = document.getElementById("punctuationFI_0");
        punctuationFI_0_24.innerText = 14;
        let punctuationFI_1_24 = document.getElementById("punctuationFI_1");
        punctuationFI_1_24.innerText = 14;
        console.log("La Puntuación Escalar de FI es: 14");
        break;
      case "21":
        let punctuationFI_0_29 = document.getElementById("punctuationFI_0");
        punctuationFI_0_29.innerText = 15;
        let punctuationFI_1_29 = document.getElementById("punctuationFI_1");
        punctuationFI_1_29.innerText = 15;
        console.log("La Puntuación Escalar de FI es: 15");
        break;
      case "22":
        let punctuationFI_0_34 = document.getElementById("punctuationFI_0");
        punctuationFI_0_34.innerText = 16;
        let punctuationFI_1_34 = document.getElementById("punctuationFI_1");
        punctuationFI_1_34.innerText = 16;
        console.log("La Puntuación Escalar de FI es: 16");
        break;
      case "23":
      case "24":
        let punctuationFI_0_40 = document.getElementById("punctuationFI_0");
        punctuationFI_0_40.innerText = 17;
        let punctuationFI_1_40 = document.getElementById("punctuationFI_1");
        punctuationFI_1_40.innerText = 17;
        console.log("La Puntuación Escalar de FI es: 17");
        break;
      case "25":
        let punctuationFI_0_46 = document.getElementById("punctuationFI_0");
        punctuationFI_0_46.innerText = 18;
        let punctuationFI_1_46 = document.getElementById("punctuationFI_1");
        punctuationFI_1_46.innerText = 18;
        console.log("La Puntuación Escalar de FI es: 18");
        break;
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
        let punctuationFI_0_53 = document.getElementById("punctuationFI_0");
        punctuationFI_0_53.innerText = 19;
        let punctuationFI_1_53 = document.getElementById("punctuationFI_1");
        punctuationFI_1_53.innerText = 19;
        console.log("La Puntuación Escalar de FI es: 19");
        break;
      default:
        alert(
          "La Puntuación de FI no corresponde a ninguna equivalencia, verifica lo que has colocado."
        );
        break;
    }
    //..........R E G I S T R O S..........//
    console.log("La Puntuación Natural de RG es: " + valueinputRG);
    switch (valueinputRG) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
        let punctuationRG_0_0 = document.getElementById("punctuationRG_0");
        punctuationRG_0_0.innerText = 1;
        let punctuationRG_1_0 = document.getElementById("punctuationRG_1");
        punctuationRG_1_0.innerText = 1;
        console.log("La Puntuación Escalar de RG es: 1");
        break;
      case "8":
      case "9":
      case "10":
      case "11":
        let punctuationRG_0_1 = document.getElementById("punctuationRG_0");
        punctuationRG_0_1.innerText = 2;
        let punctuationRG_1_1 = document.getElementById("punctuationRG_1");
        punctuationRG_1_1.innerText = 2;
        console.log("La Puntuación Escalar de RG es: 2");
        break;
      case "12":
      case "13":
      case "14":
      case "15":
        let punctuationRG_0_2 = document.getElementById("punctuationRG_0");
        punctuationRG_0_2.innerText = 3;
        let punctuationRG_1_2 = document.getElementById("punctuationRG_1");
        punctuationRG_1_2.innerText = 3;
        console.log("La Puntuación Escalar de RG es: 3");
        break;
      case "16":
      case "17":
      case "18":
      case "19":
      case "20":
        let punctuationRG_0_3 = document.getElementById("punctuationRG_0");
        punctuationRG_0_3.innerText = 4;
        let punctuationRG_1_3 = document.getElementById("punctuationRG_1");
        punctuationRG_1_3.innerText = 4;
        console.log("La Puntuación Escalar de RG es: 4");
        break;
      case "21":
      case "22":
      case "23":
      case "24":
      case "25":
        let punctuationRG_0_4 = document.getElementById("punctuationRG_0");
        punctuationRG_0_4.innerText = 5;
        let punctuationRG_1_4 = document.getElementById("punctuationRG_1");
        punctuationRG_1_4.innerText = 5;
        console.log("La Puntuación Escalar de RG es: 5");
        break;
      case "26":
      case "27":
      case "28":
      case "29":
      case "30":
        let punctuationRG_0_5 = document.getElementById("punctuationRG_0");
        punctuationRG_0_5.innerText = 6;
        let punctuationRG_1_5 = document.getElementById("punctuationRG_1");
        punctuationRG_1_5.innerText = 6;
        console.log("La Puntuación Escalar de RG es: 6");
        break;
      case "31":
      case "32":
      case "33":
      case "34":
      case "35":
        let punctuationRG_0_6 = document.getElementById("punctuationRG_0");
        punctuationRG_0_6.innerText = 7;
        let punctuationRG_1_6 = document.getElementById("punctuationRG_1");
        punctuationRG_1_6.innerText = 7;
        console.log("La Puntuación Escalar de RG es: 7");
        break;
      case "36":
      case "37":
      case "38":
      case "39":
      case "40":
        let punctuationRG_0_8 = document.getElementById("punctuationRG_0");
        punctuationRG_0_8.innerText = 8;
        let punctuationRG_1_8 = document.getElementById("punctuationRG_1");
        punctuationRG_1_8.innerText = 8;
        console.log("La Puntuación Escalar de RG es: 8");
        break;
      case "41":
      case "42":
      case "43":
      case "44":
      case "45":
        let punctuationRG_0_11 = document.getElementById("punctuationRG_0");
        punctuationRG_0_11.innerText = 9;
        let punctuationRG_1_11 = document.getElementById("punctuationRG_1");
        punctuationRG_1_11.innerText = 9;
        console.log("La Puntuación Escalar de RG es: 9");
        break;
      case "46":
      case "47":
      case "48":
      case "49":
      case "50":
      case "51":
        let punctuationRG_0_13 = document.getElementById("punctuationRG_0");
        punctuationRG_0_13.innerText = 10;
        let punctuationRG_1_13 = document.getElementById("punctuationRG_1");
        punctuationRG_1_13.innerText = 10;
        console.log("La Puntuación Escalar de RG es: 10");
        break;
      case "52":
      case "53":
      case "54":
      case "55":
      case "56":
        let punctuationRG_0_15 = document.getElementById("punctuationRG_0");
        punctuationRG_0_15.innerText = 11;
        let punctuationRG_1_15 = document.getElementById("punctuationRG_1");
        punctuationRG_1_15.innerText = 11;
        console.log("La Puntuación Escalar de RG es: 11");
        break;
      case "57":
      case "58":
      case "59":
      case "60":
      case "61":
      case "62":
        let punctuationRG_0_17 = document.getElementById("punctuationRG_0");
        punctuationRG_0_17.innerText = 12;
        let punctuationRG_1_17 = document.getElementById("punctuationRG_1");
        punctuationRG_1_17.innerText = 12;
        console.log("La Puntuación Escalar de RG es: 12");
        break;
      case "63":
      case "64":
      case "65":
      case "66":
      case "67":
        let punctuationRG_0_20 = document.getElementById("punctuationRG_0");
        punctuationRG_0_20.innerText = 13;
        let punctuationRG_1_20 = document.getElementById("punctuationRG_1");
        punctuationRG_1_20.innerText = 13;
        console.log("La Puntuación Escalar de RG es: 13");
        break;
      case "68":
      case "69":
      case "70":
      case "71":
      case "72":
      case "73":
        let punctuationRG_0_24 = document.getElementById("punctuationRG_0");
        punctuationRG_0_24.innerText = 14;
        let punctuationRG_1_24 = document.getElementById("punctuationRG_1");
        punctuationRG_1_24.innerText = 14;
        console.log("La Puntuación Escalar de RG es: 14");
        break;
      case "74":
      case "75":
      case "76":
      case "77":
      case "78":
      case "79":
        let punctuationRG_0_29 = document.getElementById("punctuationRG_0");
        punctuationRG_0_29.innerText = 15;
        let punctuationRG_1_29 = document.getElementById("punctuationRG_1");
        punctuationRG_1_29.innerText = 15;
        console.log("La Puntuación Escalar de RG es: 15");
        break;
      case "80":
      case "81":
      case "82":
      case "83":
      case "84":
        let punctuationRG_0_34 = document.getElementById("punctuationRG_0");
        punctuationRG_0_34.innerText = 16;
        let punctuationRG_1_34 = document.getElementById("punctuationRG_1");
        punctuationRG_1_34.innerText = 16;
        console.log("La Puntuación Escalar de RG es: 16");
        break;
      case "85":
      case "86":
      case "87":
      case "88":
      case "89":
      case "90":
        let punctuationRG_0_40 = document.getElementById("punctuationRG_0");
        punctuationRG_0_40.innerText = 17;
        let punctuationRG_1_40 = document.getElementById("punctuationRG_1");
        punctuationRG_1_40.innerText = 17;
        console.log("La Puntuación Escalar de RG es: 17");
        break;
      case "91":
      case "92":
      case "93":
      case "94":
      case "95":
        let punctuationRG_0_46 = document.getElementById("punctuationRG_0");
        punctuationRG_0_46.innerText = 18;
        let punctuationRG_1_46 = document.getElementById("punctuationRG_1");
        punctuationRG_1_46.innerText = 18;
        console.log("La Puntuación Escalar de RG es: 18");
        break;
      case "97":
      case "98":
      case "99":
      case "100":
      case "101":
      case "102":
      case "103":
      case "104":
      case "105":
      case "106":
      case "107":
      case "108":
      case "109":
      case "110":
      case "111":
      case "112":
      case "113":
      case "114":
      case "115":
      case "116":
      case "117":
      case "118":
      case "119":
      case "120":
      case "121":
      case "122":
      case "123":
      case "124":
      case "125":
      case "126":
      case "127":
      case "128":
      case "129":
      case "130":
      case "131":
      case "132":
      case "133":
      case "134":
      case "135":
      case "136":
        let punctuationRG_0_53 = document.getElementById("punctuationRG_0");
        punctuationRG_0_53.innerText = 19;
        let punctuationRG_1_53 = document.getElementById("punctuationRG_1");
        punctuationRG_1_53.innerText = 19;
        console.log("La Puntuación Escalar de RG es: 19");
        break;
      default:
        alert(
          "La Puntuación de RG no corresponde a ninguna equivalencia, verifica lo que has colocado."
        );
        break;
    }
    //..........I N F O R M A C I O N..........//
    console.log("La Puntuación Natural de IN es: " + valueinputIN);
    switch (valueinputIN) {
      case "0":
      case "1":
      case "2":
        let punctuationIN_0_0 = document.getElementById("punctuationIN_0");
        punctuationIN_0_0.innerText = 1;
        let punctuationIN_1_0 = document.getElementById("punctuationIN_1");
        punctuationIN_1_0.innerText = 1;
        console.log("La Puntuación Escalar de IN es: 1");
        break;
      case "3":
        let punctuationIN_0_1 = document.getElementById("punctuationIN_0");
        punctuationIN_0_1.innerText = 2;
        let punctuationIN_1_1 = document.getElementById("punctuationIN_1");
        punctuationIN_1_1.innerText = 2;
        console.log("La Puntuación Escalar de IN es: 2");
        break;
      case "3.5":
        let punctuationIN_0_2 = document.getElementById("punctuationIN_0");
        punctuationIN_0_2.innerText = 3;
        let punctuationIN_1_2 = document.getElementById("punctuationIN_1");
        punctuationIN_1_2.innerText = 3;
        console.log("La Puntuación Escalar de IN es: 3");
        break;
      case "4":
        let punctuationIN_0_3 = document.getElementById("punctuationIN_0");
        punctuationIN_0_3.innerText = 4;
        let punctuationIN_1_3 = document.getElementById("punctuationIN_1");
        punctuationIN_1_3.innerText = 4;
        console.log("La Puntuación Escalar de IN es: 4");
        break;
      case "5":
        let punctuationIN_0_4 = document.getElementById("punctuationIN_0");
        punctuationIN_0_4.innerText = 5;
        let punctuationIN_1_4 = document.getElementById("punctuationIN_1");
        punctuationIN_1_4.innerText = 5;
        console.log("La Puntuación Escalar de IN es: 5");
        break;
      case "6":
        let punctuationIN_0_5 = document.getElementById("punctuationIN_0");
        punctuationIN_0_5.innerText = 6;
        let punctuationIN_1_5 = document.getElementById("punctuationIN_1");
        punctuationIN_1_5.innerText = 6;
        console.log("La Puntuación Escalar de IN es: 6");
        break;
      case "7":
        let punctuationIN_0_6 = document.getElementById("punctuationIN_0");
        punctuationIN_0_6.innerText = 7;
        let punctuationIN_1_6 = document.getElementById("punctuationIN_1");
        punctuationIN_1_6.innerText = 7;
        console.log("La Puntuación Escalar de IN es: 7");
        break;
      case "8":
        let punctuationIN_0_8 = document.getElementById("punctuationIN_0");
        punctuationIN_0_8.innerText = 8;
        let punctuationIN_1_8 = document.getElementById("punctuationIN_1");
        punctuationIN_1_8.innerText = 8;
        console.log("La Puntuación Escalar de IN es: 8");
        break;
      case "9":
        let punctuationIN_0_11 = document.getElementById("punctuationIN_0");
        punctuationIN_0_11.innerText = 9;
        let punctuationIN_1_11 = document.getElementById("punctuationIN_1");
        punctuationIN_1_11.innerText = 9;
        console.log("La Puntuación Escalar de IN es: 9");
        break;
      case "9.5":
        let punctuationIN_0_13 = document.getElementById("punctuationIN_0");
        punctuationIN_0_13.innerText = 10;
        let punctuationIN_1_13 = document.getElementById("punctuationIN_1");
        punctuationIN_1_13.innerText = 10;
        console.log("La Puntuación Escalar de IN es: 10");
        break;
      case "10":
        let punctuationIN_0_15 = document.getElementById("punctuationIN_0");
        punctuationIN_0_15.innerText = 11;
        let punctuationIN_1_15 = document.getElementById("punctuationIN_1");
        punctuationIN_1_15.innerText = 11;
        console.log("La Puntuación Escalar de IN es: 11");
        break;
      case "11":
        let punctuationIN_0_17 = document.getElementById("punctuationIN_0");
        punctuationIN_0_17.innerText = 12;
        let punctuationIN_1_17 = document.getElementById("punctuationIN_1");
        punctuationIN_1_17.innerText = 12;
        console.log("La Puntuación Escalar de IN es: 12");
        break;
      case "12":
        let punctuationIN_0_20 = document.getElementById("punctuationIN_0");
        punctuationIN_0_20.innerText = 13;
        let punctuationIN_1_20 = document.getElementById("punctuationIN_1");
        punctuationIN_1_20.innerText = 13;
        console.log("La Puntuación Escalar de IN es: 13");
        break;
      case "13":
        let punctuationIN_0_24 = document.getElementById("punctuationIN_0");
        punctuationIN_0_24.innerText = 14;
        let punctuationIN_1_24 = document.getElementById("punctuationIN_1");
        punctuationIN_1_24.innerText = 14;
        console.log("La Puntuación Escalar de IN es: 14");
        break;
      case "14":
        let punctuationIN_0_29 = document.getElementById("punctuationIN_0");
        punctuationIN_0_29.innerText = 15;
        let punctuationIN_1_29 = document.getElementById("punctuationIN_1");
        punctuationIN_1_29.innerText = 15;
        console.log("La Puntuación Escalar de IN es: 15");
        break;
      case "15":
        let punctuationIN_0_34 = document.getElementById("punctuationIN_0");
        punctuationIN_0_34.innerText = 16;
        let punctuationIN_1_34 = document.getElementById("punctuationIN_1");
        punctuationIN_1_34.innerText = 16;
        console.log("La Puntuación Escalar de IN es: 16");
        break;
      case "16":
        let punctuationIN_0_40 = document.getElementById("punctuationIN_0");
        punctuationIN_0_40.innerText = 17;
        let punctuationIN_1_40 = document.getElementById("punctuationIN_1");
        punctuationIN_1_40.innerText = 17;
        console.log("La Puntuación Escalar de IN es: 17");
        break;
      case "17":
        let punctuationIN_0_46 = document.getElementById("punctuationIN_0");
        punctuationIN_0_46.innerText = 18;
        let punctuationIN_1_46 = document.getElementById("punctuationIN_1");
        punctuationIN_1_46.innerText = 18;
        console.log("La Puntuación Escalar de IN es: 18");
        break;
      case "18":
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
      case "33":
        let punctuationIN_0_53 = document.getElementById("punctuationIN_0");
        punctuationIN_0_53.innerText = 19;
        let punctuationIN_1_53 = document.getElementById("punctuationIN_1");
        punctuationIN_1_53.innerText = 19;
        console.log("La Puntuación Escalar de IN es: 19");
        break;
      default:
        alert(
          "La Puntuación de IN no corresponde a ninguna equivalencia, verifica lo que has colocado."
        );
        break;
    }
    //..........A R I T M E T I C A..........//
    console.log("La Puntuación Natural de AR es: " + valueinputAR);
    switch (valueinputAR) {
      case "0":
        let punctuationAR_0_0 = document.getElementById("punctuationAR_0");
        punctuationAR_0_0.innerText = 1;
        let punctuationAR_1_0 = document.getElementById("punctuationAR_1");
        punctuationAR_1_0.innerText = 1;
        console.log("La Puntuación Escalar de AR es: 1");
        break;
      case "1":
        let punctuationAR_0_1 = document.getElementById("punctuationAR_0");
        punctuationAR_0_1.innerText = 2;
        let punctuationAR_1_1 = document.getElementById("punctuationAR_1");
        punctuationAR_1_1.innerText = 2;
        console.log("La Puntuación Escalar de AR es: 2");
        break;
      case "2":
        let punctuationAR_0_2 = document.getElementById("punctuationAR_0");
        punctuationAR_0_2.innerText = 3;
        let punctuationAR_1_2 = document.getElementById("punctuationAR_1");
        punctuationAR_1_2.innerText = 3;
        console.log("La Puntuación Escalar de AR es: 3");
        break;
      case "3":
        let punctuationAR_0_3 = document.getElementById("punctuationAR_0");
        punctuationAR_0_3.innerText = 4;
        let punctuationAR_1_3 = document.getElementById("punctuationAR_1");
        punctuationAR_1_3.innerText = 4;
        console.log("La Puntuación Escalar de AR es: 4");
        break;
      case "4":
        let punctuationAR_0_4 = document.getElementById("punctuationAR_0");
        punctuationAR_0_4.innerText = 5;
        let punctuationAR_1_4 = document.getElementById("punctuationAR_1");
        punctuationAR_1_4.innerText = 5;
        console.log("La Puntuación Escalar de AR es: 5");
        break;
      case "5":
        let punctuationAR_0_5 = document.getElementById("punctuationAR_0");
        punctuationAR_0_5.innerText = 6;
        let punctuationAR_1_5 = document.getElementById("punctuationAR_1");
        punctuationAR_1_5.innerText = 6;
        console.log("La Puntuación Escalar de AR es: 6");
        break;
      case "6":
        let punctuationAR_0_6 = document.getElementById("punctuationAR_0");
        punctuationAR_0_6.innerText = 7;
        let punctuationAR_1_6 = document.getElementById("punctuationAR_1");
        punctuationAR_1_6.innerText = 7;
        console.log("La Puntuación Escalar de AR es: 7");
        break;
      case "7":
        let punctuationAR_0_8 = document.getElementById("punctuationAR_0");
        punctuationAR_0_8.innerText = 8;
        let punctuationAR_1_8 = document.getElementById("punctuationAR_1");
        punctuationAR_1_8.innerText = 8;
        console.log("La Puntuación Escalar de AR es: 8");
        break;
      case "8":
      case "9":
        let punctuationAR_0_11 = document.getElementById("punctuationAR_0");
        punctuationAR_0_11.innerText = 9;
        let punctuationAR_1_11 = document.getElementById("punctuationAR_1");
        punctuationAR_1_11.innerText = 9;
        console.log("La Puntuación Escalar de AR es: 9");
        break;
      case "10":
      case "11":
        let punctuationAR_0_13 = document.getElementById("punctuationAR_0");
        punctuationAR_0_13.innerText = 10;
        let punctuationAR_1_13 = document.getElementById("punctuationAR_1");
        punctuationAR_1_13.innerText = 10;
        console.log("La Puntuación Escalar de AR es: 10");
        break;
      case "12":
        let punctuationAR_0_15 = document.getElementById("punctuationAR_0");
        punctuationAR_0_15.innerText = 11;
        let punctuationAR_1_15 = document.getElementById("punctuationAR_1");
        punctuationAR_1_15.innerText = 11;
        console.log("La Puntuación Escalar de AR es: 11");
        break;
      case "13":
        let punctuationAR_0_17 = document.getElementById("punctuationAR_0");
        punctuationAR_0_17.innerText = 12;
        let punctuationAR_1_17 = document.getElementById("punctuationAR_1");
        punctuationAR_1_17.innerText = 12;
        console.log("La Puntuación Escalar de AR es: 12");
        break;
      case "14":
      case "15":
        let punctuationAR_0_20 = document.getElementById("punctuationAR_0");
        punctuationAR_0_20.innerText = 13;
        let punctuationAR_1_20 = document.getElementById("punctuationAR_1");
        punctuationAR_1_20.innerText = 13;
        console.log("La Puntuación Escalar de AR es: 13");
        break;
      case "16":
        let punctuationAR_0_24 = document.getElementById("punctuationAR_0");
        punctuationAR_0_24.innerText = 14;
        let punctuationAR_1_24 = document.getElementById("punctuationAR_1");
        punctuationAR_1_24.innerText = 14;
        console.log("La Puntuación Escalar de AR es: 14");
        break;
      case "17":
      case "18":
        let punctuationAR_0_29 = document.getElementById("punctuationAR_0");
        punctuationAR_0_29.innerText = 15;
        let punctuationAR_1_29 = document.getElementById("punctuationAR_1");
        punctuationAR_1_29.innerText = 15;
        console.log("La Puntuación Escalar de AR es: 15");
        break;
      case "19":
        let punctuationAR_0_34 = document.getElementById("punctuationAR_0");
        punctuationAR_0_34.innerText = 16;
        let punctuationAR_1_34 = document.getElementById("punctuationAR_1");
        punctuationAR_1_34.innerText = 16;
        console.log("La Puntuación Escalar de AR es: 16");
        break;
      case "20":
        let punctuationAR_0_40 = document.getElementById("punctuationAR_0");
        punctuationAR_0_40.innerText = 17;
        let punctuationAR_1_40 = document.getElementById("punctuationAR_1");
        punctuationAR_1_40.innerText = 17;
        console.log("La Puntuación Escalar de AR es: 17");
        break;
      case "21":
        let punctuationAR_0_46 = document.getElementById("punctuationAR_0");
        punctuationAR_0_46.innerText = 18;
        let punctuationAR_1_46 = document.getElementById("punctuationAR_1");
        punctuationAR_1_46.innerText = 18;
        console.log("La Puntuación Escalar de AR es: 18");
        break;
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
      case "33":
      case "34":
        let punctuationAR_0_53 = document.getElementById("punctuationAR_0");
        punctuationAR_0_53.innerText = 19;
        let punctuationAR_1_53 = document.getElementById("punctuationAR_1");
        punctuationAR_1_53.innerText = 19;
        console.log("La Puntuación Escalar de AR es: 19");
        break;
      default:
        alert(
          "La Puntuación de AR no corresponde a ninguna equivalencia, verifica lo que has colocado."
        );
        break;
    }
    //..........P A L A B R A S - E N - C O N T E X T O..........//
    console.log("La Puntuación Natural de PC es: " + valueinputPC);
    switch (valueinputPC) {
      case "0":
        let punctuationPC_0_0 = document.getElementById("punctuationPC_0");
        punctuationPC_0_0.innerText = 1;
        let punctuationPC_1_0 = document.getElementById("punctuationPC_1");
        punctuationPC_1_0.innerText = 1;
        console.log("La Puntuación Escalar de PC es: 1");
        break;
      case "1":
        let punctuationPC_0_1 = document.getElementById("punctuationPC_0");
        punctuationPC_0_1.innerText = 2;
        let punctuationPC_1_1 = document.getElementById("punctuationPC_1");
        punctuationPC_1_1.innerText = 2;
        console.log("La Puntuación Escalar de PC es: 2");
        break;
      case "2":
        let punctuationPC_0_2 = document.getElementById("punctuationPC_0");
        punctuationPC_0_2.innerText = 3;
        let punctuationPC_1_2 = document.getElementById("punctuationPC_1");
        punctuationPC_1_2.innerText = 3;
        console.log("La Puntuación Escalar de PC es: 3");
        break;
      case "3":
        let punctuationPC_0_3 = document.getElementById("punctuationPC_0");
        punctuationPC_0_3.innerText = 4;
        let punctuationPC_1_3 = document.getElementById("punctuationPC_1");
        punctuationPC_1_3.innerText = 4;
        console.log("La Puntuación Escalar de PC es: 4");
        break;
      case "4":
        let punctuationPC_0_4 = document.getElementById("punctuationPC_0");
        punctuationPC_0_4.innerText = 5;
        let punctuationPC_1_4 = document.getElementById("punctuationPC_1");
        punctuationPC_1_4.innerText = 5;
        console.log("La Puntuación Escalar de PC es: 5");
        break;
      case "5":
        let punctuationPC_0_5 = document.getElementById("punctuationPC_0");
        punctuationPC_0_5.innerText = 6;
        let punctuationPC_1_5 = document.getElementById("punctuationPC_1");
        punctuationPC_1_5.innerText = 6;
        console.log("La Puntuación Escalar de PC es: 6");
        break;
      case "6":
        let punctuationPC_0_6 = document.getElementById("punctuationPC_0");
        punctuationPC_0_6.innerText = 7;
        let punctuationPC_1_6 = document.getElementById("punctuationPC_1");
        punctuationPC_1_6.innerText = 7;
        console.log("La Puntuación Escalar de PC es: 7");
        break;
      case "7":
        let punctuationPC_0_8 = document.getElementById("punctuationPC_0");
        punctuationPC_0_8.innerText = 8;
        let punctuationPC_1_8 = document.getElementById("punctuationPC_1");
        punctuationPC_1_8.innerText = 8;
        console.log("La Puntuación Escalar de PC es: 8");
        break;
      case "7.5":
        let punctuationPC_0_11 = document.getElementById("punctuationPC_0");
        punctuationPC_0_11.innerText = 9;
        let punctuationPC_1_11 = document.getElementById("punctuationPC_1");
        punctuationPC_1_11.innerText = 9;
        console.log("La Puntuación Escalar de PC es: 9");
        break;
      case "8":
        let punctuationPC_0_13 = document.getElementById("punctuationPC_0");
        punctuationPC_0_13.innerText = 10;
        let punctuationPC_1_13 = document.getElementById("punctuationPC_1");
        punctuationPC_1_13.innerText = 10;
        console.log("La Puntuación Escalar de PC es: 10");
        break;
      case "9":
        let punctuationPC_0_15 = document.getElementById("punctuationPC_0");
        punctuationPC_0_15.innerText = 11;
        let punctuationPC_1_15 = document.getElementById("punctuationPC_1");
        punctuationPC_1_15.innerText = 11;
        console.log("La Puntuación Escalar de PC es: 11");
        break;
      case "10":
        let punctuationPC_0_17 = document.getElementById("punctuationPC_0");
        punctuationPC_0_17.innerText = 12;
        let punctuationPC_1_17 = document.getElementById("punctuationPC_1");
        punctuationPC_1_17.innerText = 12;
        console.log("La Puntuación Escalar de PC es: 12");
        break;
      case "11":
        let punctuationPC_0_20 = document.getElementById("punctuationPC_0");
        punctuationPC_0_20.innerText = 13;
        let punctuationPC_1_20 = document.getElementById("punctuationPC_1");
        punctuationPC_1_20.innerText = 13;
        console.log("La Puntuación Escalar de PC es: 13");
        break;
      case "12":
        let punctuationPC_0_24 = document.getElementById("punctuationPC_0");
        punctuationPC_0_24.innerText = 14;
        let punctuationPC_1_24 = document.getElementById("punctuationPC_1");
        punctuationPC_1_24.innerText = 14;
        console.log("La Puntuación Escalar de PC es: 14");
        break;
      case "12.5":
        let punctuationPC_0_29 = document.getElementById("punctuationPC_0");
        punctuationPC_0_29.innerText = 15;
        let punctuationPC_1_29 = document.getElementById("punctuationPC_1");
        punctuationPC_1_29.innerText = 15;
        console.log("La Puntuación Escalar de PC es: 15");
        break;
      case "13":
        let punctuationPC_0_34 = document.getElementById("punctuationPC_0");
        punctuationPC_0_34.innerText = 16;
        let punctuationPC_1_34 = document.getElementById("punctuationPC_1");
        punctuationPC_1_34.innerText = 16;
        console.log("La Puntuación Escalar de PC es: 16");
        break;
      case "14":
        let punctuationPC_0_40 = document.getElementById("punctuationPC_0");
        punctuationPC_0_40.innerText = 17;
        let punctuationPC_1_40 = document.getElementById("punctuationPC_1");
        punctuationPC_1_40.innerText = 17;
        console.log("La Puntuación Escalar de PC es: 17");
        break;
      case "15":
        let punctuationPC_0_46 = document.getElementById("punctuationPC_0");
        punctuationPC_0_46.innerText = 18;
        let punctuationPC_1_46 = document.getElementById("punctuationPC_1");
        punctuationPC_1_46.innerText = 18;
        console.log("La Puntuación Escalar de PC es: 18");
        break;
      case "16":
      case "17":
      case "18":
      case "19":
      case "20":
      case "21":
      case "22":
      case "23":
      case "24":
        let punctuationPC_0_53 = document.getElementById("punctuationPC_0");
        punctuationPC_0_53.innerText = 19;
        let punctuationPC_1_53 = document.getElementById("punctuationPC_1");
        punctuationPC_1_53.innerText = 19;
        console.log("La Puntuación Escalar de PC es: 19");
        break;
      default:
        alert(
          "La Puntuación de PC no corresponde a ninguna equivalencia, verifica lo que has colocado."
        );
        break;
    }

    if ((inputIN.value == "")&&(inputPC.value == "")) {
      let inputSE = document.getElementById("punctuationSE_0");
      let inputVB = document.getElementById("punctuationVB_0");
      let inputCM = document.getElementById("punctuationCM_0");
      let SumScoresICV =
        parseInt(inputSE.innerHTML) +
        parseInt(inputVB.innerHTML) +
        parseInt(inputCM.innerHTML);
      let inputSumScoresICV = document.getElementById("SumScoresICV");
      inputSumScoresICV.innerText = SumScoresICV;
    } else {
      let inputSE = document.getElementById("punctuationSE_0");
      let inputVB = document.getElementById("punctuationVB_0");
      let inputCM = document.getElementById("punctuationCM_0");
      let inputIN = document.getElementById("punctuationIN_0");
      let inputPC = document.getElementById("punctuationPC_0");
      let SumScoresICV =
      parseInt(inputSE.innerHTML) +
      parseInt(inputVB.innerHTML) +
      parseInt(inputCM.innerHTML) +
      parseInt(inputIN.innerHTML) +
      parseInt(inputPC.innerHTML);
      let inputSumScoresICV = document.getElementById("SumScoresICV");
      inputSumScoresICV.innerText = SumScoresICV;
    }

    if (inputFI.value == "") {
      let inputDC = document.getElementById("punctuationDC_0");
      let inputCD = document.getElementById("punctuationCD_0");
      let inputMT = document.getElementById("punctuationMT_0");
      let SumScoresIRP =
        parseInt(inputDC.innerHTML) +
        parseInt(inputCD.innerHTML) +
        parseInt(inputMT.innerHTML);
      let inputSumScoresIRP = document.getElementById("SumScoresIRP");
      inputSumScoresIRP.innerText = SumScoresIRP;
    } else {
      let inputDC = document.getElementById("punctuationDC_0");
      let inputCD = document.getElementById("punctuationCD_0");
      let inputMT = document.getElementById("punctuationMT_0");
      let inputFI = document.getElementById("punctuationFI_0");
      let SumScoresIRP =
      parseInt(inputDC.innerHTML) +
      parseInt(inputCD.innerHTML) +
      parseInt(inputMT.innerHTML) +
      parseInt(inputFI.innerHTML);
      let inputSumScoresIRP = document.getElementById("SumScoresIRP");
      inputSumScoresIRP.innerText = SumScoresIRP;
    }

    if (inputAR.value == "") {
      let inputRD = document.getElementById("punctuationRD_0");
      let inputNL = document.getElementById("punctuationNL_0");
      let SumScoresIMT =
        parseInt(inputRD.innerHTML) + 
        parseInt(inputNL.innerHTML);
      let inputSumScoresIMT = document.getElementById("SumScoresIMT");
      inputSumScoresIMT.innerText = SumScoresIMT;
    } else {
      let inputRD = document.getElementById("punctuationRD_0");
      let inputNL = document.getElementById("punctuationNL_0");
      let inputAR = document.getElementById("punctuationAR_0");
      let SumScoresIMT =
      parseInt(inputRD.innerHTML) +
      parseInt(inputNL.innerHTML) +
      parseInt(inputAR.innerHTML);
      let inputSumScoresIMT = document.getElementById("SumScoresIMT");
      inputSumScoresIMT.innerText = SumScoresIMT;
    }

    if (inputRG.value == "") {
      let inputCL = document.getElementById("punctuationCL_0");
      let inputBS = document.getElementById("punctuationBS_0");
      let SumScoresIVP =
        parseInt(inputCL.innerHTML) +
        parseInt(inputBS.innerHTML);
      let inputSumScoresIVP = document.getElementById("SumScoresIVP");
      inputSumScoresIVP.innerText = SumScoresIVP;
    } else {
      let inputCL = document.getElementById("punctuationCL_0");
      let inputBS = document.getElementById("punctuationBS_0");
      let inputRG = document.getElementById("punctuationRG_0");
      let SumScoresIVP =
        parseInt(inputCL.innerHTML) +
        parseInt(inputBS.innerHTML) +
        parseInt(inputRG.innerHTML);
      let inputSumScoresIVP = document.getElementById("SumScoresIVP");
      inputSumScoresIVP.innerText = SumScoresIVP;
    }  
  
    let inputDC = document.getElementById("punctuationDC_0");
    let inputSE = document.getElementById("punctuationSE_0");
    let inputRD = document.getElementById("punctuationRD_0");
    let inputCD = document.getElementById("punctuationCD_0");
    let inputCL = document.getElementById("punctuationCL_0");
    let inputVB = document.getElementById("punctuationVB_0");
    let inputNL = document.getElementById("punctuationNL_0");
    let inputMT = document.getElementById("punctuationMT_0");
    let inputCM = document.getElementById("punctuationCM_0");
    let inputBS = document.getElementById("punctuationBS_0");
    let SumScoresCIT =
      parseInt(inputDC.innerHTML) +
      parseInt(inputSE.innerHTML) +
      parseInt(inputRD.innerHTML) +
      parseInt(inputCD.innerHTML) +
      parseInt(inputCL.innerHTML) +
      parseInt(inputVB.innerHTML) +
      parseInt(inputNL.innerHTML) +
      parseInt(inputMT.innerHTML) +
      parseInt(inputCM.innerHTML) +
      parseInt(inputBS.innerHTML);
    let inputSumScoresCIT = document.getElementById("SumScoresCIT");
    inputSumScoresCIT.innerText = SumScoresCIT;
  }
}