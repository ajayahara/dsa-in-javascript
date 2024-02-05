/* 
Q. Print The Follwing Square Pattern

*****
*   *
*   *
*****

*/
// Solution

let rows=4;
let columns=5;
for(let i=1;i<=rows;i++){
    let bag="";
    for(let j=1;j<=columns;j++){
        if(i==1||j==1||i==rows||j==columns){
            bag+="*";
        }else{
            bag+=" ";
        }
    }
    console.log(bag);
}