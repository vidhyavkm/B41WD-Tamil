//call by value

var a=5;
var b=a;
console.log(a);
a = 30;
console.log(a,b);

//call by reference

var arr = ["hi",1,2,3]
console.log(arr);
var arr1 = arr;
console.log(arr,arr1);
arr[2] =100
arr1[1]=200
console.log(arr,arr1);

 //synchronous=> javascript=>line by line execution
