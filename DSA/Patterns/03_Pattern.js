/*Pattern-1 Rectangular Star Pattern

Example 1:
Input: N = 3
Output: 
1
1 2
1 2 3

*/

function printRectangularStar(input){
    //pattern variable that carries the final pattern in staring format
    pattern="";

    //outer loop runs for input no. of times 
    for(let i=1;i<=input;i++){

        //inner loop runs for i no. of times
        for (let j=1;j<=i;j++){

            pattern+= ` ${j}` ; //logic to display pattern with space
        }

        //add new line after contents of each line
        pattern+='\n';
    }
    
    //print final pattern variable
    console.log(pattern)
}
  
  printRectangularStar(3);
  