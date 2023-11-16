/*
write a program for below pattern

Input Format: N = 5
Result:
 5 4 3 2 1
 5 4 3 2
 5 4 3
 5 4
 5

*/

//function to print inverted half triangle star pattern
function printStarPattern(input) {
  //variable to carry print final star pattern
  pattern = "";

  //external loop for number of rows
  for (let i = 0; i < input; i++) {
    //internal loop to print star pattern
    for (let j = input; j > i; j--) {
      pattern += ` ${j}`; //logic to print star pattern
    }
    pattern += "\n"; //logic to print new line for new row
  }
  console.log(pattern); //print inverted half star pattern
}

printStarPattern(5);
