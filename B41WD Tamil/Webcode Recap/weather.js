//https://api.openweathermap.org/data/2.5/weather?q=${cityNames}&appid=175fa9771bfa1b408feb60f0443a32d7

async function getWeatherData(){

    var cityNames = document.getElementById('cityNames').value;

    let weatherReport = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityNames}&appid=175fa9771bfa1b408feb60f0443a32d7`)

    let res = await weatherReport.json()

    console.log(res);

    var weatherCard = document.getElementById('weatherCard');

    weatherCard.innerHTML=`<div class="card" style="width:33rem">
    <img src="https://i.ytimg.com/vi/qCrHUxawcyM/maxresdefault.jpg" width:50px class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Temperature : ${res.main.temp}</p>
      <p class="card-text">Windspeed: ${res.wind.speed}</p>
      <p class="card-text">Humidity : ${res.main.humidity}</p>
     
    </div>
  </div>`
}