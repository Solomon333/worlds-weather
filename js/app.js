
let weather = {
 "apiKey": "10aa10fec728d91a9d1bab0d38d7cba9",
 fetchWeather: function(city) {
     fetch('https://api.openweathermap.org/data/2.5/weather?q='
      + city
      + '&unit=imperial&appid='
      + this.apiKey 
    
     ).then((res) => res.json() )
     .then((data) => this.displayWeather(data))
 },
 displayWeather: function(data) {
     const { name } = data;
     const { icon, description } = data.weather[0];
     const { temp, humidity } = data.main; 
     const { speed } = data.wind; 
     const { sunrise, sunset } = data.sys;
    document.querySelector(".city").innerText = "weather in:" + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C" ;
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%" ;
    document.querySelector(".wind").innerText = "Wind-Speed: " + speed + "kmh" ;
    document.querySelector(".sunrise").innerText = "Sunrise: " + sunrise ;
    document.querySelector(".sunset").innerText = "Sunset: " + sunset ;
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function() {
        this.fetchWeather(document.querySelector(".search-bar").value)

        }
    }

    document.querySelector(".search button").addEventListener("click", function(event){
        weather.search()
    })

    document.querySelector(".search-bar").addEventListener("keyup", function(event) {
        if(event.key == "Enter"){
            weather.search()
        }
    })


 










