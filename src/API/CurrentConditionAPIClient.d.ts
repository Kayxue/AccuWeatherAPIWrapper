import { IInitOptions } from "..";
import { ICurrentConditionData, ITopCitiesCurrentConditionData } from "../Interfaces/CurrentConditionAPIData";
import APIClientBase from "./APIClientBase";
/**
 * Current condition API Playground:
 * {@link https://developer.accuweather.com/accuweather-current-conditions-api/apis}
 */
export default class CurrentConditionAPI extends APIClientBase {
    /**
     *  The instance that send requests to API
     */
    private axiosInstance;
    /**
     * Initialize the client
     * @param options  Init options
     */
    constructor(options: Omit<IInitOptions, "metric" | "offset">);
    currentCondition(locationKey: string): Promise<ICurrentConditionData[]>;
    topCitiesCurrentCondition(group: 50 | 100 | 150): Promise<ITopCitiesCurrentConditionData[]>;
    HistoricalCurrentConditions(hour: 6 | 24, locationKey: string): Promise<ICurrentConditionData[]>;
}
