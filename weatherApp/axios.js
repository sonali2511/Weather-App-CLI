const axios=require("axios");
var fs=require("fs");
function takeCity(){
    const input=process.argv.slice(2);
    const location=input[1];

    // var city=process.argv.slice(3).join("");
    console.log(location);
    weather(location);
}

// async function helper(){
//     const res= await axios.get("http://jsonplaceholder.typicode.com/users");
// }

async function weather(city){
    try{
        const res=await axios.get("https://www.metaweather.com/api/location/search/?query="+city);
        if(!res.data[0])
        {
            throw "ht";
        }
        const woeid=res.data[0].woeid;
    
        console.log(woeid);
         const ans=await axios.get("https://www.metaweather.com/api/location/"+woeid);
         console.log(ans.data.consolidated_weather[0]);
         var today=ans.data.consolidated_weather[0];
         console.log("current location in"+" "+city);
         var temp=today.the_temp;
          var state=today.weather_state_name;
          console.log(temp+" "+state);
      }
      catch(err){
        console.log("mein error hoon :(",err);
    }
   
    
  
}
//helper();

takeCity();