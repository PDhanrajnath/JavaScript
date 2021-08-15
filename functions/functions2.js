/*
 * Declare and initialize a variable 'p' (global)
 * and a function 'myFunc' (to change the scope) inside which
 * declare a varible with same name 'p' (current) and
 * define three functions using three different ways:-
 *     1. function declaration
 *     2. function expression
 *     3. function constructor
 * each of which will log 'p'
 */
var p = 5;
function myFunc() {
    var p = 9;

    function decl() {
        console.log(p);
    }
    var expr = function() {
        console.log(p);
    };
    var cons = new Function('\tconsole.log(p);');

    decl();
    expr();
    cons();
}
myFunc();

/*
 * Logs:-
 * 9  - for 'decl' by function declaration (current scope)
 * 9  - for 'expr' by function expression (current scope)
 * 5  - for 'cons' by Function constructor (global scope)
 */
