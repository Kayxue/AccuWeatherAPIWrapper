import { IValueWithUnit } from "./Other";

/**
 * Creating Docs.....
 * If you want information of these fields now, check
 * {@link https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/daily/1day/%7BlocationKey%7D}
 */
export interface IDailyForecastData {
    Headline: IHeadlineData;
    DailyForecasts: IDailyForcastData[];
}

/**
 * Creating Docs.....
 * If you want information of these fields now, check
 * {@link https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/daily/1day/%7BlocationKey%7D}
 */
export interface IHeadlineData {
    EffectiveDate: string;
    EffectiveEpochDate: number;
    Severity: number;
    Text: string;
    Category: string;
    EndDate: string;
    EndEpochDate: number;
    MobileLink: string;
    Link: string;
}

/**
 * Creating Docs.....
 * If you want information of these fields now, check
 * {@link https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/daily/1day/%7BlocationKey%7D}
 */
export interface IDailyForcastData {
    Date: string;
    EpochDate: number;
    Sun?: {
        Rise: string;
        EpochRise: number;
        Set: string;
        EpochSet: number;
    };
    Moon?: {
        Rise: string;
        EpochRise: number;
        Set: string;
        EpochSet: number;
        Phase: string;
        Age: number;
    };
    Temperature: {
        Minimum: IValueWithUnit;
        Maximum: IValueWithUnit;
    };
    RealFeelTemperature?: {
        Minimum: IValueWithUnit;
        Maximum: IValueWithUnit;
    };
    RealFeelTemperatureShade?: {
        Minimum: IValueWithUnit;
        Maximum: IValueWithUnit;
    };
    HoursOfSun?: number;
    DegreeDaySummary?: {
        Heating: IValueWithUnit;
        Cooling: IValueWithUnit;
    };
    AirAndPollen?: {
        Name: string;
        Value: number;
        Category: string;
        CategoryValue: number;
        Type?: string;
    }[];
    Day: IDayNightWeatherSummary;
    Night: IDayNightWeatherSummary;
    Sources: string[];
    MobileLink: string;
    Link: string;
}

/**
 * Creating Docs.....
 * If you want information of these fields now, check
 * {@link https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/daily/1day/%7BlocationKey%7D}
 */
export interface IHourlyForecastData {
    DateTime: string;
    EpochDateTime: number;
    WeatherIcon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    PrecipitationType: string;
    PrecipitationIntensity: string;
    IsDaylight: boolean;
    Temperature: IValueWithUnit;
    RealFeelTemperature?: IValueWithUnit;
    RealFeelTemperatureShade?: IValueWithUnit;
    WetBulbTemperature?: IValueWithUnit;
    DewPoint?: IValueWithUnit;
    Wind?: {
        Speed: IValueWithUnit;
        Direction: {
            Degrees: number;
            Localized: string;
            English: string;
        };
    };
    WindGust?: {
        Speed: IValueWithUnit;
        Direction: {
            Degrees: number;
            Localized: string;
            English: string;
        };
    };
    RelativeHumidity?: number;
    IndoorRelativeHumidity?: number;
    Visibility?: IValueWithUnit;
    Ceiling?: IValueWithUnit;
    UVIndex?: number;
    UVIndexText?: string;
    PrecipitationProbability: number;
    ThunderstormProbability?: number;
    RainProbability?: number;
    SnowProbability?: number;
    IceProbability?: number;
    TotalLiquid?: IValueWithUnit;
    Rain?: IValueWithUnit;
    Snow?: IValueWithUnit;
    Ice?: IValueWithUnit;
    CloudCover?: number;
    Evapotranspiration?: IValueWithUnit;
    SolarIrradiance?: IValueWithUnit;
    MobileLink: string;
    Link: string;
}

/**
 * Creating Docs.....
 * If you want information of these fields now, check
 * {@link https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/daily/1day/%7BlocationKey%7D}
 */
export interface IDayNightWeatherSummary {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
    PrecipitationType: string;
    PrecipitationIntensity: string;
    LocalSource: {
        Id: number;
        Name: string;
        WeatherCode: string;
    };
    ShortPhrase?: string;
    LongPhrase?: string;
    PrecipitationProbability?: number;
    ThunderstormProbability?: number;
    RainProbability?: number;
    SnowProbability?: number;
    IceProbability?: number;
    Wind?: {
        Speed: IValueWithUnit;
        Direction: {
            Degrees: number;
            Localized: string;
            English: string;
        };
    };
    WindGust?: {
        Speed: IValueWithUnit;
        Direction: {
            Degrees: number;
            Localized: string;
            English: string;
        };
    };
    TotalLiquid?: IValueWithUnit;
    Rain?: IValueWithUnit;
    Snow?: IValueWithUnit;
    Ice?: IValueWithUnit;
    HoursOfPrecipitation?: number;
    HoursOfRain?: number;
    HoursOfSnow?: number;
    HoursOfIce?: number;
    CloudCover?: number;
    Evapotranspiration?: IValueWithUnit;
    SolarIrradiance?: IValueWithUnit;
}
