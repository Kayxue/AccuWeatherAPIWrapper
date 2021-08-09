import { IValueWithUnit } from "./Other";

/**
 * Fields description are from Accu Weather API playground:
 * {@link https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/daily/1day/%7BlocationKey%7D}
 */
export interface IDailyForecastData {
    /**
     * Headline Data
     */
    Headline: IHeadlineData;
    /**
     * DailyForecast Data
     */
    DailyForecasts: IDailyForcastData[];
}

/**
 * Fields description are from Accu Weather API playground:
 * {@link https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/daily/1day/%7BlocationKey%7D}
 */
export interface IHeadlineData {
    /**
     * DateTime, displayed in ISO8601 format
     */
    EffectiveDate: string;
    /**
     * Effective Date of the headline, displayed as the number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT).
     */
    EffectiveEpochDate: number;
    /**
     * Severity of the headline, displayed as an integer. The lower the number, the greater the severity.
     * 0 = Unknown 1 = Significant 2 = Major 3 = Moderate 4 = Minor 5 = Minimal 6 = Insignificant 7 = Informational
     */
    Severity: number;
    /**
     * Text of the headline, which represents the most significant weather event over the next 5 days.
     */
    Text: string;
    /**
     * Category of the headline.
     */
    Category: string;
    /**
     * DateTime, displayed in ISO8601 format
     */
    EndDate: string;
    /**
     * End Date of the headline, displayed as the number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT).
     */
    EndEpochDate: number;
    /**
     * Link to the extended forecast for the requested location on AccuWeather`s mobile site.
     */
    MobileLink: string;
    /**
     * Link to the extended forecast for the requested location on AccuWeather`s web site.
     */
    Link: string;
}

/**
 * Fields description are from Accu Weather API playground:
 * {@link https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/daily/1day/%7BlocationKey%7D}
 */
export interface IDailyForcastData {
    /**
     * DateTime of the forecast, displayed in ISO8601 format.
     */
    Date: string;
    /**
     * Date of the forecast, displayed as the number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT).
     */
    EpochDate: number;
    /**
     * Data of sun rises time and set time (Will be undefined if ForecastAPI.details is false)
     */
    Sun?: {
        /**
         * Sun rise displayed in ISO8601 format.
         */
        Rise: string;
        /**
         * Sun rise displayed as the number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT).
         */
        EpochRise: number;
        /**
         * Sun set displayed in ISO8601 format.
         */
        Set: string;
        /**
         * Sun set displayed as the number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT).
         */
        EpochSet: number;
    };
    /**
     * Data of moon rises time and set time (Will be undefined if ForecastAPI.details is false)
     */
    Moon?: {
        /**
         * Moon rise displayed in ISO8601 format.
         */
        Rise: string;
        /**
         * Moon rise displayed as the number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT).
         */
        EpochRise: number;
        /**
         * Moon set displayed in ISO8601 format.
         */
        Set: string;
        /**
         * Moon set displayed as the number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT).
         */
        EpochSet: number;
        /**
         * 	Moon phase.
         */
        Phase: string;
        /**
         * The number of days since the new moon
         */
        Age: number;
    };
    /**
     * Temperature Data
     */
    Temperature: {
        Minimum: IValueWithUnit;
        Maximum: IValueWithUnit;
    };
    /**
     * RealFeelTemperature Data (Will be undefined if ForecastAPI.details is false)
     */
    RealFeelTemperature?: {
        Minimum: IValueWithUnit;
        Maximum: IValueWithUnit;
    };
    /**
     * RealFeelTemperatureShade Data (Will be undefined if ForecastAPI.details is false)
     */
    RealFeelTemperatureShade?: {
        Minimum: IValueWithUnit;
        Maximum: IValueWithUnit;
    };
    /**
     * Number of hours of sun. (Will be undefined if ForecastAPI.details is false)
     */
    HoursOfSun?: number;
    /**
     * DegreeDaySummary Data (Will be undefined if ForecastAPI.details is false)
     */
    DegreeDaySummary?: {
        /**
         * Degrees that the mean temperature is below 65 degrees F.
         */
        Heating: IValueWithUnit;
        /**
         * Degrees that the mean temperature is above 65 degrees F.
         */
        Cooling: IValueWithUnit;
    };

    /**
     * AirAndPollen Data (Will be undefined if ForecastAPI.details is false)
     */
    AirAndPollen?: {
        /**
         * 	Name of the pollen or air pollutant.
         */
        Name: string;
        /**
         * 	Value of the pollutant. Values associated with mold, grass, weed, and tree are displayed in parts per cubic meter. Air quality and UV index are indices and are unitless. May be NULL.
         */
        Value: number;
        /**
         * Category of the pollution. (low, high, good, moderate, unhealthy, hazardous)
         */
        Category: string;
        /**
         * Value associated with the category. These values range from 1 to 6, with 1 implying good conditions and 6 implying hazardous conditions.
         */
        CategoryValue: number;
        /**
         * 	Only exists for air quality. Examples include ozone and particle pollution.
         */
        Type?: string;
    }[];
    /**
     * Day Data
     */
    Day: IDayNightWeatherSummary;
    /**
     * Night Data
     */
    Night: IDayNightWeatherSummary;
    /**
     * 	Forecast sources.
     */
    Sources: string[];
    /**
     * Link to the daily forecast for the requested location on AccuWeather`s mobile site.
     */
    MobileLink: string;
    /**
     * Link to the daily forecast for the requested location on AccuWeather`s web site.
     */
    Link: string;
}

/**
 * Fields description are from Accu Weather API playground:
 * {@link https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/hourly/1hour/%7BlocationKey%7D}
 */
export interface IHourlyForecastData {
    /**
     * DateTime of the forecast, displayed in ISO8601 format.
     */
    DateTime: string;
    /**
     * DateTime of the forecast, displayed as the number of seconds that have elapsed since January 1, 1970 (midnight UTC/GMT).
     */
    EpochDateTime: number;
    /**
     * 	Numeric value representing an image that displays the current condition described by WeatherText.
     */
    WeatherIcon: number;
    /**
     * Phrase description of the forecast associated with the WeatherIcon.
     */
    IconPhrase: string;
    /**
     * Boolean value that indicates the presence of any type of precipitation for a given night.
     */
    HasPrecipitation: boolean;
    /**
     * 	Indicates if the precipitation strength is light, moderate, or heavy.
     */
    PrecipitationType: string;
    /**
     * Indicates if the precipitation strength is light, moderate, or heavy.
     */
    PrecipitationIntensity: string;
    /**
     * 	Specifies whether or not it is daylight (true=daylight, false=not daylight).
     */
    IsDaylight: boolean;
    /**
     * Temperature Data
     */
    Temperature: IValueWithUnit;
    /**
     * RealFeelTemperature Data (Will be undefined if ForecastAPI.details is false)
     */
    RealFeelTemperature?: IValueWithUnit;
    /**
     * RealFeelTemperatureShade Data (Will be undefined if ForecastAPI.details is false)
     */
    RealFeelTemperatureShade?: IValueWithUnit;
    /**
     * The temperature to which air may be cooled by evaporating water into it at constant pressure until it reaches saturation. (Will be undefined if ForecastAPI.details is false)
     */
    WetBulbTemperature?: IValueWithUnit;
    /**
     * Dew Point temperature. (Will be undefined if ForecastAPI.details is false)
     */
    DewPoint?: IValueWithUnit;
    /**
     * Wind data. (Will be undefined if ForecastAPI.details is false)
     */
    Wind?: {
        /**
         * Wind speed
         */
        Speed: IValueWithUnit;
        /**
         * Wind direction Data
         */
        Direction: {
            /**
             * Wind direction in azimuth degrees
             */
            Degrees: number;
            /**
             * Direction abbreviation in the specified language.
             */
            Localized: string;
            /**
             * Direction abbreviation in English.
             */
            English: string;
        };
    };
    /**
     * WindGust Data (Will be undefined if ForecastAPI.details is false)
     */
    WindGust?: {
        /**
         * WindGust speed data
         */
        Speed: IValueWithUnit;
        /**
         * WindGust direction Data
         */
        Direction: {
            /**
             * WindGust direction in azimuth degrees
             */
            Degrees: number;
            /**
             * Direction abbreviation in the specified language.
             */
            Localized: string;
            /**
             * Direction abbreviation in English.
             */
            English: string;
        };
    };
    /**
     * Relative Humidity (Will be undefined if ForecastAPI.details is false)
     */
    RelativeHumidity?: number;
    /**
     * Indoor Relative Humidity (Will be undefined if ForecastAPI.details is false)
     */
    IndoorRelativeHumidity?: number;
    /**
     * Visibility Data. (Will be undefined if ForecastAPI.details is false)
     */
    Visibility?: IValueWithUnit;
    /**
     * Celling Data. (Will be undefined if ForecastAPI.details is false)
     */
    Ceiling?: IValueWithUnit;
    /**
     * Measure of the strength of the ultraviolet radiation from the sun. (Will be undefined if ForecastAPI.details is false)
     */
    UVIndex?: number;
    /**
     * Text associated with the UVIndex. (Will be undefined if ForecastAPI.details is false)
     */
    UVIndexText?: string;
    /**
     * Percent representing the probability of precipitation.  (Will be undefined if ForecastAPI.details is false)
     */
    PrecipitationProbability: number;
    /**
     * Percent representing the probability of thunderstorm.  (Will be undefined if ForecastAPI.details is false)
     */
    ThunderstormProbability?: number;
    /**
     * Percent representing the probability of rain.  (Will be undefined if ForecastAPI.details is false)
     */
    RainProbability?: number;
    /**
     * Percent representing the probability of snow.  (Will be undefined if ForecastAPI.details is false)
     */
    SnowProbability?: number;
    /**
     * Percent representing the probability of ice.  (Will be undefined if ForecastAPI.details is false)
     */
    IceProbability?: number;
    /**
     * TotalLiquid data. (Will be undefined if ForecastAPI.details is false)
     */
    TotalLiquid?: IValueWithUnit;
    /**
     * Rain data. (Will be undefined if ForecastAPI.details is false)
     */
    Rain?: IValueWithUnit;
    /**
     * Snow data. (Will be undefined if ForecastAPI.details is false)
     */
    Snow?: IValueWithUnit;
    /**
     * Ice data. (Will be undefined if ForecastAPI.details is false)
     */
    Ice?: IValueWithUnit;
    /**
     * Number representing the percentage of the sky that is covered by clouds. (Will be undefined if ForecastAPI.details is false)
     */
    CloudCover?: number;
    /**
     * Evapotranspiration Data (Will be undefined if ForecastAPI.details is false)
     */
    Evapotranspiration?: IValueWithUnit;
    /**
     * SolarIrradiance Data (Will be undefined if ForecastAPI.details is false)
     */
    SolarIrradiance?: IValueWithUnit;
    /**
     * Link to the hourly forecast for the requested location on AccuWeather`s mobile site.
     */
    MobileLink: string;
    /**
     * Link to the hourly forecast for the requested location on AccuWeather`s web site.
     */
    Link: string;
}

/**
 * Fields description are from Accu Weather API playground:
 * {@link https://developer.accuweather.com/accuweather-forecast-api/apis/get/forecasts/v1/daily/1day/%7BlocationKey%7D}
 */
export interface IDayNightWeatherSummary {
    /**
     * Numeric value representing an icon that matches the forecast.
     */
    Icon: number;
    /**
     * Phrase description of the icon.
     */
    IconPhrase: string;
    /**
     * Boolean value that indicates the presence of any type of precipitation for a given day.
     */
    HasPrecipitation: boolean;
    /**
     * Indicates if the precipitation is rain, snow, ice, or mixed.
     */
    PrecipitationType: string;
    /**
     * ndicates if the precipitation strength is light, moderate, or heavy.
     */
    PrecipitationIntensity: string;
    /**
     * LocalSource Data
     */
    LocalSource: {
        /**
         * Numeric identifier, unique to the local data provider.
         */
        Id: number;
        /**
         * Name of the local data provider.
         */
        Name: string;
        /**
         * Weather code provided by the local data provider.
         */
        WeatherCode: string;
    };
    /**
     * Phrase description of the forecast. Under 30 characters in length. (Will be undefined if ForecastAPI.details is false)
     */
    ShortPhrase?: string;
    /**
     * Phrase description of the forecast. Under 100 characters in length. (Will be undefined if ForecastAPI.details is false)
     */
    LongPhrase?: string;
    /**
     * Percent representing the probability of precipitation. (Will be undefined if ForecastAPI.details is false)
     */
    PrecipitationProbability?: number;
    /**
     * Percent representing the probability of a thunderstorm. (Will be undefined if ForecastAPI.details is false)
     */
    ThunderstormProbability?: number;
    /**
     * Percent representing the probability of rain. (Will be undefined if ForecastAPI.details is false)
     */
    RainProbability?: number;
    /**
     * Percent representing the probability of snow. (Will be undefined if ForecastAPI.details is false)
     */
    SnowProbability?: number;
    /**
     * Percent representing the probability of ice. (Will be undefined if ForecastAPI.details is false)
     */
    IceProbability?: number;
    /**
     * Wind data. (Will be undefined if ForecastAPI.details is false)
     */
    Wind?: {
        /**
         * Wind speed
         */
        Speed: IValueWithUnit;
        /**
         * Wind direction Data
         */
        Direction: {
            /**
             * Wind direction in azimuth degrees
             */
            Degrees: number;
            /**
             * Direction abbreviation in the specified language.
             */
            Localized: string;
            /**
             * Direction abbreviation in English.
             */
            English: string;
        };
    };
    /**
     * WindGust data. (Will be undefined if ForecastAPI.details is false)
     */
    WindGust?: {
        /**
         * WindGust speed
         */
        Speed: IValueWithUnit;
        /**
         * WindGust direction Data
         */
        Direction: {
            /**
             * WindGust direction in azimuth degrees
             */
            Degrees: number;
            /**
             * Direction abbreviation in the specified language.
             */
            Localized: string;
            /**
             * Direction abbreviation in English.
             */
            English: string;
        };
    };
    /**
     * TotalLiquid data. (Will be undefined if ForecastAPI.details is false)
     */
    TotalLiquid?: IValueWithUnit;
    /**
     * Rain data. (Will be undefined if ForecastAPI.details is false)
     */
    Rain?: IValueWithUnit;
    /**
     * Snow data. (Will be undefined if ForecastAPI.details is false)
     */
    Snow?: IValueWithUnit;
    /**
     * Ice data. (Will be undefined if ForecastAPI.details is false)
     */
    Ice?: IValueWithUnit;
    /**
     * Number of hours of precipitation of any type. (Will be undefined if ForecastAPI.details is false)
     */
    HoursOfPrecipitation?: number;
    /**
     * Number of hours of rain. (Will be undefined if ForecastAPI.details is false)
     */
    HoursOfRain?: number;
    /**
     * Number of hours of snow. (Will be undefined if ForecastAPI.details is false)
     */
    HoursOfSnow?: number;
    /**
     * Number of hours of ice. (Will be undefined if ForecastAPI.details is false)
     */
    HoursOfIce?: number;
    /**
     * Percent representing cloud cover. (Will be undefined if ForecastAPI.details is false)
     */
    CloudCover?: number;
    /**
     * Evapotranspiration data. (Will be undefined if ForecastAPI.details is false)
     */
    Evapotranspiration?: IValueWithUnit;
    /**
     * SolarIrradiance data. (Will be undefined if ForecastAPI.details is false)
     */
    SolarIrradiance?: IValueWithUnit;
}
