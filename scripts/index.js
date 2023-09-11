// ------------------------------------------------------
// Developer Code

const apiKey = '467355df4c808dd6134a3b64e9ace282';

// Functions
function getWeather(apiKey, zip, callback) {
  // Replace this with your own API key!
  console.log('something happening?');
  const units = 'imperial';
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`;
  fetch(path)
    .then((res) => res.json())
    .then((json) => {
      callback(json);
    })
    .catch((err) => console.log(err.message));
}
