"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const APIClientBase_1 = __importDefault(require("./APIClientBase"));
/**
 * Current condition API Playground:
 * {@link https://developer.accuweather.com/accuweather-current-conditions-api/apis}
 */
class CurrentConditionAPI extends APIClientBase_1.default {
    /**
     * Initialize the client
     * @param options  Init options
     */
    constructor(options) {
        super(options);
        this.axiosInstance = axios_1.default.create({
            baseURL: "http://dataservice.accuweather.com/currentconditions/v1/",
            params: {
                apikey: this.apikey,
                language: this.language,
                details: this.detail,
            },
        });
    }
    async currentCondition(locationKey) {
        try {
            const { data } = await this.axiosInstance.get(`/${locationKey}`);
            return data;
        }
        catch (e) {
            throw this.handleError(e);
        }
    }
    async topCitiesCurrentCondition(group) {
        try {
            const { data } = await this.axiosInstance.get(`/topcities/${group}`);
            return data;
        }
        catch (e) {
            throw this.handleError(e);
        }
    }
    async HistoricalCurrentConditions(hour, locationKey) {
        try {
            const { data } = await this.axiosInstance.get(`/${locationKey}/historical/${hour === 24 ? 24 : ""}`);
            return data;
        }
        catch (e) {
            throw this.handleError(e);
        }
    }
}
exports.default = CurrentConditionAPI;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VycmVudENvbmRpdGlvbkFQSUNsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1R5cGVTY3JpcHQvQVBJL0N1cnJlbnRDb25kaXRpb25BUElDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBNkM7QUFNN0Msb0VBQTRDO0FBRTVDOzs7R0FHRztBQUNILE1BQXFCLG1CQUFvQixTQUFRLHVCQUFhO0lBTTFEOzs7T0FHRztJQUNILFlBQW1CLE9BQWdEO1FBQy9ELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxhQUFhLEdBQUcsZUFBSyxDQUFDLE1BQU0sQ0FBQztZQUM5QixPQUFPLEVBQUUsMERBQTBEO1lBQ25FLE1BQU0sRUFBRTtnQkFDSixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDdkIsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNO2FBQ3ZCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FDekIsV0FBbUI7UUFFbkIsSUFBSTtZQUNBLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksV0FBVyxFQUFFLENBQUMsQ0FBQztZQUVqRSxPQUFPLElBQUksQ0FBQztTQUNmO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDUixNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBRU0sS0FBSyxDQUFDLHlCQUF5QixDQUNsQyxLQUFxQjtRQUVyQixJQUFJO1lBQ0EsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ3pDLGNBQWMsS0FBSyxFQUFFLENBQ3hCLENBQUM7WUFFRixPQUFPLElBQUksQ0FBQztTQUNmO1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDUixNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBRU0sS0FBSyxDQUFDLDJCQUEyQixDQUNwQyxJQUFZLEVBQ1osV0FBbUI7UUFFbkIsSUFBSTtZQUNBLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUN6QyxJQUFJLFdBQVcsZUFBZSxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUN4RCxDQUFDO1lBRUYsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1IsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztDQUNKO0FBOURELHNDQThEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcywgeyBBeGlvc0luc3RhbmNlIH0gZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IElJbml0T3B0aW9ucyB9IGZyb20gXCIuLlwiO1xyXG5pbXBvcnQge1xyXG4gICAgSUN1cnJlbnRDb25kaXRpb25EYXRhLFxyXG4gICAgSVRvcENpdGllc0N1cnJlbnRDb25kaXRpb25EYXRhLFxyXG59IGZyb20gXCIuLi9JbnRlcmZhY2VzL0N1cnJlbnRDb25kaXRpb25BUElEYXRhXCI7XHJcbmltcG9ydCBBUElDbGllbnRCYXNlIGZyb20gXCIuL0FQSUNsaWVudEJhc2VcIjtcclxuXHJcbi8qKlxyXG4gKiBDdXJyZW50IGNvbmRpdGlvbiBBUEkgUGxheWdyb3VuZDpcclxuICoge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLmFjY3V3ZWF0aGVyLmNvbS9hY2N1d2VhdGhlci1jdXJyZW50LWNvbmRpdGlvbnMtYXBpL2FwaXN9XHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJyZW50Q29uZGl0aW9uQVBJIGV4dGVuZHMgQVBJQ2xpZW50QmFzZSB7XHJcbiAgICAvKipcclxuICAgICAqICBUaGUgaW5zdGFuY2UgdGhhdCBzZW5kIHJlcXVlc3RzIHRvIEFQSVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGF4aW9zSW5zdGFuY2U6IEF4aW9zSW5zdGFuY2U7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbml0aWFsaXplIHRoZSBjbGllbnRcclxuICAgICAqIEBwYXJhbSBvcHRpb25zICBJbml0IG9wdGlvbnNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9taXQ8SUluaXRPcHRpb25zLCBcIm1ldHJpY1wiIHwgXCJvZmZzZXRcIj4pIHtcclxuICAgICAgICBzdXBlcihvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgICAgICAgICBiYXNlVVJMOiBcImh0dHA6Ly9kYXRhc2VydmljZS5hY2N1d2VhdGhlci5jb20vY3VycmVudGNvbmRpdGlvbnMvdjEvXCIsXHJcbiAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgYXBpa2V5OiB0aGlzLmFwaWtleSxcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlOiB0aGlzLmxhbmd1YWdlLFxyXG4gICAgICAgICAgICAgICAgZGV0YWlsczogdGhpcy5kZXRhaWwsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGN1cnJlbnRDb25kaXRpb24oXHJcbiAgICAgICAgbG9jYXRpb25LZXk6IHN0cmluZyxcclxuICAgICk6IFByb21pc2U8SUN1cnJlbnRDb25kaXRpb25EYXRhW10+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuYXhpb3NJbnN0YW5jZS5nZXQoYC8ke2xvY2F0aW9uS2V5fWApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aHJvdyB0aGlzLmhhbmRsZUVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgdG9wQ2l0aWVzQ3VycmVudENvbmRpdGlvbihcclxuICAgICAgICBncm91cDogNTAgfCAxMDAgfCAxNTAsXHJcbiAgICApOiBQcm9taXNlPElUb3BDaXRpZXNDdXJyZW50Q29uZGl0aW9uRGF0YVtdPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCB0aGlzLmF4aW9zSW5zdGFuY2UuZ2V0KFxyXG4gICAgICAgICAgICAgICAgYC90b3BjaXRpZXMvJHtncm91cH1gLFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICB0aHJvdyB0aGlzLmhhbmRsZUVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgSGlzdG9yaWNhbEN1cnJlbnRDb25kaXRpb25zKFxyXG4gICAgICAgIGhvdXI6IDYgfCAyNCxcclxuICAgICAgICBsb2NhdGlvbktleTogc3RyaW5nLFxyXG4gICAgKTogUHJvbWlzZTxJQ3VycmVudENvbmRpdGlvbkRhdGFbXT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdGhpcy5heGlvc0luc3RhbmNlLmdldChcclxuICAgICAgICAgICAgICAgIGAvJHtsb2NhdGlvbktleX0vaGlzdG9yaWNhbC8ke2hvdXIgPT09IDI0ID8gMjQgOiBcIlwifWAsXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHRocm93IHRoaXMuaGFuZGxlRXJyb3IoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==