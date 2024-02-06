// Problem Link:- https://oj.masaischool.com/contest/3554/problem/06
/*

*/
// Solution:-
function enoughFuelConsumption(fuel, distance) {
    const required=fuel*distance;
    console.log(required>50?"Enough":"Go On");
}
enoughFuelConsumption(1,45);