/*Pattern-1 Rectangular Star Pattern

Example 1:
Input: N = 3
Output: 
* 
* * 
* * *

*/
//function to print pattern of stars
function printRectangularStar(rows) {
  //pattern variable that carries final pattern in star format
  pattern = "";

  //external for loop for number of rows
  for (let i = 1; i <= rows; i++) {
    //internal loop for the star format
    for (let j = 1; j <= i; j++) {
      pattern += " *"; //logic to print star with space
    }

    pattern += "\n"; //logic to print pattern in new line for next row
  }

  console.log(pattern); //logic to print final pattern in star format
}

printRectangularStar(7);
