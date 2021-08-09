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
        Id: 7;
        Name: "Huafeng";
        WeatherCode: "01";
    };
    RealFeelTemperature?: IMetricAndImperialData;
    RealFeelTemperatureShade?: IMetricAndImperialData;
    RelativeHumidity?: 74;
    IndoorRelativeHumidity?: 74;
    DewPoint?: IMetricAndImperialData;
    Wind?: {
        Direction: {
            Degrees: 0;
            Localized: "北";
            English: "N";
        };
        Speed: IMetricAndImperialData;
    };
    WindGust?: {
        Speed: IMetricAndImperialData;
    };
    UVIndex?: 2;
    UVIndexText?: "低";
    Visibility?: IMetricAndImperialData;
    ObstructionsToVisibility?: "";
    CloudCover?: 91;
    Ceiling?: IMetricAndImperialData;
    Pressure?: IMetricAndImperialData;
    PressureTendency?: {
        LocalizedText: "連續";
        Code: "S";
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
