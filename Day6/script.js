//traditinal way
let bike ={
    name :"Yamaha",
    make:"2021",
    price:"150000",
    getBikeDetails: function(){
        return(`The name of the bike is ${bike.name} with Price Rs.${bike.price}/-`)
    }
}
//bike.name="Suzuki"
console.log(bike.getBikeDetails());

//class based

//classes as template
//objects as instance
//class constructor is generic
//values are dynamic

class person {
    constructor(name,place,job){
        this.name = name;
        this.place = place;
        this.job = job;
    }
   
    getDetails(){
        return(`The name of the person is ${this.name} works at ${this.place} as a ${this.job}`)
    }
}

let person1 = new person ("guvi","chennai","fsd")
let person2 = new person ("vidhya","madurai","mentor")
//let movie = new movie ("vikram","rajkamal studios")

//console.log(person1.name)
console.log(person1.getDetails());
//console.log(getDetails().person2)//error

//console.log(Math.PI)


