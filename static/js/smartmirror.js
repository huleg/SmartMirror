$(document).ready(function() {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startDateTime() {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
        $("#time").html(h + ":" + m);

		var date = new Date(),
		months = ['January','February','March','April','May','June','July','August','Septembe','October','November','December'],
		days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		$("#date").html(days[date.getDay()] + ' ' + months[date.getMonth()] + ' ' + date.getDate());

		t = setTimeout(function () {
            startDateTime()
        }, 1000);
    }
    startDateTime();
	
	function updateWeather() {
		var weather_icons = {
			'01d':'wi-day-sunny',
			'02d':'wi-day-cloudy',
			'03d':'wi-cloudy',
			'04d':'wi-cloudy-windy',
			'09d':'wi-showers',
			'10d':'wi-rain',
			'11d':'wi-thunderstorm',
			'13d':'wi-snow',
			'50d':'wi-fog',
			'01n':'wi-night-clear',
			'02n':'wi-night-cloudy',
			'03n':'wi-night-cloudy',
			'04n':'wi-night-cloudy',
			'09n':'wi-night-showers',
			'10n':'wi-night-rain',
			'11n':'wi-night-thunderstorm',
			'13n':'wi-night-snow',
			'50n':'wi-night-alt-cloudy-windy'
		}
		
		$.getJSON( "api/weather", function (weather) {
		  $("#weatherContainer #temperature").html(weather['main']['temp'] + '<sup id="metric">°</sup>');
		  $("#weatherContainer #iconStatus").removeClass().addClass('wi').addClass(weather_icons[weather['weather'][0]['icon']]);
		  console.log(weather);
		});
		
		t = setTimeout(function () {
			updateWeather();
		}, 1000 * 60 * 10);
	}
	updateWeather();
});