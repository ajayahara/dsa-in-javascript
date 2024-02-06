// Problem Link:- https://oj.masaischool.com/contest/3539/problem/08
/*

*/
// Solution:-
function infinityStones(one, two, three, four, five, six) {
    return 2*(two+five+six)+3*(three+four)+one;
}
const ans=infinityStones(1,2,3,4,5,6,7);
console.log(ans);