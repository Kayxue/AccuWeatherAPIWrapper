"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class ForecastAPI {
    constructor(options) {
        this.apikey = options.apikey;
        this.language = options.language ?? "en-us";
        this.detail = options.detail ?? false;
        this.metric = options.metric ?? false;
        this.axiosInstance = axios_1.default.create({
            baseURL: "http://dataservice.accuweather.com/forecasts/v1/",
            params: {
                apikey: this.apikey,
                language: this.language,
                detail: this.detail,
                metric: this.metric,
            },
        });
    }
    /**
     * Get daily forecast data for a specific location. Forecast searches require a location key. Please use the Locations API to obtain the location key for your desired location. By default, a truncated version of the hourly forecast data is returned. The full object can be obtained by passing "details=true" into the url string
     * @param {1 | 5 | 10 | 20} day - days of forecast to return
     * @param {string} locationKey - Location key
     * @returns {Promise<IDailyForecastData>} Daily Forecast data
     */
    async getDailyForecast(day, locationKey) {
        try {
            const { data } = await this.axiosInstance.get(`/daily/${day}day/${locationKey}`);
            return data;
        }
        catch (e) {
            throw this.handleError(e);
        }
    }
    /**
     * Get daily forecast data for a specific location. Forecast searches require a location key. Please use the Locations API to obtain the location key for your desired location. By default, a truncated version of the hourly forecast data is returned. The full object can be obtained by passing "details=true" into the url string
     * @param {1 | 12 | 24 | 72 | 120} hours - hours of forecast to return
     * @param {string} locationKey - Location key
     * @returns {Promise<IHourlyForecastData[]>} Hourly Forecast data
     */
    async getHourlyForecast(hours, locationKey) {
        try {
            const { data } = await this.axiosInstance.get(`/daily/${hours}hour/${locationKey}`);
            return data;
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
exports.default = ForecastAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9yZWNhc3RBUEkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9UeXBlU2NyaXB0L0FQSS9Gb3JlY2FzdEFQSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUF5RDtBQU96RCxNQUFxQixXQUFXO0lBTzVCLFlBQW1CLE9BQXFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsYUFBYSxHQUFHLGVBQUssQ0FBQyxNQUFNLENBQUM7WUFDOUIsT0FBTyxFQUFFLGtEQUFrRDtZQUMzRCxNQUFNLEVBQUU7Z0JBQ0osTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ3RCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLGdCQUFnQixDQUN6QixHQUFvQixFQUNwQixXQUFtQjtRQUVuQixJQUFJO1lBQ0EsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ3pDLFVBQVUsR0FBRyxPQUFPLFdBQVcsRUFBRSxDQUNwQyxDQUFDO1lBRUYsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1IsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksS0FBSyxDQUFDLGlCQUFpQixDQUMxQixLQUE2QixFQUM3QixXQUFtQjtRQUVuQixJQUFJO1lBQ0EsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ3pDLFVBQVUsS0FBSyxRQUFRLFdBQVcsRUFBRSxDQUN2QyxDQUFDO1lBRUYsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1IsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUVPLFdBQVcsQ0FBQyxLQUFpQjtRQUNqQyxJQUFJLE9BQWUsQ0FBQztRQUNwQixRQUFRLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQzNCLEtBQUssR0FBRztnQkFDSixPQUFPO29CQUNILGdFQUFnRSxDQUFDO2dCQUNyRSxNQUFNO1lBQ1YsS0FBSyxHQUFHO2dCQUNKLE9BQU8sR0FBRyx5Q0FBeUMsQ0FBQztnQkFDcEQsTUFBTTtZQUNWLEtBQUssR0FBRztnQkFDSixPQUFPO29CQUNILG1FQUFtRSxDQUFDO2dCQUN4RSxNQUFNO1lBQ1YsS0FBSyxHQUFHO2dCQUNKLE9BQU87b0JBQ0gsc0RBQXNELENBQUM7Z0JBQzNELE1BQU07WUFDVixLQUFLLEdBQUc7Z0JBQ0osT0FBTztvQkFDSCw0RkFBNEYsQ0FBQztTQUN4RztRQUVELE9BQU8sSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7Q0FDSjtBQTFGRCw4QkEwRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHsgQXhpb3NFcnJvciwgQXhpb3NJbnN0YW5jZSB9IGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBJSW5pdE9wdGlvbnMgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHtcclxuICAgIElEYWlseUZvcmVjYXN0RGF0YSxcclxuICAgIElIb3VybHlGb3JlY2FzdERhdGEsXHJcbn0gZnJvbSBcIi4uL0ludGVyZmFjZXMvRm9yZWNhc3RBUElEYXRhXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JlY2FzdEFQSSB7XHJcbiAgICBwdWJsaWMgYXBpa2V5OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbGFuZ3VhZ2U6IHN0cmluZztcclxuICAgIHB1YmxpYyBkZXRhaWw6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgbWV0cmljOiBib29sZWFuO1xyXG4gICAgcHVibGljIGF4aW9zSW5zdGFuY2U6IEF4aW9zSW5zdGFuY2U7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9taXQ8SUluaXRPcHRpb25zLCBcIm9mZnNldFwiPikge1xyXG4gICAgICAgIHRoaXMuYXBpa2V5ID0gb3B0aW9ucy5hcGlrZXk7XHJcbiAgICAgICAgdGhpcy5sYW5ndWFnZSA9IG9wdGlvbnMubGFuZ3VhZ2UgPz8gXCJlbi11c1wiO1xyXG4gICAgICAgIHRoaXMuZGV0YWlsID0gb3B0aW9ucy5kZXRhaWwgPz8gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tZXRyaWMgPSBvcHRpb25zLm1ldHJpYyA/PyBmYWxzZTtcclxuICAgICAgICB0aGlzLmF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBiYXNlVVJMOiBcImh0dHA6Ly9kYXRhc2VydmljZS5hY2N1d2VhdGhlci5jb20vZm9yZWNhc3RzL3YxL1wiLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIGFwaWtleTogdGhpcy5hcGlrZXksXHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZSxcclxuICAgICAgICAgICAgICAgIGRldGFpbDogdGhpcy5kZXRhaWwsXHJcbiAgICAgICAgICAgICAgICBtZXRyaWM6IHRoaXMubWV0cmljLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGRhaWx5IGZvcmVjYXN0IGRhdGEgZm9yIGEgc3BlY2lmaWMgbG9jYXRpb24uIEZvcmVjYXN0IHNlYXJjaGVzIHJlcXVpcmUgYSBsb2NhdGlvbiBrZXkuIFBsZWFzZSB1c2UgdGhlIExvY2F0aW9ucyBBUEkgdG8gb2J0YWluIHRoZSBsb2NhdGlvbiBrZXkgZm9yIHlvdXIgZGVzaXJlZCBsb2NhdGlvbi4gQnkgZGVmYXVsdCwgYSB0cnVuY2F0ZWQgdmVyc2lvbiBvZiB0aGUgaG91cmx5IGZvcmVjYXN0IGRhdGEgaXMgcmV0dXJuZWQuIFRoZSBmdWxsIG9iamVjdCBjYW4gYmUgb2J0YWluZWQgYnkgcGFzc2luZyBcImRldGFpbHM9dHJ1ZVwiIGludG8gdGhlIHVybCBzdHJpbmdcclxuICAgICAqIEBwYXJhbSB7MSB8IDUgfCAxMCB8IDIwfSBkYXkgLSBkYXlzIG9mIGZvcmVjYXN0IHRvIHJldHVyblxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uS2V5IC0gTG9jYXRpb24ga2V5XHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxJRGFpbHlGb3JlY2FzdERhdGE+fSBEYWlseSBGb3JlY2FzdCBkYXRhXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBnZXREYWlseUZvcmVjYXN0KFxyXG4gICAgICAgIGRheTogMSB8IDUgfCAxMCB8IDE1LFxyXG4gICAgICAgIGxvY2F0aW9uS2V5OiBzdHJpbmcsXHJcbiAgICApOiBQcm9taXNlPElEYWlseUZvcmVjYXN0RGF0YT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5heGlvc0luc3RhbmNlLmdldChcclxuICAgICAgICAgICAgICAgIGAvZGFpbHkvJHtkYXl9ZGF5LyR7bG9jYXRpb25LZXl9YCxcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgZGFpbHkgZm9yZWNhc3QgZGF0YSBmb3IgYSBzcGVjaWZpYyBsb2NhdGlvbi4gRm9yZWNhc3Qgc2VhcmNoZXMgcmVxdWlyZSBhIGxvY2F0aW9uIGtleS4gUGxlYXNlIHVzZSB0aGUgTG9jYXRpb25zIEFQSSB0byBvYnRhaW4gdGhlIGxvY2F0aW9uIGtleSBmb3IgeW91ciBkZXNpcmVkIGxvY2F0aW9uLiBCeSBkZWZhdWx0LCBhIHRydW5jYXRlZCB2ZXJzaW9uIG9mIHRoZSBob3VybHkgZm9yZWNhc3QgZGF0YSBpcyByZXR1cm5lZC4gVGhlIGZ1bGwgb2JqZWN0IGNhbiBiZSBvYnRhaW5lZCBieSBwYXNzaW5nIFwiZGV0YWlscz10cnVlXCIgaW50byB0aGUgdXJsIHN0cmluZ1xyXG4gICAgICogQHBhcmFtIHsxIHwgMTIgfCAyNCB8IDcyIHwgMTIwfSBob3VycyAtIGhvdXJzIG9mIGZvcmVjYXN0IHRvIHJldHVyblxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uS2V5IC0gTG9jYXRpb24ga2V5XHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxJSG91cmx5Rm9yZWNhc3REYXRhW10+fSBIb3VybHkgRm9yZWNhc3QgZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0SG91cmx5Rm9yZWNhc3QoXHJcbiAgICAgICAgaG91cnM6IDEgfCAxMiB8IDI0IHwgNzIgfCAxMjAsXHJcbiAgICAgICAgbG9jYXRpb25LZXk6IHN0cmluZyxcclxuICAgICk6IFByb21pc2U8SUhvdXJseUZvcmVjYXN0RGF0YVtdPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLmF4aW9zSW5zdGFuY2UuZ2V0KFxyXG4gICAgICAgICAgICAgICAgYC9kYWlseS8ke2hvdXJzfWhvdXIvJHtsb2NhdGlvbktleX1gLFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aHJvdyB0aGlzLmhhbmRsZUVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVycm9yKGVycm9yOiBBeGlvc0Vycm9yKTogRXJyb3Ige1xyXG4gICAgICAgIGxldCBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICAgICAgc3dpdGNoIChlcnJvci5yZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgY2FzZSA0MDA6XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID1cclxuICAgICAgICAgICAgICAgICAgICBcIlJlcXVlc3QgaGFkIGJhZCBzeW50YXggb3IgdGhlIHBhcmFtZXRlcnMgc3VwcGxpZWQgd2VyZSBpbnZhbGlkXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0MDE6XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJVbmF1dGhvcml6ZWQuIEFQSSBhdXRob3JpemF0aW9uIGZhaWxlZC5cIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQwMzpcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPVxyXG4gICAgICAgICAgICAgICAgICAgIFwiVW5hdXRob3JpemVkLiBZb3UgZG8gbm90IGhhdmUgcGVybWlzc2lvbiB0byBhY2Nlc3MgdGhpcyBlbmRwb2ludC5cIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQwNDpcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPVxyXG4gICAgICAgICAgICAgICAgICAgIFwiU2VydmVyIGhhcyBub3QgZm91bmQgYSByb3V0ZSBtYXRjaGluZyB0aGUgZ2l2ZW4gVVJJLlwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgXCJTZXJ2ZXIgZW5jb3VudGVyZWQgYW4gdW5leHBlY3RlZCBjb25kaXRpb24gd2hpY2ggcHJldmVudGVkIGl0IGZyb20gZnVsZmlsbGluZyB0aGUgcmVxdWVzdC5cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoYCR7ZXJyb3IucmVzcG9uc2Uuc3RhdHVzfSAke21lc3NhZ2V9YCk7XHJcbiAgICB9XHJcbn1cclxuIl19