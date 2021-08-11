"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccuWeatherAPIError = exports.APIClientBase = exports.CurrentConditionAPI = exports.ForecastAPI = exports.LocationAPI = void 0;
const LocationAPIClient_1 = __importDefault(require("./API/LocationAPIClient"));
exports.LocationAPI = LocationAPIClient_1.default;
const ForecastAPIClient_1 = __importDefault(require("./API/ForecastAPIClient"));
exports.ForecastAPI = ForecastAPIClient_1.default;
const CurrentConditionAPIClient_1 = __importDefault(require("./API/CurrentConditionAPIClient"));
exports.CurrentConditionAPI = CurrentConditionAPIClient_1.default;
const APIClientBase_1 = __importDefault(require("./API/APIClientBase"));
exports.APIClientBase = APIClientBase_1.default;
const AccuWeatherAPIError_1 = __importDefault(require("./Error/AccuWeatherAPIError"));
exports.AccuWeatherAPIError = AccuWeatherAPIError_1.default;
/**
 * A client that provides an interface to all apis
 */
class AccuWeatherClient {
    constructor(options) {
        this.apikey = options.apikey;
        this.language = options.language ?? "en-us";
        this.detail = options.detail ?? false;
        this.offset = options.offset ?? 100;
        this.metric = options.metric ?? false;
        this.location = new LocationAPIClient_1.default(options);
        this.forecast = new ForecastAPIClient_1.default(options);
        this.currentConditions = new CurrentConditionAPIClient_1.default(options);
    }
}
exports.default = AccuWeatherClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9UeXBlU2NyaXB0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdGQUFrRDtBQW9HOUMsc0JBcEdHLDJCQUFXLENBb0dIO0FBbkdmLGdGQUFrRDtBQW9HOUMsc0JBcEdHLDJCQUFXLENBb0dIO0FBbkdmLGdHQUFrRTtBQW1IOUQsOEJBbkhHLG1DQUFtQixDQW1ISDtBQWxIdkIsd0VBQWdEO0FBbUg1Qyx3QkFuSEcsdUJBQWEsQ0FtSEg7QUE3RmpCLHNGQUE4RDtBQThGMUQsOEJBOUZHLDZCQUFtQixDQThGSDtBQXJFdkI7O0dBRUc7QUFDSCxNQUFxQixpQkFBaUI7SUFrQ2xDLFlBQW1CLE9BQXFCO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDO1FBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQztRQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSwyQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSwyQkFBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLG1DQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlELENBQUM7Q0FDSjtBQTVDRCxvQ0E0Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9jYXRpb25BUEkgZnJvbSBcIi4vQVBJL0xvY2F0aW9uQVBJQ2xpZW50XCI7XHJcbmltcG9ydCBGb3JlY2FzdEFQSSBmcm9tIFwiLi9BUEkvRm9yZWNhc3RBUElDbGllbnRcIjtcclxuaW1wb3J0IEN1cnJlbnRDb25kaXRpb25BUEkgZnJvbSBcIi4vQVBJL0N1cnJlbnRDb25kaXRpb25BUElDbGllbnRcIjtcclxuaW1wb3J0IEFQSUNsaWVudEJhc2UgZnJvbSBcIi4vQVBJL0FQSUNsaWVudEJhc2VcIjtcclxuaW1wb3J0IHtcclxuICAgIElEYWlseUZvcmVjYXN0RGF0YSxcclxuICAgIElIb3VybHlGb3JlY2FzdERhdGEsXHJcbiAgICBJRGF5TmlnaHRXZWF0aGVyU3VtbWFyeSxcclxuICAgIElIZWFkbGluZURhdGEsXHJcbiAgICBJRGFpbHlGb3JlY2FzdHNEYXRhLFxyXG59IGZyb20gXCIuL0ludGVyZmFjZXMvRm9yZWNhc3RBUElEYXRhXCI7XHJcbmltcG9ydCB7XHJcbiAgICBJQWRtaW5BcmVhRGF0YSxcclxuICAgIElBdXRvQ29tcGxldGVTZWFyY2hEYXRhLFxyXG4gICAgSUJhc2VDaXR5RGF0YSxcclxuICAgIElDaXR5RGF0YSxcclxuICAgIElDaXR5RGV0YWlscyxcclxuICAgIElDb3VudHJ5RGF0YSxcclxuICAgIElSZWdpb25EYXRhLFxyXG59IGZyb20gXCIuL0ludGVyZmFjZXMvTG9jYXRpb25BUElEYXRhXCI7XHJcbmltcG9ydCB7XHJcbiAgICBJVG9wQ2l0aWVzQ3VycmVudENvbmRpdGlvbkRhdGEsXHJcbiAgICBJQ3VycmVudENvbmRpdGlvbkRhdGEsXHJcbn0gZnJvbSBcIi4vSW50ZXJmYWNlcy9DdXJyZW50Q29uZGl0aW9uQVBJRGF0YVwiO1xyXG5pbXBvcnQgeyBJVmFsdWVXaXRoVW5pdCwgSU1ldHJpY0FuZEltcGVyaWFsRGF0YSB9IGZyb20gXCIuL0ludGVyZmFjZXMvT3RoZXJcIjtcclxuaW1wb3J0IEFjY3VXZWF0aGVyQVBJRXJyb3IgZnJvbSBcIi4vRXJyb3IvQWNjdVdlYXRoZXJBUElFcnJvclwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJSW5pdE9wdGlvbnMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBBY2N1IFdlYXRoZXIgQVBJIGtleS5cclxuICAgICAqL1xyXG4gICAgYXBpa2V5OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIExhbmd1YWdlIG9mIHJldHJpZXZlIGRhdGFcclxuICAgICAqL1xyXG4gICAgbGFuZ3VhZ2U/OiBzdHJpbmc7XHJcbiAgICAvKipcclxuICAgICAqIFdoZXRoZXIgcmV0dXJuIGZ1bGwgb2JqZWN0IHdoZW4gc2VhcmNoaW5nXHJcbiAgICAgKi9cclxuICAgIGRldGFpbD86IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsaW1pdCB0aGF0IGRldGVybWluZXMgdGhlIGZpcnN0IHJlc291cmNlIHRvIGJlIHJldHVybmVkXHJcbiAgICAgKi9cclxuICAgIG9mZnNldD86IG51bWJlcjtcclxuICAgIC8qKlxyXG4gICAgICogIFdoZXRoZXIgb3Igbm90IHRvIHJldHVybiBtZXRyaWMgdmFsdWVzLlxyXG4gICAgICovXHJcbiAgICBtZXRyaWM/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQSBjbGllbnQgdGhhdCBwcm92aWRlcyBhbiBpbnRlcmZhY2UgdG8gYWxsIGFwaXNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY3VXZWF0aGVyQ2xpZW50IHtcclxuICAgIC8qKlxyXG4gICAgICogQWNjdSBXZWF0aGVyIEFQSSBrZXkuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhcGlrZXk6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogTGFuZ3VhZ2Ugb2YgcmV0cmlldmUgZGF0YVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbGFuZ3VhZ2U6IHN0cmluZztcclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciByZXR1cm4gZnVsbCBvYmplY3Qgd2hlbiBzZWFyY2hpbmdcclxuICAgICAqL1xyXG4gICAgcHVibGljIGRldGFpbDogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogVGhlIGxpbWl0IHRoYXQgZGV0ZXJtaW5lcyB0aGUgZmlyc3QgcmVzb3VyY2UgdG8gYmUgcmV0dXJuZWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9mZnNldDogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiAgV2hldGhlciBvciBub3QgdG8gcmV0dXJuIG1ldHJpYyB2YWx1ZXMuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtZXRyaWM6IGJvb2xlYW47XHJcbiAgICAvKipcclxuICAgICAqIExvY2F0aW9uIEFQSSBDbGllbnRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxvY2F0aW9uOiBMb2NhdGlvbkFQSTtcclxuICAgIC8qKlxyXG4gICAgICogRm9yZWNhc3QgQVBJIENsaWVudFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZm9yZWNhc3Q6IEZvcmVjYXN0QVBJO1xyXG4gICAgLyoqXHJcbiAgICAgKiBDdXJyZW50IENvbmRpdGlvbiBBUEkgQ2xpZW50XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjdXJyZW50Q29uZGl0aW9uczogQ3VycmVudENvbmRpdGlvbkFQSTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Iob3B0aW9uczogSUluaXRPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5hcGlrZXkgPSBvcHRpb25zLmFwaWtleTtcclxuICAgICAgICB0aGlzLmxhbmd1YWdlID0gb3B0aW9ucy5sYW5ndWFnZSA/PyBcImVuLXVzXCI7XHJcbiAgICAgICAgdGhpcy5kZXRhaWwgPSBvcHRpb25zLmRldGFpbCA/PyBmYWxzZTtcclxuICAgICAgICB0aGlzLm9mZnNldCA9IG9wdGlvbnMub2Zmc2V0ID8/IDEwMDtcclxuICAgICAgICB0aGlzLm1ldHJpYyA9IG9wdGlvbnMubWV0cmljID8/IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBuZXcgTG9jYXRpb25BUEkob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5mb3JlY2FzdCA9IG5ldyBGb3JlY2FzdEFQSShvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRDb25kaXRpb25zID0gbmV3IEN1cnJlbnRDb25kaXRpb25BUEkob3B0aW9ucyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBMb2NhdGlvbkFQSSxcclxuICAgIEZvcmVjYXN0QVBJLFxyXG4gICAgSURhaWx5Rm9yZWNhc3REYXRhLFxyXG4gICAgSUhvdXJseUZvcmVjYXN0RGF0YSxcclxuICAgIElSZWdpb25EYXRhLFxyXG4gICAgSUNvdW50cnlEYXRhLFxyXG4gICAgSUNpdHlEYXRhLFxyXG4gICAgSUF1dG9Db21wbGV0ZVNlYXJjaERhdGEsXHJcbiAgICBJQWRtaW5BcmVhRGF0YSxcclxuICAgIElEYXlOaWdodFdlYXRoZXJTdW1tYXJ5LFxyXG4gICAgSVZhbHVlV2l0aFVuaXQsXHJcbiAgICBJSGVhZGxpbmVEYXRhLFxyXG4gICAgSURhaWx5Rm9yZWNhc3RzRGF0YSBhcyBJRGFpbHlGb3JjYXN0RGF0YSxcclxuICAgIElDaXR5RGV0YWlscyxcclxuICAgIElUb3BDaXRpZXNDdXJyZW50Q29uZGl0aW9uRGF0YSxcclxuICAgIElCYXNlQ2l0eURhdGEsXHJcbiAgICBJTWV0cmljQW5kSW1wZXJpYWxEYXRhLFxyXG4gICAgQ3VycmVudENvbmRpdGlvbkFQSSxcclxuICAgIEFQSUNsaWVudEJhc2UsXHJcbiAgICBBY2N1V2VhdGhlckFQSUVycm9yLFxyXG4gICAgSUN1cnJlbnRDb25kaXRpb25EYXRhLFxyXG59O1xyXG4iXX0=