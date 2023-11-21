/*
Input Format: N = 3
Result: 
A
A B
A B C

Input Format: N = 6
Result:   
A
A B
A B C
A B C D
A B C D E
A B C D E F
*/

function printStarPattern(n) {
  let str = "";

  //external loop
  for (let i = 1; i <= n; i++) {
    //internal loop
    for (let j = 0; j < i; j++) {
      str += String.fromCharCode(j + 65);
    }

    str += "\n";
  }
  console.log(str);
}

printStarPattern(3);
