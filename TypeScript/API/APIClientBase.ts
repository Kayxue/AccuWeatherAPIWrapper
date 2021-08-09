import { AxiosError } from "axios";
import { IInitOptions } from "..";
import AccuWeatherAPIError from "../Error/AccuWeatherAPIError";

export default class APIClientBase {
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

    public constructor(options: Omit<IInitOptions, "metric" | "offset">) {
        this.apikey = options.apikey;
        this.language = options.language ?? "en-us";
        this.detail = options.detail ?? false;
    }

    protected handleError(error: AxiosError): AccuWeatherAPIError {
        let message: string;
        switch (error.response.status) {
            case 400:
                message =
                    "Request had bad syntax or the parameters supplied were invalid";
                break;
            case 401:
                message = "Unauthorized. API authorization failed.";
                break;
            case 403:
                message =
                    "Unauthorized. You do not have permission to access this endpoint.";
                break;
            case 404:
                message =
                    "Server has not found a route matching the given URI.";
                break;
            case 500:
                message =
                    "Server encountered an unexpected condition which prevented it from fulfilling the request.";
        }

        return new AccuWeatherAPIError(message, error);
    }
}
