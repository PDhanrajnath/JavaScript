function myFunc(theObject) {
    theObject.brand = "Toyota";
  }
  
  var mycar = {
    brand: "Honda",
    model: "Accord",
    year: 1998
  };
  
  console.log(mycar.brand);
  
  myFunc(mycar);
  

  console.log(mycar.brand);

