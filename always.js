/*
Weathr
Pure CSS Weather display
Porter L
*/

const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");

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

      clear_layers() // clear all layers
      select_layers(data.weather[0].icon.slice(0,2), data.weather[0].icon.slice(-1)) // selects appropriate layers
  })
  form.reset();
  input.focus();
});

function select_layers(conditions, dayNight){
  if (dayNight == "d"){ // currently day
    if (conditions == "01"){ // clear sky
      document.getElementById("color-bg-1").style.visibility = "visible";
      document.getElementById("sun-bg").style.visibility = "visible";
    }
    else if (conditions == "02"){ // few clouds
      document.getElementById("color-bg-2").style.visibility = "visible";
      document.getElementById("sun-bg").style.visibility = "visible";
      document.getElementById("clouds1-bg").style.visibility = "visible";
    }
    else if (conditions == "03"){ // scattered clouds
      document.getElementById("color-bg-2").style.visibility = "visible";
      document.getElementById("sun-bg").style.visibility = "visible";
      document.getElementById("clouds1-bg").style.visibility = "visible";

    }
    else if (conditions == "04"){ // broken clouds
      document.getElementById("color-bg-2").style.visibility = "visible";
      document.getElementById("sun-bg").style.visibility = "visible";
      document.getElementById("clouds2-bg").style.visibility = "visible";

    }
    else if (conditions == "09"){ // shower rain
      document.getElementById("color-bg-3").style.visibility = "visible";
      document.getElementById("clouds2-bg").style.visibility = "visible";
      document.getElementById("rain1-bg").style.visibility = "visible";

    }
    else if (conditions == "10"){ // rain
      document.getElementById("color-bg-3").style.visibility = "visible";
      document.getElementById("rain2-bg").style.visibility = "visible";

    }
    else if (conditions == "11"){ // thunderstorm
      document.getElementById("color-bg-3").style.visibility = "visible";
      document.getElementById("rain2-bg").style.visibility = "visible";

    }
    else if (conditions == "13"){ // snow
      document.getElementById("color-bg-2").style.visibility = "visible";

    }
    else if (conditions == "50"){ // mist
      document.getElementById("color-bg-2").style.visibility = "visible";

    }
    else{
      console.error("Invalid weather state");
    }
  }
  else if(dayNight == "n"){ // currently night
    if (conditions == "01"){ // clear sky
      document.getElementById("color-bg-4").style.visibility = "visible";
      document.getElementById("moon-bg").style.visibility = "visible";

    }
    else if (conditions == "02"){ // few clouds
      document.getElementById("color-bg-4").style.visibility = "visible";
      document.getElementById("moon-bg").style.visibility = "visible";
      document.getElementById("clouds1-bg").style.visibility = "visible";

    }
    else if (conditions == "03"){ // scattered clouds
      document.getElementById("color-bg-4").style.visibility = "visible";
      document.getElementById("moon-bg").style.visibility = "visible";
      document.getElementById("clouds1-bg").style.visibility = "visible";

    }
    else if (conditions == "04"){ // broken clouds
      document.getElementById("color-bg-4").style.visibility = "visible";
      document.getElementById("moon-bg").style.visibility = "visible";
      document.getElementById("clouds2-bg").style.visibility = "visible";

    }
    else if (conditions == "09"){ // shower rain
      document.getElementById("color-bg-4").style.visibility = "visible";
      document.getElementById("clouds2-bg").style.visibility = "visible";
      document.getElementById("rain1-bg").style.visibility = "visible";

    }
    else if (conditions == "10"){ // rain
      document.getElementById("color-bg-4").style.visibility = "visible";
      document.getElementById("rain2-bg").style.visibility = "visible";

    }
    else if (conditions == "11"){ // thunderstorm
      document.getElementById("color-bg-4").style.visibility = "visible";
      document.getElementById("rain2-bg").style.visibility = "visible";

    }
    else if (conditions == "13"){ // snow
      document.getElementById("color-bg-4").style.visibility = "visible";
      document.getElementById("moon-bg").style.visibility = "visible";

    }
    else if (conditions == "50"){ // mist
      document.getElementById("color-bg-4").style.visibility = "visible";
      document.getElementById("moon-bg").style.visibility = "visible";

    }
    else{
      console.error("Invalid weather state");
    }
  }
  else{
    console.error("Invalid Day-Night state");
  }
}

function clear_layers(){
  var elems = document.getElementsByClassName('weather-layer'),
  size = elems.length;
  for (var i = 0; i < size; i++) {
    var layer = elems[i];
    layer.style.visibility = "hidden"; // set layer to hidden
  }
}

clear_layers() // clear all layers