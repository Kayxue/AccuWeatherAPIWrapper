export interface IMetricAndImperialData {
    /**
     * Data with metric unit
     */
    Metric: IValueWithUnit;
    /**
     * Data with imperial unit
     */
    Imperial: IValueWithUnit;
}
export interface IValueWithUnit {
    /**
     * Value in specified unit
     */
    Value: number;
    /**
     * Type of unit
     */
    Unit: string;
    /**
     * Numeric ID associated with the type of unit being displayed
     */
    UnitType: number;
}
