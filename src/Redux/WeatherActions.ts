import axios from "axios";
import type { ThunkDispatch } from "redux-thunk";
import type { AnyAction } from "redux";
import type { WeatherAction, WeatherData } from "./weatherTypes";
import type { WeatherState } from "./WeatherReducer";

const API_KEY = "15fd02603d0fa510f6e45a39232a776d";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = (city: string) => {
  return async (
    dispatch: ThunkDispatch<WeatherState, void, WeatherAction | AnyAction>
  ) => {
    dispatch({ type: "FETCH_WEATHER_START" });

    try {
      const response = await axios.get<WeatherData>(
        `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
      );

      dispatch({
        type: "FETCH_WEATHER_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      let message = "Failed to fetch weather data";
      if (axios.isAxiosError(error) && error.message) {
        message = error.message;
      }
      dispatch({
        type: "FETCH_WEATHER_FAILURE",
        payload: message,
      });
    }
  };
};
