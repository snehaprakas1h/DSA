/*
write a program for below pattern
Input Format: N = 3
Result: 
  *  
  **
  ***  
  **
  *   
Input Format: N = 6
Result:   
     *
     **
     *** 
     ****
     *****
     ******  
     *****
     ****
     ***    
     **
     *
*/

function printStarPattern(n) {
  let pattern = "";
  //external loop for number of rows
  for (let i = 1; i <= 2 * n - 1; i++) {
    let stars = i;

    if (i > n) {
      stars = 2 * n - i;
    }
    //internal loop to print space pattern
    for (let j = 1; j <= stars; j++) {
      pattern += "*"; //logic to print star pattern
    }
    pattern += "\n"; //logic to print new line for new row
  }
  console.log(pattern);
}

printStarPattern(5);
