// Problem Link:- https://oj.masaischool.com/contest/3554/problem/07
/*

*/
// Solution:-
function profilePic(L, W, length, width) {
    //Write code here
    if(L>length&&W>width){
        console.log("Upload");
    }else if(L<=length){
        console.log("increase Length");
    }else {
        console.log("Increase Width");
    }
}
profilePic(12,14,8,19);