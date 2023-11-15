/*Pattern-1 Rectangular Star Pattern

Example 1:
Input: N = 3
Output: 
1
1 2
1 2 3

*/

function printRectangularStar(n) {
    let star="";
    for (let i=1;i<=n;i++){
      for(let j=1;j<=i;j++){
        star+=j;
      }
      star+="\n"
    }
    console.log(star)
  }
  
  printRectangularStar(3);
  