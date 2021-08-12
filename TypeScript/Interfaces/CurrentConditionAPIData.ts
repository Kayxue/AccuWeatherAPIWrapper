import { IBaseCityData } from "./LocationAPIData";
import { IMetricAndImperialData } from "./Other";

/**
 * Creating Docs.....
 * If you want information of these fields now, check
 * {@link https://developer.accuweather.com/accuweather-current-conditions-api/apis/get/currentconditions/v1/topcities/%7Bgroup%7D}
 */
export interface ITopCitiesCurrentConditionData extends IBaseCityData {
    LocalObservationDateTime: string;
    EpochTime: number;
    WeatherText: string;
    WeatherIcon: number;
    HasPrecipitation: boolean;
    PrecipitationType: string;
    IsDayTime: boolean;
    Temperature: IMetricAndImperialData;
    MobileLink: string;
    Link: string;
}

/**
 * Creating Docs.....
 * If you want information of these fields now, check
 * {@link https://developer.accuweather.com/accuweather-current-conditions-api/apis/get/currentconditions/v1/%7BlocationKey%7D}
 */
export interface ICurrentConditionData
    extends Omit<ITopCitiesCurrentConditionData, keyof IBaseCityData> {
    LocalSource: {
        Id: number;
        Name: string;
        WeatherCode: string;
    };
    RealFeelTemperature?: IMetricAndImperialData;
    RealFeelTemperatureShade?: IMetricAndImperialData;
    RelativeHumidity?: number;
    IndoorRelativeHumidity?: number;
    DewPoint?: IMetricAndImperialData;
    Wind?: {
        Direction: {
            Degrees: number;
            Localized: string;
            English: string;
        };
        Speed: IMetricAndImperialData;
    };
    WindGust?: {
        Speed: IMetricAndImperialData;
    };
    UVIndex?: number;
    UVIndexText?: string;
    Visibility?: IMetricAndImperialData;
    ObstructionsToVisibility?: string;
    CloudCover?: number;
    Ceiling?: IMetricAndImperialData;
    Pressure?: IMetricAndImperialData;
    PressureTendency?: {
        LocalizedText: string;
        Code: string;
    };
    Past24HourTemperatureDeparture?: IMetricAndImperialData;
    ApparentTemperature?: IMetricAndImperialData;
    WindChillTemperature?: IMetricAndImperialData;
    WetBulbTemperature?: IMetricAndImperialData;
    Precip1hr?: IMetricAndImperialData;
    PrecipitationSummary?: {
        Precipitation: IMetricAndImperialData;
        PastHour: IMetricAndImperialData;
        Past3Hours: IMetricAndImperialData;
        Past6Hours: IMetricAndImperialData;
        Past9Hours: IMetricAndImperialData;
        Past12Hours: IMetricAndImperialData;
        Past18Hours: IMetricAndImperialData;
        Past24Hours: IMetricAndImperialData;
    };
    TemperatureSummary?: {
        Past6HourRange: {
            Minimum: IMetricAndImperialData;
            Maximum: IMetricAndImperialData;
        };
        Past12HourRange: {
            Minimum: IMetricAndImperialData;
            Maximum: IMetricAndImperialData;
        };
        Past24HourRange: {
            Minimum: IMetricAndImperialData;
            Maximum: IMetricAndImperialData;
        };
    };
}
