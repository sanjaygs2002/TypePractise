import type { WeatherAction, WeatherData } from "./weatherTypes";

export interface WeatherState {
  loading: boolean;
  data: WeatherData | null;
  error: string | null;
}

const initialState: WeatherState = {
  loading: false,
  data: null,
  error: null,
};

export const weatherReducer = (
  state: WeatherState = initialState,
  action: WeatherAction
): WeatherState => {
  switch (action.type) {
    case "FETCH_WEATHER_START":
      return { ...state, loading: true, error: null };
    case "FETCH_WEATHER_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_WEATHER_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
