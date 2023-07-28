function submitButton(){

    var firstname = document.getElementById('firstname').value
    console.log(firstname)

    var lastname = document.getElementById('lastname').value
    console.log(lastname)

    var address = document.getElementById('address').value
    console.log(address)

    var pincode = document.getElementById('pincode').value
    console.log(pincode)

    var male = document.getElementById('male').value
    console.log(male)

    var female = document.getElementById('female').value
    console.log(female)

    var state = document.getElementById('state').value
    console.log(state)

    var country = document.getElementById('country').value
    console.log(country)

    var td1 = document.getElementById('td1')
    console.log(td1)
    td1.innerHTML=firstname

    var td2 = document.getElementById('td2')
    console.log(td2)
    td2.innerHTML=lastname

    var td3 = document.getElementById('td3')
    console.log(td3)
    td3.innerHTML=address

    var td4 = document.getElementById('td4')
    console.log(td4)
    td4.innerHTML=pincode

if(document.getElementById('male').checked){
    var td5 = document.getElementById('td5')
td5.innerHTML=male
}else if(document.getElementById('female').checked){
    var td5 = document.getElementById('td5')
td5.innerHTML=female
}

var td6 = document.getElementById('td6')
var checkbox = document.getElementsByName('foodItems')// 5 items

var checkeditems= 0;
var list = [];
for(let i=0; i<checkbox.length; i++){
    if(checkbox[i].checked){
        checkeditems++;
        console.log(checkbox[i].value)
        list.push(checkbox[i].value)
        }
}
td6.innerHTML=list
console.log(list.length)

if(list.length<2){
    alert("Please select atleast 2")
    td6.innerHTML="";
}

    var td7 = document.getElementById('td7')
    console.log(td7)
    td7.innerHTML=state

    var td8 = document.getElementById('td8')
    console.log(td8)
    td8.innerHTML=country
}