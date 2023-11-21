/*
Input Format: N = 3
Result: 
1
01
101

Input Format: N = 6
Result:   
1
01
101
0101
10101
010101
*/

function printStarPattern(n) {
  let pattern = "";
  let start =1;
  //external loop for number of rows
  for (let i = 1; i <= n; i++) {
    
    if(i%2==0){
      start=1;
    }
    else
    start=0;

    for(let j=1;j<=i;j++){
      pattern+=start;
      start=1-start;
    }

    pattern+='\n';
    
  }
  console.log(pattern);
}

printStarPattern(5);
