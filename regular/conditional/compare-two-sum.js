// Problem Link:- https://oj.masaischool.com/contest/3576/problem/05
/*

*/
// Solution:-
function twoSumsOneNumberII(one, two, three, four, five, six) {
    // Write code here
    const sum1=one+two;
    const sum2=four+five;
    return ((sum1>three)&&(sum2>six))?"Yes":"No";
}
console.log(twoSumsOneNumberII(1,2,3,4,5,6));