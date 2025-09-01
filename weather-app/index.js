const url =
	'https://api.openweathermap.org/data/2.5/weather';
const apiKey =
	'f00c38e0279b7bc85480c3fe775d518c';


    async function weatherFn(city) {
	const temp =
		`${url}?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(temp);
        const data = await response.json();
        console.log(data)
        weatherShowFn(data)
    }

    function weatherShowFn(data) {
        console.log(data.name)
      $('#city-name').text(data.name);
      	$('#temperature').
		html(`${Math.round(data.main.temp)}°C`); // Rounded temperature
	$('#description').
		text(data.weather[0].description);

        	$('#weather-icon').
		attr('src',
			data.weather[0].icon);

        $('#weather-info').fadeIn();

    }