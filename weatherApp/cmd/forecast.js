const getRawWeather = require("../utils/getRawWeather");
const getLocation=require("../utils/getLocation");
const ora=require("ora");

module.exports=async function(location){
 const spniner=ora();
spniner.start();
    if(location==undefined){
        location=await getLocation();
    }
    const fullWeather = await getRawWeather(location);
   
    // console.log(fullWeather);
    for(var i=0;i<fullWeather.length;i++){
        const weatherInfo=fullWeather[i]
        const state=weatherInfo.weather_state_name;
        // console.log("state",state);
        const date=weatherInfo.applicable_date;
      //  console.log("date",date);
        const Ltemp=Math.ceil(weatherInfo.min_temp);
        const Htemp=Math.ceil(weatherInfo.max_temp);
         spniner.stop();
       // console.log("temp",temp);
       console.log("Date: "+date + " || "+ "Low"+"->"+Ltemp+"°C"+" || " +"High"+"->"+Htemp+"°C"+" || " + "State"+"->"+state);
    }
};