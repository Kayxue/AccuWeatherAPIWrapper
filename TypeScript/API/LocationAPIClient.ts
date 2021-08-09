import axios, { AxiosInstance } from "axios";
import { IInitOptions } from "..";
import {
    IAdminAreaData,
    IAutoCompleteSearchData,
    ICityData,
    ICountryData,
    IRegionData,
} from "../Interfaces/LocationAPIData";
import APIClientBase from "./APIClientBase";

/**
 * Location API Playground:
 * {@link https://developer.accuweather.com/accuweather-locations-api/apis}
 */
export default class LocationAPI extends APIClientBase {
    /**
     * The limit that determines the first resource to be returned
     */
    public offset: number;
    /**
     *  The instance that send requests to API
     */
    private axiosInstance: AxiosInstance;

    /**
     * Initialize the client
     * @param options  Init options
     */
    public constructor(options: Omit<IInitOptions, "metric">) {
        super(options);
        this.offset = options.offset ?? 100;
        this.axiosInstance = axios.create({
            baseURL: "http://dataservice.accuweather.com/locations/v1/",
            params: {
                apikey: this.apikey,
                language: this.language,
            },
        });
    }

    /**
     * Get basic information about administrative areas in the specified country.
     * @param countryCode  Country Code
     * @returns Administrative areas
     */
    public async getAdminAreaList(
        countryCode: string,
    ): Promise<IAdminAreaData[]> {
        try {
            const { data } = await this.axiosInstance.get(
                `/adminareas/${countryCode}`,
                { params: { offset: this.offset } },
            );
            return data || [];
        } catch (e) {
            throw this.handleError(e);
        }
    }

    /**
     * Get basic information about all countries within a specified region.
     * @param region  region string
     * @returns Countries Datas
     */
    public async getCountryList(region: string): Promise<ICountryData[]> {
        try {
            const { data } = await this.axiosInstance.get(
                `/countries/${region}`,
            );
            return data || [];
        } catch (e) {
            throw this.handleError(e);
        }
    }

    /**
     * Get basic information about all regions.
     * @returns Region Datas
     */
    public async getRegionList(): Promise<IRegionData[]> {
        try {
            const { data } = await this.axiosInstance.get(`/regions`);
            return data || [];
        } catch (e) {
            throw this.handleError(e);
        }
    }

    /**
     * Get information for the top 50, 100, or 150 cities, worldwide.
     * @param group  number of cities to return
     * @returns City Datas
     */
    public async getTopCities(group: 50 | 100 | 150): Promise<ICityData[]> {
        try {
            const { data } = await this.axiosInstance.get(
                `/topcities/${group}`,
                { params: { details: this.detail } },
            );
            return data || [];
        } catch (e) {
            throw this.handleError(e);
        }
    }

    /**
     * Get basic information about locations matching an autocomplete of the search text.
     * @param query  Text to use for Autocomplete search
     * @returns Auto Complete Search Data
     */
    public async autocompleteSearch(
        query: string,
    ): Promise<IAutoCompleteSearchData[]> {
        try {
            const { data } = await this.axiosInstance.get(
                `/cities/autocomplete`,
                { params: { q: query } },
            );
            return data || [];
        } catch (e) {
            throw this.handleError(e);
        }
    }

    /**
     * Get information about neighboring cities, by location key. You must know the location key to perform this query.
     * @param locationKey  Location Key
     * @returns CityNeighbors data
     */
    public async getCityNeighborsByLocationKey(
        locationKey: string,
    ): Promise<ICityData[]> {
        try {
            const { data } = await this.axiosInstance.get(`/cities/neighbors`, {
                params: { details: this.detail },
            });
            return data || [];
        } catch (e) {
            throw this.handleError(e);
        }
    }

    /**
     * Get information about a specific location, by location key. You must know the location key to perform this query.
     * @param locationKey  Location Key
     * @returns Search Data
     */
    public async SearchByLocationKey(
        locationKey: string,
    ): Promise<ICityData[]> {
        try {
            const { data } = await this.axiosInstance.get(`/${locationKey}`, {
                params: { details: this.detail },
            });
            return data || [];
        } catch (e) {
            throw this.handleError(e);
        }
    }

    /**
     * Get information for an array of cities that match the search text.
     * @param query  Text to search for.
     * @param countryCode  Country code
     * @param adminCode  Adminstractive area code
     * @returns  Search Data
     */
    public async citySearch(
        query: string,
        countryCode?: string,
        adminCode?: string,
    ): Promise<ICityData[]> {
        try {
            const url = adminCode?.length
                ? `/cities/${countryCode}/${adminCode}/search`
                : countryCode?.length
                ? `/cities/${countryCode}/search`
                : "/cities/search";
            const { data } = await this.axiosInstance.get(url, {
                params: { q: query, details: this.detail, offset: this.offset },
            });

            return data || [];
        } catch (e) {
            throw this.handleError(e);
        }
    }

    /**
     * Get information for an array of Points of Interest that match the search text.
     * @param query  Text to search for.
     * @param countryCode  Country code
     * @param adminCode  Adminstractive area code
     * @returns Search Data
     */
    public async pointOfInterestSearch(
        query: string,
        countryCode?: string,
        adminCode?: string,
    ): Promise<ICityData[]> {
        try {
            const url = adminCode?.length
                ? `/poi/${countryCode}/${adminCode}/search`
                : countryCode?.length
                ? `/poi/${countryCode}/search`
                : "/poi/search";
            const { data } = await this.axiosInstance.get(url, {
                params: { q: query, details: this.detail },
            });
            return data;
        } catch (e) {
            throw this.handleError(e);
        }
    }

    /**
     * Get information for an array of Postal Codes that match the search text.
     * @param query  Text to search for.
     * @param countryCode  Country code
     * @returns Search Data
     */
    public async PostalCodeSearch(
        query: string,
        countryCode?: string,
    ): Promise<ICityData[]> {
        try {
            const url = countryCode?.length
                ? `/postalcodes/${countryCode}/search`
                : `/postalcodes/search`;

            const { data } = await this.axiosInstance.get(url, {
                params: { q: query, details: this.detail },
            });
            return data;
        } catch (e) {
            throw this.handleError(e);
        }
    }

    /**
     * Get information for an array of locations that match the search text
     * @param query  Text to search for.
     * @param countryCode  Country code
     * @param adminCode  Adminstractive area code
     * @returns Search Data
     */
    public async TextSearch(
        query: string,
        countryCode?: string,
        adminCode?: string,
    ): Promise<ICityData[]> {
        try {
            const url = adminCode?.length
                ? `/locations/${countryCode}/${adminCode}/search`
                : countryCode?.length
                ? `/locations/${countryCode}/search`
                : "/locations/search";
            const { data } = await this.axiosInstance.get(url, {
                params: { q: query, details: this.detail, offset: this.offset },
            });

            return data || [];
        } catch (e) {
            throw this.handleError(e);
        }
    }
    /**
     * Get information about a specific location, by GeoPosition (Latitude and Longitude).
     * @param lat  Latitude.
     * @param lng  Longitude.
     * @returns Search Data
     */
    public async geopositionSearch(
        lag: number,
        lng: number,
        topLevel?: boolean,
    ): Promise<ICityData[]> {
        const finalTopLevel = topLevel ?? false;
        try {
            const { data } = await this.axiosInstance.get(
                "/cities/geoposition/search",
                {
                    params: {
                        q: `${lag},${lng}`,
                        details: this.detail,
                        toplevel: finalTopLevel,
                    },
                },
            );

            return data || [];
        } catch (e) {
            throw this.handleError(e);
        }
    }

    /**
     * Get information for an array of Points of Interest that match the search text.
     * @param query  Text to search for.
     * @returns Search Data
     */
    public async ipSearch(query: string): Promise<ICityData[]> {
        try {
            const { data } = await this.axiosInstance.get("/cities/ipaddress", {
                params: {
                    q: query,
                    details: this.detail,
                },
            });

            return data || [];
        } catch (e) {
            throw this.handleError(e);
        }
    }
}
