import axios from "axios";
const URL = "https://api.openweathermap.org/data/2.5/weather";
const APIKey = "42599bd713213011f5c14224cb6ec66c";
export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: APIKey,
    },
  });
  return data;
};
