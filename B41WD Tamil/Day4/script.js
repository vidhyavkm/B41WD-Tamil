//  //normal function without parameters
 function foo(){
    return ("Hello world")
    //console.log(foo());
}
console.log(foo());
//foo();

// //normal function with parameters

function add(a,b){ //if we are not using return keyword it gives undefined.
    return a+b;
    //console.log(a+b);
}
console.log(add(30,40));
//add(30,40)

// //anonymous function:

var sum = function(x,y){
    return x-y;
}
console.log(sum(300,40));

//IIFE fucntion:

(function (){
    console.log("hello world")
})();

(function (p,q){
    console.log(p+q)
})(40,50);

//arrow fucntion:

//single line
var compute = (u,v) => u+v
console.log(compute(3,2))

//multi line

var res =(i,j)=> {
    var result = 20;
    var total = result+i+j
    return total;
}
console.log(res(50,60))







