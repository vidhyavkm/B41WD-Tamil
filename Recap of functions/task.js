//print all odd numbers oin an array

//normal

function oddNum(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2!=0){
            console.log(arr[i])
        }
    }
}
oddNum([1,2,3,4,5,6,7,8,9])

//arrow 

var oddArrow = (arr)=> {
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2!=0){
            console.log(arr[i])
        }
    }
}
oddNum([1,2,3,4,5,6,7,8,9])

//anonymous

var array =[1,2,3,4,5,6,7,8,9]
var odd = function(array){
    var result = array.filter(element=>element%2!=0)
    return result;
}
console.log(odd(array))

var array =[1,2,3,4,5,6,7,8,9]
var odd = function(array){
    var result = array.filter(element=>element%2!=0)
    console.log(result)
}
odd(array);

//IIFE

(function(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2!=0){
            console.log(arr[i])
        }
    }
})
([1,2,3,4,5,6,7,8,9]);

//print the sum of all elements in an array

//IIFE

(function(arr){
    var total=0;
    for(let i=0; i<arr.length; i++){
        total = total+arr[i]
    }
    console.log(total)
})
([1,2,3,4,5,6,7,8,9]);

//anonymous

var array =[1,2,3,4,5,6,7,8,9]
var odd = function(array){
    var result1 = array.reduce((acc,cv)=>acc+cv)
   console.log(result1)
}
odd(array);

//normal //for of

function sum(arr){
    var total=0;
    for(var value of arr){
        total = total+value
    }
    console.log(total)
}
sum([1,2,3,4,5,6,7,8,9]);

//for in //arrow

var sumOf=(arr)=>{
    var total=0;
    for(var key in arr){
        total = total+arr[key]
    }
    console.log(total)
}
sumOf([1,2,3,4,5,6,7,8,9]);


//charAt(0)//sunstr//touppercase//tolowercase







