// function intro
//write a function to display the text

function display(){
    console.log("Hi how are you?")
}
display();//call the function

function display1(){
    return "Hi how are you?"
}
console.log(display1());

function add(){
    console.log(3+2)
}
add();

//function with parameters

function addTwoNum(a,b){
    console.log(a+b)
}
addTwoNum(11,12)

//write a function to multipy 3 nos with diff outputs by using return

function multiply(a,b,c){
        return a*b*c;
    }
    console.log(multiply(2,3,4));

    function random (a,b){
        var result =a+b;
        return result;
    }
console.log(random(5,10))//15

function random1 (a,b){
    var result =a+b;
    return 0;
}
console.log(random1(5,10))//0

function unique(x,y){
    var result1=x*y
}
console.log(unique(3,5))//undefined

// 4 subjects:
// marks :out of 100
// calculate %

// steps:
// formula% = total marks obtained/ total marks *100

function per(a,b,c,d){
    let marks=a+b+c+d;
    let perc=marks/400*100;
    return perc;
}
console.log(per(85,90,70,95));

function percentage(js,css,html,aws){
    let sum = js+css+html+aws;
    let percent = (sum/400)*100;
    return percent;
  }
  console.log(percentage(45,45,45,45)+"%");
  
//write a function to get the first elemtn in array
//passing a parameter n will return the first elemnt// use if else 
  
//Input([7,9,0,-2])
//o/p=>7
  
//input([0,6,4,5]) 
//o/p=>0

//input([1,2,3,4],3)
//o/p=>[1,2,3]

//input([1,2,3,4],-3)
//o/p=>[]

function compute(arr,n){
    if (n==null){
        return arr[3]
    }
    else if(n<0){
        return [];
    }
    else{
        //arr.slice
        return arr.slice(0,n)
    }
}
console.log(compute([7,9,0,-2]))
console.log(compute([0,6,4,5]))
console.log(compute([1,2,3,4],-3))
console.log(compute([1,2,3,4],-2))

