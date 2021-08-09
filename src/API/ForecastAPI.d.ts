import { AxiosInstance } from "axios";
import { IInitOptions } from "..";
import { IDailyForecastData, IHourlyForecastData } from "../Interfaces/ForecastAPIData";
export default class ForecastAPI {
    apikey: string;
    language: string;
    detail: boolean;
    metric: boolean;
    axiosInstance: AxiosInstance;
    constructor(options: Omit<IInitOptions, "offset">);
    /**
     * Get daily forecast data for a specific location. Forecast searches require a location key. Please use the Locations API to obtain the location key for your desired location. By default, a truncated version of the hourly forecast data is returned. The full object can be obtained by passing "details=true" into the url string
     * @param {1 | 5 | 10 | 20} day - days of forecast to return
     * @param {string} locationKey - Location key
     * @returns {Promise<IDailyForecastData>} Daily Forecast data
     */
    getDailyForecast(day: 1 | 5 | 10 | 15, locationKey: string): Promise<IDailyForecastData>;
    /**
     * Get daily forecast data for a specific location. Forecast searches require a location key. Please use the Locations API to obtain the location key for your desired location. By default, a truncated version of the hourly forecast data is returned. The full object can be obtained by passing "details=true" into the url string
     * @param {1 | 12 | 24 | 72 | 120} hours - hours of forecast to return
     * @param {string} locationKey - Location key
     * @returns {Promise<IHourlyForecastData[]>} Hourly Forecast data
     */
    getHourlyForecast(hours: 1 | 12 | 24 | 72 | 120, locationKey: string): Promise<IHourlyForecastData[]>;
    private handleError;
}
