//backend

var to_be_run_on_server_response = function(weather_data){
  $('.temp').empty();
  $('.temp').append(weather_data.main.temp)
  $('.minTemp').empty();
  $('.minTemp').append(weather_data.main.temp_min)
  $('.maxTemp').empty();
  $('.maxTemp').append(weather_data.main.temp_max)
  $('.windSpeed').empty();
  $('.windSpeed').append(weather_data.wind.speed)

var sunRiseTime = new Date(weather_data.sys.sunrise * 1000)
    $('.sunrise').empty();
    $('.sunrise').append(sunRiseTime)


var sunSetTime = new Date(weather_data.sys.sunset * 1000)
    $('.sunset').empty();
    $('.sunset').append(sunSetTime)


var weatherDescription = new String(weather_data.weather[0].description)
    $('.weatherDescription').empty();
    $('.weatherDescription').append(weatherDescription)
    $('.humidity').empty();
    $('.humidity').append(weather_data.main.humidity)
    $('.visibility').empty();
    $('.visibility').append(weather_data.visibility)
}

//frontend

$(document).ready(function() {

  $('#city1').click(function(event) {
    event.preventDefault();
    $('.clearField').empty();
    alert("The data for Nairobi is currently being fetched");
    $.get({
      url: 'https://api.openweathermap.org/data/2.5/weather?q=Nairobi&mode=json&units=imperial&APPID=248a7533aec9546a0b5f48951b31e33a',
      success: function(weather_data){
        to_be_run_on_server_response(weather_data);
      }
    })
  })



$('#city2').click(function(event) {
  event.preventDefault();
  $('.clearField').empty();
  alert("The data for Dar es salaam is currently being fetched");
  $.get({
    url: 'https://api.openweathermap.org/data/2.5/weather?q=Daressalaam&mode=json&units=imperial&APPID=248a7533aec9546a0b5f48951b31e33a',
    success: function(weather_data){
      to_be_run_on_server_response(weather_data);
    }
   })
  })

  $('#city3').click(function(event) {
    event.preventDefault();
    $('.clearField').empty();
    alert("The data for Kampala is currently being fetched");
    $.get({
      url: 'https://api.openweathermap.org/data/2.5/weather?q=kampala&mode=json&units=imperial&APPID=248a7533aec9546a0b5f48951b31e33a',
      success: function(weather_data){
        to_be_run_on_server_response(weather_data);
      }
     })
    })
    $('#city4').click(function(event) {
      event.preventDefault();
      $('.clearField').empty();
      alert("The data for Kigali is currently being fetched");
      $.get({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=kigali&mode=json&units=imperial&APPID=248a7533aec9546a0b5f48951b31e33a',
        success: function(weather_data){
          to_be_run_on_server_response(weather_data);
        }
       })
      })


      $('#city5').click(function(event) {
        event.preventDefault();
        //console.log("false")
        //debugger;
        $('.clearField').empty();

        alert("The data for Johanesburg is currently being fetched");
        $.get({
          url: 'https://api.openweathermap.org/data/2.5/weather?q=johanesburg&mode=json&units=imperial&APPID=248a7533aec9546a0b5f48951b31e33a',
          success: function(weather_data){
            to_be_run_on_server_response(weather_data);
          }
         })
        })

        $('#city6').click(function(event) {
          event.preventDefault();
          $('.clearField').empty();
          alert("The data for Addis Ababa is currently being fetched");
          $.get({
            url: 'https://api.openweathermap.org/data/2.5/weather?q=addisababa&mode=json&units=imperial&APPID=248a7533aec9546a0b5f48951b31e33a',
            success: function(weather_data){
              to_be_run_on_server_response(weather_data);
            }
           })
          })
        });
