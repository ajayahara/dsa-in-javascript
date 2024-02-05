/* 
Q. Print The Follwing Square Pattern

*********
 *******
  *****
   ***
    *
   ***
  *****
 *******
*********

*/
// Solution

function hourGlass(rows) {
  for (let i = rows; i >= 1; i--) {
    let bag = "";
    for (let j = 1; j <= rows - i; j++) {
      bag += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      bag += "*";
    }
    console.log(bag);
  }
  for(let i=2;i<=rows;i++){
    let bag = "";
    for (let j = 1; j <= rows - i; j++) {
      bag += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      bag += "*";
    }
    console.log(bag);
  }
}
hourGlass(6);
