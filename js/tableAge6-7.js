console.group("Calcular Puntuaciones Escalares 7/8 años");
function calculateSumScores() {
  const inputDC = document.getElementById("inputDC");
  const valueinputDC = inputDC.value;

  if ((calculateYear() == '6,0')||(calculateYear() == '6,1')||(calculateYear() == '6,2')||(calculateYear() == '6,3')) {
    console.log('Cumple el rango de edad de 6:0 a 6:3 años.' + '\r\n' + 'Teniendo ' + calculateYear() + ' años.');
    console.log('La Puntuación Natural de DC es: '+valueinputDC);
    switch (valueinputDC) {
      case '55':
        const punctuationDC_0 = document.getElementById("punctuationDC_0");
        punctuationDC_0.innerText = 10;
        const punctuationDC_1 = document.getElementById("punctuationDC_1");
        punctuationDC_1.innerText = 10;      
        const punctuationDC_2 = document.getElementById("punctuationDC_2");
        punctuationDC_2.innerText = 10;            
        console.log('La Puntuación Escalar de DC es: 10');   
        break;
    
      default:
        console.log('DC: ptm');   
        break;
    }
  }
}
console.groupEnd();