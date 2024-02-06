// Problem Link:- https://oj.masaischool.com/contest/3576/problem/03
/*

*/
// Solution:-
function twoSumsOneNumber(one, two, three, four, five) {
    // Write code here
    const sum1=one+two;
    const sum2=three+four;
    return ((sum1>5)&&(sum2>5))?"Yes":"No";
}
console.log(twoSumsOneNumber(1,2,3,4,5));

