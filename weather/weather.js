
const request=require('request');
const apiKey= '02f6cce8ff6bcc7c37a0828b1e05342a';
var getWeather=(latitude,longtitude,callback)=>{
    
    
    request({url:`https://api.darksky.net/forecast/${apiKey}/${latitude},${longtitude}`,json:true},(error,response,body)=>{
        
    if(!error && response.statusCode!=200)
    {
      callback('unable to fetch weather ');
    }
    else{
    callback(undefined,{temperature: body.currently.temperature});
    }
    
    
    });
}

module.exports={
    getWeather
};
