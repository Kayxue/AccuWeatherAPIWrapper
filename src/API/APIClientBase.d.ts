import { AxiosError } from "axios";
import { IInitOptions } from "..";
import AccuWeatherAPIError from "../Error/AccuWeatherAPIError";
export default class APIClientBase {
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
    constructor(options: Omit<IInitOptions, "metric" | "offset">);
    protected handleError(error: AxiosError): AccuWeatherAPIError;
}
