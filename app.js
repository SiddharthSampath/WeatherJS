
const ui = new UI;
const storage = new Storage;
const locationData = storage.getLocationData();
const weather = new Weather(locationData.city);
console.log(weather);

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
    weather.getWeather().then((resp) => {
        ui.paint(resp);
        // console.log(resp);
        // document.getElementById('w-location').textContent = resp.name;
        // console.log(resp.weather[0].description);
        // document.querySelector('.w-desc').textContent = resp.weather[0].description;
    }).catch(err => console.log(err));
}

document.getElementById('change-btn').addEventListener('click', changeLocation);

function changeLocation(e){
    const city = document.getElementById('city').value;
    
    weather.changeLocation(city);
    storage.setLocationData(city);
    getWeather();

    $('#locModal').modal('hide');
    
}

