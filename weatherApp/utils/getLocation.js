const axios=require("axios");
module.exports=async()=>{
    try{
        const rawResponse = await axios.get(
            `http://ip-api.com/json/`
          );
          const city=rawResponse.data.city;
          
          return city;
          
    }
    catch(err){
        console.log(err);
    }
}

//getLocation();
module.exports();