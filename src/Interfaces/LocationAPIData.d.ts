import { IMetricAndImperialData } from "./Other";
/**
 * Creating Docs.....
 * If you want information of these fields now, check
 * {@link https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/countries/%7BregionCode%7D}
 */
export interface ICountryData {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
}
/**
 * Creating Docs.....
 * If you want information of these fields now, check
 * {@link https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/adminareas/%7BcountryCode%7D}
 */
export interface IAdminAreaData extends ICountryData {
    Level: number;
    LocalizedType: string;
    EnglishType: string;
    CountryID: string;
}
/**
 * Creating Docs.....
 * If you want information of these fields now, check
 * {@link https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/regions}
 */
export interface IRegionData {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
}
/**
 * Creating Docs.....
 * If you want information of these fields now, check
 * {@link https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/search}
 */
export interface IBaseCityData {
    Key: string;
    LocalizedName: string;
    EnglishName: string;
    Country: {
        ID: string;
        LocalizedName: string;
        EnglishName: string;
    };
    TimeZone: {
        Code: string;
        Name: string;
        GmtOffset: number;
        IsDaylightSaving: boolean;
        NextOffsetChange: string;
    };
    GeoPosition: {
        Latitude: number;
        Longitude: number;
        Elevation: IMetricAndImperialData;
    };
}
/**
 * Creating Docs.....
 * If you want information of these fields now, check
 * {@link https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/search}
 */
export interface ICityData extends IBaseCityData {
    Version: number;
    Type: string;
    Rank: number;
    PrimaryPostalCode: string;
    Region: {
        ID: string;
        LocalizedName: string;
        EnglishName: string;
    };
    AdministrativeArea: {
        ID: string;
        LocalizedName: string;
        EnglishName: string;
        Level: number;
        LocalizedType: string;
        EnglishType: string;
        CountryID: string;
    };
    IsAlias: false;
    ParentCity?: {
        Key: string;
        LocalizedName: string;
        EnglishName: string;
    };
    SupplementalAdminAreas: {
        Level: number;
        LocalizedName: string;
        EnglishName: string;
    }[];
    DataSets: string[];
    Details?: ICityDetails;
}
/**
 * Creating Docs.....
 * If you want information of these fields now, check
 * {@link https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/search}
 */
export interface ICityDetails {
    Key: string;
    StationCode: string;
    StationGmtOffset: number;
    BandMap: string;
    Climo: string;
    LocalRadar: string;
    MediaRegion: string;
    Metar: string;
    NXMetro: string;
    NXState: string;
    Population: number;
    PrimaryWarningCountyCode: string;
    PrimaryWarningZoneCode: string;
    Satellite: string;
    Synoptic: string;
    MarineStation: string;
    MarineStationGMTOffset: number;
    VideoCode: string;
    LocationStem: string;
    PartnerID: number;
    Sources: {
        DataType: string;
        Source: string;
        SourceId: number;
        PartnerSourceUrl?: string;
    }[];
    CanonicalPostalCode: string;
    CanonicalLocationKey: string;
}
/**
 * Creating Docs.....
 * If you want information of these fields now, check
 * {@link https://developer.accuweather.com/accuweather-locations-api/apis/get/locations/v1/cities/autocomplete}
 */
export interface IAutoCompleteSearchData {
    Version: number;
    Key: string;
    Type: string;
    Rank: number;
    LocalizedName: string;
    Country: {
        ID: string;
        LocalizedName: string;
    };
    AdministrativeArea: {
        ID: string;
        LocalizedName: string;
    };
}
