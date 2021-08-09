import { AxiosError, AxiosResponse } from "axios";

export default class AccuWeatherAPIError extends Error {
    public name = "AccuWeatherAPIError";
    public message: string;
    public stack: string;

    public constructor(message: string, error: AxiosError) {
        super();
        this.message = `Request return with code ${error.response.status}: ${message}`;
    }
}
