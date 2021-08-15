/*
*
** Inner Functions in JavaScript --> function declarations are allowed inside other functions.
*
*/

function parentFunc() {
    var a=1;

    function nestedFunc() {
        var b=2;         // parentFunc can't use this variable
        return a+b;
    }

    return nestedFunc(); // returns --> 3
}
console.log(parentFunc())