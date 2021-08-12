# Accu Weather API Wrapper

> Updated in version 1.0.9:  
> Fixed type annotations of some interfaces

[![NPM version](http://img.shields.io/npm/v/accu-weather-api-wrapper/latest?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/accu-weather-api-wrapper)
[![Package Size](https://img.shields.io/bundlephobia/min/@latest/accu-weather-api-wrapper?label=Bundle-size&style=for-the-badge&logo=npm)](https://www.npmjs.com/package/accu-weather-api-wrapper)
[![Downloads](https://img.shields.io/npm/dm/accu-weather-api-wrapper?style=for-the-badge&logo=npm)](https://www.npmjs.com/package/accu-weather-api-wrapper)
[![Github Package Version](http://img.shields.io/github/package-json/v/Kayxue/AccuWeatherAPIWrapper?style=for-the-badge&logo=git)](https://github.com/Kayxue/AccuWeatherAPIWrapper)
[![Type Definitions](http://img.shields.io/npm/types/accu-weather-api-wrapper?style=for-the-badge&logo=typescript)](https://www.npmjs.com/package/accu-weather-api-wrapper)

Wrapper of Accu Weather API

## Now avalivable APIs of this package:

-   [x] Location API
-   [x] Forecast API
-   [x] Current Conditions API
-   [ ] Indices API
-   [ ] Weather Alarms API
-   [ ] Alerts API
-   [ ] Imagery API
-   [ ] Tropical API
-   [ ] Translations API

## Installation

```sh
npm install accu-weather-api-wrapper
```

## Basic Usages

### 1. Using client which includes all api clients:

#### TypeScript:

```ts
import AccuWeatherClient from "accu-weather-wrapper";

const client = new AccuWeatherClient({
    apikey: "key",     //Required. Accu Weather API key.
    language: "en-us", //Optional. Language of retrieve data. Default: "en-us"
    detail: true,      //Optional. Whether return full object when searching. Default: false
    offset: 100,       //Optional. The limit that determines the first resource to be returned. Default: 100
    metric: true;      //Optional. Whether or not to return metric values. Default: false
})

//Get city data
client.location.citySearch("Taipei").then(console.log)

//Get 1 day forecast data ("4-315078_1_AL" is location key)
client.forecast.getDailyForecast(1,"4-315078_1_AL").then(console.log)

//Get current conditions data
client.currentConditions.currentCondition("4-315078_1_AL").then(console.log)
```

#### JavaScript

```js
const AccuWeatherClient = require("accu-weather-wrapper").default;

const client = new AccuWeatherClient({
    apikey: "key",     //Required. Accu Weather API key.
    language: "en-us", //Optional. Language of retrieve data. Default: "en-us"
    detail: true,      //Optional. Whether return full object when searching. Default: false
    offset: 100,       //Optional. The limit that determines the first resource to be returned. Default: 100
    metric: true;      //Optional. Whether or not to return metric values. Default: false
})

//Get city data
client.location.citySearch("Taipei").then(console.log)

//Get 1 day forecast data ("4-315078_1_AL" is location key)
client.forecast.getDailyForecast(1,"4-315078_1_AL").then(console.log)

//Get current conditions data
client.currentConditions.currentCondition("4-315078_1_AL").then(console.log)
```

### 2. Using single API Client:

#### TypeScript:

```ts
import { LocationAPI } from "accu-weather-wrapper";

const client = new LocationAPI({
    apikey: "key", //Required. Accu Weather API key.
    language: "en-us", //Optional. Language of retrieve data. Default: "en-us"
    detail: true, //Optional. Whether return full object when searching. Default: false
    offset: 100, //Optional. The limit that determines the first resource to be returned. Default: 100
});

//Get city data
client.citySearch("Taipei").then(console.log);
```

#### JavaScript

```js
const { LocationAPI } = require("accu-weather-wrapper");

const client = new LocationAPI({
    apikey: "key", //Required. Accu Weather API key.
    language: "en-us", //Optional. Language of retrieve data. Default: "en-us"
    detail: true, //Optional. Whether return full object when searching. Default: false
    offset: 100, //Optional. The limit that determines the first resource to be returned. Default: 100
});

//Get city data
client.citySearch("Taipei").then(console.log);
```

## Documentation

https://accuweatherapiwrapperdocs.pages.dev

## API Provider

Accu Weather Company: https://developer.accuweather.com/apis

## Issue & Support

If you have any question to ask or bugs to report, you can open issue on github:
https://github.com/Kayxue/AccuWeatherAPIWrapper

Or join my discord server to get help:
(Not finished yet)
