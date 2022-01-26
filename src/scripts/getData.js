async function request(city){
    //Displays the hidden "loading..." message

    let weatherData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=de06af6d26cd4755a5604020220701&q=${city}&lang=es`)
    .then(res => res.json())
    .then(data => data)
    .catch(e => console.log(e));

    return weatherData;
}

export {request};