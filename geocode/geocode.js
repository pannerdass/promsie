const request=require('request');


var geoCodeAddress=(userAddress,callbacks)=>{

    request({url:`https://maps.googleapis.com/maps/api/geocode/json?address=${userAddress}`,
json:true},(error,response,body)=>{

    if(error)
    {
        callbacks('Unable to connect googloe servers');

    }else if(body.status==='ZERO_RESULTS')
    {
        callbacks('Unable to find the address');
    }else if(body.status==='OK')
    {
       
           var Results={
            'Address': body.results[0].formatted_address,
           'lattiude':  body.results[0].geometry.location.lat,
           'longtitude': body.results[0].geometry.location.lng
           }

       callbacks(undefined,Results);
        // console.log(`Address: ${body.results[0].formatted_address}`);
        // console.log(`lattiude:  ${body.results[0].geometry.location.lat}`);
        // console.log(`longtitude: ${body.results[0].geometry.location.lng}`);
    }


    
});
};

module.exports={
    geoCodeAddress
}