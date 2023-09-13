// ------------------------------------------------------
// Developer Code

const apiKey = 'e1cebecabc86c768ed1b0da7810da38b';

// Functions
async function getWeather(apiKey, zip) {
  // Replace this with your own API key!
  const units = 'imperial';
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`;

  try {
    const res = await fetch(path);
    const json = await res.json();
    console.log(json);
    const {
      main: { temp },
      weather: [{ description }],
    } = json;

    return { temp, description };
  } catch (error) {
    console.error(error);
  }
}
