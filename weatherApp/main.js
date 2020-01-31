#!/usr/bin/env node
const help = require("./cmd/help");
const today = require("./cmd/today");
const forecast=require("./cmd/forecast");
const version=require("./cmd/version");

//parse cli arguments
const minimist=require("minimist");

const input = process.argv.slice(2);
const parsedInput=minimist(input);
console.log(parsedInput);
const location = parsedInput.l || parsedInput.location;
const cmd = parsedInput["_"][0];

if (cmd == "today") {
    today(location);
} else if (cmd == "forecast") {
    forecast(location);
} else if ((cmd == "help")) {
    help();

} else if (cmd == "version") {
    version();
} else {
    console.log("Wrong Command");
}