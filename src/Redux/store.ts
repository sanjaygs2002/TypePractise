import { createStore, applyMiddleware } from "redux";
import  type { ThunkMiddleware } from "redux-thunk";
import { thunk } from "redux-thunk";
import { weatherReducer } from "./WeatherReducer";
import type { WeatherAction } from "./weatherTypes";
import type { WeatherState } from "./WeatherReducer";

export const store = createStore(
  weatherReducer,
  applyMiddleware(thunk as ThunkMiddleware<WeatherState, WeatherAction>)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
