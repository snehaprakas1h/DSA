/*
Input Format: N = 3
Result: 
A B C
A B
A

Input Format: N = 6
Result:   
A B C D E F
A B C D E 
A B C D
A B C
A B
A
*/

function printStarPattern(n) {
  let str = "";

  //external loop
  for (let i = 1; i <= n; i++) {
    //internal loop
    for (let j = 0; j < n-i+1; j++) {
      str += String.fromCharCode(j + 65);
    }

    str += "\n";
  }
  console.log(str);
}

printStarPattern(3);
