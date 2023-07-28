async function getCountry(){
    let cc = document.getElementById("getWeather");
    try{
   
    var cityName = await fetch(`https://restcountries.com/v3.1/all`)
    var result= await cityName.json()
    console.log(result)

var randomCity = Math.floor(Math.random()*result.length)
console.log(randomCity)
console.log(result[randomCity].name.common)

var cityNames= result[randomCity].name.common
console.log(cityNames)

var weatherReport = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityNames}&appid=175fa9771bfa1b408feb60f0443a32d7`)
var result1= await weatherReport.json()
console.log(result1)


document.getElementById("getWeather").innerText=`WeatherReport:${cityNames}:Temperature:${result1.main.temp}`;
    }
    catch(err){
        console.log("Some error occured"+ err)
    }
}
getCountry();


