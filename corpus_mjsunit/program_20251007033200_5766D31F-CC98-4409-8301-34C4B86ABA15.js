var BUGNUMBER = 1185106;
var summary = "caller property of function inside async function should return wrapped async function";
print((BUGNUMBER + ": ") + summary);
async function f() {
    function g() {
        return g.caller;
    }
    var inner = g();
    f();
}
f();
async function f() {
    'use strict';
    try {
        function g() {
            return g.caller;
        }
        g();
    } catch(e25) {
        e25 instanceof TypeError;
    }
}
f();
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
