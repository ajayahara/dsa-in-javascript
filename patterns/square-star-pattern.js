/* 
Q. Print The Follwing Square Pattern

*****
*****
*****
*****
*****

*/
// Solution

let rows=5;
let columns=5;
for(let i=1;i<=rows;i++){
    let bag="";
    for(let j=1;j<=columns;j++){
        bag+="*";
    }
    console.log(bag);
}