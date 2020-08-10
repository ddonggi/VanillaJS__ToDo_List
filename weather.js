const weather = document.querySelector(".js-weather");
const API_KEY = '41b0d7b14999381d7a1f6f046b099726';
const COORDS = 'coords';

function getWeather(lat,lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    )
    .then(function(response){
       return response.json();
    })
    .then(function(json){
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText=`${temperature} @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;
    const coordsObj ={
        latitude:latitude,
        longitude:longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}
function handleGeoError(){
    console.log(`Can't load location`);
}
function askForCoords(){
    //Navigator API
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }else{
        //getWeather
        const parseCoords =JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
       
    }
}

function init(){
    loadCoords();
}

init();