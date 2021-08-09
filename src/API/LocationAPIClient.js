"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class LocationAPI {
    /**
     * Initialize the client
     * @param {Omit<IInitOptions,"metric">} options - Init options
     */
    constructor(options) {
        this.apikey = options.apikey;
        this.language = options.language ?? "en-us";
        this.detail = options.detail ?? false;
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
     * @param {string} countryCode - Country Code
     * @returns {Promise<IAdminAreaData[]>} Administrative areas
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
     * @param {string} region - region string
     * @returns {Promise<ICountryData[]>} Countries Datas
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
     * @returns {Promise<IRegionData[]>} Region Datas
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
     * @param {50 | 100 | 150 | 200} group - number of cities to return
     * @returns {Promise<ICityData[]>} City Datas
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
     * @param {string} query - Text to use for Autocomplete search
     * @returns {Promise<IAutoCompleteSearchData[]>} Auto Complete Search Data
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
     * @param {string} locationKey - Location Key
     * @returns {Promise<ICityData[]>} CityNeighbors data
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
     * @param {string} locationKey - Location Key
     * @returns {Promise<ICityData[]>} Search Data
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
     * @param {string} query - Text to search for.
     * @param {string} [countryCode] - Country code
     * @param {string} [adminCode] - Adminstractive area code
     * @returns {Promise<ICityData[]>} Search Data
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
     * @param {string} query - Text to search for.
     * @param {string} [countryCode] - Country code
     * @param {string} [adminCode] - Adminstractive area code
     * @returns {Promise<ICityData[]>} Search Data
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
     * @param {string} query - Text to search for.
     * @param {string} [countryCode] - Country code
     * @returns {Promise<ICityData[]>} Search Data
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
     * @param {string} query - Text to search for.
     * @param {string} [countryCode] - Country code
     * @param {string} [adminCode] - Adminstractive area code
     * @returns {Promise<ICityData[]>} Search Data
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
     * @param {number} lat - Latitude
     * @param {number} lng - Longitude.
     * @returns {Promise<ICityData[]>} Search Data
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
     * @param {string} query - Text to search for.
     * @returns {Promise<ICityData[]>} Search Data
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
    handleError(error) {
        let message;
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
        return new Error(`${error.response.status} ${message}`);
    }
}
exports.default = LocationAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9jYXRpb25BUElDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9UeXBlU2NyaXB0L0FQSS9Mb2NhdGlvbkFQSUNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUF5RDtBQVV6RCxNQUFxQixXQUFXO0lBTzVCOzs7T0FHRztJQUNILFlBQW1CLE9BQXFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxHQUFHLGVBQUssQ0FBQyxNQUFNLENBQUM7WUFDOUIsT0FBTyxFQUFFLGtEQUFrRDtZQUMzRCxNQUFNLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDMUI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FDekIsV0FBbUI7UUFFbkIsSUFBSTtZQUNBLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUN6QyxlQUFlLFdBQVcsRUFBRSxFQUM1QixFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FDdEMsQ0FBQztZQUNGLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUNyQjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1IsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FB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S0FBSztvQkFDUixPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU07aUJBQ3ZCO2FBQ0osQ0FBQyxDQUFDO1lBRUgsT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDO1NBQ3JCO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDUixNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBRU8sV0FBVyxDQUFDLEtBQWlCO1FBQ2pDLElBQUksT0FBZSxDQUFDO1FBQ3BCLFFBQVEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDM0IsS0FBSyxHQUFHO2dCQUNKLE9BQU87b0JBQ0gsZ0VBQWdFLENBQUM7Z0JBQ3JFLE1BQU07WUFDVixLQUFLLEdBQUc7Z0JBQ0osT0FBTyxHQUFHLHlDQUF5QyxDQUFDO2dCQUNwRCxNQUFNO1lBQ1YsS0FBSyxHQUFHO2dCQUNKLE9BQU87b0JBQ0gsbUVBQW1FLENBQUM7Z0JBQ3hFLE1BQU07WUFDVixLQUFLLEdBQUc7Z0JBQ0osT0FBTztvQkFDSCxzREFBc0QsQ0FBQztnQkFDM0QsTUFBTTtZQUNWLEtBQUssR0FBRztnQkFDSixPQUFPO29CQUNILDRGQUE0RixDQUFDO1NBQ3hHO1FBRUQsT0FBTyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDNUQsQ0FBQztDQUNKO0FBdFVELDhCQXNVQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcywgeyBBeGlvc0Vycm9yLCBBeGlvc0luc3RhbmNlIH0gZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IElJbml0T3B0aW9ucyB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQge1xyXG4gICAgSUFkbWluQXJlYURhdGEsXHJcbiAgICBJQXV0b0NvbXBsZXRlU2VhcmNoRGF0YSxcclxuICAgIElDaXR5RGF0YSxcclxuICAgIElDb3VudHJ5RGF0YSxcclxuICAgIElSZWdpb25EYXRhLFxyXG59IGZyb20gXCIuLi9JbnRlcmZhY2VzL0xvY2F0aW9uQVBJRGF0YVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9jYXRpb25BUEkge1xyXG4gICAgcHVibGljIGFwaWtleTogc3RyaW5nO1xyXG4gICAgcHVibGljIGxhbmd1YWdlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGV0YWlsOiBib29sZWFuO1xyXG4gICAgcHVibGljIG9mZnNldDogbnVtYmVyO1xyXG4gICAgcHVibGljIGF4aW9zSW5zdGFuY2U6IEF4aW9zSW5zdGFuY2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIHRoZSBjbGllbnRcclxuICAgICAqIEBwYXJhbSB7T21pdDxJSW5pdE9wdGlvbnMsXCJtZXRyaWNcIj59IG9wdGlvbnMgLSBJbml0IG9wdGlvbnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9taXQ8SUluaXRPcHRpb25zLCBcIm1ldHJpY1wiPikge1xyXG4gICAgICAgIHRoaXMuYXBpa2V5ID0gb3B0aW9ucy5hcGlrZXk7XHJcbiAgICAgICAgdGhpcy5sYW5ndWFnZSA9IG9wdGlvbnMubGFuZ3VhZ2UgPz8gXCJlbi11c1wiO1xyXG4gICAgICAgIHRoaXMuZGV0YWlsID0gb3B0aW9ucy5kZXRhaWwgPz8gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vZmZzZXQgPSBvcHRpb25zLm9mZnNldCA/PyAxMDA7XHJcbiAgICAgICAgdGhpcy5heGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgICAgICAgYmFzZVVSTDogXCJodHRwOi8vZGF0YXNlcnZpY2UuYWNjdXdlYXRoZXIuY29tL2xvY2F0aW9ucy92MS9cIixcclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBhcGlrZXk6IHRoaXMuYXBpa2V5LFxyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IHRoaXMubGFuZ3VhZ2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYmFzaWMgaW5mb3JtYXRpb24gYWJvdXQgYWRtaW5pc3RyYXRpdmUgYXJlYXMgaW4gdGhlIHNwZWNpZmllZCBjb3VudHJ5LlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvdW50cnlDb2RlIC0gQ291bnRyeSBDb2RlXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxJQWRtaW5BcmVhRGF0YVtdPn0gQWRtaW5pc3RyYXRpdmUgYXJlYXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGdldEFkbWluQXJlYUxpc3QoXHJcbiAgICAgICAgY291bnRyeUNvZGU6IHN0cmluZyxcclxuICAgICk6IFByb21pc2U8SUFkbWluQXJlYURhdGFbXT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5heGlvc0luc3RhbmNlLmdldChcclxuICAgICAgICAgICAgICAgIGAvYWRtaW5hcmVhcy8ke2NvdW50cnlDb2RlfWAsXHJcbiAgICAgICAgICAgICAgICB7IHBhcmFtczogeyBvZmZzZXQ6IHRoaXMub2Zmc2V0IH0gfSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGEgfHwgW107XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aHJvdyB0aGlzLmhhbmRsZUVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBiYXNpYyBpbmZvcm1hdGlvbiBhYm91dCBhbGwgY291bnRyaWVzIHdpdGhpbiBhIHNwZWNpZmllZCByZWdpb24uXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVnaW9uIC0gcmVnaW9uIHN0cmluZ1xyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8SUNvdW50cnlEYXRhW10+fSBDb3VudHJpZXMgRGF0YXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGdldENvdW50cnlMaXN0KHJlZ2lvbjogc3RyaW5nKTogUHJvbWlzZTxJQ291bnRyeURhdGFbXT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5heGlvc0luc3RhbmNlLmdldChcclxuICAgICAgICAgICAgICAgIGAvY291bnRyaWVzLyR7cmVnaW9ufWAsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhIHx8IFtdO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgYmFzaWMgaW5mb3JtYXRpb24gYWJvdXQgYWxsIHJlZ2lvbnMuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxJUmVnaW9uRGF0YVtdPn0gUmVnaW9uIERhdGFzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBnZXRSZWdpb25MaXN0KCk6IFByb21pc2U8SVJlZ2lvbkRhdGFbXT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5heGlvc0luc3RhbmNlLmdldChgL3JlZ2lvbnNgKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGEgfHwgW107XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aHJvdyB0aGlzLmhhbmRsZUVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBpbmZvcm1hdGlvbiBmb3IgdGhlIHRvcCA1MCwgMTAwLCBvciAxNTAgY2l0aWVzLCB3b3JsZHdpZGUuXHJcbiAgICAgKiBAcGFyYW0gezUwIHwgMTAwIHwgMTUwIHwgMjAwfSBncm91cCAtIG51bWJlciBvZiBjaXRpZXMgdG8gcmV0dXJuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxJQ2l0eURhdGFbXT59IENpdHkgRGF0YXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGdldFRvcENpdGllcyhncm91cDogNTAgfCAxMDAgfCAxNTApOiBQcm9taXNlPElDaXR5RGF0YVtdPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLmF4aW9zSW5zdGFuY2UuZ2V0KFxyXG4gICAgICAgICAgICAgICAgYC90b3BjaXRpZXMvJHtncm91cH1gLFxyXG4gICAgICAgICAgICAgICAgeyBwYXJhbXM6IHsgZGV0YWlsczogdGhpcy5kZXRhaWwgfSB9LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YSB8fCBbXTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRocm93IHRoaXMuaGFuZGxlRXJyb3IoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGJhc2ljIGluZm9ybWF0aW9uIGFib3V0IGxvY2F0aW9ucyBtYXRjaGluZyBhbiBhdXRvY29tcGxldGUgb2YgdGhlIHNlYXJjaCB0ZXh0LlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IC0gVGV4dCB0byB1c2UgZm9yIEF1dG9jb21wbGV0ZSBzZWFyY2hcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPElBdXRvQ29tcGxldGVTZWFyY2hEYXRhW10+fSBBdXRvIENvbXBsZXRlIFNlYXJjaCBEYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBhdXRvY29tcGxldGVTZWFyY2goXHJcbiAgICAgICAgcXVlcnk6IHN0cmluZyxcclxuICAgICk6IFByb21pc2U8SUF1dG9Db21wbGV0ZVNlYXJjaERhdGFbXT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5heGlvc0luc3RhbmNlLmdldChcclxuICAgICAgICAgICAgICAgIGAvY2l0aWVzL2F1dG9jb21wbGV0ZWAsXHJcbiAgICAgICAgICAgICAgICB7IHBhcmFtczogeyBxOiBxdWVyeSB9IH0sXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhIHx8IFtdO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgbmVpZ2hib3JpbmcgY2l0aWVzLCBieSBsb2NhdGlvbiBrZXkuIFlvdSBtdXN0IGtub3cgdGhlIGxvY2F0aW9uIGtleSB0byBwZXJmb3JtIHRoaXMgcXVlcnkuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb25LZXkgLSBMb2NhdGlvbiBLZXlcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPElDaXR5RGF0YVtdPn0gQ2l0eU5laWdoYm9ycyBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBnZXRDaXR5TmVpZ2hib3JzQnlMb2NhdGlvbktleShcclxuICAgICAgICBsb2NhdGlvbktleTogc3RyaW5nLFxyXG4gICAgKTogUHJvbWlzZTxJQ2l0eURhdGFbXT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5heGlvc0luc3RhbmNlLmdldChgL2NpdGllcy9uZWlnaGJvcnNgLCB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHsgZGV0YWlsczogdGhpcy5kZXRhaWwgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhIHx8IFtdO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgaW5mb3JtYXRpb24gYWJvdXQgYSBzcGVjaWZpYyBsb2NhdGlvbiwgYnkgbG9jYXRpb24ga2V5LiBZb3UgbXVzdCBrbm93IHRoZSBsb2NhdGlvbiBrZXkgdG8gcGVyZm9ybSB0aGlzIHF1ZXJ5LlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uS2V5IC0gTG9jYXRpb24gS2V5XHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxJQ2l0eURhdGFbXT59IFNlYXJjaCBEYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBTZWFyY2hCeUxvY2F0aW9uS2V5KFxyXG4gICAgICAgIGxvY2F0aW9uS2V5OiBzdHJpbmcsXHJcbiAgICApOiBQcm9taXNlPElDaXR5RGF0YVtdPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLmF4aW9zSW5zdGFuY2UuZ2V0KGAvJHtsb2NhdGlvbktleX1gLCB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHsgZGV0YWlsczogdGhpcy5kZXRhaWwgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhIHx8IFtdO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgaW5mb3JtYXRpb24gZm9yIGFuIGFycmF5IG9mIGNpdGllcyB0aGF0IG1hdGNoIHRoZSBzZWFyY2ggdGV4dC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSAtIFRleHQgdG8gc2VhcmNoIGZvci5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbY291bnRyeUNvZGVdIC0gQ291bnRyeSBjb2RlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2FkbWluQ29kZV0gLSBBZG1pbnN0cmFjdGl2ZSBhcmVhIGNvZGVcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPElDaXR5RGF0YVtdPn0gU2VhcmNoIERhdGFcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGNpdHlTZWFyY2goXHJcbiAgICAgICAgcXVlcnk6IHN0cmluZyxcclxuICAgICAgICBjb3VudHJ5Q29kZT86IHN0cmluZyxcclxuICAgICAgICBhZG1pbkNvZGU/OiBzdHJpbmcsXHJcbiAgICApOiBQcm9taXNlPElDaXR5RGF0YVtdPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdXJsID0gYWRtaW5Db2RlPy5sZW5ndGhcclxuICAgICAgICAgICAgICAgID8gYC9jaXRpZXMvJHtjb3VudHJ5Q29kZX0vJHthZG1pbkNvZGV9L3NlYXJjaGBcclxuICAgICAgICAgICAgICAgIDogY291bnRyeUNvZGU/Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgPyBgL2NpdGllcy8ke2NvdW50cnlDb2RlfS9zZWFyY2hgXHJcbiAgICAgICAgICAgICAgICA6IFwiL2NpdGllcy9zZWFyY2hcIjtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLmF4aW9zSW5zdGFuY2UuZ2V0KHVybCwge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7IHE6IHF1ZXJ5LCBkZXRhaWxzOiB0aGlzLmRldGFpbCwgb2Zmc2V0OiB0aGlzLm9mZnNldCB9LFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhIHx8IFtdO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgaW5mb3JtYXRpb24gZm9yIGFuIGFycmF5IG9mIFBvaW50cyBvZiBJbnRlcmVzdCB0aGF0IG1hdGNoIHRoZSBzZWFyY2ggdGV4dC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSAtIFRleHQgdG8gc2VhcmNoIGZvci5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbY291bnRyeUNvZGVdIC0gQ291bnRyeSBjb2RlXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2FkbWluQ29kZV0gLSBBZG1pbnN0cmFjdGl2ZSBhcmVhIGNvZGVcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPElDaXR5RGF0YVtdPn0gU2VhcmNoIERhdGFcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIHBvaW50T2ZJbnRlcmVzdFNlYXJjaChcclxuICAgICAgICBxdWVyeTogc3RyaW5nLFxyXG4gICAgICAgIGNvdW50cnlDb2RlPzogc3RyaW5nLFxyXG4gICAgICAgIGFkbWluQ29kZT86IHN0cmluZyxcclxuICAgICk6IFByb21pc2U8SUNpdHlEYXRhW10+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBhZG1pbkNvZGU/Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgPyBgL3BvaS8ke2NvdW50cnlDb2RlfS8ke2FkbWluQ29kZX0vc2VhcmNoYFxyXG4gICAgICAgICAgICAgICAgOiBjb3VudHJ5Q29kZT8ubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICA/IGAvcG9pLyR7Y291bnRyeUNvZGV9L3NlYXJjaGBcclxuICAgICAgICAgICAgICAgIDogXCIvcG9pL3NlYXJjaFwiO1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuYXhpb3NJbnN0YW5jZS5nZXQodXJsLCB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHsgcTogcXVlcnksIGRldGFpbHM6IHRoaXMuZGV0YWlsIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRocm93IHRoaXMuaGFuZGxlRXJyb3IoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGluZm9ybWF0aW9uIGZvciBhbiBhcnJheSBvZiBQb3N0YWwgQ29kZXMgdGhhdCBtYXRjaCB0aGUgc2VhcmNoIHRleHQuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgLSBUZXh0IHRvIHNlYXJjaCBmb3IuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2NvdW50cnlDb2RlXSAtIENvdW50cnkgY29kZVxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8SUNpdHlEYXRhW10+fSBTZWFyY2ggRGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgUG9zdGFsQ29kZVNlYXJjaChcclxuICAgICAgICBxdWVyeTogc3RyaW5nLFxyXG4gICAgICAgIGNvdW50cnlDb2RlPzogc3RyaW5nLFxyXG4gICAgKTogUHJvbWlzZTxJQ2l0eURhdGFbXT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGNvdW50cnlDb2RlPy5sZW5ndGhcclxuICAgICAgICAgICAgICAgID8gYC9wb3N0YWxjb2Rlcy8ke2NvdW50cnlDb2RlfS9zZWFyY2hgXHJcbiAgICAgICAgICAgICAgICA6IGAvcG9zdGFsY29kZXMvc2VhcmNoYDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5heGlvc0luc3RhbmNlLmdldCh1cmwsIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtczogeyBxOiBxdWVyeSwgZGV0YWlsczogdGhpcy5kZXRhaWwgfSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgaW5mb3JtYXRpb24gZm9yIGFuIGFycmF5IG9mIGxvY2F0aW9ucyB0aGF0IG1hdGNoIHRoZSBzZWFyY2ggdGV4dFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5IC0gVGV4dCB0byBzZWFyY2ggZm9yLlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtjb3VudHJ5Q29kZV0gLSBDb3VudHJ5IGNvZGVcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbYWRtaW5Db2RlXSAtIEFkbWluc3RyYWN0aXZlIGFyZWEgY29kZVxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8SUNpdHlEYXRhW10+fSBTZWFyY2ggRGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgVGV4dFNlYXJjaChcclxuICAgICAgICBxdWVyeTogc3RyaW5nLFxyXG4gICAgICAgIGNvdW50cnlDb2RlPzogc3RyaW5nLFxyXG4gICAgICAgIGFkbWluQ29kZT86IHN0cmluZyxcclxuICAgICk6IFByb21pc2U8SUNpdHlEYXRhW10+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB1cmwgPSBhZG1pbkNvZGU/Lmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgPyBgL2xvY2F0aW9ucy8ke2NvdW50cnlDb2RlfS8ke2FkbWluQ29kZX0vc2VhcmNoYFxyXG4gICAgICAgICAgICAgICAgOiBjb3VudHJ5Q29kZT8ubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICA/IGAvbG9jYXRpb25zLyR7Y291bnRyeUNvZGV9L3NlYXJjaGBcclxuICAgICAgICAgICAgICAgIDogXCIvbG9jYXRpb25zL3NlYXJjaFwiO1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuYXhpb3NJbnN0YW5jZS5nZXQodXJsLCB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHsgcTogcXVlcnksIGRldGFpbHM6IHRoaXMuZGV0YWlsLCBvZmZzZXQ6IHRoaXMub2Zmc2V0IH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGEgfHwgW107XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aHJvdyB0aGlzLmhhbmRsZUVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGluZm9ybWF0aW9uIGFib3V0IGEgc3BlY2lmaWMgbG9jYXRpb24sIGJ5IEdlb1Bvc2l0aW9uIChMYXRpdHVkZSBhbmQgTG9uZ2l0dWRlKS5cclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsYXQgLSBMYXRpdHVkZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxuZyAtIExvbmdpdHVkZS5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPElDaXR5RGF0YVtdPn0gU2VhcmNoIERhdGFcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGdlb3Bvc2l0aW9uU2VhcmNoKFxyXG4gICAgICAgIGxhZzogbnVtYmVyLFxyXG4gICAgICAgIGxuZzogbnVtYmVyLFxyXG4gICAgICAgIHRvcExldmVsPzogYm9vbGVhbixcclxuICAgICk6IFByb21pc2U8SUNpdHlEYXRhW10+IHtcclxuICAgICAgICBjb25zdCBmaW5hbFRvcExldmVsID0gdG9wTGV2ZWwgPz8gZmFsc2U7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLmF4aW9zSW5zdGFuY2UuZ2V0KFxyXG4gICAgICAgICAgICAgICAgXCIvY2l0aWVzL2dlb3Bvc2l0aW9uL3NlYXJjaFwiLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxOiBgJHtsYWd9LCR7bG5nfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbHM6IHRoaXMuZGV0YWlsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3BsZXZlbDogZmluYWxUb3BMZXZlbCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhIHx8IFtdO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgaW5mb3JtYXRpb24gZm9yIGFuIGFycmF5IG9mIFBvaW50cyBvZiBJbnRlcmVzdCB0aGF0IG1hdGNoIHRoZSBzZWFyY2ggdGV4dC5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBxdWVyeSAtIFRleHQgdG8gc2VhcmNoIGZvci5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPElDaXR5RGF0YVtdPn0gU2VhcmNoIERhdGFcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGlwU2VhcmNoKHF1ZXJ5OiBzdHJpbmcpOiBQcm9taXNlPElDaXR5RGF0YVtdPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLmF4aW9zSW5zdGFuY2UuZ2V0KFwiL2NpdGllcy9pcGFkZHJlc3NcIiwge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcTogcXVlcnksXHJcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlsczogdGhpcy5kZXRhaWwsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhIHx8IFtdO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFcnJvcihlcnJvcjogQXhpb3NFcnJvcik6IEVycm9yIHtcclxuICAgICAgICBsZXQgbWVzc2FnZTogc3RyaW5nO1xyXG4gICAgICAgIHN3aXRjaCAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzKSB7XHJcbiAgICAgICAgICAgIGNhc2UgNDAwOlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgXCJSZXF1ZXN0IGhhZCBiYWQgc3ludGF4IG9yIHRoZSBwYXJhbWV0ZXJzIHN1cHBsaWVkIHdlcmUgaW52YWxpZFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDAxOlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IFwiVW5hdXRob3JpemVkLiBBUEkgYXV0aG9yaXphdGlvbiBmYWlsZWQuXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0MDM6XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID1cclxuICAgICAgICAgICAgICAgICAgICBcIlVuYXV0aG9yaXplZC4gWW91IGRvIG5vdCBoYXZlIHBlcm1pc3Npb24gdG8gYWNjZXNzIHRoaXMgZW5kcG9pbnQuXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0MDQ6XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID1cclxuICAgICAgICAgICAgICAgICAgICBcIlNlcnZlciBoYXMgbm90IGZvdW5kIGEgcm91dGUgbWF0Y2hpbmcgdGhlIGdpdmVuIFVSSS5cIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDUwMDpcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPVxyXG4gICAgICAgICAgICAgICAgICAgIFwiU2VydmVyIGVuY291bnRlcmVkIGFuIHVuZXhwZWN0ZWQgY29uZGl0aW9uIHdoaWNoIHByZXZlbnRlZCBpdCBmcm9tIGZ1bGZpbGxpbmcgdGhlIHJlcXVlc3QuXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEVycm9yKGAke2Vycm9yLnJlc3BvbnNlLnN0YXR1c30gJHttZXNzYWdlfWApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==