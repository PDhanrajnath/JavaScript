var promise = new Promise(function(resolve, reject) {
    const x = "promise";
    const y = "promise"
    if(x === y) {
        resolve();
    } else {
        reject();
    }
});
    
promise.
    then(function () {
        console.log('Success, You are a GEEK');  //resolve 
    }).
    catch(function () {
        console.log('Some error has occured');   //reject
    });
    