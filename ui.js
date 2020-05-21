class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        //this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.pressure = document.getElementById('w-pressure');
        this.feelslike = document.getElementById('w-feelslike');
        this.wind = document.getElementById('w-wind');
        
    }
    paint(weather){
        console.log(weather.wind.speed);
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = `Temperature : ${weather.main.temp} K`;
        this.humidity.textContent = `Humidity : ${weather.main.humidity}%`;
        this.pressure.textContent = `Pressure : ${weather.main.pressure}`;
        this.feelslike.textContent = `Feels Like : ${weather.main.feels_like}K`;
        this.wind.textContent = `Wind Speed : ${weather.wind.speed}`;

    }
}