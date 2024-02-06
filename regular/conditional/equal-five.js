// Problem Link:- https://oj.masaischool.com/contest/3554/problem/06_optional_1
/*

*/
// Solution:-
function equalTo(x,y){
    // Write your code here! 
    const sum=x+y;
    if(sum>5){
        return "Above 5";
    }else if(sum<5){
        return "Below 5"
    }else{
        return "Equal 5"
    }
}
console.log(equalTo(2,4));