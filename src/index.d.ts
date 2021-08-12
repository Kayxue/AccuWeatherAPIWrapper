import LocationAPI from "./API/LocationAPIClient";
import ForecastAPI from "./API/ForecastAPIClient";
import CurrentConditionAPI from "./API/CurrentConditionAPIClient";
import APIClientBase from "./API/APIClientBase";
import { IDailyForecastData, IHourlyForecastData, IDayNightWeatherSummary, IHeadlineData, IDailyForecastsData } from "./Interfaces/ForecastAPIData";
import { IAdminAreaData, IAutoCompleteSearchData, IBaseCityData, ICityData, ICityDetails, ICountryData, IRegionData } from "./Interfaces/LocationAPIData";
import { ITopCitiesCurrentConditionData, ICurrentConditionData } from "./Interfaces/CurrentConditionAPIData";
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
    apikey: string;
    /**
     * Language of retrieve data
     */
    language: string;
    /**
     * Whether return full object when searching
     */
    detail: boolean;
    /**
     * The limit that determines the first resource to be returned
     */
    offset: number;
    /**
     *  Whether or not to return metric values.
     */
    metric: boolean;
    /**
     * Location API Client
     */
    location: LocationAPI;
    /**
     * Forecast API Client
     */
    forecast: ForecastAPI;
    /**
     * Current Condition API Client
     */
    currentConditions: CurrentConditionAPI;
    constructor(options: IInitOptions);
}
export { LocationAPI, ForecastAPI, IDailyForecastData, IHourlyForecastData, IRegionData, ICountryData, ICityData, IAutoCompleteSearchData, IAdminAreaData, IDayNightWeatherSummary, IValueWithUnit, IHeadlineData, IDailyForecastsData, ICityDetails, ITopCitiesCurrentConditionData, IBaseCityData, IMetricAndImperialData, CurrentConditionAPI, APIClientBase, AccuWeatherAPIError, ICurrentConditionData, };
