// /*

// */
// function lovefunc(flower1, flower2) {
//   if ((flower1 % 2 == 0 && flower2 % 2 == 1) || 
//   (flower1 % 2 == 1 && flower2 % 2 == 0)) {
//     return true;
//   } else {
//     return false;
//   }   
// }
    
// lovefunc(2, 5); //true
// lovefunc(2, 4); //false


const results = [2, 5, 5, 4, 3, 3, 5, 2];

function betterThanAverage(classPoints, yourPoints) {
  const sum = classPoints.reduce((total, amount) => total + amount);
  const averageResult = sum / classPoints.length;

  if (yourPoints > averageResult) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

betterThanAverage(results, 4); //true
betterThanAverage(results, 1); //false