const { LocationAPI } = require("../src/index");
const client = new LocationAPI({
    apikey: "kyC6nwcgGXn1einkJt7pyvIOnY8wkllc",
    language: "zh-tw",
    detail: true,
});
client.citySearch("臺北市").then(console.log);
