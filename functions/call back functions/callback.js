let x = function() {
    console.log("I'm inside a function..!");
};

let y= function(callback){
    console.log("do something ...");
    callback();
}

y(x);

console.log('_____');
//real time
let add = function(a,b){
    return a+b;
}

let multiply = function(a,b){
    return a*b;
}

let display = function(a,b){
    console.log(a,b);
}

let calc = function(n1, n2, callback){
    if ( typeof callback === "function"){
        return callback(n1,n2);
    }
};

console.log("adding: "+calc(2,3,add));
console.log("multiply: ",calc(2,3,multiply));
calc(2,3,display);
