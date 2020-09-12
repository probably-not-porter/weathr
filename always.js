/*
Weathr
Pure CSS Weather display
Porter L
*/

const form = document.getElementById('myForm');
const input = document.getElementById('form-input');

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

      
      closeForm()
      render_info(data); // print info to screen
      clear_layers() // clear all layers
      document.getElementById('form').reset();
      select_layers(data.weather[0].icon.slice(0,2), data.weather[0].icon.slice(-1)) // selects appropriate layers
  })
});

function select_layers(conditions, dayNight){
  if (dayNight == "d"){ // currently day
    document.getElementById("information-panel").style.color = "black";

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
      document.getElementById("clouds2-bg").style.visibility = "visible";
      document.getElementById("rain2-bg").style.visibility = "visible";

    }
    else if (conditions == "11"){ // thunderstorm
      document.getElementById("color-bg-3").style.visibility = "visible";
      document.getElementById("clouds2-bg").style.visibility = "visible";
      document.getElementById("rain2-bg").style.visibility = "visible";

    }
    else if (conditions == "13"){ // snow
      document.getElementById("color-bg-2").style.visibility = "visible";
      document.getElementById("clouds2-bg").style.visibility = "visible";
      document.getElementById("snow").style.visibility = "visible";


    }
    else if (conditions == "50"){ // mist
      document.getElementById("color-bg-2").style.visibility = "visible";

    }
    else{
      console.error("Invalid weather state");
    }
  }
  else if(dayNight == "n"){ // currently night
    document.getElementById("information-panel").style.color = "white";

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
      document.getElementById("clouds2-bg").style.visibility = "visible";
      document.getElementById("rain2-bg").style.visibility = "visible";

    }
    else if (conditions == "11"){ // thunderstorm
      document.getElementById("color-bg-4").style.visibility = "visible";
      document.getElementById("clouds2-bg").style.visibility = "visible";
      document.getElementById("rain2-bg").style.visibility = "visible";

    }
    else if (conditions == "13"){ // snow
      document.getElementById("color-bg-4").style.visibility = "visible";
      document.getElementById("clouds2-bg").style.visibility = "visible";
      document.getElementById("moon-bg").style.visibility = "visible";
      document.getElementById("snow").style.visibility = "visible";

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

function render_info(data){
  console.log(data);
  var container = document.getElementById('information-panel');
  var info_html = "";
  info_html += "<span id='temp-info'>" + k_to_f(data.main.temp) + "° F</span><br>";
  info_html += "<span>" + data.name + "</span><br>";
  info_html += "<span>" + data.weather[0].description + "</span><br>";
  container.innerHTML = info_html;
}

function k_to_f(valNum) {
  valNum = parseFloat(valNum);
  return ((Math.round((((valNum-273.15) *1.8 )+32) + Number.EPSILON) * 100) / 100);
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
} 


clear_layers() // clear all layers