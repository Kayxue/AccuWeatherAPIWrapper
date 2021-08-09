export interface ICountryData {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
}
export interface IAdminAreaData extends ICountryData {
    Level: number;
    LocalizedType: string;
    EnglishType: string;
    CountryID: string;
}
export interface IRegionData {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
}
export interface ICityData {
    Version: number;
    Key: string;
    Type: string;
    Rank: number;
    LocalizedName: string;
    EnglishName: string;
    PrimaryPostalCode: string;
    Region: {
        ID: string;
        LocalizedName: string;
        EnglishName: string;
    };
    Country: {
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
        Elevation: {
            Metric: {
                Value: number;
                Unit: string;
                UnitType: number;
            };
            Imperial: {
                Value: number;
                Unit: string;
                UnitType: number;
            };
        };
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
    Details?: {
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
    };
}
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
