/*Pattern-1 Rectangular Star Pattern

Example 1:
Input: N = 3
Output: 
* 
* * 
* * *

*/

function printRectangularStar(rows) {
  for (let i = 0; i < rows; i++) {
    let row = " ";
    for (let j = 0; j < i+1; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

printRectangularStar(7);