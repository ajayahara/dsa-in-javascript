// https://oj.masaischool.com/contest/3576/problem/07
function oddEvenBoth(one, two) {
    // Write code here
    const isOdd=(one%2!==0)&&(two%2!==0);
    const isEven=(one%2==0)&&(two%2==0);
    if(isOdd){
        console.log("Odd");
    }else if(isEven){
        console.log("Even")
    }else{
        console.log("Even-Odd")
    }

}