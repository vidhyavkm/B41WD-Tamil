var url = "https://63748bc448dfab73a4e2162b.mockapi.io/users"

async function createData(){
    let data = {
        name: "vidhya",
        email: "vidhya@yahoo.com"
       }
    let res = await fetch (url, {
        method: "POST",
        body: JSON.stringify(data),
        headers:{
            "Content-type":"application/json;charset=UTF-8"
        }
    })
    var result = await res.json()
    console.log(result);
}
createData();

async function readData(){

    let res = await fetch(url)

    var result = await res.json()

    console.log(result);
}
readData();

async function updateData(){

    let data = {
        name : "vidhya1",
        email : "vidhya1@yahoo.com"
       }
    let res = await fetch (url + "/10", {
        method: "PUT",
        body: JSON.stringify(data),
        headers:{
            "Content-type":"application/json;charset=UTF-8"
        }
    })
    var result = await res.json()
    console.log(result);
}
updateData();

async function deleteData(){

    let res = await fetch (url + "/27",{
        method: "DELETE",
    })
    var result = await res.json()
    console.log(result);
}
deleteData();



