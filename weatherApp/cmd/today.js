const getRawWeather = require("../utils/getRawWeather");
const getLocation=require("../utils/getLocation");
const ora=require("ora");

module.exports = async function(location) { 
    const spniner=ora("loading");
    spniner.start();
    if(location==undefined){
        location=await getLocation();
        
    }
  const fullWeather = await getRawWeather(location);
  // 5 days weather
  const TodaysWeather = fullWeather[0];
  const currentState = TodaysWeather["weather_state_name"];
  const temp = Math.ceil(TodaysWeather["the_temp"]);
  // template String syntax=> you can also use normal strings
  spniner.stop();
  console.log(`Current conditions in ${location}
                  ${temp}° ${currentState}
                        `);
};

