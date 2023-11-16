/*
write a program for below pattern

Input Format: N = 3
Result: 
1 2 3
1 2
1

Input Format: N = 6
Result:
1 2 3 4 5 6
1 2 3 4 5
1 2 3 4
1 2 3
1 2 
1

*/

//function to print inverted half triangle star pattern
function printStarPattern(input) {
  //variable to carry print final star pattern
  pattern = "";

  //external loop for number of rows
  for (let i = 0; i < input; i++) {
    //internal loop to print star pattern
    for (let j = 1; j<=input-i; j++) {
      pattern += ` ${j}`; //logic to print star pattern
    }
    pattern += "\n"; //logic to print new line for new row
  }
  console.log(pattern); //print inverted half star pattern
}

printStarPattern(6);
