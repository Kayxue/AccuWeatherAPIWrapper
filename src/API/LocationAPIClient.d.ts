import { IInitOptions } from "..";
import { IAdminAreaData, IAutoCompleteSearchData, ICityData, ICountryData, IRegionData } from "../Interfaces/LocationAPIData";
import APIClientBase from "./APIClientBase";
/**
 * Location API Playground:
 * {@link https://developer.accuweather.com/accuweather-locations-api/apis}
 */
export default class LocationAPI extends APIClientBase {
    /**
     * The limit that determines the first resource to be returned
     */
    offset: number;
    /**
     *  The instance that send requests to API
     */
    private axiosInstance;
    /**
     * Initialize the client
     * @param options  Init options
     */
    constructor(options: Omit<IInitOptions, "metric">);
    /**
     * Get basic information about administrative areas in the specified country.
     * @param countryCode  Country Code
     * @returns Administrative areas
     */
    getAdminAreaList(countryCode: string): Promise<IAdminAreaData[]>;
    /**
     * Get basic information about all countries within a specified region.
     * @param region  region string
     * @returns Countries Datas
     */
    getCountryList(region: string): Promise<ICountryData[]>;
    /**
     * Get basic information about all regions.
     * @returns Region Datas
     */
    getRegionList(): Promise<IRegionData[]>;
    /**
     * Get information for the top 50, 100, or 150 cities, worldwide.
     * @param group  number of cities to return
     * @returns City Datas
     */
    getTopCities(group: 50 | 100 | 150): Promise<ICityData[]>;
    /**
     * Get basic information about locations matching an autocomplete of the search text.
     * @param query  Text to use for Autocomplete search
     * @returns Auto Complete Search Data
     */
    autocompleteSearch(query: string): Promise<IAutoCompleteSearchData[]>;
    /**
     * Get information about neighboring cities, by location key. You must know the location key to perform this query.
     * @param locationKey  Location Key
     * @returns CityNeighbors data
     */
    getCityNeighborsByLocationKey(locationKey: string): Promise<ICityData[]>;
    /**
     * Get information about a specific location, by location key. You must know the location key to perform this query.
     * @param locationKey  Location Key
     * @returns Search Data
     */
    SearchByLocationKey(locationKey: string): Promise<ICityData[]>;
    /**
     * Get information for an array of cities that match the search text.
     * @param query  Text to search for.
     * @param countryCode  Country code
     * @param adminCode  Adminstractive area code
     * @returns  Search Data
     */
    citySearch(query: string, countryCode?: string, adminCode?: string): Promise<ICityData[]>;
    /**
     * Get information for an array of Points of Interest that match the search text.
     * @param query  Text to search for.
     * @param countryCode  Country code
     * @param adminCode  Adminstractive area code
     * @returns Search Data
     */
    pointOfInterestSearch(query: string, countryCode?: string, adminCode?: string): Promise<ICityData[]>;
    /**
     * Get information for an array of Postal Codes that match the search text.
     * @param query  Text to search for.
     * @param countryCode  Country code
     * @returns Search Data
     */
    PostalCodeSearch(query: string, countryCode?: string): Promise<ICityData[]>;
    /**
     * Get information for an array of locations that match the search text
     * @param query  Text to search for.
     * @param countryCode  Country code
     * @param adminCode  Adminstractive area code
     * @returns Search Data
     */
    TextSearch(query: string, countryCode?: string, adminCode?: string): Promise<ICityData[]>;
    /**
     * Get information about a specific location, by GeoPosition (Latitude and Longitude).
     * @param lat  Latitude.
     * @param lng  Longitude.
     * @returns Search Data
     */
    geopositionSearch(lag: number, lng: number, topLevel?: boolean): Promise<ICityData[]>;
    /**
     * Get information for an array of Points of Interest that match the search text.
     * @param query  Text to search for.
     * @returns Search Data
     */
    ipSearch(query: string): Promise<ICityData[]>;
}
