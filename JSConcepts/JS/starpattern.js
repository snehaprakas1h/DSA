function squareStarPattern(n) {
  /*
   *****
   *****
   *****
   *****
   *****
   */
  let pattern = "";
  //outer loop
  for (let i = 1; i <= n; i++) {
    //inner loop
    for (let j = 1; j <= n; j++) {
      pattern += "*";
    }

    pattern += "\n";
  }
  console.log(pattern);
}
//squareStarPattern(5);

function hollowSquarePattern(n) {
  /*
   *****
   *   *
   *   *
   *   *
   *****
   */
  let pattern = "";
  //outer loop
  for (let i = 1; i <= n; i++) {
    //inner loop
    for (j = 1; j <= n; j++) {
      if (i === 1 || i === n) {
        pattern += "*";
      } else {
        if (j === 1 || j === n) {
          pattern += "*";
        } else {
          pattern += " ";
        }
      }
    }
    pattern += "\n";
  }
  console.log(pattern);
}

//hollowSquarePattern(5);

function rightTrianglePattern(n) {
  /*

   *
  **
 ***
****

    */
  let pattern = "";

  //outer loop
  for (let i = 1; i <= n; i++) {
    //inner loop
    for (let k = 1; k <= n - i; k++) {
      pattern += " ";
    }
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }

    pattern += "\n";
  }

  console.log(pattern);
}

//rightTrianglePattern(4);

function leftTrianglePattern(n) {
  /*

   *
   **
   ***
   ****
   *****

   */

  let pattern = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }

    pattern += "\n";
  }

  console.log(pattern);
}

//leftTrianglePattern(5);

function downwardTriangle(n) {
  let pattern = "";

  for (let i = 1; i <= n; i++) {
    for (let j = n; j >= i; j--) {
      pattern += "*";
    }

    pattern += "\n";
  }

  console.log(pattern);
}

//downwardTriangle(5);

function hollowTriangleStarPattern(n) {
  /*

*
**
* *
*  *
*****

*/
  let pattern = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (i === n) {
        pattern += "*";
      } else {
        if (j == 0 || j == i - 1) {
          pattern += "*";
        } else {
          pattern += " ";
        }
      }
    }
    pattern += "\n";
  }

  console.log(pattern);
}

//hollowTriangleStarPattern(5);

function jsPyramidPattern(n) {
  /*

    *    
   ***
  *****
 *******
*********

    */

  let pattern = "";

  //outer loop
  for (let i = 1; i <= n; i++) {
    //spaces
    for (let j = 1; j <= n - i; j++) {
      pattern += " ";
    }

    //star
    for (let j = 1; j <= 2 * i - 1; j++) {
      pattern += "*";
    }

    //spaces
    for (let j = 1; j <= n - i; j++) {
      pattern += " ";
    }

    pattern += "\n";
  }
  console.log(pattern);
}

//jsPyramidPattern(5);

function reversePyramidStarPattern(n) {
  /*

*********
 *******
  *****
   ***
    *
    
    */

  let pattern = "";

  for (let i = 0; i < n; i++) {
    //spaces
    for (let j = 0; j < i; j++) {
      pattern += " ";
    }

    //stars
    for (let j = 0; j < 2 * (n - i) - 1; j++) {
      pattern += "*";
    }

    //spaces
    for (let j = 0; j < i; j++) {
      pattern += " ";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

//reversePyramidStarPattern(5);

function hollowPyramidStarPattern(n) {
  /*

      *      
     * *
    *   *
   *     *
  *       *
 *         *
*************

    */
  let pattern = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      pattern += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      if (i == 1 || i == n) {
        pattern += "*";
      } else {
        if (j == 1 || j == 2 * i - 1) {
          pattern += "*";
        } else {
          pattern += " ";
        }
      }
    }

    for (let j = 1; j <= n - i; j++) {
      pattern += " ";
    }

    pattern += "\n";
  }
  console.log(pattern);
}

//hollowPyramidStarPattern(7);

function diamondStarPattern(n) {
  /*

    *    
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *
    
  */
  var pattern = "";
  for (let i = 1; i <= n; i++) {
    //upward triangle
    for (let j = 0; j < n - i; j++) {
      pattern += " ";
    }

    for (let j = 0; j < 2 * i - 1; j++) {
      pattern += "*";
    }

    for (let j = 0; j < n - i; j++) {
      pattern += " ";
    }

    pattern += "\n";
  }

  for (let i = 0; i < n; i++) {
    //downward triangle
    for (let j = 0; j < i; j++) {
      pattern += " ";
    }

    for (let j = 0; j < 2 * (n - i) - 1; j++) {
      pattern += "*";
    }

    for (let j = 0; j < i; j++) {
      pattern += " ";
    }

    pattern += "\n";
  }
  console.log(pattern);
}

//diamondStarPattern(5);

function hollowDiamondStarPattern(n) {

  /*
   
    *    
   * *
  *   *
 *     *
*       *
*       *
 *     *
  *   *
   * *
    *

   */
  var pattern = "";

  //upward triangle outer loop
  for (var i = 1; i <= n; i++) {
    //inner loop
    //space
    for (var j = 1; j <= n - i; j++) {
      pattern += " ";
    }
    //star
    for (var j = 1; j <= 2 * i - 1; j++) {
      if (i == 1) {
        pattern += "*";
      } else {
        if (j == 1 || j == 2 * i - 1) {
          pattern += "*";
        } else {
          pattern += " ";
        }
      }
    }

    //space
    for (var j = 1; j <= n - i; j++) {
      pattern += " ";
    }

    pattern += "\n";
  }

  //downward triangle outer loop
  for (var i = 1; i <= n; i++) {
    //inner loop
    //space
    for (var j = 1; j < i; j++) {
      pattern += " ";
    }
    //star
    for (var j = 1; j <= 2 * (n - i) + 1; j++) {
      if (j == 1 || j == 2 * (n - i) + 1) {
        pattern += "*";
      } else {
        pattern += " ";
      }
    }

    //space
    for (var j = 1; j <= i; j++) {
      pattern += " ";
    }

    pattern += "\n";
  }
  console.log(pattern);
}

//hollowDiamondStarPattern(5);
