function changeCity(event) {
  function showTemp(response) {
    let shownTemp = document.querySelector("#shown-temp");
    let cityShown = document.querySelector("#city-shown");
    let currentTempApi = response.data.temperature.current;
    currentTempApi = Math.round(currentTempApi);
    cityShown.innerHTML = response.data.city;
    shownTemp.innerHTML = currentTempApi;
  }

  event.preventDefault();
  let city = document.querySelector("#city-box");
  let apiKey = `oe3107c03bbf1b061844a8c3d518t9b3`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city.value}&key=${apiKey}`;

  axios.get(apiUrl).then(showTemp);
}

let enterCityForm = document.querySelector("#enter-city");
enterCityForm.addEventListener("submit", changeCity);

/*  time generatex \/ */

let currentTime = new Date();
let shownTime = document.querySelector("#shown-time");

/* day engine \/ */
let day = currentTime.getDay();

let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

day = weekDays[day];

/* hour \/ */

let hour = currentTime.getHours();

/* Minutes \/ */

let min = currentTime.getMinutes();

let forbiddenNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

/* Time synthesizer \/ */

if (hour.length <= 1) {
  hour = "0" + hour;
}

if (min.length <= 1) {
  min = "0" + min;
}

shownTime.innerHTML = `${day} ${hour}:${min}`;

/* 

if (city.value.length > 2) {
      cityShown.innerHTML = city;
    } else {
      alert("Please enter a city");
    }
    
*/
