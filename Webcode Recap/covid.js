//https://api.covid19api.com/dayone/country/south-africa

var division = document.createElement('div')
division.innerHTML=`<input type = "text" id="txt">
<button type="button" onClick="foo()">Search</button>`;
//division.setAttribute('id','count')


document.body.append(division);

async function foo(){

    let covid19 = document.getElementById("txt").value //text is input tags id name

    // console.log(covid19);

    let result = await fetch(`https://api.covid19api.com/dayone/country/${covid19}`)

    let res = await result.json();

    console.log(res);

    let active = res.length-1;

    let activeCases = res[active].Active;
    
    console.log(activeCases);

    //document.getElementById("count").innerText=`Total Active Cases in ${covid19} : ${activeCases}`;

    document.getElementById("count").innerText=`Total Active Cases in ${covid19} : ${activeCases}`;
    
}