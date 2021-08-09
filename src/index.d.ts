import LocationAPI from "./API/LocationAPIClient";
export interface IInitOptions {
    apikey: string;
    language?: string;
    detail?: boolean;
    offset?: number;
    metric?: boolean;
}
export default class AccuWeatherClient {
    apikey: string;
    language: string;
    detail: boolean;
    offset: number;
    location: LocationAPI;
    constructor(options: IInitOptions);
}
export { LocationAPI };
