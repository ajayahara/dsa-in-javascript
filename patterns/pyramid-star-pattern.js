/* 
Q. Print The Follwing Square Pattern

    *
   ***
  *****
 *******
*********

*/
// Solution
let rows=5;
for(let i=1;i<=rows;i++){
    let bag="";
    for(let j=1;j<=rows-i;j++){
        bag+=" ";
    }
    for(let j=1;j<=i;j++){
        bag+="*";
    }
    for(let j=1;j<i;j++){
        bag+="*";
    }
    console.log(bag);
}