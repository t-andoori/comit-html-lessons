// function evenNumbers(upTo = 89) {
//   // defining an array v
//   let foundNumbers = [];
//   for (let i = 1; i <= upTo; i++) {
//     if (i % 2 == 0) {
//       {
//         console.log(i);
//         {
//           foundNumbers.push(i);
//         }
//       }
//     }
//   }
//   return foundNumbers;
// }
function evenNumbers(upTo = 100) {
  let foundNumbers = [];
  for (let i = 1; i <= upTo; i++) {
    if (i % 2 == 0) {
      {
        console.log(i);
        {
          foundNumbers.push(i);
        }
      }
    }
  }

  return foundNumbers;
}
