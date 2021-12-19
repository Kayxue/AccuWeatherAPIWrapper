"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const APIClientBase_1 = __importDefault(require("./APIClientBase"));
/**
 * Forecast API Playground:
 * {@link https://developer.accuweather.com/accuweather-forecast-api/apis}
 */
class ForecastAPI extends APIClientBase_1.default {
    /**
     * Initialize the client
     * @param options  Init options
     */
    constructor(options) {
        super(options);
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
     * Get daily forecast data for a specific location.
     * @param day  days of forecast to return
     * @param locationKey  Location key
     * @returns Daily Forecast data
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
     * Get daily forecast data for a specific location.
     * @param hours  hours of forecast to return
     * @param locationKey  Location key
     * @returns Hourly Forecast data
     */
    async getHourlyForecast(hours, locationKey) {
        try {
            const { data } = await this.axiosInstance.get(`/hourly/${hours}hour/${locationKey}`);
            return data;
        }
        catch (e) {
            throw this.handleError(e);
        }
    }
}
exports.default = ForecastAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9yZWNhc3RBUElDbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9UeXBlU2NyaXB0L0FQSS9Gb3JlY2FzdEFQSUNsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUE2QztBQU03QyxvRUFBNEM7QUFFNUM7OztHQUdHO0FBQ0gsTUFBcUIsV0FBWSxTQUFRLHVCQUFhO0lBVWxEOzs7T0FHRztJQUNILFlBQW1CLE9BQXFDO1FBQ3BELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUM7UUFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxlQUFLLENBQUMsTUFBTSxDQUFDO1lBQzlCLE9BQU8sRUFBRSxrREFBa0Q7WUFDM0QsTUFBTSxFQUFFO2dCQUNKLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTthQUN0QjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FDekIsR0FBb0IsRUFDcEIsV0FBbUI7UUFFbkIsSUFBSTtZQUNBLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUN6QyxVQUFVLEdBQUcsT0FBTyxXQUFXLEVBQUUsQ0FDcEMsQ0FBQztZQUVGLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3QjtJQUNMLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEtBQUssQ0FBQyxpQkFBaUIsQ0FDMUIsS0FBNkIsRUFDN0IsV0FBbUI7UUFFbkIsSUFBSTtZQUNBLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUN6QyxXQUFXLEtBQUssUUFBUSxXQUFXLEVBQUUsQ0FDeEMsQ0FBQztZQUVGLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNSLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3QjtJQUNMLENBQUM7Q0FDSjtBQXJFRCw4QkFxRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHsgQXhpb3NJbnN0YW5jZSB9IGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBJSW5pdE9wdGlvbnMgfSBmcm9tIFwiLi5cIjtcclxuaW1wb3J0IHtcclxuICAgIElEYWlseUZvcmVjYXN0RGF0YSxcclxuICAgIElIb3VybHlGb3JlY2FzdERhdGEsXHJcbn0gZnJvbSBcIi4uL0ludGVyZmFjZXMvRm9yZWNhc3RBUElEYXRhXCI7XHJcbmltcG9ydCBBUElDbGllbnRCYXNlIGZyb20gXCIuL0FQSUNsaWVudEJhc2VcIjtcclxuXHJcbi8qKlxyXG4gKiBGb3JlY2FzdCBBUEkgUGxheWdyb3VuZDpcclxuICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLmFjY3V3ZWF0aGVyLmNvbS9hY2N1d2VhdGhlci1mb3JlY2FzdC1hcGkvYXBpc31cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmVjYXN0QVBJIGV4dGVuZHMgQVBJQ2xpZW50QmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqICBXaGV0aGVyIG9yIG5vdCB0byByZXR1cm4gbWV0cmljIHZhbHVlcy5cclxuICAgICAqL1xyXG4gICAgcHVibGljIG1ldHJpYzogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogIFRoZSBpbnN0YW5jZSB0aGF0IHNlbmQgcmVxdWVzdHMgdG8gQVBJXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXhpb3NJbnN0YW5jZTogQXhpb3NJbnN0YW5jZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEluaXRpYWxpemUgdGhlIGNsaWVudFxyXG4gICAgICogQHBhcmFtIG9wdGlvbnMgIEluaXQgb3B0aW9uc1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob3B0aW9uczogT21pdDxJSW5pdE9wdGlvbnMsIFwib2Zmc2V0XCI+KSB7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5tZXRyaWMgPSBvcHRpb25zLm1ldHJpYyA/PyBmYWxzZTtcclxuICAgICAgICB0aGlzLmF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBiYXNlVVJMOiBcImh0dHA6Ly9kYXRhc2VydmljZS5hY2N1d2VhdGhlci5jb20vZm9yZWNhc3RzL3YxL1wiLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIGFwaWtleTogdGhpcy5hcGlrZXksXHJcbiAgICAgICAgICAgICAgICBsYW5ndWFnZTogdGhpcy5sYW5ndWFnZSxcclxuICAgICAgICAgICAgICAgIGRldGFpbDogdGhpcy5kZXRhaWwsXHJcbiAgICAgICAgICAgICAgICBtZXRyaWM6IHRoaXMubWV0cmljLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IGRhaWx5IGZvcmVjYXN0IGRhdGEgZm9yIGEgc3BlY2lmaWMgbG9jYXRpb24uXHJcbiAgICAgKiBAcGFyYW0gZGF5ICBkYXlzIG9mIGZvcmVjYXN0IHRvIHJldHVyblxyXG4gICAgICogQHBhcmFtIGxvY2F0aW9uS2V5ICBMb2NhdGlvbiBrZXlcclxuICAgICAqIEByZXR1cm5zIERhaWx5IEZvcmVjYXN0IGRhdGFcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGdldERhaWx5Rm9yZWNhc3QoXHJcbiAgICAgICAgZGF5OiAxIHwgNSB8IDEwIHwgMTUsXHJcbiAgICAgICAgbG9jYXRpb25LZXk6IHN0cmluZyxcclxuICAgICk6IFByb21pc2U8SURhaWx5Rm9yZWNhc3REYXRhPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLmF4aW9zSW5zdGFuY2UuZ2V0KFxyXG4gICAgICAgICAgICAgICAgYC9kYWlseS8ke2RheX1kYXkvJHtsb2NhdGlvbktleX1gLFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aHJvdyB0aGlzLmhhbmRsZUVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEdldCBkYWlseSBmb3JlY2FzdCBkYXRhIGZvciBhIHNwZWNpZmljIGxvY2F0aW9uLlxyXG4gICAgICogQHBhcmFtIGhvdXJzICBob3VycyBvZiBmb3JlY2FzdCB0byByZXR1cm5cclxuICAgICAqIEBwYXJhbSBsb2NhdGlvbktleSAgTG9jYXRpb24ga2V5XHJcbiAgICAgKiBAcmV0dXJucyBIb3VybHkgRm9yZWNhc3QgZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0SG91cmx5Rm9yZWNhc3QoXHJcbiAgICAgICAgaG91cnM6IDEgfCAxMiB8IDI0IHwgNzIgfCAxMjAsXHJcbiAgICAgICAgbG9jYXRpb25LZXk6IHN0cmluZyxcclxuICAgICk6IFByb21pc2U8SUhvdXJseUZvcmVjYXN0RGF0YVtdPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLmF4aW9zSW5zdGFuY2UuZ2V0KFxyXG4gICAgICAgICAgICAgICAgYC9ob3VybHkvJHtob3Vyc31ob3VyLyR7bG9jYXRpb25LZXl9YCxcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgdGhpcy5oYW5kbGVFcnJvcihlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19