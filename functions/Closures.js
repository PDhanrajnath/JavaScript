function makeAdder(a){
    return function(b){
        return a+b;
    };
}

var add5 = makeAdder(5); //init value -> 5
var add20 = makeAdder(20); // init value -> 20

console.log(add5(5));  // 5+5
console.log(add20(5)); // 20+5

console.log('______');

console.log(add5(6));  // 5+6
console.log(add20(7)); // 20+7
