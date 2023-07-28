function createtd (element, value=" "){
    var td = document.createElement(element)
    td.innerHTML=value
    return td;
}

let pagination = document.querySelector('#pagination');
let list= document.querySelector('#list');

let currentPage = 1;
let lastPage = 10;

var pagi = async (limitPerPage, page)=>{
    var data = await fetch('data.json')
    var dataPagi = await data.json()
    console.log(dataPagi) //100 items

    page--;

    let start = limitPerPage * page //10, 20, 30 etc
    let end = start + limitPerPage 

    let items = dataPagi.slice(start, end);
    console.log(items)

    var table = document.getElementsByClassName('table')
    console.log(table)
     var tbody = document.createElement('tbody')
     for (i=0; i<items.length; i++){

        var tr = createtd('tr')
        var td1 = createtd('td', items[i].id)
        var td2 = createtd('td', items[i].name)
        var td3 = createtd('td', items[i].email)

        tbody.append(tr)
        tr.append(td1,td2,td3)
        table[0].append(tbody)
     }
function setPagination(item, wrap, limitPerPage){
    wrap.innerHTML ="";

    let count = Math.ceil(item.length / limitPerPage)
    for(i=1; i<=count ; i++){
        let button = pagiBtn(i)
        wrap.append(button) 
       console.log(button)//10 buttons 
    }
}
setPagination(dataPagi, pagination, limitPerPage)

function pagiBtn(page){
    let btn = document.createElement('a')
    btn.setAttribute('class','page-link')
    btn.innerHTML =page;

btn.addEventListener('click',function(){
    tbody.removeChild(tr)
    tr.removeChild(td1,td2,td3)
    table[0].removeChild(tbody)
    currentPage= page
    //console.log(currentPage)
    //console.log(lastPage)

    pagi(lastPage, currentPage)
})
return btn;
}
}
pagi(lastPage, currentPage);