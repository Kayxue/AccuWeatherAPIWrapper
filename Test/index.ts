import { CurrentConditionAPI, LocationAPI } from "../TypeScript/index";
const client = new LocationAPI({
    apikey: "kyC6nwcgGXn1einkJt7pyvIOnY8wkllc",
    language: "zh-tw",
    detail: true,
});
const current = new CurrentConditionAPI({
    apikey: "",
    language: "zh-tw",
    detail: true,
});
client.citySearch("臺北市").then(console.log);
current.currentCondition("315078").then(console.log);
