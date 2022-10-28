//multiply 2 nos use return
//anonymous

var multiply = function(a,b){
    var result =a*b
return result
}
console.log(multiply(20,40))

//arrow

var multiply1 = (a,b) => {
    // var result =a*b
return a*b;
}
console.log(multiply1(20,40))

//normal

function multiply2 (x,y) {
     var result =x*y
return x*y;
}
console.log(multiply2(20,40));

//IIFE
(function (p,q) {
    var result =p*q
console.log(result)
})
(20,40);

(function (){
    console.log("hi")
})
();

    



