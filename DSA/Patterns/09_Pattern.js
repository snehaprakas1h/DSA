/*
write a program for below pattern

Input Format: N = 3
Result: 
*****  
 ***
  *   
Input Format: N = 6
Result:     
***********
 *********
  *******
   ***** 
    ***    
     *

*/

//function to print inverted half triangle star pattern
function printStarPattern(input) {
  //variable to carry print final star pattern
  pattern = "";

  //external loop for number of rows
  for (let i = 0; i < input; i++) {

    //internal loop to print space pattern
    for (let j = 0; j<i; j++) {
      pattern += " "; //logic to print star pattern
    }
    //internal loop to print star pattern
    for (let j = 0; j<(2*input)-(2*i+1); j++) {
      pattern += "*"; //logic to print star pattern
    }
    //internal loop to print space pattern
    for (let j = 0; j<i; j++) {
      pattern += " "; //logic to print star pattern
    }

    pattern += "\n"; //logic to print new line for new row
  }
  console.log(pattern); //print inverted half star pattern
}

printStarPattern(6);
