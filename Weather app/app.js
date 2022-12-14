let weather = {
    apiKEY:"f8bb497e2c99437a2c9b5c8407a41112",
    fetchWeather: function (city){
        fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKEY 
        )
          .then((resoponse) => resoponse.json())
          .then((data) => this.displayWeather(data));
    },

    displayWeather(data){
      const { name } = data
      const { icon , description} = data.weather[0]
      const {temp , humidity } = data.main
      const { speed } = data.wind
      console.log(name , icon , temp , humidity , speed , description)
      document.querySelector(".city").innerText = "Weather in " + name
      document.querySelector(".icon").src =
        "http://openweathermap.org/img/w/" + icon + ".png"
      document.querySelector('.description').innerHTML = description
      document.querySelector(".temp").innerText = temp + "°C"
      document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%"
      document.querySelector(".wind").innerText =
        "Wind speed : " + speed + " km/h"; 
        document.querySelector(".weather").classList.remove(".loading") 
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    
    
    },

    Search(){
      this.fetchWeather(document.querySelector(".search-bar").value)
    }
}

document.querySelector('.search button').addEventListener('click' , ()=>{
  weather.Search()

})

document.querySelector(".search-bar").addEventListener('keyup' , event=>{
  if(event.key == "Enter"){
    weather.Search()
  }
})

weather.fetchWeather('denver')