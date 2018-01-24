const request =require('request');
var geoCode=(address)=>{

return new Promise((resolve,reject)=>{

    var userAddress=encodeURIComponent(address);
    request({url:`https://maps.googleapis.com/maps/api/geocode/json?address=${userAddress}`,
json:true},(error,response,body)=>{

    if(error)
    {
        reject('Unable to connect googloe servers');

    }else if(body.status==='ZERO_RESULTS')
    {
        reject('Unable to find the address');
    }else if(body.status==='OK')
    {
       
           var Results={
            'Address': body.results[0].formatted_address,
           'lattiude':  body.results[0].geometry.location.lat,
           'longtitude': body.results[0].geometry.location.lng
           }

       resolve(Results);
        // console.log(`Address: ${body.results[0].formatted_address}`);
        // console.log(`lattiude:  ${body.results[0].geometry.location.lat}`);
        // console.log(`longtitude: ${body.results[0].geometry.location.lng}`);
    }



});



});

};
const apiKey= '02f6cce8ff6bcc7c37a0828b1e05342a';
var getWeather=(latetitude,longtitude)=>{

    return new Promise((resolve,reject)=>{
   
        request({url:`https://api.darksky.net/forecast/${apiKey}/${latetitude},${longtitude}`,json:true},(error,response,body)=>{
        
            if(!error && response.statusCode!=200)
            {
                reject('unable to fetch weather ');
            }
            else{
                resolve({temperature: body.currently.temperature});
            }
            
            
            });
    });
};


// getWeather('11.2194391','78.1677236').then((res)=>{

//     console.log(res);
// },(err)=>{

//     console.log(err);
// });

geoCode('namakkal').then((res)=>{
//console.log(JSON.stringify(res,undefined,2));
return getWeather(res.lattiude,res.longtitude);
}).then((weather)=>{
console.log(JSON.stringify(weather,undefined,2));
}).catch((error)=>{
console.log(error);
});


//console.log('test');

