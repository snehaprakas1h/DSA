/*
Input Format: N = 3
Result: 
A
B B
C C C

Input Format: N = 6
Result:   
A 
B B
C C C
D D D D
E E E E E
F F F F F F
*/

function printStarPattern(n) {
  let str = "";

  //external loop
  for (let i = 1; i <= n; i++) {
    //internal loop
    for (let j = 0; j <i; j++) {
      str += String.fromCharCode((i-1) + 65);
    }

    str += "\n";
  }
  console.log(str);
}

printStarPattern(3);
