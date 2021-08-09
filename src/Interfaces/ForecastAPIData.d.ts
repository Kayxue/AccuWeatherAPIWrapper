export interface IDailyForecastData {
    Headline: {
        EffectiveDate: string;
        EffectiveEpochDate: number;
        Severity: number;
        Text: string;
        Category: string;
        EndDate: string;
        EndEpochDate: number;
        MobileLink: string;
        Link: string;
    };
    DailyForecasts: {
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
    }[];
}
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
interface IDayNightWeatherSummary {
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
interface IValueWithUnit {
    Value: number;
    Unit: string;
    UnitType: number;
}
export {};
