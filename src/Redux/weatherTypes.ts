export interface WeatherData {
  name: string;
  weather: { description: string }[];
  main: { temp: number; humidity: number };
  wind: { speed: number };
}

export interface FetchWeatherStartAction {
  type: "FETCH_WEATHER_START";
}

export interface FetchWeatherSuccessAction {
  type: "FETCH_WEATHER_SUCCESS";
  payload: WeatherData;
}

export interface FetchWeatherFailureAction {
  type: "FETCH_WEATHER_FAILURE";
  payload: string;
}

export type WeatherAction =
  | FetchWeatherStartAction
  | FetchWeatherSuccessAction
  | FetchWeatherFailureAction;
