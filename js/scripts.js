//backend

var to_be_run_on_server_response = function(weather_data){
  $('.temp').append(weather_data.main.temp)
  $('.minTemp').append(weather_data.main.temp_min)
  $('.maxTemp').append(weather_data.main.temp_max)
  $('.windSpeed').append(weather_data.wind.speed)

var sunRiseTime = new Date(weather_data.sys.sunrise * 1000)
    $('.sunrise').append(sunRiseTime)


var sunSetTime = new Date(weather_data.sys.sunset * 1000)
    $('.sunset').append(sunSetTime)


var weatherDescription = new String(weather_data.weather[0].description)
    $('.weatherDescription').append(weatherDescription)

  $('.humidity').append(weather_data.main.humidity)
  $('.visibility').append(weather_data.visibility)
}

//frontend
$.get({
  url: 'http://api.openweathermap.org/data/2.5/weather?q=Nairobi&mode=json&units=imperial&APPID=248a7533aec9546a0b5f48951b31e33a',
  success: function(weather_data){
    to_be_run_on_server_response(weather_data)
  }
});


// $(document).ready(function() {
//   $("form#search").submit(function(event) {
//       event.preventDefault();
