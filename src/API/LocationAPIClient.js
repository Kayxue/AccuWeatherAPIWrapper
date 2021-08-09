"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const APIClientBase_1 = __importDefault(require("./APIClientBase"));
/**
 * Location API Playground:
 * {@link https://developer.accuweather.com/accuweather-locations-api/apis}
 */
class LocationAPI extends APIClientBase_1.default {
    /**
     * Initialize the client
     * @param options  Init options
     */
    constructor(options) {
        super(options);
        this.offset = options.offset ?? 100;
        this.axiosInstance = axios_1.default.create({
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
    async getAdminAreaList(countryCode) {
        try {
            const { data } = await this.axiosInstance.get(`/adminareas/${countryCode}`, { params: { offset: this.offset } });
            return data || [];
        }
        catch (e) {
            throw this.handleError(e);
        }
    }
    /**
     * Get basic information about all countries within a specified region.
     * @param region  region string
     * @returns Countries Datas
     */
    async getCountryList(region) {
        try {
            const { data } = await this.axiosInstance.get(`/countries/${region}`);
            return data || [];
        }
        catch (e) {
            throw this.handleError(e);
        }
    }
    /**
     * Get basic information about all regions.
     * @returns Region Datas
     */
    async getRegionList() {
        try {
            const { data } = await this.axiosInstance.get(`/regions`);
            return data || [];
        }
        catch (e) {
            throw this.handleError(e);
        }
    }
    /**
     * Get information for the top 50, 100, or 150 cities, worldwide.
     * @param group  number of cities to return
     * @returns City Datas
     */
    async getTopCities(group) {
        try {
            const { data } = await this.axiosInstance.get(`/topcities/${group}`, { params: { details: this.detail } });
            return data || [];
        }
        catch (e) {
            throw this.handleError(e);
        }
    }
    /**
     * Get basic information about locations matching an autocomplete of the search text.
     * @param query  Text to use for Autocomplete search
     * @returns Auto Complete Search Data
     */
    async autocompleteSearch(query) {
        try {
            const { data } = await this.axiosInstance.get(`/cities/autocomplete`, { params: { q: query } });
            return data || [];
        }
        catch (e) {
            throw this.handleError(e);
        }
    }
    /**
     * Get information about neighboring cities, by location key. You must know the location key to perform this query.
     * @param locationKey  Location Key
     * @returns CityNeighbors data
     */
    async getCityNeighborsByLocationKey(locationKey) {
        try {
            const { data } = await this.axiosInstance.get(`/cities/neighbors`, {
                params: { details: this.detail },
            });
            return data || [];
        }
        catch (e) {
            throw this.handleError(e);
        }
    }
    /**
     * Get information about a specific location, by location key. You must know the location key to perform this query.
     * @param locationKey  Location Key
     * @returns Search Data
     */
    async SearchByLocationKey(locationKey) {
        try {
            const { data } = await this.axiosInstance.get(`/${locationKey}`, {
                params: { details: this.detail },
            });
            return data || [];
        }
        catch (e) {
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
    async citySearch(query, countryCode, adminCode) {
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
        }
        catch (e) {
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
    async pointOfInterestSearch(query, countryCode, adminCode) {
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
        }
        catch (e) {
            throw this.handleError(e);
        }
    }
    /**
     * Get information for an array of Postal Codes that match the search text.
     * @param query  Text to search for.
     * @param countryCode  Country code
     * @returns Search Data
     */
    async PostalCodeSearch(query, countryCode) {
        try {
            const url = countryCode?.length
                ? `/postalcodes/${countryCode}/search`
                : `/postalcodes/search`;
            const { data } = await this.axiosInstance.get(url, {
                params: { q: query, details: this.detail },
            });
            return data;
        }
        catch (e) {
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
    async TextSearch(query, countryCode, adminCode) {
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
        }
        catch (e) {
            throw this.handleError(e);
        }
    }
    /**
     * Get information about a specific location, by GeoPosition (Latitude and Longitude).
     * @param lat  Latitude.
     * @param lng  Longitude.
     * @returns Search Data
     */
    async geopositionSearch(lag, lng, topLevel) {
        const finalTopLevel = topLevel ?? false;
        try {
            const { data } = await this.axiosInstance.get("/cities/geoposition/search", {
                params: {
                    q: `${lag},${lng}`,
                    details: this.detail,
                    toplevel: finalTopLevel,
                },
            });
            return data || [];
        }
        catch (e) {
            throw this.handleError(e);
        }
    }
    /**
     * Get information for an array of Points of Interest that match the search text.
     * @param query  Text to search for.
     * @returns Search Data
     */
    async ipSearch(query) {
        try {
            const { data } = await this.axiosInstance.get("/cities/ipaddress", {
                params: {
                    q: query,
                    details: this.detail,
                },
            });
            return data || [];
        }
        catch (e) {
            throw this.handleError(e);
        }
    }
}
exports.default = LocationAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9jYXRpb25BUElDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9UeXBlU2NyaXB0L0FQSS9Mb2NhdGlvbkFQSUNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUE2QztBQVM3QyxvRUFBNEM7QUFFNUM7OztHQUdHO0FBQ0gsTUFBcUIsV0FBWSxTQUFRLHVCQUFhO0lBVWxEOzs7T0FHRztJQUNILFlBQW1CLE9BQXFDO1FBQ3BELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUM7UUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxlQUFLLENBQUMsTUFBTSxDQUFDO1lBQzlCLE9BQU8sRUFBRSxrREFBa0Q7WUFDM0QsTUFBTSxFQUFFO2dCQUNKLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQzFCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxLQUFLLENBQUMsZ0JBQWdCLENBQ3pCLFdBQW1CO1FBRW5CLElBQUk7WUFDQSxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FDekMsZUFBZSxXQUFXLEVBQUUsRUFDNUIsRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQ3RDLENBQUM7WUFDRixPQUFPLElBQUksSUFBSSxFQUFFLENBQUM7U0FDckI7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksS0FBSyxDQUFDLGNBQWMsQ0FBQyxNQUFjO1FBQ3RDLElBQUk7WUFDQSxNQUFNLEVBQUUs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QjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1IsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztDQUNKO0FBN1NELDhCQTZTQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcywgeyBBeGlvc0luc3RhbmNlIH0gZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IElJbml0T3B0aW9ucyB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQge1xyXG4gICAgSUFkbWluQXJlYURhdGEsXHJcbiAgICBJQXV0b0NvbXBsZXRlU2VhcmNoRGF0YSxcclxuICAgIElDaXR5RGF0YSxcclxuICAgIElDb3VudHJ5RGF0YSxcclxuICAgIElSZWdpb25EYXRhLFxyXG59IGZyb20gXCIuLi9JbnRlcmZhY2VzL0xvY2F0aW9uQVBJRGF0YVwiO1xyXG5pbXBvcnQgQVBJQ2xpZW50QmFzZSBmcm9tIFwiLi9BUElDbGllbnRCYXNlXCI7XHJcblxyXG4vKipcclxuICogTG9jYXRpb24gQVBJIFBsYXlncm91bmQ6XHJcbiAqIHtAbGluayBodHRwczovL2RldmVsb3Blci5hY2N1d2VhdGhlci5jb20vYWNjdXdlYXRoZXItbG9jYXRpb25zLWFwaS9hcGlzfVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb25BUEkgZXh0ZW5kcyBBUElDbGllbnRCYXNlIHtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGxpbWl0IHRoYXQgZGV0ZXJtaW5lcyB0aGUgZmlyc3QgcmVzb3VyY2UgdG8gYmUgcmV0dXJuZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9mZnNldDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiAgVGhlIGluc3RhbmNlIHRoYXQgc2VuZCByZXF1ZXN0cyB0byBBUElcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBheGlvc0luc3RhbmNlOiBBeGlvc0luc3RhbmNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgY2xpZW50XHJcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAgSW5pdCBvcHRpb25zXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihvcHRpb25zOiBPbWl0PElJbml0T3B0aW9ucywgXCJtZXRyaWNcIj4pIHtcclxuICAgICAgICBzdXBlcihvcHRpb25zKTtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IG9wdGlvbnMub2Zmc2V0ID8/IDEwMDtcclxuICAgICAgICB0aGlzLmF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBiYXNlVVJMOiBcImh0dHA6Ly9kYXRhc2VydmljZS5hY2N1d2VhdGhlci5jb20vbG9jYXRpb25zL3YxL1wiLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIGFwaWtleTogdGhpcy5hcGlrZXksXHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBiYXNpYyBpbmZvcm1hdGlvbiBhYm91dCBhZG1pbmlzdHJhdGl2ZSBhcmVhcyBpbiB0aGUgc3BlY2lmaWVkIGNvdW50cnkuXHJcbiAgICAgKiBAcGFyYW0gY291bnRyeUNvZGUgIENvdW50cnkgQ29kZVxyXG4gICAgICogQHJldHVybnMgQWRtaW5pc3RyYXRpdmUgYXJlYXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGdldEFkbWluQXJlYUxpc3QoXHJcbiAgICAgICAgY291bnRyeUNvZGU6IHN0cmluZyxcclxuICAgICk6IFByb21pc2U8SUFkbWluQXJlYURhdGFbXT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5heGlvc0luc3RhbmNlLmdldChcclxuICAgICAgICAgICAgICAgIGAvYWRtaW5hcmVhcy8ke2NvdW50cnlDb2RlfWAsXHJcbiAgICAgICAgICAgICAgICB7IHBhcmFtczogeyBvZmZzZXQ6IHRoaXMub2Zmc2V0IH0gfSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGEgfHwgW107XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aHJvdyB0aGlzLmhhbmRsZUVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBiYXNpYyBpbmZvcm1hdGlvbiBhYm91dCBhbGwgY291bnRyaWVzIHdpdGhpbiBhIHNwZWNpZmllZCByZWdpb24uXHJcbiAgICAgKiBAcGFyYW0gcmVnaW9uICByZWdpb24gc3RyaW5nXHJcbiAgICAgKiBAcmV0dXJucyBDb3VudHJpZXMgRGF0YXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGdldENvdW50cnlMaXN0KHJlZ2lvbjogc3RyaW5nKTogUHJvbWlzZTxJQ291bnRyeURhdGFbXT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5heGlvc0luc3RhbmNlLmdldChcclxuICAgICAgICAgICAgICAgIGAvY291bnRyaWVzLyR7cmVnaW9ufWAsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhIHx8IFtdO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYmFzaWMgaW5mb3JtYXRpb24gYWJvdXQgYWxsIHJlZ2lvbnMuXHJcbiAgICAgKiBAcmV0dXJucyBSZWdpb24gRGF0YXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGdldFJlZ2lvbkxpc3QoKTogUHJvbWlzZTxJUmVnaW9uRGF0YVtdPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLmF4aW9zSW5zdGFuY2UuZ2V0KGAvcmVnaW9uc2ApO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YSB8fCBbXTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRocm93IHRoaXMuaGFuZGxlRXJyb3IoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGluZm9ybWF0aW9uIGZvciB0aGUgdG9wIDUwLCAxMDAsIG9yIDE1MCBjaXRpZXMsIHdvcmxkd2lkZS5cclxuICAgICAqIEBwYXJhbSBncm91cCAgbnVtYmVyIG9mIGNpdGllcyB0byByZXR1cm5cclxuICAgICAqIEByZXR1cm5zIENpdHkgRGF0YXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGdldFRvcENpdGllcyhncm91cDogNTAgfCAxMDAgfCAxNTApOiBQcm9taXNlPElDaXR5RGF0YVtdPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLmF4aW9zSW5zdGFuY2UuZ2V0KFxyXG4gICAgICAgICAgICAgICAgYC90b3BjaXRpZXMvJHtncm91cH1gLFxyXG4gICAgICAgICAgICAgICAgeyBwYXJhbXM6IHsgZGV0YWlsczogdGhpcy5kZXRhaWwgfSB9LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YSB8fCBbXTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRocm93IHRoaXMuaGFuZGxlRXJyb3IoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGJhc2ljIGluZm9ybWF0aW9uIGFib3V0IGxvY2F0aW9ucyBtYXRjaGluZyBhbiBhdXRvY29tcGxldGUgb2YgdGhlIHNlYXJjaCB0ZXh0LlxyXG4gICAgICogQHBhcmFtIHF1ZXJ5ICBUZXh0IHRvIHVzZSBmb3IgQXV0b2NvbXBsZXRlIHNlYXJjaFxyXG4gICAgICogQHJldHVybnMgQXV0byBDb21wbGV0ZSBTZWFyY2ggRGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgYXV0b2NvbXBsZXRlU2VhcmNoKFxyXG4gICAgICAgIHF1ZXJ5OiBzdHJpbmcsXHJcbiAgICApOiBQcm9taXNlPElBdXRvQ29tcGxldGVTZWFyY2hEYXRhW10+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuYXhpb3NJbnN0YW5jZS5nZXQoXHJcbiAgICAgICAgICAgICAgICBgL2NpdGllcy9hdXRvY29tcGxldGVgLFxyXG4gICAgICAgICAgICAgICAgeyBwYXJhbXM6IHsgcTogcXVlcnkgfSB9LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YSB8fCBbXTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRocm93IHRoaXMuaGFuZGxlRXJyb3IoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGluZm9ybWF0aW9uIGFib3V0IG5laWdoYm9yaW5nIGNpdGllcywgYnkgbG9jYXRpb24ga2V5LiBZb3UgbXVzdCBrbm93IHRoZSBsb2NhdGlvbiBrZXkgdG8gcGVyZm9ybSB0aGlzIHF1ZXJ5LlxyXG4gICAgICogQHBhcmFtIGxvY2F0aW9uS2V5ICBMb2NhdGlvbiBLZXlcclxuICAgICAqIEByZXR1cm5zIENpdHlOZWlnaGJvcnMgZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0Q2l0eU5laWdoYm9yc0J5TG9jYXRpb25LZXkoXHJcbiAgICAgICAgbG9jYXRpb25LZXk6IHN0cmluZyxcclxuICAgICk6IFByb21pc2U8SUNpdHlEYXRhW10+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuYXhpb3NJbnN0YW5jZS5nZXQoYC9jaXRpZXMvbmVpZ2hib3JzYCwge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7IGRldGFpbHM6IHRoaXMuZGV0YWlsIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YSB8fCBbXTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRocm93IHRoaXMuaGFuZGxlRXJyb3IoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGluZm9ybWF0aW9uIGFib3V0IGEgc3BlY2lmaWMgbG9jYXRpb24sIGJ5IGxvY2F0aW9uIGtleS4gWW91IG11c3Qga25vdyB0aGUgbG9jYXRpb24ga2V5IHRvIHBlcmZvcm0gdGhpcyBxdWVyeS5cclxuICAgICAqIEBwYXJhbSBsb2NhdGlvbktleSAgTG9jYXRpb24gS2V5XHJcbiAgICAgKiBAcmV0dXJucyBTZWFyY2ggRGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgU2VhcmNoQnlMb2NhdGlvbktleShcclxuICAgICAgICBsb2NhdGlvbktleTogc3RyaW5nLFxyXG4gICAgKTogUHJvbWlzZTxJQ2l0eURhdGFbXT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5heGlvc0luc3RhbmNlLmdldChgLyR7bG9jYXRpb25LZXl9YCwge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7IGRldGFpbHM6IHRoaXMuZGV0YWlsIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YSB8fCBbXTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRocm93IHRoaXMuaGFuZGxlRXJyb3IoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGluZm9ybWF0aW9uIGZvciBhbiBhcnJheSBvZiBjaXRpZXMgdGhhdCBtYXRjaCB0aGUgc2VhcmNoIHRleHQuXHJcbiAgICAgKiBAcGFyYW0gcXVlcnkgIFRleHQgdG8gc2VhcmNoIGZvci5cclxuICAgICAqIEBwYXJhbSBjb3VudHJ5Q29kZSAgQ291bnRyeSBjb2RlXHJcbiAgICAgKiBAcGFyYW0gYWRtaW5Db2RlICBBZG1pbnN0cmFjdGl2ZSBhcmVhIGNvZGVcclxuICAgICAqIEByZXR1cm5zICBTZWFyY2ggRGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgY2l0eVNlYXJjaChcclxuICAgICAgICBxdWVyeTogc3RyaW5nLFxyXG4gICAgICAgIGNvdW50cnlDb2RlPzogc3RyaW5nLFxyXG4gICAgICAgIGFkbWluQ29kZT86IHN0cmluZyxcclxuICAgICk6IFByb21pc2U8SUNpdHlEYXRhW10+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBhZG1pbkNvZGU/Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgPyBgL2NpdGllcy8ke2NvdW50cnlDb2RlfS8ke2FkbWluQ29kZX0vc2VhcmNoYFxyXG4gICAgICAgICAgICAgICAgOiBjb3VudHJ5Q29kZT8ubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICA/IGAvY2l0aWVzLyR7Y291bnRyeUNvZGV9L3NlYXJjaGBcclxuICAgICAgICAgICAgICAgIDogXCIvY2l0aWVzL3NlYXJjaFwiO1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuYXhpb3NJbnN0YW5jZS5nZXQodXJsLCB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHsgcTogcXVlcnksIGRldGFpbHM6IHRoaXMuZGV0YWlsLCBvZmZzZXQ6IHRoaXMub2Zmc2V0IH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGEgfHwgW107XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aHJvdyB0aGlzLmhhbmRsZUVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBpbmZvcm1hdGlvbiBmb3IgYW4gYXJyYXkgb2YgUG9pbnRzIG9mIEludGVyZXN0IHRoYXQgbWF0Y2ggdGhlIHNlYXJjaCB0ZXh0LlxyXG4gICAgICogQHBhcmFtIHF1ZXJ5ICBUZXh0IHRvIHNlYXJjaCBmb3IuXHJcbiAgICAgKiBAcGFyYW0gY291bnRyeUNvZGUgIENvdW50cnkgY29kZVxyXG4gICAgICogQHBhcmFtIGFkbWluQ29kZSAgQWRtaW5zdHJhY3RpdmUgYXJlYSBjb2RlXHJcbiAgICAgKiBAcmV0dXJucyBTZWFyY2ggRGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgcG9pbnRPZkludGVyZXN0U2VhcmNoKFxyXG4gICAgICAgIHF1ZXJ5OiBzdHJpbmcsXHJcbiAgICAgICAgY291bnRyeUNvZGU/OiBzdHJpbmcsXHJcbiAgICAgICAgYWRtaW5Db2RlPzogc3RyaW5nLFxyXG4gICAgKTogUHJvbWlzZTxJQ2l0eURhdGFbXT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGFkbWluQ29kZT8ubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICA/IGAvcG9pLyR7Y291bnRyeUNvZGV9LyR7YWRtaW5Db2RlfS9zZWFyY2hgXHJcbiAgICAgICAgICAgICAgICA6IGNvdW50cnlDb2RlPy5sZW5ndGhcclxuICAgICAgICAgICAgICAgID8gYC9wb2kvJHtjb3VudHJ5Q29kZX0vc2VhcmNoYFxyXG4gICAgICAgICAgICAgICAgOiBcIi9wb2kvc2VhcmNoXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5heGlvc0luc3RhbmNlLmdldCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtczogeyBxOiBxdWVyeSwgZGV0YWlsczogdGhpcy5kZXRhaWwgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgaW5mb3JtYXRpb24gZm9yIGFuIGFycmF5IG9mIFBvc3RhbCBDb2RlcyB0aGF0IG1hdGNoIHRoZSBzZWFyY2ggdGV4dC5cclxuICAgICAqIEBwYXJhbSBxdWVyeSAgVGV4dCB0byBzZWFyY2ggZm9yLlxyXG4gICAgICogQHBhcmFtIGNvdW50cnlDb2RlICBDb3VudHJ5IGNvZGVcclxuICAgICAqIEByZXR1cm5zIFNlYXJjaCBEYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBQb3N0YWxDb2RlU2VhcmNoKFxyXG4gICAgICAgIHF1ZXJ5OiBzdHJpbmcsXHJcbiAgICAgICAgY291bnRyeUNvZGU/OiBzdHJpbmcsXHJcbiAgICApOiBQcm9taXNlPElDaXR5RGF0YVtdPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gY291bnRyeUNvZGU/Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgPyBgL3Bvc3RhbGNvZGVzLyR7Y291bnRyeUNvZGV9L3NlYXJjaGBcclxuICAgICAgICAgICAgICAgIDogYC9wb3N0YWxjb2Rlcy9zZWFyY2hgO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLmF4aW9zSW5zdGFuY2UuZ2V0KHVybCwge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7IHE6IHF1ZXJ5LCBkZXRhaWxzOiB0aGlzLmRldGFpbCB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aHJvdyB0aGlzLmhhbmRsZUVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBpbmZvcm1hdGlvbiBmb3IgYW4gYXJyYXkgb2YgbG9jYXRpb25zIHRoYXQgbWF0Y2ggdGhlIHNlYXJjaCB0ZXh0XHJcbiAgICAgKiBAcGFyYW0gcXVlcnkgIFRleHQgdG8gc2VhcmNoIGZvci5cclxuICAgICAqIEBwYXJhbSBjb3VudHJ5Q29kZSAgQ291bnRyeSBjb2RlXHJcbiAgICAgKiBAcGFyYW0gYWRtaW5Db2RlICBBZG1pbnN0cmFjdGl2ZSBhcmVhIGNvZGVcclxuICAgICAqIEByZXR1cm5zIFNlYXJjaCBEYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBUZXh0U2VhcmNoKFxyXG4gICAgICAgIHF1ZXJ5OiBzdHJpbmcsXHJcbiAgICAgICAgY291bnRyeUNvZGU/OiBzdHJpbmcsXHJcbiAgICAgICAgYWRtaW5Db2RlPzogc3RyaW5nLFxyXG4gICAgKTogUHJvbWlzZTxJQ2l0eURhdGFbXT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGFkbWluQ29kZT8ubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICA/IGAvbG9jYXRpb25zLyR7Y291bnRyeUNvZGV9LyR7YWRtaW5Db2RlfS9zZWFyY2hgXHJcbiAgICAgICAgICAgICAgICA6IGNvdW50cnlDb2RlPy5sZW5ndGhcclxuICAgICAgICAgICAgICAgID8gYC9sb2NhdGlvbnMvJHtjb3VudHJ5Q29kZX0vc2VhcmNoYFxyXG4gICAgICAgICAgICAgICAgOiBcIi9sb2NhdGlvbnMvc2VhcmNoXCI7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5heGlvc0luc3RhbmNlLmdldCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtczogeyBxOiBxdWVyeSwgZGV0YWlsczogdGhpcy5kZXRhaWwsIG9mZnNldDogdGhpcy5vZmZzZXQgfSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YSB8fCBbXTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRocm93IHRoaXMuaGFuZGxlRXJyb3IoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgYSBzcGVjaWZpYyBsb2NhdGlvbiwgYnkgR2VvUG9zaXRpb24gKExhdGl0dWRlIGFuZCBMb25naXR1ZGUpLlxyXG4gICAgICogQHBhcmFtIGxhdCAgTGF0aXR1ZGUuXHJcbiAgICAgKiBAcGFyYW0gbG5nICBMb25naXR1ZGUuXHJcbiAgICAgKiBAcmV0dXJucyBTZWFyY2ggRGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2VvcG9zaXRpb25TZWFyY2goXHJcbiAgICAgICAgbGFnOiBudW1iZXIsXHJcbiAgICAgICAgbG5nOiBudW1iZXIsXHJcbiAgICAgICAgdG9wTGV2ZWw/OiBib29sZWFuLFxyXG4gICAgKTogUHJvbWlzZTxJQ2l0eURhdGFbXT4ge1xyXG4gICAgICAgIGNvbnN0IGZpbmFsVG9wTGV2ZWwgPSB0b3BMZXZlbCA/PyBmYWxzZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuYXhpb3NJbnN0YW5jZS5nZXQoXHJcbiAgICAgICAgICAgICAgICBcIi9jaXRpZXMvZ2VvcG9zaXRpb24vc2VhcmNoXCIsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHE6IGAke2xhZ30sJHtsbmd9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGV0YWlsczogdGhpcy5kZXRhaWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcGxldmVsOiBmaW5hbFRvcExldmVsLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGEgfHwgW107XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aHJvdyB0aGlzLmhhbmRsZUVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBpbmZvcm1hdGlvbiBmb3IgYW4gYXJyYXkgb2YgUG9pbnRzIG9mIEludGVyZXN0IHRoYXQgbWF0Y2ggdGhlIHNlYXJjaCB0ZXh0LlxyXG4gICAgICogQHBhcmFtIHF1ZXJ5ICBUZXh0IHRvIHNlYXJjaCBmb3IuXHJcbiAgICAgKiBAcmV0dXJucyBTZWFyY2ggRGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgaXBTZWFyY2gocXVlcnk6IHN0cmluZyk6IFByb21pc2U8SUNpdHlEYXRhW10+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuYXhpb3NJbnN0YW5jZS5nZXQoXCIvY2l0aWVzL2lwYWRkcmVzc1wiLCB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBxOiBxdWVyeSxcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzOiB0aGlzLmRldGFpbCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGEgfHwgW107XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aHJvdyB0aGlzLmhhbmRsZUVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=