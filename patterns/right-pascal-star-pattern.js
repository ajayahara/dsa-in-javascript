/* 
Q. Print The Follwing Square Pattern

*
**
***
****
*****
****
***
**
*

*/
// Solution

function rightPascal(num){
    for(let i=1;i<=num;i++){
        let bag="";
        for(let j=1;j<=i;j++){
            bag+="*";
        }
        console.log(bag);
    }
    for(let i=num-1;i>=1;i--){
        let bag="";
        for(let j=1;j<=i;j++){
            bag+="*";
        }
        console.log(bag)
    }
}
rightPascal(5)