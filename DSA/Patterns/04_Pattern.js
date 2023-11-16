/*
write a program for below pattern

Input Format: N = 3
Result: 
1
2 2 
3 3 3

Input Format: N = 6
Result:
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
6 6 6 6 6 6

*/
//function to print numbers in above required format
function printRectangularStar(input) {
  // variable to print final number pattern
  pattern = "";
  //external for loop for number of rows
  for (let i = 1; i <=input; i++) {
    //internal for loop to run iteration for required number format
    for (let j = 0; j <i; j++) {
      //logic for number pattern
      pattern += ` ${i}`;
    }

    pattern += "\n"; //logic for new line for each row
  }

  console.log(pattern); //logic to print number format
}

printRectangularStar(4);