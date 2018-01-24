//const request=require('request');
const yargs=require('yargs');
const geocode=require('./geocode/geocode.js');
const weather=require('./weather/weather');
const argv=yargs.option({
 a:{
 demand:true,
 describe:'Address to fetch wether',
 string:true,
 alias:'address'     
 }
}
).help().alias('help','h').argv;


//console.log(argv);
var userAddress=encodeURIComponent(argv.a);
//console.log(userAddress);    

geocode.geoCodeAddress(userAddress,(Error,Results)=>{

    if(Error)
    {
     console.log(Error);
    }else{
     console.log(`Address:${Results.Address}`);
       console.log(JSON.stringify(Results,undefined,2)); 
     weather.getWeather(Results.lattiude,Results.longtitude,(error,weatherResults)=>{

           if(error)
           {
               console.log(error);
           }else{
            console.log(`Currently tempture:${weatherResults.temperature}`);
           }    

     });
     
    }
});







// request({url:'https://maps.googleapis.com/maps/api/geocode/json?address=navaladipatty%20namakkal',
// json:true},(error,response,body)=>{
// console.log(JSON.stringify(body,undefined,2));
// });




// request({url:'https://www.google.com',
// json:true},(error,response,body)=>{
// console.log(JSON.stringify(body,undefined,2));
// });