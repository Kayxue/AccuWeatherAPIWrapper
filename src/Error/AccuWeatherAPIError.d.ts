import { AxiosError } from "axios";
export default class AccuWeatherAPIError extends Error {
    name: string;
    message: string;
    stack: string;
    constructor(message: string, error: AxiosError);
}
