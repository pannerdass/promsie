var getUser=(id,callback)=>{
var user={
    id:id,
    name:'panner'
};
callback(user);
};

getUser(33,(user)=>{
console.log(typeof user.name);
    console.log(user.name);
});