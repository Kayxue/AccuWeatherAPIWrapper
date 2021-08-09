"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AccuWeatherAPIError_1 = __importDefault(require("../Error/AccuWeatherAPIError"));
class APIClientBase {
    constructor(options) {
        this.apikey = options.apikey;
        this.language = options.language ?? "en-us";
        this.detail = options.detail ?? false;
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
        return new AccuWeatherAPIError_1.default(message, error);
    }
}
exports.default = APIClientBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQVBJQ2xpZW50QmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1R5cGVTY3JpcHQvQVBJL0FQSUNsaWVudEJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSx1RkFBK0Q7QUFFL0QsTUFBcUIsYUFBYTtJQWM5QixZQUFtQixPQUFnRDtRQUMvRCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDO0lBQzFDLENBQUM7SUFFUyxXQUFXLENBQUMsS0FBaUI7UUFDbkMsSUFBSSxPQUFlLENBQUM7UUFDcEIsUUFBUSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUMzQixLQUFLLEdBQUc7Z0JBQ0osT0FBTztvQkFDSCxnRUFBZ0UsQ0FBQztnQkFDckUsTUFBTTtZQUNWLEtBQUssR0FBRztnQkFDSixPQUFPLEdBQUcseUNBQXlDLENBQUM7Z0JBQ3BELE1BQU07WUFDVixLQUFLLEdBQUc7Z0JBQ0osT0FBTztvQkFDSCxtRUFBbUUsQ0FBQztnQkFDeEUsTUFBTTtZQUNWLEtBQUssR0FBRztnQkFDSixPQUFPO29CQUNILHNEQUFzRCxDQUFDO2dCQUMzRCxNQUFNO1lBQ1YsS0FBSyxHQUFHO2dCQUNKLE9BQU87b0JBQ0gsNEZBQTRGLENBQUM7U0FDeEc7UUFFRCxPQUFPLElBQUksNkJBQW1CLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25ELENBQUM7Q0FDSjtBQTdDRCxnQ0E2Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBeGlvc0Vycm9yIH0gZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IElJbml0T3B0aW9ucyB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQgQWNjdVdlYXRoZXJBUElFcnJvciBmcm9tIFwiLi4vRXJyb3IvQWNjdVdlYXRoZXJBUElFcnJvclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQVBJQ2xpZW50QmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqIEFjY3UgV2VhdGhlciBBUEkga2V5LlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXBpa2V5OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIExhbmd1YWdlIG9mIHJldHJpZXZlIGRhdGFcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxhbmd1YWdlOiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgcmV0dXJuIGZ1bGwgb2JqZWN0IHdoZW4gc2VhcmNoaW5nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBkZXRhaWw6IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9taXQ8SUluaXRPcHRpb25zLCBcIm1ldHJpY1wiIHwgXCJvZmZzZXRcIj4pIHtcclxuICAgICAgICB0aGlzLmFwaWtleSA9IG9wdGlvbnMuYXBpa2V5O1xyXG4gICAgICAgIHRoaXMubGFuZ3VhZ2UgPSBvcHRpb25zLmxhbmd1YWdlID8/IFwiZW4tdXNcIjtcclxuICAgICAgICB0aGlzLmRldGFpbCA9IG9wdGlvbnMuZGV0YWlsID8/IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBoYW5kbGVFcnJvcihlcnJvcjogQXhpb3NFcnJvcik6IEFjY3VXZWF0aGVyQVBJRXJyb3Ige1xyXG4gICAgICAgIGxldCBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgICAgICAgc3dpdGNoIChlcnJvci5yZXNwb25zZS5zdGF0dXMpIHtcclxuICAgICAgICAgICAgY2FzZSA0MDA6XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID1cclxuICAgICAgICAgICAgICAgICAgICBcIlJlcXVlc3QgaGFkIGJhZCBzeW50YXggb3IgdGhlIHBhcmFtZXRlcnMgc3VwcGxpZWQgd2VyZSBpbnZhbGlkXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA0MDE6XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJVbmF1dGhvcml6ZWQuIEFQSSBhdXRob3JpemF0aW9uIGZhaWxlZC5cIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQwMzpcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPVxyXG4gICAgICAgICAgICAgICAgICAgIFwiVW5hdXRob3JpemVkLiBZb3UgZG8gbm90IGhhdmUgcGVybWlzc2lvbiB0byBhY2Nlc3MgdGhpcyBlbmRwb2ludC5cIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDQwNDpcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPVxyXG4gICAgICAgICAgICAgICAgICAgIFwiU2VydmVyIGhhcyBub3QgZm91bmQgYSByb3V0ZSBtYXRjaGluZyB0aGUgZ2l2ZW4gVVJJLlwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTAwOlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgXCJTZXJ2ZXIgZW5jb3VudGVyZWQgYW4gdW5leHBlY3RlZCBjb25kaXRpb24gd2hpY2ggcHJldmVudGVkIGl0IGZyb20gZnVsZmlsbGluZyB0aGUgcmVxdWVzdC5cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgQWNjdVdlYXRoZXJBUElFcnJvcihtZXNzYWdlLCBlcnJvcik7XHJcbiAgICB9XHJcbn1cclxuIl19