/*SEARCH BY USING A CITY NAME (e.g. athens) OR A COMMA-SEPARATED CITY NAME ALONG WITH THE COUNTRY CODE (e.g. athens,gr)*/
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
/*PUT YOUR OWN KEY HERE - THIS MIGHT NOT WORK
SUBSCRIBE HERE: https://home.openweathermap.org/users/sign_up*/
const apiKey = "8c2b3c56c116012fc50493ce48b8b0a5";

form.addEventListener("submit", e => {
  e.preventDefault();
  const inputVal = input.value;

  //ajax here
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://openweathermap.org/img/wn/${
        weather[0]["icon"]
      }@2x.png`;

      if ((data.weather[0].icon.slice(-1)) == "n"){
        document.getElementById("time-color").style.backgroundColor = "#444";
      }
      else if ((data.weather[0].icon.slice(-1)) == "d"){
        document.getElementById("time-color").style.backgroundColor = "blue";
      }
      else{
        console.log(data.weather[0].icon.slice(-1));
      }
    })

  msg.textContent = "";
  form.reset();
  input.focus();
});