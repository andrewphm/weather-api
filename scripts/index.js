// ------------------------------------------------------
// Developer Code

const apiKey = 'e1cebecabc86c768ed1b0da7810da38b';

// Functions
async function getWeather(value, name) {
  // Replace this with your own API key!
  const units = 'imperial';
  let path = '';
  let lon = '';
  let lat = '';
  if (name === 'coordinates') {
    value = value.split(', ');
    lat = value[0];
    lon = value[1];
  }

  const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
  let params = '';

  switch (name) {
    case 'zip':
      params = `?zip=${value}&appid=${apiKey}&units=${units}`;
      break;
    case 'city':
      params = `?q=${value}&appid=${apiKey}&units=${units}`;
      break;
    case 'coordinates':
      path = coorPath;
      break;
    default:
      params = `?lat=${lat}&lon=${lon}appid=${apiKey}&units=${units}`;
      break;
  }

  try {
    const res = await fetch(baseURL + params);
    const json = await res.json();
    const {
      main: { temp },
      weather: [{ description }],
    } = json;

    return { temp, description };
  } catch (error) {
    console.error(error);
  }
}
