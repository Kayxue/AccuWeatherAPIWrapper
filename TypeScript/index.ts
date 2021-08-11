import LocationAPI from "./API/LocationAPIClient";
import ForecastAPI from "./API/ForecastAPIClient";
import CurrentConditionAPI from "./API/CurrentConditionAPIClient";
import APIClientBase from "./API/APIClientBase";
import {
    IDailyForecastData,
    IHourlyForecastData,
    IDayNightWeatherSummary,
    IHeadlineData,
    IDailyForecastsData,
} from "./Interfaces/ForecastAPIData";
import {
    IAdminAreaData,
    IAutoCompleteSearchData,
    IBaseCityData,
    ICityData,
    ICityDetails,
    ICountryData,
    IRegionData,
} from "./Interfaces/LocationAPIData";
import {
    ITopCitiesCurrentConditionData,
    ICurrentConditionData,
} from "./Interfaces/CurrentConditionAPIData";
import { IValueWithUnit, IMetricAndImperialData } from "./Interfaces/Other";
import AccuWeatherAPIError from "./Error/AccuWeatherAPIError";

export interface IInitOptions {
    /**
     * Accu Weather API key.
     */
    apikey: string;
    /**
     * Language of retrieve data
     */
    language?: string;
    /**
     * Whether return full object when searching
     */
    detail?: boolean;
    /**
     * The limit that determines the first resource to be returned
     */
    offset?: number;
    /**
     *  Whether or not to return metric values.
     */
    metric?: boolean;
}

/**
 * A client that provides an interface to all apis
 */
export default class AccuWeatherClient {
    /**
     * Accu Weather API key.
     */
    public apikey: string;
    /**
     * Language of retrieve data
     */
    public language: string;
    /**
     * Whether return full object when searching
     */
    public detail: boolean;
    /**
     * The limit that determines the first resource to be returned
     */
    public offset: number;
    /**
     *  Whether or not to return metric values.
     */
    public metric: boolean;
    /**
     * Location API Client
     */
    public location: LocationAPI;
    /**
     * Forecast API Client
     */
    public forecast: ForecastAPI;
    /**
     * Current Condition API Client
     */
    public currentConditions: CurrentConditionAPI;

    public constructor(options: IInitOptions) {
        this.apikey = options.apikey;
        this.language = options.language ?? "en-us";
        this.detail = options.detail ?? false;
        this.offset = options.offset ?? 100;
        this.metric = options.metric ?? false;
        this.location = new LocationAPI(options);
        this.forecast = new ForecastAPI(options);
        this.currentConditions = new CurrentConditionAPI(options);
    }
}

export {
    LocationAPI,
    ForecastAPI,
    IDailyForecastData,
    IHourlyForecastData,
    IRegionData,
    ICountryData,
    ICityData,
    IAutoCompleteSearchData,
    IAdminAreaData,
    IDayNightWeatherSummary,
    IValueWithUnit,
    IHeadlineData,
    IDailyForecastsData,
    ICityDetails,
    ITopCitiesCurrentConditionData,
    IBaseCityData,
    IMetricAndImperialData,
    CurrentConditionAPI,
    APIClientBase,
    AccuWeatherAPIError,
    ICurrentConditionData,
};
