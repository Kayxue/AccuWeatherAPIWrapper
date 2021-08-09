import { IInitOptions } from "..";
import { IDailyForecastData, IHourlyForecastData } from "../Interfaces/ForecastAPIData";
import APIClientBase from "./APIClientBase";
/**
 * Forecast API Playground:
 * {@link https://developer.accuweather.com/accuweather-forecast-api/apis}
 */
export default class ForecastAPI extends APIClientBase {
    /**
     *  Whether or not to return metric values.
     */
    metric: boolean;
    /**
     *  The instance that send requests to API
     */
    private axiosInstance;
    /**
     * Initialize the client
     * @param options  Init options
     */
    constructor(options: Omit<IInitOptions, "offset">);
    /**
     * Get daily forecast data for a specific location.
     * @param day  days of forecast to return
     * @param locationKey  Location key
     * @returns Daily Forecast data
     */
    getDailyForecast(day: 1 | 5 | 10 | 15, locationKey: string): Promise<IDailyForecastData>;
    /**
     * Get daily forecast data for a specific location.
     * @param hours  hours of forecast to return
     * @param locationKey  Location key
     * @returns Hourly Forecast data
     */
    getHourlyForecast(hours: 1 | 12 | 24 | 72 | 120, locationKey: string): Promise<IHourlyForecastData[]>;
}
