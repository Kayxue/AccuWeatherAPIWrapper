import axios, { AxiosInstance } from "axios";
import { IInitOptions } from "..";
import {
    IDailyForecastData,
    IHourlyForecastData,
} from "../Interfaces/ForecastAPIData";
import APIClientBase from "./APIClientBase";

/**
 * Forecast API Playground:
 * {@link https://developer.accuweather.com/accuweather-forecast-api/apis}
 */
export default class ForecastAPI extends APIClientBase {
    /**
     *  Whether or not to return metric values.
     */
    public metric: boolean;
    /**
     *  The instance that send requests to API
     */
    private axiosInstance: AxiosInstance;

    /**
     * Initialize the client
     * @param options  Init options
     */
    public constructor(options: Omit<IInitOptions, "offset">) {
        super(options);
        this.metric = options.metric ?? false;
        this.axiosInstance = axios.create({
            baseURL: "http://dataservice.accuweather.com/forecasts/v1/",
            params: {
                apikey: this.apikey,
                language: this.language,
                detail: this.detail,
                metric: this.metric,
            },
        });
    }

    /**
     * Get daily forecast data for a specific location.
     * @param day  days of forecast to return
     * @param locationKey  Location key
     * @returns Daily Forecast data
     */
    public async getDailyForecast(
        day: 1 | 5 | 10 | 15,
        locationKey: string,
    ): Promise<IDailyForecastData> {
        try {
            const { data } = await this.axiosInstance.get(
                `/daily/${day}day/${locationKey}`,
            );

            return data;
        } catch (e) {
            throw this.handleError(e);
        }
    }

    /**
     * Get daily forecast data for a specific location.
     * @param hours  hours of forecast to return
     * @param locationKey  Location key
     * @returns Hourly Forecast data
     */
    public async getHourlyForecast(
        hours: 1 | 12 | 24 | 72 | 120,
        locationKey: string,
    ): Promise<IHourlyForecastData[]> {
        try {
            const { data } = await this.axiosInstance.get(
                `/hourly/${hours}hour/${locationKey}`,
            );

            return data;
        } catch (e) {
            throw this.handleError(e);
        }
    }
}
