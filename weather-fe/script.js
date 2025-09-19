//use async function as we need to wait for response from OpenWeatherMap 
async function getWeather() {
  //get city from user input
  const city = document.getElementById('city').value;
  const apiKey = '07db5ee3e129a96e70de045f61343790'; // OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  //fetch weather data for required city
  const res = await fetch(url);
  //convert response into json object
  const data = await res.json();
  //const json = JSON.stringify(data);

  //200 is the code in the response that means the city is recognized
  if (data.cod == 200){
//document.getElementById("result").innerHTML = json;
//extracting data from json object, converting to string, and returning data in html document
document.getElementById("temperature").innerHTML = JSON.stringify(data.main.temp);
document.getElementById("weather").innerHTML = JSON.stringify(data.weather[0].main);
document.getElementById("windspeed").innerHTML = JSON.stringify(data.wind.speed);
document.getElementById("humidity").innerHTML = JSON.stringify(data.main.humidity);
  }
  else{
    alert('city not found')
  }
}

//this function is similar to getWeather() except that it is applied to a city from 
// the list of favorite cities fetched by the function fetchCities()
async function fetchWeather(city){
  const apiKey = '07db5ee3e129a96e70de045f61343790';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data.cod == 200){
  document.getElementById("temperature").innerHTML = JSON.stringify(data.main.temp);
  document.getElementById("weather").innerHTML = JSON.stringify(data.weather[0].main);
  document.getElementById("windspeed").innerHTML = JSON.stringify(data.wind.speed);
  document.getElementById("humidity").innerHTML = JSON.stringify(data.main.humidity);
  }
  else{
    alert('city name not found')
  }
}


//use async function as need to wait for response from backend
async function fetchCities(){
  document.getElementById("cities").innerHTML = "";
  const URL = "http://localhost:3000/cities";
  //fetch data from backend
  const response = await fetch(URL);
  //converting data into json
  const cities = await response.json();
  //defining a list with the favorite cities to which
  //every city from the cities response will be added via for loop 
  list = document.getElementById("cities");
  for (i = 0; i < cities.length; ++i){
    const city = cities[i];
    //creating list item inside unordered list
    let li = document.createElement('li');
    //giving list item the city value
    li.textContent = city;
    //creating button to retrieve weather
    let btn = document.createElement('button');
    let btn_name = document.createTextNode('Get weather');
    //calling function fetchWeather() if button is clicked for concerned city
    btn.onclick = () => {
      fetchWeather(city);
    }
    //appending list item and button to list
    btn.appendChild(btn_name);
    list.appendChild(li);
    list.appendChild(btn);
  }
}

async function addCity(){
  //getting city value from input field
  city = document.getElementById("addcity").value;
  //creating headers for post request
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  //making post request to backend
  const response = await fetch("http://localhost:3000/addCities",{
  method: "POST",
  body: JSON.stringify({city}),
  headers: myHeaders
})
}