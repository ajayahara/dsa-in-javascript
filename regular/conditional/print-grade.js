// Problem Link:-https://oj.masaischool.com/contest/3554/problem/08
/*

*/
// Solution:-
function printGrade(total) {
    // Write code here
    if(total==100){
        return "A";
    }else if(total>=90){
        return "B";
    }else if(total>=80){
        return "C";
    }else{
        return "F";
    }
}
console.log(printGrade(95));