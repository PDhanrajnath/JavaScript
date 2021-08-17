function getData(uId) {
    return new Promise( resolve => {
        setTimeout(() => {
            console.log("Fetched the data!");
            resolve("skc@gmail.com");
        }, 2000);
    });
};

console.log("start");
var email =  getData("skc");
// console.log("Email id of the user id is: ",email);
email.then( (success) => {
    console.log("Email id of the user id is: " + success);
});
console.log("end");