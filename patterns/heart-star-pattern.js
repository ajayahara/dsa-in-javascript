/* 
Q. Print The Follwing Square Pattern

 ***   ***
***** *****
***********
 *********
  *******
   *****
    ***
     *

*/
// Solution

function printHeart(){
     for(let i=2;i<=3;i++){
          let bag="";
          for(let j=1;j<=2-i+1;j++){
               bag+=" ";
          }
          for(let j=1;j<=2*i-1;j++){
               bag+="*"
          }
          for(let j=1;j<=2-i+1;j++){
               bag+=" ";
          }
          bag+=" ";
          bag+=bag;
          console.log(bag);
     }

     for(let i=6;i>=1;i--){
          let bag="";
          for(let j=1;j<=6-i;j++){
               bag+=" ";
          }
          for(let j=1;j<=2*i-1;j++){
               bag+="*";
          }
          console.log(bag);
     }
}
printHeart();