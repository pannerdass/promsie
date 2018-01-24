

//create instane for promise and it get one arugument

var somePromise=new Promise((resolve,rejected)=>{

setTimeout(()=>{
    resolve("Hi its Worked");


},5000);


  

});


somePromise.then((message)=>{

console.log(`success:${message}`);
},(errorMessage)=>{


});
//console.log('panner');


//add parameter in promise

var addValue=(a,b)=>{

    return new Promise((resolve,reject)=>{

        if(typeof a==='number' && typeof b==='number')
        {
            resolve(a+b);

        }else{
            reject('Must be numbers');
        }
    });
    
}

addValue('5',6).then((message)=>{
console.log(message);

},(errorMessage)=>{
console.log(errorMessage)
});


var conacatString=(a,b)=>{
    return new Promise((resoleve,reject)=>{

if(typeof a==='string'&&typeof b==='string')
{
resolve(`${a}${b}`);
}else
{
    reject('must be string');
}

    });
}


//chaning promise
addValue(5,6).then((message)=>{
    console.log(message);
     return addValue(message,10);
    }).then((res)=>{
      console.log(res);
      return conacatString(res,'hi');
    }).then((stringRes)=>{
        console.log(stringRes);
    })
    .catch((error)=>{

        console.log(error);
    });
    

    
