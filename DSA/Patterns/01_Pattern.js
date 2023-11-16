/*Pattern-1 Rectangular Star Pattern

Example 1:
Input: N =  3
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

function printStarPattern(input) {
  let pattern = "";
  for (let i = 0; i < input; i++) {
    for (let j = 0; j <input; j++) {
      pattern += "* ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

printStarPattern(3);
