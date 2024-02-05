/* 
Q. Print The Follwing Square Pattern

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

*/
// Solution
let rows=5;
for(let i=1;i<=rows;i++){
    let bag="";
    for(let j=1;j<=rows-i;j++){
        bag+=" ";
    }
    for(let j=1;j<=2*i-1;j++){
        bag+="*";
    }
    console.log(bag);
}
for(let i=rows-1;i>=1;i--){
    let bag=" ";
    for(let j=1;j<=rows-1-i;j++){
        bag+=" ";
    }
    for(let j=1;j<=2*i-1;j++){
        bag+="*";
    }
    bag+=" ";
    console.log(bag);
}