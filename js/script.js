document.addEventListener('DOMContentLoaded', () => {
    const studentInfo = document.getElementById('student-info');
    studentInfo.innerHTML = `Student ID: 200493106 - Name: Zichen Bao`;

    
    fetchWeatherData('Toronto'); 
});

async function fetchWeatherData(city) {
    const apiKey = '7122e93aa1e71b23862d93effb7f6ffd'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    // link to API doc: https://openweathermap.org/current

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeatherData(data) {
    const weatherDiv = document.getElementById('weather');
    if (data.weather) {
        const { main, description } = data.weather[0];
        weatherDiv.innerHTML = `Weather in ${data.name}: ${main} (${description})`;
    } else {
        weatherDiv.innerHTML = 'Weather data not available';
    }
}
