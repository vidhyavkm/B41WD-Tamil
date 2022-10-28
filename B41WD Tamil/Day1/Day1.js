console.log("HI")

var array = ["1", 23, "hello", "true", true]
console.log(array)

for (var i=0; i<array.length; i++){
    //console.log(array[i])
    console.log(array[2])
}

array[100] ="tution"

//1. length=> 100+1=>101
//2. last index => 100
//3. what will be the values after index 4 => undefined
//4. 100th index=> tution

// objects:

var students= {
    fname : "vidhya",
    job : "mentor",
    mail : "vidhya@123",
    age : 30,
    "23" : 13
}
console.log(students)
console.log(students["job"])
// console.log(students[job])
console.log(students.age)
console.log(students[23])
// console.log(students.23)

delete students.mail

students.place="chennai" // insert silent 
// crud 