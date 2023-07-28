console.log("first")
console.log("second")
console.log("third")

console.log("first")
setTimeout(()=>{
    console.log("second")
},6000);
console.log("third")

function f1(){
    f2();
    console.log("hello f1");
}
function f2(){
    console.log("hello f2");
}
f1();

//callback hell

function f3(){
    console.log("hello world111!!")
    //f4();
    function f4(){
        console.log("hello world!!")
    
        function f5(){
             function f6(){
             }
             }
        }
    }
f3();

///////

console.log("App Started")

setTimeout(function timer(){
    console.log("you clicked the button!!")
},2000);

console.log("hi!");

setTimeout(function timeout(){
    console.log("I click the button!!")
},4000);

console.log("hello B41!");




