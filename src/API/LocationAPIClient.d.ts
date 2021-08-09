import { AxiosInstance } from "axios";
import { IInitOptions } from "..";
import { IAdminAreaData, IAutoCompleteSearchData, ICityData, ICountryData, IRegionData } from "../Interfaces/LocationAPIData";
export default class LocationAPI {
    apikey: string;
    language: string;
    detail: boolean;
    offset: number;
    axiosInstance: AxiosInstance;
    /**
     * Initialize the client
     * @param {Omit<IInitOptions,"metric">} options - Init options
     */
    constructor(options: Omit<IInitOptions, "metric">);
    /**
     * Get basic information about administrative areas in the specified country.
     * @param {string} countryCode - Country Code
     * @returns {Promise<IAdminAreaData[]>} Administrative areas
     */
    getAdminAreaList(countryCode: string): Promise<IAdminAreaData[]>;
    /**
     * Get basic information about all countries within a specified region.
     * @param {string} region - region string
     * @returns {Promise<ICountryData[]>} Countries Datas
     */
    getCountryList(region: string): Promise<ICountryData[]>;
    /**
     * Get basic information about all regions.
     * @returns {Promise<IRegionData[]>} Region Datas
     */
    getRegionList(): Promise<IRegionData[]>;
    /**
     * Get information for the top 50, 100, or 150 cities, worldwide.
     * @param {50 | 100 | 150 | 200} group - number of cities to return
     * @returns {Promise<ICityData[]>} City Datas
     */
    getTopCities(group: 50 | 100 | 150): Promise<ICityData[]>;
    /**
     * Get basic information about locations matching an autocomplete of the search text.
     * @param {string} query - Text to use for Autocomplete search
     * @returns {Promise<IAutoCompleteSearchData[]>} Auto Complete Search Data
     */
    autocompleteSearch(query: string): Promise<IAutoCompleteSearchData[]>;
    /**
     * Get information about neighboring cities, by location key. You must know the location key to perform this query.
     * @param {string} locationKey - Location Key
     * @returns {Promise<ICityData[]>} CityNeighbors data
     */
    getCityNeighborsByLocationKey(locationKey: string): Promise<ICityData[]>;
    /**
     * Get information about a specific location, by location key. You must know the location key to perform this query.
     * @param {string} locationKey - Location Key
     * @returns {Promise<ICityData[]>} Search Data
     */
    SearchByLocationKey(locationKey: string): Promise<ICityData[]>;
    /**
     * Get information for an array of cities that match the search text.
     * @param {string} query - Text to search for.
     * @param {string} [countryCode] - Country code
     * @param {string} [adminCode] - Adminstractive area code
     * @returns {Promise<ICityData[]>} Search Data
     */
    citySearch(query: string, countryCode?: string, adminCode?: string): Promise<ICityData[]>;
    /**
     * Get information for an array of Points of Interest that match the search text.
     * @param {string} query - Text to search for.
     * @param {string} [countryCode] - Country code
     * @param {string} [adminCode] - Adminstractive area code
     * @returns {Promise<ICityData[]>} Search Data
     */
    pointOfInterestSearch(query: string, countryCode?: string, adminCode?: string): Promise<ICityData[]>;
    /**
     * Get information for an array of Postal Codes that match the search text.
     * @param {string} query - Text to search for.
     * @param {string} [countryCode] - Country code
     * @returns {Promise<ICityData[]>} Search Data
     */
    PostalCodeSearch(query: string, countryCode?: string): Promise<ICityData[]>;
    /**
     * Get information for an array of locations that match the search text
     * @param {string} query - Text to search for.
     * @param {string} [countryCode] - Country code
     * @param {string} [adminCode] - Adminstractive area code
     * @returns {Promise<ICityData[]>} Search Data
     */
    TextSearch(query: string, countryCode?: string, adminCode?: string): Promise<ICityData[]>;
    /**
     * Get information about a specific location, by GeoPosition (Latitude and Longitude).
     * @param {number} lat - Latitude
     * @param {number} lng - Longitude.
     * @returns {Promise<ICityData[]>} Search Data
     */
    geopositionSearch(lag: number, lng: number, topLevel?: boolean): Promise<ICityData[]>;
    /**
     * Get information for an array of Points of Interest that match the search text.
     * @param {string} query - Text to search for.
     * @returns {Promise<ICityData[]>} Search Data
     */
    ipSearch(query: string): Promise<ICityData[]>;
    private handleError;
}
