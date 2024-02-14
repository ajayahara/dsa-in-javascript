// https://oj.masaischool.com/contest/3576/problem/09
const ob={
    0:"zero",
    1:"one",
    2:"two",
    3:"three",
    4:"four",
    5:"five",
    6:"six",
    7:"seven",
    8:"eight",
    9:"nine"
}
function modeof10(num) {
    // Write code here
    let rem=num%10;
    console.log(ob[rem]);
}
