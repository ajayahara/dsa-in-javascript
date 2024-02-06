// Problem Link:- https://oj.masaischool.com/contest/3547/problem/01
/*

*/
// Solution:-

function updateAndCompare(num1, num2, num3) {
  num1 > num2 ? console.log("true") : console.log("false");
  num1 += num3;
  num1 > num2 ? console.log("true") : console.log("false");
}
updateAndCompare(1,2,3);
