const chalk=require("chalk");
const figlet=require("figlet");
var help=()=>{
    console.log(`${chalk.redBright(figlet.textSync("Commnands"))}

    ${chalk.magenta("<options>")}
    ${chalk.green("today...........show weather for today")}
    ${chalk.blueBright("forecast.............show 5-day weather forecast")}
    ${chalk.yellow("version.........show package version")}
    help.............show help menu for a command`);
};
module.exports=help;