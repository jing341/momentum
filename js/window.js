const howAreYou = document.createElement("select");
const settingsWindow = document.createElement("div");
const bodyTag = document.querySelector("body");
const weatherTemperature = document.querySelector(".js-weather");
const settings = document.querySelector(".js-cog");
const weatherWindow = document.createElement("div");

let re = true;

let feeling = "";


//weather window
function weatherWindowFunc() {
    if(!document.querySelector(".weather-window") && weatherTemperature.innerText !== "Cant access geo location") {
        document.querySelector(".js-weather-div").appendChild(weatherWindow);
        weatherWindow.className = "weather-window";
        const weatherSpan = document.createElement("span");
        weatherWindow.appendChild(weatherSpan);
        weatherSpan.innerText = weatherTemperature.innerText;
        
        if(feeling || feeling === "-- How are you? --") {
        const howSpan = document.createElement("span");
        weatherWindow.appendChild(howSpan);
        howSpan.className = "how-span";
        howSpan.innerText = `You are ${feeling}`;
    }

    } else  if(weatherTemperature.innerText === "Cant access geo location"){
        console.error("Cant access geo location");
        alert("Cant access geo location");
    } else {
        weatherWindow.className ="weather-window-hide";
        setTimeout(
            function() {
                while (weatherWindow.hasChildNodes()) {
                    weatherWindow.removeChild(weatherWindow.firstChild);
                    weatherWindow.className ="";
                }}, 500)
    }
}


//setting window
function setting() {
    settingsWindow.classList.add("settingsWindow");
    if(re === true) {
    bodyTag.appendChild(settingsWindow);
    const settingsTitle = document.createElement("h3");
    settingsWindow.appendChild(settingsTitle);
    settingsTitle.innerHTML = "<h3>SETTINGS <i class='fas fa-cog'></i></h3>";
    settingsTitle.style.color = "skyblue";
    settingsTitle.className = "settings-title";

    settingsWindow.appendChild(howAreYou);

    const mainHowAreYou = document.createElement("option");
    mainHowAreYou.innerText = "-- How are you? --";
    howAreYou.appendChild(mainHowAreYou);
    howAreYou.classList.add("howAreYou");

    const pleasure = document.createElement("option");
    howAreYou.appendChild(pleasure);
    pleasure.innerText = "😆PLEASURE!😂";
    
    const happy = document.createElement("option");
    howAreYou.appendChild(happy);
    happy.innerText = "😀HAPPY!😃";
    
    const sad = document.createElement("option");
    howAreYou.appendChild(sad);
    sad.innerText = "😢SAD😭";
    
    const angry = document.createElement("option");
    howAreYou.appendChild(angry);
    angry.innerText = "😡ANGRY!👿";

    if(feeling) {
    howAreYou.value = feeling;
  } else {
      howAreYou.value = mainHowAreYou.innerText;
  }
    howAreYou.addEventListener("change", save);
    re = false;
    } else {
        settingsWindow.className = "hide-settingsWindow";
        setTimeout(function() {
            settingsWindow.className = "";
            while ( settingsWindow.hasChildNodes() ) {
                settingsWindow.removeChild(settingsWindow.firstChild);
            }
        re = true;
            while ( howAreYou.hasChildNodes() ) {
                howAreYou.removeChild(howAreYou.firstChild);
        }
    }
        , 300)
    }
}

function save() {
    localStorage.setItem("feeling", howAreYou.value);
}

function loadFeeling() {
    feeling = localStorage.getItem("feeling");
}

function init() {
    setInterval(loadFeeling ,1)
    weatherTemperature.addEventListener("click", weatherWindowFunc);
    settings.addEventListener("click", setting);
    
}

init();