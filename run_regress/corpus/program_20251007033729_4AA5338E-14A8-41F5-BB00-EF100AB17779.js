console.log("Tests that doing to-this conversion in strict mode doesn't cause us to believe that if the input is an object then the output is also an object.");
function thingy() {
    'use strict';
    function bar() {
        return this instanceof Object;
    }
    function foo() {
        return bar();
    }
    return foo();
}
for (let i12 = 0; i12 < 200; i12++) {
    thingy();
}
thingy();
