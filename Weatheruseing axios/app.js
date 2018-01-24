//const request=require('request');
const yargs=require('yargs');
const axios=require('axios');
const argv=yargs.option({
 a:{
 demand:true,
 describe:'Address to fetch wether',
 string:true,
 alias:'address'     
 }
}
).help().alias('help','h').argv;

var userAddress=encodeURIComponent(argv.a);
var googleURL=`https://maps.googleapis.com/maps/api/geocode/json?address=${userAddress}`;

axios.get(googleURL).then((response)=>{

}).catch((error)=>{
     
}
);