// Problem Link:-https://oj.masaischool.com/contest/3554/problem/09
/*

*/
// Solution:-
function worldCupFinal(NzScore, NzSuperOver, NzFours, EngScore, EngSuperOver, EngFours) {
    //Write code here
    if(NzScore>EngScore){
        return "New Zealand"
    }else if(NzScore<EngScore){
        return "England"
    }else if(NzSuperOver>EngSuperOver){
        return "New Zealand"
    }else if(NzSuperOver<EngSuperOver){
        return "England"
    }else if(NzFours>EngFours){
        return "New Zealand"
    }else if(NzFours<EngFours){
        return "England"
    }
}
console.log(worldCupFinal(241,15,21,241,15,26))