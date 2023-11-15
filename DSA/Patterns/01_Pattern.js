/*Pattern-1 Rectangular Star Pattern

Example 1:
Input: N = 3
Output: 
* * *
* * *
* * *


Example 2:
Input: N = 6
Output:
* * * * * *
* * * * * *
* * * * * *
* * * * * *
* * * * * *
* * * * * * */

function printRectangularStar(rows) {
  for (let i = 0; i < rows; i++) {
    let row = " ";
    for (let j = 0; j < rows; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

printRectangularStar(7);