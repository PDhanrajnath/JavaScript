//passing a function as param and calling that function
function goToWork(myCallBackFunction) {
    //do some work here
    myCallBackFunction();
}

//this is a function
function refreshPage() {
    //trying to print in the console!
    console.log("Refreshing the page");
}

//calling goToWork function with refereshPage function as a parameter!
goToWork(refreshPage);