// Problem Link:-https://oj.masaischool.com/contest/3554/problem/05
/*

*/
// Solution:-
function applyBrakes(distance, time) {
    //Write code here
    const speed=distance/time;
    console.log(speed>40?"Apply Brake":"Keep Going");
}
applyBrakes(100,2)