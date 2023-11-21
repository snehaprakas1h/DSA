/*
Input Format: N = 3
Result: 
1    1
12  21
123321

Input Format: N = 6
Result:   
1          1
12        21
12       321
1234    4321
12345  54321
123456654321
*/

function printStarPattern(n) {
  let pattern = "";
  let space=2*(n-1);
  //external loop for number of rows
  for (let i = 1; i <= n; i++) {
    //numbers
    for(let j=1;j<=i;j++){
      pattern+=`${j}`
    }
    //space
    for(let j=1;j<=space;j++){
      pattern+=' ';
    }

    //numbers
    for(let j=i;j>=1;j--){
      pattern+=`${j}`
    }
   
    pattern+='\n';
    space-=2;
    
  }
  console.log(pattern);
}

printStarPattern(5);
