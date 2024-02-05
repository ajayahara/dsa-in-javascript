/* 
Q. Print The Follwing Square Pattern

*
**
* *
*  *
*   *
******

*/
// Solution

let rows=6;
for(let i=1;i<=rows;i++){
    let bag="";
    for(let j=1;j<=i;j++){
        if(i==1||i==rows||j==1||j==i){
            bag+="*";
        }else{
            bag+=" ";
        }
    }
    console.log(bag);
}