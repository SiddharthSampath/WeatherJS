//api.openweathermap.org/data/2.5/weather?q={city name},{state}&appid={your api key}
//713f6673ef9cb2ec4908b3f5c6d5e7bd
class Weather{
    constructor(city){
        this.appid = '713f6673ef9cb2ec4908b3f5c6d5e7bd';
        this.city = city;
    }

    async getWeather(){
        console.log(this.city);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.appid}`);
        const weatherData = await response.json();
        return weatherData;
    }

    changeLocation(city){
        this.city = city;

    }

}