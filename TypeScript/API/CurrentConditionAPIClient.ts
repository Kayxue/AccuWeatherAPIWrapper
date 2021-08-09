import axios, { AxiosInstance } from "axios";
import { IInitOptions } from "..";
import {
    ICurrentConditionData,
    ITopCitiesCurrentConditionData,
} from "../Interfaces/CurrentConditionAPIData";
import APIClientBase from "./APIClientBase";

/**
 * Current condition API Playground:
 * {@link https://developer.accuweather.com/accuweather-current-conditions-api/apis}
 */
export default class CurrentConditionAPI extends APIClientBase {
    /**
     *  The instance that send requests to API
     */
    private axiosInstance: AxiosInstance;

    /**
     * Initialize the client
     * @param options  Init options
     */
    public constructor(options: Omit<IInitOptions, "metric" | "offset">) {
        super(options);
        this.axiosInstance = axios.create({
            baseURL: "http://dataservice.accuweather.com/currentconditions/v1/",
            params: {
                apikey: this.apikey,
                language: this.language,
                details: this.detail,
            },
        });
    }

    public async currentCondition(
        locationKey: string,
    ): Promise<ICurrentConditionData[]> {
        try {
            const { data } = await this.axiosInstance.get(`/${locationKey}`);

            return data;
        } catch (e) {
            throw this.handleError(e);
        }
    }

    public async topCitiesCurrentCondition(
        group: 50 | 100 | 150,
    ): Promise<ITopCitiesCurrentConditionData[]> {
        try {
            const { data } = await this.axiosInstance.get(
                `/topcities/${group}`,
            );

            return data;
        } catch (e) {
            throw this.handleError(e);
        }
    }

    public async HistoricalCurrentConditions(
        hour: 6 | 24,
        locationKey: string,
    ): Promise<ICurrentConditionData[]> {
        try {
            const { data } = await this.axiosInstance.get(
                `/${locationKey}/historical/${hour === 24 ? 24 : ""}`,
            );

            return data;
        } catch (e) {
            throw this.handleError(e);
        }
    }
}
